import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | SkillsGuide',
  description: 'Our affiliate disclosure explains how we earn commissions through product recommendations while maintaining editorial independence.',
  keywords: 'affiliate disclosure, commission disclosure, sponsored content, product recommendations',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="bg-white">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Affiliate Disclosure</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Last updated: March 21, 2025
              </p>
              
              <h2>Our Commitment to Transparency</h2>
              <p>
                At SkillsGuide, we believe in complete transparency regarding how we make money. This disclosure explains our affiliate relationships and how they influence our content and recommendations.
              </p>
              
              <h2>What Are Affiliate Links?</h2>
              <p>
                Some links on our website are "affiliate links." This means that if you click on the link and purchase the item, SkillsGuide will receive an affiliate commission at no extra cost to you. These commissions help us maintain and improve our website and continue providing valuable content.
              </p>
              
              <h2>Our Affiliate Partnerships</h2>
              <p>
                We currently have affiliate relationships with the following companies and platforms:
              </p>
              <ul>
                <li>Udemy</li>
                <li>Coursera</li>
                <li>LinkedIn Learning</li>
                <li>Pluralsight</li>
                <li>DataCamp</li>
                <li>edX</li>
                <li>Skillshare</li>
                <li>Amazon Associates</li>
                <li>Other educational platforms and product vendors</li>
              </ul>
              
              <h2>How We Select Products and Services to Recommend</h2>
              <p>
                Our primary goal is to provide valuable information and recommendations to our readers. We follow these principles when creating content:
              </p>
              <ol>
                <li><strong>Quality First:</strong> We only recommend products and services that we believe offer genuine value. Many of the courses and resources we recommend have been personally reviewed by our team.</li>
                <li><strong>Editorial Independence:</strong> Our content team operates independently from our business partnerships. Affiliate relationships do not influence our ratings or reviews.</li>
                <li><strong>Comprehensive Research:</strong> We conduct thorough research on all products and services we recommend, including analyzing user reviews, testing when possible, and comparing alternatives.</li>
                <li><strong>Regular Updates:</strong> We regularly update our content to ensure recommendations remain current and accurate.</li>
              </ol>
              
              <h2>How We Use Affiliate Links</h2>
              <p>
                Affiliate links appear in various places throughout our website, including:
              </p>
              <ul>
                <li>Course reviews and comparisons</li>
                <li>Resource recommendations</li>
                <li>Buying guides</li>
                <li>"View Course" or "Enroll Now" buttons</li>
              </ul>
              
              <h2>Disclosure in Content</h2>
              <p>
                In accordance with the Federal Trade Commission's guidelines, we disclose our affiliate relationships in our content. You'll typically see a disclosure statement at the beginning or end of content that contains affiliate links.
              </p>
              
              <h2>Your Trust Matters</h2>
              <p>
                We value your trust above all else. While affiliate commissions support our operations, our primary commitment is to you, our reader. We will never recommend a product solely because it offers an affiliate commission.
              </p>
              <p>
                If you have any questions about our affiliate relationships or how we select products to recommend, please contact us at support@skillsguide.com.
              </p>
              
              <h2>Changes to This Disclosure</h2>
              <p>
                We may update this disclosure from time to time to reflect changes in our affiliate relationships or practices. The date at the top of this page indicates when this disclosure was last updated.
              </p>
              
              <h2>Other Policies</h2>
              <p>
                Please also review our other policies:
              </p>
              <ul>
                <li><Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-blue-600 hover:text-blue-800">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
