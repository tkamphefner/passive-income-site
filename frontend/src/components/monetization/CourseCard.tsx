import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  platform: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  level: string;
  duration: string;
  imageUrl?: string;
  affiliateUrl: string;
  slug: string;
  bestseller?: boolean;
  featured?: boolean;
  new?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  platform,
  instructor,
  rating,
  reviewCount,
  price,
  originalPrice,
  level,
  duration,
  imageUrl,
  affiliateUrl,
  slug,
  bestseller = false,
  featured = false,
  new: isNew = false,
}) => {
  // Calculate discount percentage
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);
  
  // Format review count (e.g., 1234 -> 1.2K)
  const formatReviewCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  // Track click event for analytics
  const handleAffiliateClick = () => {
    // Log click event (this would be replaced with actual analytics in production)
    console.log(`Course card affiliate link clicked: ${title}`);
    
    // Here you would typically implement:
    // 1. Google Analytics event tracking
    // 2. Facebook Pixel conversion tracking
    // 3. Custom affiliate click tracking
    
    // Example of what this might look like with Google Analytics:
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', 'course_card_click', {
    //     'course_title': title,
    //     'course_platform': platform,
    //     'course_price': price,
    //     'affiliate_url': affiliateUrl
    //   });
    // }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        {/* Course Image */}
        <div className="h-48 bg-gray-200 relative">
          {imageUrl ? (
            <Image 
              src={imageUrl} 
              alt={title} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-400">{platform}</span>
            </div>
          )}
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {bestseller && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Bestseller</span>
          )}
          {featured && (
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
          )}
          {isNew && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">New</span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        {/* Platform and Instructor */}
        <div className="text-gray-500 text-sm mb-1">{platform} • {instructor}</div>
        
        {/* Title */}
        <Link href={`/courses/${slug}`} className="block">
          <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 line-clamp-2">{title}</h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 mr-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill={i < Math.floor(rating) ? "currentColor" : "none"} stroke="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 text-sm">{rating} ({formatReviewCount(reviewCount)} reviews)</span>
        </div>
        
        {/* Course Details */}
        <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-600">
          <span className="bg-gray-100 px-2 py-1 rounded">{level}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{duration}</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
            {originalPrice > price && (
              <>
                <span className="text-gray-500 line-through ml-2">${originalPrice.toFixed(2)}</span>
                <span className="text-green-600 text-sm ml-2">{discountPercentage}% off</span>
              </>
            )}
          </div>
          
          {/* View Course Button */}
          <a 
            href={affiliateUrl}
            onClick={handleAffiliateClick}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Course →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
