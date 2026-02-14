# Book Showcase Website

A modern Next.js website for showcasing books with previews (introductions and prologues) that link to Amazon for purchases.

## Features

- 📚 Book listing page with all available books
- 📖 Individual book pages with intro/prologue previews
- 🔍 SEO optimized with Next.js metadata API
- 🎨 Responsive design with Tailwind CSS
- 🌙 Dark mode support
- ⚡ Static site generation for fast loading
- 🔗 Direct Amazon store integration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone or download this project

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding Your Books

Edit `/data/books.ts` to add your actual books. Each book requires:

```typescript
{
  id: 'unique-book-id',           // Used in URL (lowercase, hyphens)
  title: 'Book Title',
  author: 'Author Name',
  coverImage: '/images/cover.jpg',
  amazonLink: 'https://amazon.com/dp/YOUR-ASIN',
  description: 'Short description',
  intro: 'Introduction text...',
  prologue: 'Prologue text...',   // Optional
  genre: ['Genre1', 'Genre2'],
  publishedDate: '2024-01-15',
  isbn: 'ISBN-NUMBER'             // Optional
}
```

### Amazon Links

Replace the placeholder Amazon links with your actual product links:

1. Go to your Amazon product page
2. Copy the URL (format: `https://www.amazon.com/dp/ASIN`)
3. Paste into the `amazonLink` field

**Pro tip**: If you're in Amazon Associates, use your affiliate link to earn commissions!

### Book Cover Images

1. Add your book cover images to `/public/images/`
2. Update the `coverImage` field in your book data
3. Recommended size: 600x900px (2:3 ratio)

### Branding

Update these files to match your brand:

- `/app/layout.tsx` - Change "Author Name" to your actual name
- `/app/page.tsx` - Update homepage heading and description
- `/app/about/page.tsx` - Add your author bio and social links
- `/app/globals.css` - Customize colors if needed

### Metadata & SEO

Each page has metadata for SEO. Update in:

- `/app/layout.tsx` - Site-wide metadata
- `/app/books/[id]/page.tsx` - Automatic per-book SEO from book data

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Vercel is free for personal projects and optimized for Next.js.

### Other Hosting Options

- **Netlify**: Supports Next.js with their Next.js runtime
- **AWS Amplify**: Good for AWS users
- **Self-hosted**: Build with `npm run build` then serve with `npm start`

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
book-showcase/
├── app/
│   ├── books/[id]/       # Dynamic book pages
│   ├── about/            # About page
│   ├── layout.tsx        # Root layout with nav
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/           # Reusable components (add as needed)
├── data/
│   └── books.ts          # Book data (EDIT THIS)
├── public/
│   └── images/           # Book covers go here
├── types/
│   └── book.ts           # TypeScript types
└── package.json
```

## Tips for Success

1. **Write compelling previews**: Your intro/prologue should hook readers
2. **Use high-quality cover images**: First impressions matter
3. **Keep descriptions concise**: 2-3 sentences max
4. **Add social proof**: Include reviews/ratings in book descriptions
5. **Update regularly**: Add new books to keep readers coming back
6. **Promote your site**: Share individual book pages on social media
7. **Consider email signup**: Add newsletter integration (Mailchimp, ConvertKit)

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Deployment: https://vercel.com/docs

## License

This template is free to use for your book showcase website.
