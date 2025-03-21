import React from 'react';

interface ComparisonTableProps {
  products: {
    name: string;
    platform: string;
    affiliateUrl: string;
    price: number;
    rating: number;
    features: string[];
    bestFor: string;
    imageUrl?: string;
  }[];
  title: string;
  subtitle?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  products,
  title,
  subtitle
}) => {
  // Track click event for analytics
  const handleAffiliateClick = (productName: string, platform: string) => {
    // Log click event (this would be replaced with actual analytics in production)
    console.log(`Comparison table affiliate link clicked: ${productName} on ${platform}`);
    
    // Here you would typically implement:
    // 1. Google Analytics event tracking
    // 2. Facebook Pixel conversion tracking
    // 3. Custom affiliate click tracking
    
    // Example of what this might look like with Google Analytics:
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', 'comparison_table_click', {
    //     'product_name': productName,
    //     'platform': platform
    //   });
    // }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Course</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Platform</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Price</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Rating</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Best For</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Key Features</th>
              <th className="py-3 px-4 border-b text-center font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-3 px-4 border-b font-medium">{product.name}</td>
                <td className="py-3 px-4 border-b">{product.platform}</td>
                <td className="py-3 px-4 border-b">${product.price.toFixed(2)}</td>
                <td className="py-3 px-4 border-b">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span>{product.rating}</span>
                  </div>
                </td>
                <td className="py-3 px-4 border-b">{product.bestFor}</td>
                <td className="py-3 px-4 border-b">
                  <ul className="list-disc pl-5 text-sm">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <a 
                    href={product.affiliateUrl}
                    onClick={() => handleAffiliateClick(product.name, product.platform)}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Course
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>* Prices may vary. Please check the course platform for the most current pricing.</p>
        <p>** This table contains affiliate links. Please see our <a href="/affiliate-disclosure" className="text-blue-600 hover:underline">affiliate disclosure</a> for more information.</p>
      </div>
    </div>
  );
};

export default ComparisonTable;
