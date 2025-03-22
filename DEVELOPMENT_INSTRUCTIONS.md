# Smart Home Gadgets Affiliate Website - Development Instructions

## Project Overview
This repository contains a Next.js website focused on Amazon Associates affiliate marketing for Smart Home Gadgets. The site is designed to showcase and review popular smart home products from Amazon, with affiliate links that generate commission on qualifying purchases.

## Current Status
- We've selected Amazon Smart Home Gadgets as our niche due to easy signup process and strong passive income potential
- The website structure has been modified to focus on smart home product categories
- Amazon affiliate links have been integrated throughout the content
- The site is deployed and accessible at [website URL]

## Development Environment Setup
1. Clone the repository:
```bash
git clone https://github.com/tkamphefner/passive-income-site.git
cd passive-income-site
```

2. Install dependencies:
```bash
cd frontend
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Access the site locally at http://localhost:3000

## Project Structure
- `/frontend` - Next.js application
  - `/src/app` - Page components and routes
  - `/src/components` - Reusable UI components
  - `/src/data` - Product data and category information
  - `/public` - Static assets (images, etc.)

## Amazon Associates Integration
- The site uses Amazon Associates affiliate links throughout product listings
- Affiliate disclosure is included in the footer and dedicated page
- Product links are generated with the affiliate tag embedded

## Future Development Tasks
1. **Content Expansion**:
   - Add more product reviews for popular smart home gadgets
   - Create comparison articles between similar products
   - Develop how-to guides for smart home setup and integration

2. **SEO Optimization**:
   - Improve meta descriptions and titles
   - Add structured data for product reviews
   - Create a sitemap.xml file

3. **Monetization Enhancements**:
   - Test different affiliate link placements for better conversion
   - Consider adding additional affiliate programs (Best Buy, Walmart)
   - Implement email capture for newsletter marketing

4. **Technical Improvements**:
   - Optimize image loading and site performance
   - Implement analytics to track affiliate link clicks
   - Add search functionality across product reviews

## Deployment
The site is currently deployed using Vercel. To deploy updates:
1. Push changes to the GitHub repository
2. Vercel will automatically deploy the updated site

## Important Notes
- Always maintain proper affiliate disclosures to comply with FTC regulations
- Regularly update product information to ensure accuracy
- Push code changes to GitHub frequently to maintain version history
- Test all affiliate links regularly to ensure they're working properly

## Contact
For questions or assistance, contact the repository owner.

Last updated: March 22, 2025
