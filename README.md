This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Sanity content

The Sanity Studio is available at `/studio`. Configure these variables in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-11-23
```

Published content must be readable by the website. For a private dataset, also set
`SANITY_API_READ_TOKEN` to a read-only API token; keep this token server-side and
never prefix it with `NEXT_PUBLIC_`.

In Studio, open **Site Content** and create the prefilled singleton to edit the
homepage, profile, skills, capabilities, contact details, footer, and SEO. Create
and publish **Project** documents to manage project write-ups and images. Existing
project entries remain as fallbacks until their matching Sanity documents are
published; matching documents replace the fallback, and **Show on portfolio**
controls visibility. Configure Sanity CORS origins for the local and deployed
website URLs so the Studio and live content updates can connect.

For production, also configure the signed Sanity cache-invalidation webhook
described in [SANITY_INTEGRATION.md](./SANITY_INTEGRATION.md#production-cache-updates).
This ensures new visitors receive published changes even if nobody was browsing
the site when the content was published.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
