export default function ResourcesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-blue-600 text-white py-16 px-4 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Professional Skills Resources</h1>
        <p className="text-xl max-w-3xl mx-auto text-center">
          Free guides, templates, and tools to help you develop your professional skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Resume Templates</h3>
          <p className="text-gray-700 mb-4">
            Professional resume templates optimized for ATS systems and hiring managers.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">Download Templates →</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Interview Preparation Guide</h3>
          <p className="text-gray-700 mb-4">
            Comprehensive guide to ace your next job interview with practice questions.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">Read Guide →</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Productivity Tools</h3>
          <p className="text-gray-700 mb-4">
            Curated list of the best productivity tools and apps for professionals.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">View Tools →</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Networking Scripts</h3>
          <p className="text-gray-700 mb-4">
            Email templates and conversation starters for effective professional networking.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">Get Scripts →</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Career Path Guides</h3>
          <p className="text-gray-700 mb-4">
            Detailed guides on various career paths with skill requirements and salary information.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">Explore Guides →</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Learning Roadmaps</h3>
          <p className="text-gray-700 mb-4">
            Step-by-step learning paths for developing in-demand professional skills.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">View Roadmaps →</a>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Our Resource Library</h2>
        <p className="text-center mb-6">Get access to premium resources, templates, and guides.</p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
