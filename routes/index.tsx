import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Link from "../components/Link.tsx";
import InputEffect from "../islands/InputEffect.tsx";
import { define } from "../utils.ts";

const TITLES = [
  "Ashish Gurjar",
  "A Developer",
  "A Technical Lead",
  "A JavaScript Enthusiast",
];

export default define.page(function Home() {
  return (
    <>
      <section class="w-full flex flex-col items-center min-h-screen bg-white dark:bg-white/5">
        <Header class="max-w-5xl w-full" />
        <div class="max-w-5xl w-full flex-1 flex gap-2 items-center p-4 flex-col-reverse md:flex-row">
          <div class="flex-1">
            <h3 class="text-4xl">Hello there, I'm</h3>
            <h1 class="text-5xl my-4 font-medium min-h-12">
              <InputEffect texts={TITLES} />
            </h1>
            <p>
              Welcome to my portfolio of captivating digital experiences.
              Explore my work and lets create something extraordinary together.
            </p>
            <div class="flex gap-3 mt-6">
              <Button class="bg-blue-600 text-white px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  class="fill-white mr-2"
                >
                  <path d="M96-192v-92q0-26 12.5-47.5T143-366q54-32 115-49t126-17q23 0 46.5 3t49.5 9l-61 62q-15-2-22-2h-13q-53 0-105 14t-100 42q-4.95 2.94-7.98 8.24Q168-290.47 168-284v20h286l71 72H96Zm530 0L491-328l50-51 85 85 187-186 51 50-238 238ZM384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm70 216Zm-69.79-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21Zm-.21-72Z" />
                </svg>
                Hire Me
              </Button>
              <Link
                href="/resume/latest.pdf"
                class="text-blue-600 border border-solid border-blue-600 px-4"
                download="ashish-gurjar-resume.pdf"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  class="fill-blue-600 mr-2"
                >
                  <path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z" />
                </svg>
                RESUME
              </Link>
            </div>
          </div>
          <svg viewBox="0 0 510 467" width="479" height="467">
            <defs>
              <clipPath id="mask0">
                <path d="M12.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </clipPath>
            </defs>
            <image
              clip-path="url(#mask0)"
              xlink:href="/images/photo-p.jpg"
              width="490px"
              height="467px"
              x={0}
              y={0}
            />
          </svg>
          {
            /* <img
            src="/images/photo-p.jpg"
            loading="lazy"
            alt="Profile"
            class="w-full max-w-96 object-cover"
            style="clip-path: path('M4.538 72.102 C16.790 37.772 56.685 27.027 90.959 14.545 C121.365 3.453 154.028 -7.380 183.058 6.983 C212.879 21.731 231.144 53.082 235.666 85.996 C240.016 117.028 224.606 145.241 205.748 170.366 C184.409 197.949 160.916 228.614 126.126 230.316 C88.636 232.115 55.053 207.411 32.179 178.608 C8.649 147.904 -8.471 108.411 4.538 72.102Z');"
          /> */
          }
        </div>
      </section>
      <main class="max-w-5xl w-full mx-auto px-4 py-12 space-y-24">
        {/* Skills Section */}
        <section id="skills" class="text-center">
          <h2 class="text-3xl font-bold mb-12">Technical Skills</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              {
                name: "TypeScript",
                icon: "/skills/typescript.svg",
              },
              {
                name: "Deno",
                icon: "/skills/deno-dark.svg",
              },
              {
                name: "Node.js",
                icon: "/skills/nodejs.svg",
              },
              {
                name: "PostgreSQL",
                icon: "/skills/postgresql.svg",
              },
              {
                name: "MongoDB",
                icon: "/skills/mongodb.svg",
              },
              {
                name: "Redis",
                icon: "/skills/redis.svg",
              },
              {
                name: "Kafka",
                icon: "/skills/kafka.svg",
              },
              {
                name: "gRPC",
                icon: "/skills/grpc.png",
              },
              {
                name: "SocketIO",
                icon: "/skills/socketio.svg",
              },
              {
                name: "Angular",
                icon: "/skills/angular.png",
              },
              {
                name: "React",
                icon: "/skills/react.svg",
              },
              {
                name: "Next.js",
                icon: "/skills/nextjs.svg",
              },
              {
                name: "Docker",
                icon: "/skills/docker.svg",
              },
              {
                name: "Tailwind CSS",
                icon: "/skills/tailwindcss.svg",
              },
              {
                name: "GraphQL",
                icon: "/skills/graphql.svg",
              },
              {
                name: "Git",
                icon: "/skills/git.svg",
              },
            ].map((skill) => (
              <div key={skill.name} class="flex flex-col items-center group">
                <div class="w-16 h-16 p-3 bg-white dark:bg-white/10 rounded-2xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    class="w-full h-full object-contain"
                  />
                </div>
                <span class="mt-3 text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects">
          <div class="flex justify-between items-end mb-12">
            <div>
              <h2 class="text-3xl font-bold">Featured Projects</h2>
              <p class="text-gray-600 dark:text-gray-400 mt-2">
                Some of my most interesting work.
              </p>
            </div>
            <Link
              href="/portfolio"
              class="text-blue-600 font-medium hover:underline"
            >
              View All Projects →
            </Link>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Smart Inventory System",
                desc:
                  "A cloud-native microservices application for real-time inventory tracking and management.",
                tags: ["TypeScript", "Node.js", "Redis"],
                image:
                  "https://placehold.co/800x450/4a90e2/ffffff?text=Smart+Inventory",
              },
              {
                title: "DeFi Analytics Dashboard",
                desc:
                  "A high-performance dashboard for tracking decentralized finance protocols and assets.",
                tags: ["React", "GraphQL", "PostgreSQL"],
                image:
                  "https://placehold.co/800x450/ec4899/ffffff?text=DeFi+Analytics",
              },
            ].map((project) => (
              <div
                key={project.title}
                class="group bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-transparent hover:border-blue-600/30 transition-all shadow-sm hover:shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  class="w-full aspect-video object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div class="p-6">
                  <div class="flex gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        class="px-2 py-1 text-xs font-semibold bg-gray-100 dark:bg-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {project.desc}
                  </p>
                  <Link
                    href="/portfolio"
                    class="btn btn-sm btn-outline btn-primary rounded-full"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Summary Section */}
        <section
          id="experience"
          class="bg-blue-600 text-white rounded-[3rem] p-12 overflow-hidden relative"
        >
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl">
          </div>
          <div class="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6">
                Built with 7+ Years of Experience
              </h2>
              <p class="text-blue-100 text-lg leading-relaxed mb-8">
                I specialize in building scalable, high-performance systems with
                clean architecture. From startups to enterprises, I bring
                technical leadership and a passion for excellence to every
                project.
              </p>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <div class="text-4xl font-bold">50+</div>
                  <div class="text-blue-200">Projects Delivered</div>
                </div>
                <div>
                  <div class="text-4xl font-bold">5+</div>
                  <div class="text-blue-200">Companies Served</div>
                </div>
              </div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 class="text-xl font-bold mb-4 italic">
                "Technical Lead with a strong focus on high-performance
                microservices and clean architecture."
              </h3>
              <div class="flex items-center gap-4">
                <img
                  src="/images/photo-p.jpg"
                  alt="Ashish Gurjar"
                  class="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div class="font-bold">Ashish Gurjar</div>
                  <div class="text-blue-200 text-sm">
                    Senior Software Engineer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
});
