import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, phone, message } = body

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Validate phone if provided
    if (phone) {
      const phoneRegex = /^[\d\s\-\(\)\+]+$/
      if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
        return NextResponse.json(
          { error: 'Invalid phone number' },
          { status: 400 }
        )
      }
    }

    // Store the lead in the database using server client (bypasses RLS)
    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          email,
          phone: phone || '',
          message: message || null,
        },
      ])
      .select()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save contact information. Please try again.' },
        { status: 500 }
      )
    }

    // Log successful submission
    console.log('New lead submission saved:', {
      id: data[0]?.id,
      email,
      phone: phone || 'No phone provided',
      message: message || 'No message provided',
      timestamp: new Date().toISOString(),
    })

    // Send email notification via Web3Forms (free, no API keys needed)
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY
    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL

    if (web3formsAccessKey && recipientEmail) {
      try {
        const emailBody = {
          access_key: web3formsAccessKey,
          subject: `New Contact Form Submission - ${email}`,
          email: recipientEmail,
          from_name: 'VJ Medical Billing Contact Form',
          name: email,
          phone: phone || 'Not provided',
          message: message || 'No message provided',
          submitted: new Date().toLocaleString(),
        }

        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailBody),
        })

        console.log('Email notification sent successfully via Web3Forms')
      } catch (emailError: any) {
        // Log email error but don't fail the request
        console.error('Failed to send email notification:', emailError)
        // Form submission still succeeds even if email fails
      }
    } else {
      console.log('Email notifications not configured. Set WEB3FORMS_ACCESS_KEY and CONTACT_FORM_RECIPIENT_EMAIL environment variables to enable.')
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! We will contact you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

