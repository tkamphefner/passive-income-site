export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-blue-600 text-white py-16 px-4 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center">About SkillsGuide</h1>
        <p className="text-xl max-w-3xl mx-auto text-center">
          Your trusted resource for professional skills development and course recommendations
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            At SkillsGuide, we're committed to helping professionals at all stages of their careers find the best learning resources to develop in-demand skills. We believe that continuous learning is essential in today's rapidly evolving job market, and our mission is to make that process easier and more effective.
          </p>
          <p className="text-lg text-gray-700">
            Through comprehensive reviews, detailed comparisons, and expert recommendations, we guide you to the courses and resources that will have the greatest impact on your professional growth and career advancement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Course Reviews</h3>
              <p className="text-gray-700">
                We thoroughly evaluate online courses across major platforms, assessing content quality, instructor expertise, learning experience, and value for money.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Course Comparisons</h3>
              <p className="text-gray-700">
                We compare similar courses side-by-side to help you understand the differences and choose the option that best fits your learning style and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Learning Paths</h3>
              <p className="text-gray-700">
                We create recommended learning sequences for various career paths, helping you build skills in a logical, progressive manner.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Resource Curation</h3>
              <p className="text-gray-700">
                We provide free templates, guides, and tools to supplement your learning and help you apply your new skills.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Review Process</h2>
          <p className="text-lg text-gray-700 mb-6">
            We take our course recommendations seriously. Here's how we evaluate each course:
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Hands-on Testing</h3>
                <p className="text-gray-700">Our team enrolls in and completes courses to provide authentic insights.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Student Feedback Analysis</h3>
                <p className="text-gray-700">We analyze thousands of student reviews to identify consistent patterns.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Expert Consultation</h3>
                <p className="text-gray-700">We consult with industry professionals to validate course content accuracy.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Regular Updates</h3>
                <p className="text-gray-700">We revisit our reviews to ensure they reflect course updates and changes.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Alex Johnson</h3>
              <p className="text-gray-600">Founder & Lead Reviewer</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Sarah Chen</h3>
              <p className="text-gray-600">Technical Skills Specialist</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
              <p className="text-gray-600">Business Skills Analyst</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
