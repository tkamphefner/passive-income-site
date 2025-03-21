import React from 'react';
import Link from 'next/link';
import { useAnalytics } from './AnalyticsProvider';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  buttonText?: string;
  backgroundColor?: string;
  textColor?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = "Get Course Deals & Learning Resources",
  description = "Subscribe to our newsletter and receive exclusive discounts, learning tips, and curated course recommendations.",
  buttonText = "Subscribe",
  backgroundColor = "bg-blue-50",
  textColor = "text-blue-800"
}) => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState('');
  
  const analytics = useAnalytics();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setIsSubmitting(true);
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // This would be replaced with actual newsletter signup API call in production
      console.log(`Subscribing email: ${email}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track signup event
      analytics.trackEvent('Newsletter', 'Signup', 'Homepage Form');
      
      // Show success message
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Failed to subscribe. Please try again later.');
      console.error('Newsletter signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`${backgroundColor} rounded-lg p-6 shadow-md`}>
      <div className="text-center mb-4">
        <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      
      {isSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Thank you for subscribing to our newsletter.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {error && <p className="mt-1 text-red-600 text-sm">{error}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
          </button>
          
          <p className="text-xs text-gray-500 mt-2">
            By subscribing, you agree to our <Link href="/privacy-policy" className="underline hover:text-gray-700">Privacy Policy</Link> and 
            consent to receive marketing emails. You can unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
