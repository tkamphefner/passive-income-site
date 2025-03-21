import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Python vs JavaScript: Which Programming Language Should You Learn First? | SkillsGuide',
  description: 'Comprehensive comparison of Python and JavaScript for beginners. Learn the pros and cons of each language to decide which one is right for your career goals.',
  keywords: 'Python vs JavaScript, programming language comparison, learn to code, best programming language for beginners, Python or JavaScript',
};

export default function CourseComparisonPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Python vs JavaScript: Which Should You Learn First?</h1>
            <p className="text-xl mb-8 opacity-90">
              A comprehensive comparison to help you make the right choice for your learning journey
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="#comparison-table" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
                View Comparison Table
              </Link>
              <Link href="#recommended-courses" className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 border border-blue-400">
                See Recommended Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>
                Choosing your first programming language is a significant decision that can shape your learning journey and career path. Python and JavaScript are two of the most popular programming languages for beginners, each with its own strengths, applications, and learning curves.
              </p>
              <p>
                In this comprehensive comparison, we'll explore the key differences between Python and JavaScript, examine their use cases, and help you determine which language aligns better with your goals and interests. Whether you're interested in web development, data science, or general programming, this guide will provide the insights you need to make an informed decision.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Python at a Glance</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Known for clean, readable syntax</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Excellent for data science, AI, and machine learning</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Strong in automation, scientific computing, and backend development</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Extensive standard library and third-party packages</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Beginner-friendly with gentle learning curve</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-yellow-700">JavaScript at a Glance</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Essential for web development (frontend and backend)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Runs in browsers and on servers (Node.js)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Powerful for creating interactive web applications</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Rich ecosystem with numerous frameworks and libraries</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>High demand in job market, especially for web developers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Detailed Comparison</h2>

            <div className="space-y-12">
              {/* Syntax and Readability */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Syntax and Readability</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-600">Python</h4>
                    <div className="prose prose-lg">
                      <p>
                        Python is renowned for its clean, readable syntax that resembles English. It uses indentation to define code blocks, which enforces consistent formatting and makes code easier to read.
                      </p>
                      <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono mt-4">
                        <pre>
{`# Python example
def greet(name):
    message = f"Hello, {name}!"
    print(message)
    return message

greet("World")`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-yellow-600">JavaScript</h4>
                    <div className="prose prose-lg">
                      <p>
                        JavaScript uses curly braces to define code blocks and semicolons to end statements. While it's more verbose than Python, modern JavaScript (ES6+) has introduced features that make the code cleaner and more readable.
                      </p>
                      <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono mt-4">
                        <pre>
{`// JavaScript example
function greet(name) {
    const message = \`Hello, \${name}!\`;
    console.log(message);
    return message;
}

greet("World");`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Curve */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Learning Curve</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-600">Python</h4>
                    <div className="prose prose-lg">
                      <p>
                        Python is often recommended as a first programming language due to its straightforward syntax and focus on readability. Concepts are expressed in a way that's easy to understand, and there are fewer "gotchas" compared to many other languages.
                      </p>
                      <p>
                        The language's design philosophy emphasizes simplicity and explicitness, making it accessible to beginners while still being powerful enough for advanced users.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-yellow-600">JavaScript</h4>
                    <div className="prose prose-lg">
                      <p>
                        JavaScript has a steeper learning curve due to its quirks and inconsistencies. Concepts like asynchronous programming, callbacks, and prototypal inheritance can be challenging for beginners to grasp.
                      </p>
                      <p>
                        However, modern JavaScript (ES6+) has introduced features that make the language more intuitive, and the immediate visual feedback when working with web pages can be motivating for new learners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases and Applications */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Use Cases and Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-600">Python</h4>
                    <div className="prose prose-lg">
                      <p>Python excels in:</p>
                      <ul>
                        <li><strong>Data Science and Analysis:</strong> Libraries like Pandas, NumPy, and Matplotlib make Python the go-to language for data manipulation and visualization.</li>
                        <li><strong>Machine Learning and AI:</strong> TensorFlow, PyTorch, and scikit-learn provide powerful tools for building ML models.</li>
                        <li><strong>Backend Web Development:</strong> Frameworks like Django and Flask enable rapid development of web applications.</li>
                        <li><strong>Automation and Scripting:</strong> Python's simplicity makes it ideal for automating repetitive tasks.</li>
                        <li><strong>Scientific Computing:</strong> Used extensively in academia and research for simulations and calculations.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-yellow-600">JavaScript</h4>
                    <div className="prose prose-lg">
                      <p>JavaScript excels in:</p>
                      <ul>
                        <li><strong>Frontend Web Development:</strong> The only programming language natively supported by all web browsers.</li>
                        <li><strong>Full-Stack Development:</strong> Node.js allows JavaScript to run on the server, enabling end-to-end JavaScript applications.</li>
                        <li><strong>Interactive Web Applications:</strong> Creates dynamic, responsive user interfaces with frameworks like React, Vue, and Angular.</li>
                        <li><strong>Mobile App Development:</strong> React Native and Ionic allow building cross-platform mobile apps with JavaScript.</li>
                        <li><strong>Game Development:</strong> Libraries like Phaser and Three.js enable browser-based game development.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Market and Career Opportunities */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Job Market and Career Opportunities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-600">Python</h4>
                    <div className="prose prose-lg">
                      <p>
                        Python developers are in high demand across various industries. The rise of data science and machine learning has further increased the need for Python expertise.
                      </p>
                      <p>Common Python career paths include:</p>
                      <ul>
                        <li>Data Scientist/Analyst</li>
                        <li>Machine Learning Engineer</li>
                        <li>Backend Developer</li>
                        <li>DevOps Engineer</li>
                        <li>Automation Engineer</li>
                        <li>Research Scientist</li>
                      </ul>
                      <p>
                        Average Python developer salary: $110,000 - $130,000 (varies by location and experience)
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-yellow-600">JavaScript</h4>
                    <div className="prose prose-lg">
                      <p>
                        JavaScript developers are among the most sought-after in the tech industry. As web applications become increasingly complex, the demand for JavaScript expertise continues to grow.
                      </p>
                      <p>Common JavaScript career paths include:</p>
                      <ul>
                        <li>Frontend Developer</li>
                        <li>Full-Stack Developer</li>
                        <li>React/Angular/Vue Developer</li>
                        <li>Node.js Developer</li>
                        <li>Mobile App Developer (React Native)</li>
                        <li>UI/UX Developer</li>
                      </ul>
                      <p>
                        Average JavaScript developer salary: $105,000 - $125,000 (varies by location and experience)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div id="comparison-table" className="mt-16">
              <h2 className="text-3xl font-bold mb-10 text-center">Side-by-Side Comparison</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 border-b text-left">Feature</th>
                      <th className="py-3 px-4 border-b text-left bg-blue-50 text-blue-700">Python</th>
                      <th className="py-3 px-4 border-b text-left bg-yellow-50 text-yellow-700">JavaScript</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Syntax</td>
                      <td className="py-3 px-4 border-b bg-blue-50">Clean, readable, uses indentation</td>
                      <td className="py-3 px-4 border-b bg-yellow-50">More verbose, uses braces and semicolons</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Learning Curve</td>
                      <td className="py-3 px-4 border-b bg-blue-50">Gentle, beginner-friendly</td>
                      <td className="py-3 px-4 border-b bg-yellow-50">Steeper, more quirks to learn</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Primary Use Cases</td>
                      <td className="py-3 px-4 border-b bg-blue-50">Data science, AI/ML, backend, automation</td>
                      <td className="py-3 px-4 border-b bg-yellow-50">Web development (frontend and backend)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Performance</td>
                      <td className="py-3 px-4 border-b bg-blue-50">Slower than compiled languages, but optimized libraries available</td>
                      <td className="py-3 px-4 border-b bg-yellow-50">Fast in browsers, V8 engine provides good performance</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Community & Resources</td>
                      <td className="py-3 px-4 border-b bg-blue-50">Large, active community with extensive documentation</td>
                      <td className="py-3 px-4 border-b bg-yellow-50">Massive community, countless tutorials and resources</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Job Opportunities</td>
                      <td className="py-3 px-4 border-b bg-blue-50">High demand, especially in data science and ML</td>
                      <td className="py-3 px-4 border-b bg-yellow-50">Very high demand across web development roles</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Frameworks & Libraries</td>
                      <td className="py-3 px-4 border-b bg-blue-50">Django, Flask, Pandas, NumPy, TensorFlow</td>
                      <td className="py-3 px-4 border-b bg-yellow-50">React, Angular, Vue, Express, Node.js</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Mobile Development</td>
                      <td className="py-3 px-4 border-b bg-blue-50">Limited (Kivy, BeeWare)</td>
                      <td className="py-3 px-4 border-b bg-yellow-50">Strong (React Native, Ionic)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Game Development</td>
                      <td className="py-3 px-4 border-b bg-blue-50">Pygame, limited capabilities</td>
                      <td className="py-3 px-4 border-b bg-yellow-50">Phaser, Three.js, good for browser games</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Which One Should You Choose? */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Which One Should You Choose?</h2>

            <div className="prose prose-lg max-w-none mb-10">
              <p>
                The "best" language to learn first depends on your goals, interests, and the type of projects you want to build. Here's our recommendation based on different scenarios:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Choose Python if:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You're completely new to programming and want the gentlest introduction</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You're interested in data science, machine learning, or AI</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You want to work in scientific computing or academia</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You need to automate tasks or analyze data</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You prefer a language with consistent rules and fewer surprises</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-yellow-700">Choose JavaScript if:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You want to build websites and web applications</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You're interested in frontend development and creating user interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You want to develop mobile apps using frameworks like React Native</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You prefer immediate visual feedback as you learn</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You want to use the same language for both frontend and backend (full-stack)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">The Best Approach: Learn Both (Eventually)</h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  While it's important to focus on one language when starting out, many professional developers eventually learn both Python and JavaScript. They complement each other well, and knowing both expands your capabilities significantly.
                </p>
                <p>
                  A common learning path is to start with Python to build a solid programming foundation, then learn JavaScript to add web development skills. Alternatively, if web development is your primary goal, starting with JavaScript makes sense, with Python added later for backend or data processing capabilities.
                </p>
                <p>
                  Remember that programming concepts transfer between languages. Once you've learned one language well, picking up additional languages becomes much easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Courses */}
      <section id="recommended-courses" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Recommended Courses</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-700">Top Python Courses</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">
                        <Link href="/courses/complete-python-bootcamp" className="text-blue-600 hover:text-blue-800">
                          Complete Python Bootcamp: From Zero to Hero
                        </Link>
                      </h4>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-gray-600 ml-2">4.8 (1.3M+ students)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A comprehensive course covering Python fundamentals through advanced topics. Perfect for complete beginners with hands-on projects and exercises.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">$59.99</span>
                        <Link href="/courses/complete-python-bootcamp" className="text-blue-600 hover:text-blue-800 font-medium">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">
                        <Link href="/courses/python-for-data-science" className="text-blue-600 hover:text-blue-800">
                          Python for Data Science and Machine Learning
                        </Link>
                      </h4>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-gray-600 ml-2">4.7 (750K+ students)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Learn how to use Python for data analysis, visualization, and machine learning with libraries like Pandas, NumPy, and scikit-learn.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">$69.99</span>
                        <Link href="/courses/python-for-data-science" className="text-blue-600 hover:text-blue-800 font-medium">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">
                        <Link href="/courses/automate-boring-stuff-python" className="text-blue-600 hover:text-blue-800">
                          Automate the Boring Stuff with Python
                        </Link>
                      </h4>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-gray-600 ml-2">4.6 (500K+ students)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A practical course focused on using Python to automate everyday tasks. Great for beginners who want to see immediate practical applications.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">$49.99</span>
                        <Link href="/courses/automate-boring-stuff-python" className="text-blue-600 hover:text-blue-800 font-medium">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-700">Top JavaScript Courses</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">
                        <Link href="/courses/javascript-complete-guide" className="text-blue-600 hover:text-blue-800">
                          The Complete JavaScript Course 2025
                        </Link>
                      </h4>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-gray-600 ml-2">4.8 (900K+ students)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A comprehensive JavaScript course covering fundamentals through advanced concepts. Includes modern ES6+ features and practical projects.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">$59.99</span>
                        <Link href="/courses/javascript-complete-guide" className="text-blue-600 hover:text-blue-800 font-medium">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">
                        <Link href="/courses/modern-react-redux" className="text-blue-600 hover:text-blue-800">
                          Modern React with Redux
                        </Link>
                      </h4>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-gray-600 ml-2">4.7 (650K+ students)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Learn to build modern web applications with React and Redux. Covers components, hooks, state management, and more with hands-on projects.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">$69.99</span>
                        <Link href="/courses/modern-react-redux" className="text-blue-600 hover:text-blue-800 font-medium">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">
                        <Link href="/courses/nodejs-express-mongodb" className="text-blue-600 hover:text-blue-800">
                          Node.js, Express, MongoDB & More
                        </Link>
                      </h4>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-gray-600 ml-2">4.6 (450K+ students)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A complete course on backend development with Node.js. Build RESTful APIs, work with databases, and deploy your applications.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">$59.99</span>
                        <Link href="/courses/nodejs-express-mongodb" className="text-blue-600 hover:text-blue-800 font-medium">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Programming Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you choose Python or JavaScript, the most important step is to start learning and building projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/categories/programming-web-development/python" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Explore Python Courses
              </Link>
              <Link href="/categories/programming-web-development/javascript" className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 border border-blue-400">
                Explore JavaScript Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
