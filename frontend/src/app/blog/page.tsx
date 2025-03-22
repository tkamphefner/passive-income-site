export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-blue-600 text-white py-16 px-4 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Professional Skills Blog</h1>
        <p className="text-xl max-w-3xl mx-auto text-center">
          Expert insights, tips, and strategies to accelerate your career growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <span className="text-sm text-blue-600 font-medium">Career Development</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">10 Essential Skills Every Professional Needs in 2025</h3>
            <p className="text-gray-700 mb-4">
              Discover the most in-demand professional skills that employers are looking for this year and how to develop them.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">March 15, 2025</span>
              <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <span className="text-sm text-blue-600 font-medium">Learning Strategies</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">How to Master Any New Skill in Half the Time</h3>
            <p className="text-gray-700 mb-4">
              Learn the science-backed techniques that can help you acquire new skills more efficiently and effectively.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">March 10, 2025</span>
              <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <span className="text-sm text-blue-600 font-medium">Digital Marketing</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">SEO Fundamentals: A Beginner's Guide to Ranking Higher</h3>
            <p className="text-gray-700 mb-4">
              Understand the basics of search engine optimization and how to improve your website's visibility online.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">March 5, 2025</span>
              <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <span className="text-sm text-blue-600 font-medium">Programming</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">Why Python Is Still the Best First Programming Language</h3>
            <p className="text-gray-700 mb-4">
              Explore the reasons why Python continues to be the recommended starting point for aspiring programmers.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">February 28, 2025</span>
              <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <span className="text-sm text-blue-600 font-medium">Leadership</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">5 Leadership Lessons from Tech Industry Pioneers</h3>
            <p className="text-gray-700 mb-4">
              Learn valuable leadership insights from the founders and CEOs who transformed the technology landscape.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">February 20, 2025</span>
              <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <span className="text-sm text-blue-600 font-medium">Productivity</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">The Ultimate Guide to Time Blocking for Maximum Focus</h3>
            <p className="text-gray-700 mb-4">
              Discover how to implement time blocking techniques to eliminate distractions and boost your productivity.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">February 15, 2025</span>
              <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Load More Articles
        </button>
      </div>
    </main>
  );
}
