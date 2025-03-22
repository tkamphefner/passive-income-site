"use client";

import Link from 'next/link';
import { generateAmazonAffiliateLink, getProductsByCategory } from '../../../data/products';

export default function SmartSecurityPage() {
  // Get security products from our data
  const securityProducts = getProductsByCategory('security');

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{backgroundColor: 'var(--color-primary)'}}>
        <div className="container">
          <h1>Smart Security Cameras</h1>
          <p>Protect your home with the latest smart security cameras and systems</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <div className="container">
          <div className="introduction-content">
            <h2>Why Choose Smart Security Cameras?</h2>
            <p>
              Smart security cameras offer peace of mind by allowing you to monitor your home from anywhere using your smartphone. 
              With features like motion detection, night vision, two-way audio, and cloud storage, these devices provide comprehensive 
              protection for your property and loved ones.
            </p>
            <p>
              Whether you need indoor cameras to keep an eye on pets and children, outdoor cameras to monitor your property, 
              or a complete security system with multiple cameras, we've reviewed the best options to help you make an informed decision.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <div className="container">
          <h2 className="section-title">Top-Rated Security Cameras</h2>
          <div className="product-grid">
            {securityProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  {/* Product image would go here */}
                  <div className="product-tag">{product.tag}</div>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-meta">
                    <div className="product-rating">
                      {product.rating === 5 ? "★★★★★" : product.rating === 4.5 ? "★★★★☆" : "★★★★"}
                    </div>
                    <div className="product-reviews">
                      ({product.reviews.toLocaleString()} reviews)
                    </div>
                  </div>
                  <div className="product-price">${product.price.toFixed(2)}</div>
                  <a 
                    href={generateAmazonAffiliateLink(product.id)} 
                    target="_blank" 
                    rel="nofollow noopener" 
                    className="product-button"
                  >
                    View on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guide Section */}
      <section className="buying-guide">
        <div className="container">
          <h2 className="section-title">Smart Security Camera Buying Guide</h2>
          <div className="buying-guide-content">
            <h3>Key Features to Consider</h3>
            <ul className="feature-list">
              <li className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <div className="feature-title">Resolution</div>
                  <p>Higher resolution (1080p or 2K) provides clearer images for identifying people and objects.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <div className="feature-title">Field of View</div>
                  <p>Wider angles (130° or more) cover more area with fewer cameras.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <div className="feature-title">Night Vision</div>
                  <p>Essential for 24/7 monitoring; color night vision provides more detail than infrared.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <div className="feature-title">Power Source</div>
                  <p>Battery-powered cameras offer flexible placement but require recharging; wired cameras provide continuous power.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <div className="feature-title">Storage Options</div>
                  <p>Cloud storage provides remote access but may require a subscription; local storage (SD card) has no recurring fees.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <div className="feature-title">Smart Home Integration</div>
                  <p>Compatibility with Alexa, Google Assistant, or HomeKit allows for voice control and automation.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="comparison">
        <div className="container">
          <h2 className="section-title">Compare Top Security Cameras</h2>
          <div className="table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Camera</th>
                  <th>Resolution</th>
                  <th>Field of View</th>
                  <th>Night Vision</th>
                  <th>Power</th>
                  <th>Price</th>
                  <th>Buy</th>
                </tr>
              </thead>
              <tbody>
                {securityProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>1080p HD</td>
                    <td>{index === 0 ? "110°" : index === 1 ? "140°" : "160°"}</td>
                    <td>{index === 0 ? "Infrared" : "Color"}</td>
                    <td>{index === 2 ? "Battery" : "Wired"}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>
                      <a 
                        href={generateAmazonAffiliateLink(product.id)} 
                        target="_blank" 
                        rel="nofollow noopener" 
                        className="table-link"
                      >
                        View on Amazon
                      </a>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>Google Nest Cam</td>
                  <td>1080p HD</td>
                  <td>135°</td>
                  <td>HDR</td>
                  <td>Battery/Wired</td>
                  <td>$179.99</td>
                  <td>
                    <a 
                      href={generateAmazonAffiliateLink('B09711BNVF')} 
                      target="_blank" 
                      rel="nofollow noopener" 
                      className="table-link"
                    >
                      View on Amazon
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Wyze Cam v3</td>
                  <td>1080p HD</td>
                  <td>130°</td>
                  <td>Color</td>
                  <td>Wired</td>
                  <td>$35.98</td>
                  <td>
                    <a 
                      href={generateAmazonAffiliateLink('B08R59YH7W')} 
                      target="_blank" 
                      rel="nofollow noopener" 
                      className="table-link"
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
      <section className="disclosure">
        <div className="container">
          <div className="disclosure-content">
            <strong>Affiliate Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases. This means that if you click on a link to a product on Amazon from our site and make a purchase, we may receive a small commission at no additional cost to you. This helps support our work and allows us to continue providing valuable content.
          </div>
        </div>
      </section>
    </div>
  );
}
