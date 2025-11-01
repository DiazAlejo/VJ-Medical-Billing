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

    // Optional: Here you could also:
    // 1. Send email notification using SendGrid, Resend, or Nodemailer
    // 2. Send notifications to the team (Slack, Discord, etc.)
    // 3. Trigger webhooks for CRM integration

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

