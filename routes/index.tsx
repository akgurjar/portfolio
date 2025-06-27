import { define } from "../utils.ts";

export default define.page(function Home() {
  const mailId = "ashishkgurjar@gmail.com";
  return (
    <>
      <section class="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 class="text-4xl sm:text-6xl font-bold text-white">Ashish Gurjar</h1>
        <p class="text-xl text-gray-400 mt-4">
          Full Stack Developer • JavaScript | Typescript | Node.js | Angular | Deno
        </p>
        <div class="flex space-x-4 mt-6">
          <a
            href="https://github.com/akgurjar"
            target="_blank"
            class="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/its_akgurjar"
            target="_blank"
            class="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href={"mailto:" + mailId}
            class="text-gray-400 hover:text-white transition"
          >
            Email
          </a>
        </div>
      </section>

      <section class="max-w-3xl mx-auto p-4">
        <h2 class="text-2xl font-semibold mb-2">About Me</h2>
        <p class="text-gray-300">
          I'm a software engineer specializing in building scalable front-end
          and back-end systems. I work with JavaScript, TypeScript, Node.js,
          Angular, React, Deno, and more. I'm passionate about clean
          architecture, developer tooling, and performance optimization.
        </p>
      </section>

      <section class="max-w-5xl mx-auto p-4 mt-10">
        <h2 class="text-2xl font-semibold mb-6">Projects</h2>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-xl font-bold mb-2">Snapshot by bidadoo</h3>
            <p class="text-gray-400 mb-2">
              Asset inspection platform for heavy machinery. I developed the
              backend microservices architecture using Deno + PostgreSQL.
            </p>
            <a href="#" class="text-indigo-400 hover:underline">
              View Project →
            </a>
          </div>
          <div class="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-xl font-bold mb-2">Ride-Hailing App Backend</h3>
            <p class="text-gray-400 mb-2">
              Scalable backend for a ride-hailing app similar to Uber using
              NestJS, Redis, and message brokers.
            </p>
            <a href="#" class="text-indigo-400 hover:underline">
              View Project →
            </a>
          </div>
        </div>
      </section>

      <section class="max-w-xl mx-auto p-4 mt-10 text-center">
        <h2 class="text-2xl font-semibold mb-4">Contact</h2>
        <p class="text-gray-300 mb-6">
          Want to work together or just say hi? Drop me a message!
        </p>
        <a
          href={"mailto:" + mailId}
          class="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          Say Hello
        </a>
      </section>

      <footer class="text-center p-4 mt-10 text-gray-500 text-sm">
        © 2025 Ashish Gurjar. All rights reserved.
      </footer>
    </>
  );
});
