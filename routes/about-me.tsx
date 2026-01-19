import { define } from "../utils.ts";
import Header from "../components/Header.tsx";
import { page } from "fresh";
import Footer from "../components/Footer.tsx";
import Link from "../components/Link.tsx";

export const metadata = {
  title: "About - Ashish Gurjar",
  description:
    "Learn more about Ashish Gurjar, a Technical Lead specializing in building smart applications with clean architecture.",
  keywords:
    "Ashish Gurjar, software developer, technical lead, clean architecture, typescript, deno, fresh",
  image: "/banner.webp",
};

export const handler = define.handlers({
  GET(ctx) {
    ctx.state.metadata = metadata;
    return page();
  },
});

export default define.page(function AboutMe() {
  const yearsOfExperience = Math.round(new Date().getFullYear() - 2018);

  const socialLinks = [
    {
      name: "Github",
      href: "https://github.com/akgurjar",
      iconPath:
        "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/akgurjar",
      iconPath:
        "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z",
    },
  ];

  const timeline = [
    {
      type: "work",
      title: "Senior Software Engineer",
      company: "Quantitative Brokers",
      logo: "https://www.quantitativebrokers.com/favicon.ico",
      period: "October 2024 - Present",
      description:
        "Leading the redevelopment of highly optimized portals using Angular and Deno, focusing on real-time data streaming and advanced financial analytics.",
    },
    {
      type: "work",
      title: "Technical Lead",
      company: "Humble Innovations",
      logo: "/companies/humble_logo.jpeg",
      period: "April 2024 - October 2024",
      description:
        "Directed cloud-native application development, implementing scalable microservices architectures and robust API designs using Node.js and AWS.",
    },
    {
      type: "work",
      title: "Associate Technical Lead",
      company: "Appinventiv Technologies",
      logo: "/companies/appinventiv_logo.jpeg",
      period: "October 2018 - April 2024",
      description:
        "Rose through ranks from Developer to Associate Tech Lead. Managed complex projects and cross-functional teams while maintaining core architecture.",
    },
    {
      type: "education",
      title: "B.Tech in Electronics & Communications",
      company: "University of Technology",
      period: "2014 - 2018",
      description:
        "Focused on Data Structures, Algorithms, and Signal Processing. Graduated with honors.",
    },
  ];

  return (
    <div class="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header class="max-w-6xl w-full mx-auto fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5" />

      {/* Hero Section */}
      <section class="relative pt-32 pb-20 overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full opacity-30 pointer-events-none">
          <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] -mr-48 -mt-24">
          </div>
          <div class="absolute bottom-0 left-0 w-80 h-80 bg-pink-600 rounded-full blur-[120px] -ml-40 -mb-24">
          </div>
        </div>

        <div class="max-w-6xl w-full mx-auto px-4 relative z-10">
          <div class="grid md:grid-cols-5 gap-12 items-center">
            <div class="md:col-span-3 space-y-6">
              <h1 class="text-6xl md:text-7xl font-black tracking-tight leading-tight">
                Ashish{" "}
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  Gurjar
                </span>
              </h1>
              <h2 class="text-2xl md:text-3xl font-medium text-gray-300">
                Technical Lead specializing in{" "}
                <span class="text-white">Clean Architecture</span>
              </h2>
              <p class="text-lg text-gray-400 leading-relaxed max-w-2xl">
                With {yearsOfExperience}{" "}
                years of experience in the software industry, I've dedicated my
                career to building high-performance systems and leading
                technical teams. I thrive at the intersection of complex backend
                logic and seamless user experiences.
              </p>

              <div class="flex gap-4 pt-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    class="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
                    title={link.name}
                  >
                    <svg viewBox="0 0 30 30" class="fill-current w-6 h-6">
                      <path d={link.iconPath} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            <div class="md:col-span-2 flex justify-center md:justify-end">
              <div class="relative group">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity">
                </div>
                <img
                  src="/images/banner-p.jpg"
                  alt="Ashish Gurjar"
                  class="relative w-72 h-96 object-cover rounded-3xl shadow-2xl border border-white/10 grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <main class="max-w-4xl w-full mx-auto px-4 py-20">
        <h3 class="text-3xl font-bold mb-16 text-center">My Journey</h3>

        <div class="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          {timeline.map((item, index) => (
            <div
              key={index}
              class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black group-hover:bg-blue-600 group-hover:border-blue-400 text-gray-400 group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10">
                {item.type === "work"
                  ? (
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  )
                  : (
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  )}
              </div>

              {/* Card */}
              <div class="w-[calc(100%-4rem)] md:w-[45%] p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm hover:shadow-blue-500/5 transition-all duration-300">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {item.period}
                  </span>
                </div>
                <h4 class="text-xl font-bold mb-1">{item.title}</h4>
                <div class="flex items-center gap-2 mb-4">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={item.company}
                      class="w-5 h-5 rounded-sm object-contain bg-white p-0.5"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  )}
                  <span class="text-sm font-medium text-gray-400">
                    {item.company}
                  </span>
                </div>
                <p class="text-sm text-gray-500 leading-relaxed italic border-l-2 border-white/10 pl-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section class="max-w-6xl w-full mx-auto px-4 py-32 text-center">
        <div class="bg-gradient-to-br from-blue-600/20 to-pink-600/20 rounded-[3rem] p-16 border border-white/5 backdrop-blur-sm relative overflow-hidden">
          <div class="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20">
          </div>
          <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-20">
          </div>

          <h2 class="text-4xl font-bold mb-6">
            Let's build something world-class.
          </h2>
          <p class="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
            I'm always open to discussing technical architecture, leadership
            opportunities, or innovative projects.
          </p>
          <button
            command="show-modal"
            commandfor="connect-dialog"
            class="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
          >
            Get In Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
});
