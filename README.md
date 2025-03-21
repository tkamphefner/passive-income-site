# SkillsGuide - Professional Skills Development Affiliate Site

## Project Overview

This repository contains a Hyper-Targeted Affiliate Content Site focused on Online Learning with a specific emphasis on Professional Skills Development. The site is designed to generate passive income through affiliate marketing by providing expert reviews, comparisons, and recommendations for online courses in various professional skills categories.

## Current Progress

- ✅ Analyzed passive income website options
- ✅ Selected Hyper-Targeted Affiliate Content Site as the best approach
- ✅ Set up GitHub repository
- ✅ Designed comprehensive website structure
  - ✅ Defined niche (Online Learning - Professional Skills Development)
  - ✅ Planned content categories and site organization
  - ✅ Created site map
  - ✅ Designed wireframes for key pages
- 🔄 Developing website frontend
  - ✅ Set up Next.js project with TypeScript and Tailwind CSS
  - ✅ Created component structure
  - ✅ Implemented Header and Footer components
  - ✅ Implemented Home page
  - 🔄 Implementing remaining pages (Category, Course Review, Comparison)
- ⬜ Implement monetization features
- ⬜ Test website functionality
- ⬜ Document deployment instructions

## Project Structure

```
passive_income_site/
├── niche_research/           # Research on profitable niches
│   └── niche_analysis.md     # Analysis of different niches and selection rationale
├── site_structure/           # Website structure planning
│   ├── content_categories.md # Content categories and organization
│   ├── site_map.md           # Site map with URL structure
│   └── wireframes.md         # Wireframes for key pages
├── frontend/                 # Next.js project
│   ├── src/
│   │   ├── app/              # Next.js App Router pages
│   │   ├── components/       # Reusable components
│   │   │   ├── layout/       # Layout components (Header, Footer)
│   │   │   ├── ui/           # UI components
│   │   │   └── course/       # Course-related components
│   │   └── ...
│   └── ...
└── README.md                 # Project documentation
```

## Niche Selection

After thorough research, we selected **Online Learning** with a focus on **Professional Skills Development** as our niche for the following reasons:

1. High growth potential (projected to hit $203.80 billion by 2025, growing at 8.20% annually)
2. Excellent commission rates (25-30%)
3. Recurring revenue potential through subscription-based courses
4. Diverse sub-niches for expansion
5. Lower competition compared to other niches
6. Evergreen demand for professional education

## Content Categories

The website focuses on six main professional skills categories:

1. Business & Entrepreneurship
2. Digital Marketing
3. Programming & Web Development
4. Data Science & Analytics
5. Project Management
6. Leadership & Management

Each category has multiple subcategories as detailed in `site_structure/content_categories.md`.

## Monetization Strategy

The primary monetization strategy is affiliate marketing through:

1. Course platform affiliate programs:
   - Udemy Affiliate Program
   - Coursera Partners Program
   - LinkedIn Learning Affiliate Program
   - Pluralsight Affiliate Program
   - Skillshare Affiliate Program

2. Strategic affiliate link placement:
   - Course review pages
   - Comparison tables
   - "Best of" lists
   - In-content recommendations
   - Resource boxes

3. Secondary monetization methods:
   - Display advertising (once traffic reaches sufficient levels)
   - Email marketing with affiliate offers
   - Sponsored content (future potential)

## Next Steps

1. Complete implementation of remaining pages:
   - Category pages
   - Course review pages
   - Comparison pages
   - Best-of list pages
   - About/Contact pages

2. Implement affiliate link components and tracking

3. Add responsive design improvements for mobile devices

4. Test all functionality and user flows

5. Document deployment instructions

## Development Setup

To run the project locally:

1. Clone the repository:
```
git clone https://github.com/tkamphefner/passive-income-site.git
cd passive-income-site/frontend
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Design Decisions

- **Framework**: Next.js with TypeScript for SEO benefits and type safety
- **Styling**: Tailwind CSS for rapid development and responsive design
- **Layout**: Clean, modern design focused on readability and conversion
- **Color Scheme**: Blue primary color to convey trust and professionalism
- **Typography**: Inter font for clean, modern appearance and readability

## Deployment

The site will be deployed using Vercel for optimal Next.js hosting. Deployment instructions will be added upon completion of development.
