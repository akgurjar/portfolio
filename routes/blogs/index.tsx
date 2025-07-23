import { page } from "fresh";
import Header from "../../components/Header.tsx";
import Link from "../../components/Link.tsx";
import { define } from "../../utils.ts";
import Footer from "../../components/Footer.tsx";

export const metadata = {
  title: "Blogs by Ashish Gurjar",
  description:
    "Explore insightful blogs by Ashish Gurjar, a software developer specializing in building smart applications with clean architecture.",
  keywords:
    "Ashish Gurjar, software developer, clean architecture, smart applications, JavaScript, TypeScript, MongoDB, PostgreSQL, Redis, GRPC, GraphQL",
  image: "/banner.webp",
};
export const handler = define.handlers({
  GET(ctx) {
    ctx.state.metadata = metadata;
    return page();
  },
});

export default define.page(function Blogs() {
  return (
    <>
      <section class="flex flex-col items-center bg-linear-to-r from-blue-600 to-pink-600 text-white ">
        <Header class="max-w-5xl w-full text-inherit" />
        <div class="max-w-2xl w-full flex-1 mt-10 py-4 flex flex-col items-center gap-4">
          <span class="font-medium">THE BLOG</span>
          <h1 class="text-2xl font-medium text-center">
            Sharing thoughts, experiences, and insights on technology, life, and
            everything in between.
          </h1>
          <div class="my-8 h-10 w-full max-w-80 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md overflow-hidden has-[input:focus]:border-white/70 outline outline-1 outline-transparent has-[input:focus]:outline-white/70 transition-all duration-300 ease-in-out">
            <input
              type="search"
              class="h-full w-full box-border appearance-none border-none outline-none bg-transparent px-2 m-0 placeholder-white/50"
              placeholder="Search blogs..."
            />
          </div>
        </div>
      </section>
      <main class="flex flex-wrap p-8 gap-8">
        <div class="max-w-md bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <img
            class="w-full h-52 object-cover rounded-t-xl"
            src="https://placehold.co/600x400/4a90e2/ffffff?text=Tech+Insights"
            alt="Tech Insights"
          />
          <div class="p-6">
            <span class="text-sm text-gray-500">July 1, 2025</span>
            <h3 class="font-bold text-xl text-gray-900 mt-2 mb-3">
              <a href="#" class="hover:text-blue-600 transition duration-200">
                The Rise of Serverless Architectures
              </a>
            </h3>
            <p class="text-gray-700 text-base leading-relaxed line-clamp-3">
              Exploring how serverless computing is changing the way we build
              and deploy applications, focusing on efficiency and scalability.
            </p>
            <a
              href="#"
              class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read More &rarr;
            </a>
          </div>
        </div>
        <div class="max-w-md bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <img
            class="w-full h-52 object-cover rounded-t-xl"
            src="https://placehold.co/600x400/4a90e2/ffffff?text=Tech+Insights"
            alt="Tech Insights"
          />
          <div class="p-6">
            <span class="text-sm text-gray-500">July 1, 2025</span>
            <h3 class="font-bold text-xl text-gray-900 mt-2 mb-3">
              <a href="#" class="hover:text-blue-600 transition duration-200">
                The Rise of Serverless Architectures
              </a>
            </h3>
            <p class="text-gray-700 text-base leading-relaxed line-clamp-3">
              Exploring how serverless computing is changing the way we build
              and deploy applications, focusing on efficiency and scalability.
            </p>
            <a
              href="#"
              class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read More &rarr;
            </a>
          </div>
        </div>
        <div class="max-w-md bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <img
            class="w-full h-52 object-cover rounded-t-xl"
            src="https://placehold.co/600x400/4a90e2/ffffff?text=Tech+Insights"
            alt="Tech Insights"
          />
          <div class="p-6">
            <span class="text-sm text-gray-500">July 1, 2025</span>
            <h3 class="font-bold text-xl text-gray-900 mt-2 mb-3">
              <a href="#" class="hover:text-blue-600 transition duration-200">
                The Rise of Serverless Architectures
              </a>
            </h3>
            <p class="text-gray-700 text-base leading-relaxed line-clamp-3">
              Exploring how serverless computing is changing the way we build
              and deploy applications, focusing on efficiency and scalability.
            </p>
            <a
              href="#"
              class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read More &rarr;
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
});
