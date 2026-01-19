import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { define } from "../utils.ts";
import { page } from "fresh";

export const metadata = {
  title: "Services - Ashish Gurjar",
  description:
    "Professional services offered by Ashish Gurjar, including Web Development, Microservices, and Technical Consulting.",
};

export const handler = define.handlers({
  GET(ctx) {
    ctx.state.metadata = metadata;
    return page();
  },
});

export default define.page(function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Building modern, responsive, and high-performance web applications using React, Next.js, and Fresh.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      features: ["Responsive Design", "SEO Optimization", "PWA Support"],
    },
    {
      title: "Microservices & Backend",
      description:
        "Designing scalable and robust server-side architectures with Node.js, Deno, and Go.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-pink-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      features: ["Distributed Systems", "API Design", "Database Optimization"],
    },
    {
      title: "Technical Lead Consulting",
      description:
        "Mentoring teams, reviewing architectures, and providing strategic technical direction for startups.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      features: ["Team Mentoring", "Architecture Audit", "CTO-as-a-Service"],
    },
    {
      title: "Cloud & DevOps",
      description:
        "Automating deployments and managing cloud infrastructure on AWS, GCP, and Azure.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      features: ["CI/CD Pipelines", "Docker & K8s", "Serverless"],
    },
  ];

  return (
    <>
      <section class="min-h-[50vh] flex flex-col items-center justify-center bg-linear-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <Header class="max-w-5xl w-full text-white absolute top-0" />
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl translate-x-12">
          </div>
          <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-600 rounded-full blur-3xl -translate-x-12">
          </div>
        </div>
        <div class="max-w-4xl w-full px-4 text-center relative z-10">
          <h1 class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Professional{" "}
            <span class="text-transparent bg-linear-to-r from-blue-400 to-pink-500 bg-clip-text">
              Services
            </span>
          </h1>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I help businesses scale their technical capabilities with
            high-performance solutions and expert leadership.
          </p>
        </div>
      </section>

      <main class="max-w-6xl w-full mx-auto px-4 py-24">
        <div class="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              class="group p-8 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div class="mb-6 inline-block p-4 bg-gray-50 dark:bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 class="text-2xl font-bold mb-4">{service.title}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul class="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    class="flex items-center gap-2 text-sm font-medium"
                  >
                    <svg
                      class="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section class="mt-24 p-12 bg-linear-to-r from-blue-600 to-indigo-700 rounded-[3rem] text-white text-center">
          <h2 class="text-3xl font-bold mb-4">
            Ready to build something amazing?
          </h2>
          <p class="text-blue-100 mb-8 max-w-xl mx-auto">
            Let's discuss your project requirements and see how I can help your
            team achieve its goals.
          </p>
          <button
            command="show-modal"
            commandfor="connect-dialog"
            class="btn btn-lg bg-white text-blue-600 hover:bg-blue-50 border-none rounded-full px-12"
          >
            Get a Quote
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
});
