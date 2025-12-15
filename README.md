# Z360 Virtual Tours

Professional 360° Virtual Tour Web Application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Beautiful Homepage** with hero section, featured tours, services, and testimonials
- **Portfolio Gallery** with category filtering and search functionality
- **Tour Detail Pages** with multi-platform embed support (Matterport, CloudPano, 3DVista, Kuula, Panoee, TeliportMe)
- **Services Page** showcasing all virtual tour offerings
- **About Page** with company information, team, and values
- **Contact Page** with form submission
- **Discover Page** for business discovery and places
- **Admin Dashboard** for managing tours, categories, and content
- **Responsive Design** optimized for all devices
- **SEO Optimized** with proper meta tags and structured data

## Supported 360° Tour Platforms

- Matterport
- CloudPano
- 3DVista
- Kuula
- Panoee
- TeliportMe
- Any custom iframe URL

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-repo/z360-virtual-tours.git
cd z360-virtual-tours
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── discover/          # Places discovery
│   ├── portfolio/         # Tour portfolio & detail pages
│   └── services/          # Services page
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page sections
│   ├── tours/            # Tour-related components
│   └── ui/               # UI components
└── lib/                   # Utilities and database
    ├── db/               # Database schema and operations
    └── utils.ts          # Helper functions
```

## Admin Panel

Access the admin panel at `/admin` to:
- View dashboard statistics
- Manage virtual tours (add, edit, delete)
- Manage categories
- View contact submissions
- Configure site settings

Default admin credentials:
- Email: admin@z360virtualtours.com
- Password: admin123

## Adding a New Tour

1. Go to Admin Panel → Tours → Add New Tour
2. Fill in the tour details:
   - Title and descriptions
   - Select the tour platform (Matterport, CloudPano, etc.)
   - Paste the embed URL from your 360° tour platform
   - Add location, features, and tags
   - Set publish status
3. Save and the tour will appear in your portfolio

## Customization

### Colors

Edit `src/app/globals.css` to customize the color scheme:

```css
:root {
  --primary: #0066FF;
  --secondary: #FF6B00;
  /* ... other colors */
}
```

### Categories

Categories are defined in `src/lib/db/data.ts`. You can add, remove, or modify categories as needed.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to Vercel
3. Deploy!

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod

## License

MIT License - feel free to use this project for your business.

## Support

For questions or support, contact: info@z360virtualtours.com
