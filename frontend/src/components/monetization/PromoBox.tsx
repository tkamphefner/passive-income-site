import React from 'react';
import Link from 'next/link';

interface PromoBoxProps {
  title: string;
  description: string;
  platform: string;
  affiliateUrl: string;
  discount?: {
    code: string;
    percentage: number;
    expiryDate: string;
  };
  backgroundColor?: string;
  textColor?: string;
  buttonText?: string;
}

const PromoBox: React.FC<PromoBoxProps> = ({
  title,
  description,
  platform,
  affiliateUrl,
  discount,
  backgroundColor = 'bg-blue-50',
  textColor = 'text-blue-800',
  buttonText = 'Claim Offer'
}) => {
  // Track click event for analytics
  const handlePromoClick = () => {
    // Log click event (this would be replaced with actual analytics in production)
    console.log(`Promo box clicked: ${title} on ${platform}`);
    
    // Here you would typically implement:
    // 1. Google Analytics event tracking
    // 2. Facebook Pixel conversion tracking
    // 3. Custom affiliate click tracking
    
    // Example of what this might look like with Google Analytics:
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', 'promo_click', {
    //     'promo_title': title,
    //     'platform': platform,
    //     'discount_code': discount?.code || 'none'
    //   });
    // }
  };

  return (
    <div className={`${backgroundColor} rounded-lg p-6 shadow-md`}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
          <p className="text-gray-700 mb-3">{description}</p>
          
          {discount && (
            <div className="mb-3">
              <div className="flex items-center">
                <span className="font-bold text-green-600 text-lg mr-2">{discount.percentage}% OFF</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{discount.code}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Expires: {discount.expiryDate}</p>
            </div>
          )}
          
          <div className="text-sm text-gray-500">
            <Link href="/affiliate-disclosure" className="underline hover:text-gray-700">
              Affiliate disclosure
            </Link>
          </div>
        </div>
        
        <a 
          href={affiliateUrl}
          onClick={handlePromoClick}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 text-center whitespace-nowrap"
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default PromoBox;
