import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { define } from "../utils.ts";
import { page } from "fresh";
import Link from "../components/Link.tsx";

export const metadata = {
  title: "Portfolio - Ashish Gurjar",
  description:
    "A showcase of projects developed by Ashish Gurjar, featuring full-stack applications, microservices, and high-performance tools.",
};

export const handler = define.handlers({
  GET(ctx) {
    ctx.state.metadata = metadata;
    return page();
  },
});

export default define.page(function Portfolio() {
  const projects = [
    {
      title: "Smart Inventory System",
      description:
        "A cloud-native microservices application for real-time inventory tracking and management across multiple warehouses.",
      image: "https://placehold.co/800x600/4a90e2/ffffff?text=Smart+Inventory",
      tags: ["TypeScript", "Node.js", "Redis", "Docker"],
      link: "#",
      github: "https://github.com/akgurjar",
    },
    {
      title: "DeFi Analytics Dashboard",
      description:
        "A high-performance dashboard for tracking decentralized finance protocols, liquidity pools, and asset movements.",
      image: "https://placehold.co/800x600/ec4899/ffffff?text=DeFi+Analytics",
      tags: ["React", "GraphQL", "PostgreSQL", "D3.js"],
      link: "#",
      github: "https://github.com/akgurjar",
    },
    {
      title: "E-Commerce Microservices",
      description:
        "A scalable e-commerce backend built with a microservices architecture, featuring event-driven communication.",
      image: "https://placehold.co/800x600/10b981/ffffff?text=E-Commerce+API",
      tags: ["Go", "gRPC", "RabbitMQ", "MongoDB"],
      link: "#",
      github: "https://github.com/akgurjar",
    },
    {
      title: "Real-time Collaboration Tool",
      description:
        "A multi-user document editor with real-time syncing using WebSockets and CRDTs for conflict resolution.",
      image: "https://placehold.co/800x600/f59e0b/ffffff?text=Collab+Tool",
      tags: ["Deno", "TypeScript", "WebSockets"],
      link: "#",
      github: "https://github.com/akgurjar",
    },
    {
      title: "AI Image Processor",
      description:
        "A serverless tool that uses machine learning models to optimize and transform images at scale.",
      image: "https://placehold.co/800x600/6366f1/ffffff?text=AI+Processor",
      tags: ["Python", "AWS Lambda", "S3", "Terraform"],
      link: "#",
      github: "https://github.com/akgurjar",
    },
    {
      title: "Developer Portfolio Template",
      description:
        "A high-performance, SEO-friendly portfolio template built for developers using Fresh and Tailwind CSS.",
      image:
        "https://placehold.co/800x600/000000/ffffff?text=Portfolio+Template",
      tags: ["Fresh", "Tailwind CSS", "Preact"],
      link: "/",
      github: "https://github.com/akgurjar/portfolio",
    },
  ];

  return (
    <>
      <section class="min-h-[40vh] flex flex-col items-center justify-center bg-white dark:bg-black pt-20">
        <Header class="max-w-5xl w-full fixed top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md" />
        <div class="max-w-4xl w-full px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            My <span class="text-blue-600">Portfolio</span>
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            A small collection of projects I've worked on. Each project
            represents a unique challenge and solution.
          </p>
        </div>
      </section>

      <main class="max-w-6xl w-full mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              class="flex flex-col bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div class="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  class="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <div class="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div class="flex items-center gap-4 mt-auto">
                  <Link
                    href={project.link}
                    class="btn btn-sm btn-primary rounded-full px-6"
                  >
                    Case Study
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    class="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                  >
                    <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
                      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.49,20.14 9.49,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.41 6,9.5 6.63,8.8C6.52,8.54 6.18,7.5 6.73,6.15C6.73,6.15 7.56,5.88 9.47,7.17C10.25,6.96 11.1,6.85 11.95,6.85C12.8,6.85 13.65,6.96 14.43,7.17C16.34,5.88 17.17,6.15 17.17,6.15C17.72,7.5 17.38,8.54 17.27,8.8C17.9,9.5 18.28,10.41 18.28,11.5C18.28,15.32 15.95,16.17 13.72,16.42C14.07,16.72 14.39,17.34 14.39,18.3C14.39,19.67 14.38,20.77 14.38,21C14.38,21.28 14.54,21.6 15.05,21.5C19,20.16 21.85,16.42 21.85,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
});
