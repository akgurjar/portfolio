import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <>
      <header class="flex bg-white items-center backdrop-blur h-16 fixed w-full max-w-4xl z-10">
        <img src="/logo.svg" alt="Logo" height="40" />
        <nav class="container mx-auto flex justify-between items-center px-4">
          <a href="#" class="text-2xl font-bold text-indigo-600">
            &lt;Ashish /&gt;
          </a>
          <ul class="flex space-x-6">
            <li>
              <a
                href="#about"
                class="text-gray-700 hover:text-indigo-600 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                class="text-gray-700 hover:text-indigo-600 transition duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="text-gray-700 hover:text-indigo-600 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="text-gray-700 hover:text-indigo-600 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section
          id="hero"
          class="relative bg-linear-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center h-screen pt-16"
        >
          <div class="text-center px-4">
            <img
              src="/logo.jpeg"
              alt="Avatar"
              class="rounded-full mx-auto h-40 mb-6 border-4 border-white shadow-lg"
            />
            <h1 class="text-5xl font-extrabold mb-4 leading-tight">
              Hi, I'm <span class="text-yellow-300">Ashish Gurjar !</span>
            </h1>
            <p class="text-2xl mb-8">A passionate Full Stack Web Developer</p>
            <a
              href="#projects"
              class="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              View My Work
            </a>
          </div>
        </section>

        <section id="about" class="py-20 bg-white">
          <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-10 text-gray-800">About Me</h2>
            <div class="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
              <p class="mb-4">
                Hello! I'm [Your Name], a full-stack web developer with a strong
                passion for building dynamic and responsive web applications. I
                love bringing ideas to life through code and solving complex
                problems.
              </p>
              <p class="mb-4">
                My journey in web development started with [mention how you
                started, e.g., a bootcamp, self-learning, etc.]. Since then,
                I've been continuously learning and exploring new technologies.
                I thrive in environments where I can contribute to meaningful
                projects and collaborate with talented individuals.
              </p>
              <p>
                When I'm not coding, you can find me [mention a hobby or
                interest, e.g., reading tech blogs, hiking, playing video
                games]. I believe in continuous learning and staying updated
                with the latest industry trends.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" class="py-20 bg-gray-50">
          <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-10 text-gray-800">My Skills</h2>
            <div class="flex flex-wrap justify-center gap-6">
              <div class="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/4">
                <h3 class="text-2xl font-semibold mb-4 text-indigo-600">
                  Frontend
                </h3>
                <ul class="text-left text-gray-700 space-y-2">
                  <li>HTML5, CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React.js, Vue.js, Angular (Choose what applies)</li>
                  <li>Tailwind CSS, Bootstrap</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/4">
                <h3 class="text-2xl font-semibold mb-4 text-indigo-600">
                  Backend
                </h3>
                <ul class="text-left text-gray-700 space-y-2">
                  <li>Node.js, Express.js</li>
                  <li>Python (Django/Flask)</li>
                  <li>PHP (Laravel)</li>
                  <li>Ruby on Rails</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/4">
                <h3 class="text-2xl font-semibold mb-4 text-indigo-600">
                  Database & Tools
                </h3>
                <ul class="text-left text-gray-700 space-y-2">
                  <li>SQL (PostgreSQL, MySQL)</li>
                  <li>NoSQL (MongoDB, Firebase)</li>
                  <li>Git, GitHub</li>
                  <li>Docker</li>
                  <li>AWS/Netlify/Vercel (Deployment)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" class="py-20 bg-white">
          <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-10 text-gray-800">My Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/400x250"
                  alt="Project 1 Thumbnail"
                  class="rounded-md mb-4"
                />
                <h3 class="text-2xl font-semibold mb-2 text-gray-800">
                  Project Title One
                </h3>
                <p class="text-gray-700 mb-4">
                  A brief description of your first project. Highlight the
                  technologies used and its main features. This is a full-stack
                  application.
                </p>
                <div class="flex justify-center space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    class="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    class="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/400x250"
                  alt="Project 2 Thumbnail"
                  class="rounded-md mb-4"
                />
                <h3 class="text-2xl font-semibold mb-2 text-gray-800">
                  Project Title Two
                </h3>
                <p class="text-gray-700 mb-4">
                  Description of your second project. Focus on its unique
                  aspects and what problem it solves. This project showcases
                  your frontend skills.
                </p>
                <div class="flex justify-center space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    class="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    class="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/400x250"
                  alt="Project 3 Thumbnail"
                  class="rounded-md mb-4"
                />
                <h3 class="text-2xl font-semibold mb-2 text-gray-800">
                  Project Title Three
                </h3>
                <p class="text-gray-700 mb-4">
                  Details about your third project. Mention any challenging
                  parts you overcame or specific features you're proud of. This
                  project demonstrates your backend expertise.
                </p>
                <div class="flex justify-center space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    class="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    class="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-12">
              <a
                href="#"
                class="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>

        <section id="contact" class="py-20 bg-gray-50">
          <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-10 text-gray-800">Get in Touch</h2>
            <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach
              out!
            </p>
            <div class="flex flex-col md:flex-row justify-center items-center gap-8">
              <a
                href="mailto:your.email@example.com"
                class="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg flex items-center"
              >
                <svg
                  class="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  >
                  </path>
                </svg>
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                class="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition duration-300 shadow-lg flex items-center"
              >
                <svg
                  class="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38-.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 6.42V24H-.02V9.92h5.02zM12.97 8.01a7 7 0 00-7 7v9.99H18V15c0-3.37 2.05-6.22 5.02-7.01z">
                  </path>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                class="bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition duration-300 shadow-lg flex items-center"
              >
                <svg
                  class="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.804 1.305 3.49.996.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.11-3.176 0 0 1.005-.322 3.3 1.23.95-.265 1.956-.397 2.956-.397.99 0 1.99.132 2.94.397 2.28-1.552 3.28-1.23 3.28-1.23.65 1.653.24 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.82 1.12.82 2.25 0 1.62-.015 2.92-.015 3.31 0 .318.21.69.825.57C20.565 22.18 24 17.68 24 12.297c0-6.627-5.373-12-12-12">
                  </path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto text-center px-4">
          <p>&copy; 2025 Ashish Gurjar. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
});
