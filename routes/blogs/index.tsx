import { page, PageProps } from "fresh";
import Header from "../../components/Header.tsx";
import { define } from "../../utils.ts";
import Footer from "../../components/Footer.tsx";
import Blog, { BlogProps } from "../../components/Blog.tsx";

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
    const featured: BlogProps[] = [
      {
        slug: "the-rise-of-serverless-architectures",
        banner:
          "https://placehold.co/600x400/4a90e2/ffffff?text=Serverless+Architectures",
        title: "The Rise of Serverless Architectures",
        description:
          "Exploring how serverless computing is changing the way we build and deploy applications, focusing on efficiency and scalability.",
        date: "July 1, 2025",
      },
      {
        slug: "the-rise-of-serverless-architectures",
        banner: "https://placehold.co/600x400/4a90e2/ffffff?text=Tech+Insights",
        title: "The Rise of Serverless Architectures",
        description:
          "Exploring how serverless computing is changing the way we build and deploy applications, focusing on efficiency and scalability.",
        date: "July 1, 2025",
      },
    ];
    return page({ featured });
  },
});

export default define.page(
  function Blogs(props: PageProps<{ featured: BlogProps[] }>) {
    console.log(props.data);
    return (
      <>
        <section class="flex flex-col items-center bg-linear-to-r from-blue-600 to-pink-600 text-white ">
          <Header class="max-w-5xl w-full text-inherit" />
          <div class="max-w-2xl w-full flex-1 mt-10 py-4 flex flex-col items-center gap-4">
            <span class="font-medium">THE BLOG</span>
            <h1 class="text-2xl font-medium text-center">
              Sharing thoughts, experiences, and insights on technology, life,
              and everything in between.
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
        <main class="block max-w-5xl w-full p-4 m-auto">
          <div class="flex flex-wrap gap-8 w-full my-8">
            {props.data.featured.map((blog) => (
              <Blog
                key={blog.slug}
                {...blog}
              />
            ))}
          </div>
          <section class="block w-full my-4 bg-white p-8 text-center rounded-4xl">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Latest Posts
              </span>
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about web development,
              AI, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                autocomplete="off"
                placeholder="Enter your email"
                className="px-2 h-10 border-2 border-gray-300 focus:border-blue-800 rounded-md"
              />
              <button
                type="button"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Subscribe
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  },
);
