import React from 'react';

interface AffiliateButtonProps {
  href: string;
  platform: string;
  className?: string;
  children: React.ReactNode;
}

const AffiliateButton: React.FC<AffiliateButtonProps> = ({ 
  href, 
  platform, 
  className = "", 
  children 
}) => {
  // Affiliate IDs for different platforms
  const affiliateIds = {
    udemy: "AFFILIATE123",
    coursera: "REF456",
    linkedin: "PARTNER789",
    amazon: "TAG012",
    skillshare: "SHARE345",
    pluralsight: "PLUS678",
    datacamp: "DATA901"
  };

  // Function to add affiliate ID to URL based on platform
  const getAffiliateUrl = (originalUrl: string, platform: string): string => {
    // Convert platform to lowercase for case-insensitive matching
    const platformLower = platform.toLowerCase();
    
    // Check if we have an affiliate ID for this platform
    if (platformLower in affiliateIds) {
      const affiliateId = affiliateIds[platformLower as keyof typeof affiliateIds];
      
      // Add appropriate affiliate parameter based on platform
      if (platformLower === 'udemy') {
        // Udemy uses referral_code parameter
        return originalUrl.includes('?') 
          ? `${originalUrl}&referral_code=${affiliateId}` 
          : `${originalUrl}?referral_code=${affiliateId}`;
      } 
      else if (platformLower === 'coursera') {
        // Coursera uses utm_source and utm_campaign
        return originalUrl.includes('?') 
          ? `${originalUrl}&utm_source=affiliate&utm_campaign=${affiliateId}` 
          : `${originalUrl}?utm_source=affiliate&utm_campaign=${affiliateId}`;
      }
      else if (platformLower === 'amazon') {
        // Amazon uses tag parameter
        return originalUrl.includes('?') 
          ? `${originalUrl}&tag=${affiliateId}` 
          : `${originalUrl}?tag=${affiliateId}`;
      }
      // Add more platform-specific URL structures as needed
      else {
        // Generic affiliate parameter
        return originalUrl.includes('?') 
          ? `${originalUrl}&ref=${affiliateId}` 
          : `${originalUrl}?ref=${affiliateId}`;
      }
    }
    
    // If no affiliate ID is found, return the original URL
    return originalUrl;
  };

  // Track click event for analytics
  const handleClick = () => {
    // Log click event (this would be replaced with actual analytics in production)
    console.log(`Affiliate link clicked: ${platform}`);
    
    // Here you would typically implement:
    // 1. Google Analytics event tracking
    // 2. Facebook Pixel conversion tracking
    // 3. Custom affiliate click tracking
    
    // Example of what this might look like with Google Analytics:
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', 'affiliate_click', {
    //     'affiliate_platform': platform,
    //     'destination_url': href
    //   });
    // }
  };

  // Generate the affiliate URL
  const affiliateUrl = getAffiliateUrl(href, platform);

  return (
    <a 
      href={affiliateUrl}
      onClick={handleClick}
      className={`inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default AffiliateButton;
