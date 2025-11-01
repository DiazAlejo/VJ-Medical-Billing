# VJ Medical Billing LLC - Developer Documentation

> Technical documentation for developers maintaining this landing page.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e)](https://supabase.com/)

## 🚀 Features

- ✅ **Bilingual Support**: Seamless switching between English and Spanish
- ✅ **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- ✅ **Lead Generation**: Contact form with email and message fields
- ✅ **Professional Design**: Clean, medical aesthetic with smooth animations
- ✅ **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- ✅ **Performance**: Fast load times and optimized assets
- ✅ **Database Integration**: Contact form submissions stored in Supabase

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Form Handling**: Custom API route with database storage
- **Email Service**: [EmailJS](https://www.emailjs.com/) (optional)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Supabase](https://supabase.com/) account (free tier works)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/vj-medical-billing.git
cd vj-medical-billing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase Database

#### Create the Contacts Table

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run the following SQL to create the `contacts` table:

```sql
-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS contacts_email_idx ON contacts(email);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts (you can modify this based on your needs)
CREATE POLICY "Allow public inserts" ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);
```

#### Get Your Supabase Credentials

1. Go to **Project Settings** → **API**
2. Copy your:
   - Project URL
   - `anon` `public` key
   - `service_role` key (for server-side operations)

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

Replace the values with your actual Supabase credentials.

> **Note**: The `SUPABASE_SERVICE_ROLE_KEY` is used for server-side API routes and bypasses Row Level Security. Keep this secret and never commit it to version control.

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
vj-medical-billing/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout with SEO
│   └── page.tsx                   # Main landing page
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── Hero.tsx                   # Hero section with form
│   ├── AboutUs.tsx                # About section
│   ├── Services.tsx               # Services section
│   ├── Specialties.tsx            # Specialties section
│   ├── Contact.tsx                # Contact section
│   └── Footer.tsx                 # Footer component
├── contexts/
│   └── LanguageContext.tsx        # Bilingual context provider
├── lib/
│   └── supabase.ts               # Supabase client configuration
├── utils/
│   └── translations.ts           # Translation strings (EN/ES)
├── public/
│   ├── logo.png                  # Company logo
│   └── bg.png                    # Background image
├── netlify.toml                  # Netlify deployment config
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── package.json                  # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📧 Form Integration

The contact form stores all submissions in the Supabase `contacts` table.

### Viewing Form Submissions

1. Go to your Supabase project dashboard
2. Navigate to **Table Editor** in the sidebar
3. Click on the `contacts` table to see all form submissions
4. You can sort, filter, and export the data as needed

### Optional Enhancements

You can extend the API route (`app/api/contact/route.ts`) to:

- Send email notifications using [SendGrid](https://sendgrid.com/), [Resend](https://resend.com/), or [Nodemailer](https://nodemailer.com/)
- Send Slack/Discord notifications to your team
- Integrate with CRM systems via webhooks
- Send auto-reply emails to form submitters

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/vj-medical-billing)

### Deploy to Netlify

This project includes a `netlify.toml` configuration file for easy deployment:

1. Push your code to GitHub
2. Import your repository on [Netlify](https://www.netlify.com/)
3. Add your environment variables in the Netlify dashboard
4. Deploy!

The configuration includes:
- Build settings for Next.js
- Security headers
- Static asset caching

### Other Platforms

This Next.js app can be deployed to any platform that supports Next.js:
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform)
- [Railway](https://railway.app/)
- [Render](https://render.com/)

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Recommended |

## 📈 Performance Goals

- ✅ < 2s load time
- ✅ 90+ Lighthouse score
- ✅ 0 console errors
- ✅ Fully responsive

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/vj-medical-billing/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

© 2024 VJ Medical Billing LLC. All rights reserved.

This project is proprietary and confidential.

## 👤 Contact

VJ Medical Billing LLC

- Website: [Your Website URL]
- Email: [Your Email]

---

⭐ If you found this project helpful, please consider giving it a star!

