# Future Development Instructions for Amazon Smart Home Gadgets Affiliate Site

## Overview
This document provides detailed instructions for future development of the Amazon Smart Home Gadgets affiliate website. The site is designed to generate passive income through the Amazon Associates program by promoting smart home products.

## Current Status
- Website is deployed and accessible at: https://3001-iyw74ujarj8qbcanwjodv-ec71e850.manus.computer
- Amazon affiliate links are integrated throughout the site
- Smart home product categories are set up with detailed content
- Product data structure is implemented for easy management

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

3. Start the development server:
```bash
npm run dev
```

4. Access the site locally at http://localhost:3000

## Project Structure
- `/frontend` - Next.js application
  - `/src/app` - Page components and routes
  - `/src/components` - Reusable UI components
  - `/src/data` - Product data and affiliate link utilities
  - `/public` - Static assets (images, etc.)

## Key Files
- `/frontend/src/data/products.js` - Contains all product data and affiliate link generation utilities
- `/frontend/src/app/page.tsx` - Homepage with smart home categories
- `/frontend/src/app/categories/smart-security/page.tsx` - Example category page with affiliate links

## Adding New Products
1. Open `/frontend/src/data/products.js`
2. Locate the appropriate category in the `smartHomeProducts` object
3. Add a new product object with the following structure:
```javascript
{
  id: 'AMAZON_PRODUCT_ID',  // The Amazon ASIN
  name: 'Product Name',
  description: 'Product description',
  price: 99.99,
  rating: 4.5,
  reviews: 1234,
  image: '/images/products/product-image.jpg',
  category: 'category-name',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  tag: 'Best Seller'  // Optional tag for the product
}
```

## Creating New Category Pages
1. Create a new directory under `/frontend/src/app/categories/`
2. Create a `page.tsx` file in the new directory
3. Use the smart-security page as a template
4. Update the content to match the new category
5. Use the `getProductsByCategory` function to fetch products for the category

## Updating Affiliate Links
The `generateAmazonAffiliateLink` function in `/frontend/src/data/products.js` handles affiliate link generation:
```javascript
export const generateAmazonAffiliateLink = (productId, tag = 'skillsguide-20') => {
  return `https://www.amazon.com/dp/${productId}?tag=${tag}`;
};
```

To update your affiliate tag:
1. Replace 'skillsguide-20' with your Amazon Associates tracking ID
2. This change will automatically update all affiliate links across the site

## Adding Images
1. Place product images in `/frontend/public/images/products/`
2. Reference them in the product data using relative paths
3. Optimize images for web before adding them (recommended size: 600x400px)

## SEO Optimization
1. Update metadata in each page component:
```javascript
export const metadata = {
  title: 'Page Title | Smart Home Gadgets Guide',
  description: 'Page description for SEO purposes',
};
```

2. Add structured data for products using JSON-LD

## Content Guidelines
1. Always include detailed product descriptions
2. List key features and specifications
3. Provide honest pros and cons
4. Include comparison tables when relevant
5. Always maintain proper affiliate disclosures

## Deployment
The site is currently deployed using a temporary URL. For permanent deployment:

1. Build the production version:
```bash
npm run build
```

2. Deploy to Vercel or similar platform:
```bash
npx vercel
```

## Amazon Associates Compliance
1. Always include the affiliate disclosure on every page with affiliate links
2. Do not make price guarantees or specific claims about discounts
3. Do not use Amazon product images directly; create your own product images
4. Follow all Amazon Associates Program Operating Agreement guidelines

## Monitoring and Analytics
1. Set up Google Analytics to track visitor behavior
2. Implement Amazon Associates reporting to track clicks and conversions
3. Use this data to optimize content and product selection

## Future Enhancement Ideas
1. Add user reviews and comments
2. Implement a search function
3. Create a comparison tool for similar products
4. Add email newsletter signup with automated product deals
5. Expand to additional smart home categories
6. Create in-depth buying guides for each category
7. Add video reviews and demonstrations
8. Implement seasonal content for holiday shopping

## Troubleshooting
If you encounter issues:
1. Check the console for errors
2. Verify Amazon product IDs are correct
3. Ensure affiliate tag is properly formatted
4. Test affiliate links in incognito mode

## Contact
For questions or assistance, contact the repository owner.

Last updated: March 22, 2025
