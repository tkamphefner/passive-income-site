import React from 'react';
import Link from 'next/link';

interface ResourceBoxProps {
  title: string;
  description: string;
  resources: {
    name: string;
    platform: string;
    affiliateUrl: string;
    type: 'book' | 'course' | 'tool' | 'resource';
  }[];
}

const ResourceBox: React.FC<ResourceBoxProps> = ({
  title,
  description,
  resources
}) => {
  // Track click event for analytics
  const handleResourceClick = (resourceName: string, platform: string, type: string) => {
    // Log click event (this would be replaced with actual analytics in production)
    console.log(`Resource link clicked: ${resourceName} on ${platform} (${type})`);
    
    // Here you would typically implement:
    // 1. Google Analytics event tracking
    // 2. Facebook Pixel conversion tracking
    // 3. Custom affiliate click tracking
    
    // Example of what this might look like with Google Analytics:
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', 'resource_click', {
    //     'resource_name': resourceName,
    //     'platform': platform,
    //     'resource_type': type
    //   });
    // }
  };

  // Get icon based on resource type
  const getResourceIcon = (type: string) => {
    switch(type) {
      case 'book':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'course':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'tool':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      
      <ul className="space-y-3">
        {resources.map((resource, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-3 mt-0.5">
              {getResourceIcon(resource.type)}
            </div>
            <div>
              <a 
                href={resource.affiliateUrl}
                onClick={() => handleResourceClick(resource.name, resource.platform, resource.type)}
                className="font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.name}
              </a>
              <p className="text-sm text-gray-600">{resource.platform}</p>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="mt-4 text-xs text-gray-500">
        <p>* Contains affiliate links. See our <Link href="/affiliate-disclosure" className="text-blue-600 hover:underline">affiliate disclosure</Link> for details.</p>
      </div>
    </div>
  );
};

export default ResourceBox;
