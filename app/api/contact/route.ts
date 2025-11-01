import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { Resend } from 'resend'

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

    // Send email notification to the business owner
    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL
    const resendApiKey = process.env.RESEND_API_KEY
    const resendVerifiedEmail = process.env.RESEND_VERIFIED_EMAIL // The email associated with your Resend account
    const verifiedDomain = process.env.RESEND_VERIFIED_DOMAIN // Your verified domain (e.g., "yourdomain.com")
    const fromEmail = verifiedDomain 
      ? `Contact Form <noreply@${verifiedDomain}>` 
      : 'Contact Form <onboarding@resend.dev>'

    if (resendApiKey && recipientEmail) {
      try {
        const resend = new Resend(resendApiKey)
        
        // If no domain is verified, Resend only allows sending to the account owner's email
        // Use the verified email if available, otherwise try the recipient email
        // If it fails, the error handler will log helpful instructions
        const emailToSend = verifiedDomain ? recipientEmail : (resendVerifiedEmail || recipientEmail)
        
        await resend.emails.send({
          from: fromEmail,
          to: emailToSend,
          subject: `New Contact Form Submission - ${email}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New Contact Form Submission</h2>
              <p>You have received a new message from your website contact form.</p>
              
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Contact Information:</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                ${message ? `<p><strong>Message:</strong></p><p style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</p>` : '<p><strong>Message:</strong> No message provided</p>'}
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              ${!verifiedDomain ? `<div style="background-color: #fff3cd; padding: 15px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #ffc107;">
                <p style="margin: 0; color: #856404;"><strong>Note:</strong> To send emails to different recipients, please verify a domain in Resend. See instructions in your README.</p>
              </div>` : ''}
              
              <p style="color: #666; font-size: 12px;">This is an automated notification from your website contact form.</p>
            </div>
          `,
        })
        
        console.log('Email notification sent successfully', verifiedDomain ? `to ${recipientEmail}` : `to ${emailToSend} (Resend verified email)`)
      } catch (emailError: any) {
        // Log email error but don't fail the request
        console.error('Failed to send email notification:', emailError)
        
        // If it's a validation error about recipient, log helpful message
        if (emailError?.message?.includes('only send testing emails')) {
          console.error('Resend Error: You need to verify a domain to send to custom recipients. See README for instructions.')
          console.error('For now, set RESEND_VERIFIED_EMAIL to your Resend account email to receive notifications.')
        }
        // Form submission still succeeds even if email fails
      }
    } else {
      console.log('Email notifications not configured. Set RESEND_API_KEY and CONTACT_FORM_RECIPIENT_EMAIL environment variables to enable.')
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

