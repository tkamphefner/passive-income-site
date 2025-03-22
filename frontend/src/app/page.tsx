import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Transform your living space with intelligent home technology</h1>
          <p>Expert reviews, comparisons, and recommendations for the best smart home devices on the market.</p>
          <div className="button-group">
            <Link href="/categories" className="cta-button">
              Explore Categories
            </Link>
            <Link href="/products/top-rated" className="secondary-button">
              Top-Rated Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Featured Categories</h2>
          <div className="category-grid">
            {/* Category 1 */}
            <Link href="/categories/smart-security" className="category-card">
              <div className="category-image">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#3A5BF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="category-content">
                <h3>Smart Security Cameras</h3>
                <p>Keep your home safe with the latest security cameras and systems</p>
              </div>
            </Link>

            {/* Category 2 */}
            <Link href="/categories/smart-speakers" className="category-card">
              <div className="category-image">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 017.072 0m-9.9-2.828a9 9 0 0112.728 0" stroke="#3A5BF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="category-content">
                <h3>Smart Speakers & Displays</h3>
                <p>Voice-controlled assistants and smart displays for your connected home</p>
              </div>
            </Link>

            {/* Category 3 */}
            <Link href="/categories/smart-lighting" className="category-card">
              <div className="category-image">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="#3A5BF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="category-content">
                <h3>Smart Lighting</h3>
                <p>Transform your home with smart bulbs, strips, and lighting systems</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="products">
        <div className="container">
          <h2 className="section-title">Top-Rated Smart Home Products</h2>
          <div className="product-grid">
            {/* Product 1 */}
            <div className="product-card">
              <div className="product-image">
                {/* Product image would go here */}
                <div className="product-tag">Best Seller</div>
              </div>
              <div className="product-content">
                <h3>Blink Mini 2</h3>
                <p>Compact indoor plug-in smart security camera with HD video, night vision, and motion detection</p>
                <div className="product-meta">
                  <div className="product-rating">
                    ★★★★☆
                  </div>
                  <div className="product-reviews">
                    (7,745 reviews)
                  </div>
                </div>
                <div className="product-price">$19.99</div>
                <a href="#" className="product-button">View on Amazon</a>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card">
              <div className="product-image">
                {/* Product image would go here */}
                <div className="product-tag">Best Value</div>
              </div>
              <div className="product-content">
                <h3>Echo Dot (5th Gen)</h3>
                <p>Smart speaker with Alexa and improved sound for music streaming and smart home control</p>
                <div className="product-meta">
                  <div className="product-rating">
                    ★★★★★
                  </div>
                  <div className="product-reviews">
                    (125,432 reviews)
                  </div>
                </div>
                <div className="product-price">$49.99</div>
                <a href="#" className="product-button">View on Amazon</a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card">
              <div className="product-image">
                {/* Product image would go here */}
                <div className="product-tag">Premium</div>
              </div>
              <div className="product-content">
                <h3>Philips Hue White & Color Starter Kit</h3>
                <p>Smart LED bulbs with hub that work with Alexa and Google Assistant</p>
                <div className="product-meta">
                  <div className="product-rating">
                    ★★★★★
                  </div>
                  <div className="product-reviews">
                    (32,145 reviews)
                  </div>
                </div>
                <div className="product-price">$179.99</div>
                <a href="#" className="product-button">View on Amazon</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Smart Home Section */}
      <section className="buying-guide">
        <div className="container">
          <h2 className="section-title">Why Choose Smart Home Technology?</h2>
          <div className="buying-guide-content">
            <p>Smart home technology transforms the way you interact with your living space, offering convenience, security, energy efficiency, and enhanced comfort. With the right devices, you can create a home that responds to your needs and preferences.</p>
            
            <ul className="feature-list">
              <li className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <div className="feature-title">Convenience & Control</div>
                  <p>Control your entire home from your smartphone or with voice commands, whether you're on the couch or away from home.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <div className="feature-title">Enhanced Security</div>
                  <p>Monitor your home with smart cameras, receive alerts for unusual activity, and control access with smart locks.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <div className="feature-title">Energy Efficiency</div>
                  <p>Reduce energy consumption with smart thermostats, lighting, and appliances that optimize usage based on your habits.</p>
                </div>
              </li>
            </ul>
            
            <div className="text-center mt-8">
              <Link href="/resources/smart-home-guide" className="secondary-button">
                Read Our Complete Smart Home Guide
              </Link>
            </div>
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
