"use client";

import Link from 'next/link';
import { generateAmazonAffiliateLink, getProductsByCategory } from '../../../data/products';

export default function SmartSecurityPage() {
  // Get security products from our data
  const securityProducts = getProductsByCategory('security');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Security Cameras</h1>
            <p className="text-xl mb-8">Protect your home with the latest smart security cameras and systems</p>
          </div>
        </div>
      </section>

      {/* Category Description */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose Smart Security Cameras?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Smart security cameras offer peace of mind by allowing you to monitor your home from anywhere using your smartphone. 
              With features like motion detection, night vision, two-way audio, and cloud storage, these devices provide comprehensive 
              protection for your property and loved ones.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you need indoor cameras to keep an eye on pets and children, outdoor cameras to monitor your property, 
              or a complete security system with multiple cameras, we've reviewed the best options to help you make an informed decision.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top-Rated Security Cameras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 bg-gray-200">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 m-2 rounded">
                    {product.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2">{product.rating} ({product.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                    <a 
                      href={generateAmazonAffiliateLink(product.id)} 
                      target="_blank" 
                      rel="nofollow noopener" 
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Smart Security Camera Buying Guide</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Key Features to Consider</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Resolution:</span> Higher resolution (1080p or 2K) provides clearer images for identifying people and objects.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Field of View:</span> Wider angles (130° or more) cover more area with fewer cameras.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Night Vision:</span> Essential for 24/7 monitoring; color night vision provides more detail than infrared.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Power Source:</span> Battery-powered cameras offer flexible placement but require recharging; wired cameras provide continuous power.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Storage Options:</span> Cloud storage provides remote access but may require a subscription; local storage (SD card) has no recurring fees.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Smart Home Integration:</span> Compatibility with Alexa, Google Assistant, or HomeKit allows for voice control and automation.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Top Security Cameras</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-6 text-left font-semibold">Camera</th>
                  <th className="py-4 px-6 text-left font-semibold">Resolution</th>
                  <th className="py-4 px-6 text-left font-semibold">Field of View</th>
                  <th className="py-4 px-6 text-left font-semibold">Night Vision</th>
                  <th className="py-4 px-6 text-left font-semibold">Power</th>
                  <th className="py-4 px-6 text-left font-semibold">Price</th>
                  <th className="py-4 px-6 text-left font-semibold">Buy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {securityProducts.map((product, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6">{product.name}</td>
                    <td className="py-4 px-6">1080p HD</td>
                    <td className="py-4 px-6">{index === 0 ? "110°" : index === 1 ? "140°" : "160°"}</td>
                    <td className="py-4 px-6">{index === 0 ? "Infrared" : "Color"}</td>
                    <td className="py-4 px-6">{index === 2 ? "Battery" : "Wired"}</td>
                    <td className="py-4 px-6">${product.price.toFixed(2)}</td>
                    <td className="py-4 px-6">
                      <a 
                        href={generateAmazonAffiliateLink(product.id)} 
                        target="_blank" 
                        rel="nofollow noopener" 
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View on Amazon
                      </a>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4 px-6">Google Nest Cam</td>
                  <td className="py-4 px-6">1080p HD</td>
                  <td className="py-4 px-6">135°</td>
                  <td className="py-4 px-6">HDR</td>
                  <td className="py-4 px-6">Battery/Wired</td>
                  <td className="py-4 px-6">$179.99</td>
                  <td className="py-4 px-6">
                    <a 
                      href={generateAmazonAffiliateLink('B09711BNVF')} 
                      target="_blank" 
                      rel="nofollow noopener" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View on Amazon
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Wyze Cam v3</td>
                  <td className="py-4 px-6">1080p HD</td>
                  <td className="py-4 px-6">130°</td>
                  <td className="py-4 px-6">Color</td>
                  <td className="py-4 px-6">Wired</td>
                  <td className="py-4 px-6">$35.98</td>
                  <td className="py-4 px-6">
                    <a 
                      href={generateAmazonAffiliateLink('B08R59YH7W')} 
                      target="_blank" 
                      rel="nofollow noopener" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View on Amazon
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              <strong>Affiliate Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases. This means that if you click on a link to a product on Amazon from our site and make a purchase, we may receive a small commission at no additional cost to you. This helps support our work and allows us to continue providing valuable content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
