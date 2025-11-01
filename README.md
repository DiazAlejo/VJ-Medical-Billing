# VJ Medical Billing LLC - Your Landing Page

Welcome to your new professional landing page! This document provides you with everything you need to know about managing and using your website.

## 🌐 What You Have

You now have a fully functional, bilingual (English/Spanish) landing page for VJ Medical Billing LLC that includes:

- ✅ **Professional Design**: Modern, responsive website that works perfectly on all devices (desktop, tablet, mobile)
- ✅ **Bilingual Support**: Visitors can switch between English and Spanish seamlessly
- ✅ **Contact Form**: Lead generation form that captures inquiries from potential clients
- ✅ **SEO Optimized**: Your website is optimized for search engines
- ✅ **Fast Performance**: Optimized for quick loading times

## 📊 Accessing Your Contact Leads

You can receive form submissions in **two ways**:

### Option 1: Email Notifications (Recommended - Instant Alerts!)

When someone submits the contact form, you'll receive an email notification immediately. We use **Web3Forms** - it's completely free, requires no signup, and works instantly!

#### Step 1: Get Your Free Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email address (where you want to receive notifications)
3. Click **"Get Your Access Key"**
4. Copy your access key (it will look like: `12345678-1234-1234-1234-123456789012`)

**That's it!** No signup, no credit card, no domain verification needed.

#### Step 2: Set Up Environment Variables

Add these to your `.env.local` file (for local development):

```env
WEB3FORMS_ACCESS_KEY=your_access_key_here
CONTACT_FORM_RECIPIENT_EMAIL=your-email@example.com
```

Replace:
- `your_access_key_here` with the access key from Step 1
- `your-email@example.com` with the email where you want to receive notifications

#### Step 3: Add to Netlify/Vercel (If Deployed)

If your site is hosted on Netlify or Vercel:

1. Go to your site's **Settings** → **Environment Variables**
2. Add both variables:
   - `WEB3FORMS_ACCESS_KEY` = your access key
   - `CONTACT_FORM_RECIPIENT_EMAIL` = your email address
3. Redeploy your site

#### Step 4: Test It!

Submit a test form on your website - you should receive an email within seconds!

**🎉 That's it!** No API keys, no domain verification, no DNS records - just enter your email and get started instantly.

**Benefits of Web3Forms:**
- ✅ 100% Free forever
- ✅ No signup required
- ✅ No API keys needed
- ✅ No domain verification
- ✅ Works instantly
- ✅ Reliable email delivery
- ✅ Free tier: 250 submissions/month (plenty for most sites!)

### Option 2: View Leads in Supabase Database

All form submissions are also automatically saved to your database. Here's how to access them:

#### Step 1: Log in to Supabase
1. Go to [https://supabase.com](https://supabase.com) and log in to your account
2. Select your project (VJ Medical Billing)

#### Step 2: View Your Leads
1. In the left sidebar, click on **"Table Editor"**
2. Click on the **"contacts"** table
3. You'll see all contact form submissions with:
   - Email addresses
   - Phone numbers
   - Messages from visitors
   - Timestamp of each submission

#### Step 3: Export Your Leads (Optional)
- You can export your leads as CSV, Excel, or JSON format
- Use the filters to search by date range, email, or phone number

**💡 Best Practice**: Use both! Email notifications for instant alerts, and the database for keeping records and exporting data.

## 📝 Updating Website Content

**Need to update text, services, or information on your website?**

Simply contact us and we'll make the updates for you. We typically handle content updates within 24-48 hours.

Common updates we can help with:
- Changing contact information
- Updating service descriptions
- Modifying pricing or promotions
- Adding new specialties or services
- Updating business hours or location

## 🔧 Technical Support

If you experience any issues with your website:

1. **Contact us** for technical support
2. **Check that your website is live** at: [Your Website URL]
3. **Test the contact form** to ensure leads are being captured

## 📱 Your Website Features

### Sections Included:
- **Home/Hero Section**: Main landing area with contact form
- **About Us**: Information about VJ Medical Billing LLC
- **Services**: Details about your medical billing services
- **Specialties**: Medical specialties you serve
- **Contact**: Additional contact information and location

### Language Toggle
Visitors can switch between English and Spanish using the language button in the header.

## 🚀 Deploying to Netlify

### Step 1: Push Your Code to GitHub

1. If you haven't already, initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub and push your code:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com) and sign up/login
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** and authorize Netlify to access your repositories
4. Select your repository from the list
5. Netlify will auto-detect your Next.js project settings

### Step 3: Configure Build Settings

Netlify should auto-detect these settings from your `netlify.toml`:
- **Build command:** `npm run build`
- **Publish directory:** (handled automatically by Next.js plugin)
- **Node version:** `20`

Verify these settings match in the Netlify UI under **Site settings** → **Build & deploy**.

### Step 4: Set Environment Variables

Go to **Site settings** → **Environment variables** and add the following:

**Required:**
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**Optional (for email notifications):**
```
WEB3FORMS_ACCESS_KEY=your_access_key_here
CONTACT_FORM_RECIPIENT_EMAIL=recipient@example.com
```

To get your free Web3Forms access key, visit [https://web3forms.com](https://web3forms.com) - no signup required!

### Step 5: Deploy

1. Click **"Deploy site"** 
2. Netlify will build and deploy your site automatically
3. Once deployed, you'll get a URL like: `https://your-site-name.netlify.app`
4. You can add a custom domain in **Site settings** → **Domain management**

### Step 6: Enable Continuous Deployment

Every time you push to your main branch, Netlify will automatically rebuild and deploy your site.

### Troubleshooting

- **Build fails?** Check the build logs in Netlify dashboard
- **API routes not working?** Make sure all environment variables are set correctly
- **404 errors?** Verify your `netlify.toml` configuration is correct
- **Environment variables not working?** Make sure they're set in Netlify UI, not just `.env.local`

## 🚀 Website Status

Your website is:
- ✅ **Live and Active**
- ✅ **Mobile Responsive**
- ✅ **SEO Optimized**
- ✅ **Form Submissions Working**

## 📞 Contact Information

**For website updates, support, or questions:**
- Contact your web developer
- Email: [Your Support Email]
- Phone: [Your Support Phone]

## 📋 Quick Checklist

- [ ] You can access your Supabase dashboard
- [ ] Email notifications are set up (test it!)
- [ ] Contact form is working (test it!)
- [ ] Website displays correctly on mobile devices
- [ ] Language toggle works (English/Spanish)
- [ ] All your information is correct

---

**Last Updated:** 2024

---

> 💡 **Tip**: Check your Supabase dashboard weekly to review new leads and follow up promptly!
