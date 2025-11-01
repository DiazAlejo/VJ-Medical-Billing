# VJ Medical Billing LLC - Landing Page

A modern, responsive, bilingual (English/Spanish) landing page for VJ Medical Billing LLC, designed to generate qualified leads for medical billing services.

## Features

- ✅ **Bilingual Support**: Seamless switching between English and Spanish
- ✅ **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- ✅ **Lead Generation**: Contact form with email and message fields
- ✅ **Professional Design**: Clean, medical aesthetic with smooth animations
- ✅ **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- ✅ **Performance**: Fast load times and optimized assets

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Database**: Supabase (PostgreSQL)
- **Form Handling**: Custom API route with database storage

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Supabase Database**
   
   a. Create a free account at [Supabase](https://supabase.com)
   
   b. Create a new project
   
   c. Go to SQL Editor and run the migration:
      - Copy the contents of `supabase/migrations/001_create_contacts_table.sql`
      - Paste and execute it in the Supabase SQL Editor
   
   d. Get your project credentials:
      - Go to Project Settings → API
      - Copy your Project URL and anon/public key

3. **Configure Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```
   
   Replace the values with your actual Supabase credentials.
   
   **Note**: 
   - `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in Project Settings → API
   - `SUPABASE_SERVICE_ROLE_KEY` (recommended for API routes) can also be found in Project Settings → API
   - The service role key bypasses RLS and is more secure for server-side operations

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── api/contact/       # Contact form API endpoint with database storage
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── AboutUs.tsx
│   ├── Services.tsx
│   ├── Specialties.tsx
│   ├── WhyChooseUs.tsx
│   ├── Educational.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── contexts/
│   └── LanguageContext.tsx # Bilingual context provider
├── lib/
│   └── supabase.ts       # Supabase client configuration
├── supabase/
│   └── migrations/       # Database migration files
│       └── 001_create_contacts_table.sql
└── utils/
    └── translations.ts     # Translation strings
```

## Form Integration

The contact form is now fully functional and stores all submissions in the Supabase database:

- **Database Storage**: All form submissions are saved to the `contacts` table
- **Data Stored**: Email, phone, message, and timestamp for each submission
- **View Submissions**: Access your contacts via Supabase Dashboard → Table Editor → `contacts`

### Viewing Form Submissions

1. Go to your Supabase project dashboard
2. Navigate to **Table Editor** in the sidebar
3. Click on the `contacts` table to see all form submissions
4. You can sort, filter, and export the data as needed

### Optional Enhancements

You can extend the API route (`app/api/contact/route.ts`) to:
- Send email notifications using SendGrid, Resend, or Nodemailer
- Send Slack/Discord notifications to your team
- Integrate with CRM systems via webhooks
- Send auto-reply emails to form submitters

## Deployment

This project is ready to deploy on:
- **Vercel** (recommended)
- **Netlify**
- Any platform supporting Next.js

```bash
npm run build
```

## Performance Goals

- ✅ < 2s load time
- ✅ 90+ Lighthouse score
- ✅ 0 console errors
- ✅ Fully responsive

## License

© 2024 VJ Medical Billing LLC. All rights reserved.

