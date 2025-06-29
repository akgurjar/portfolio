import { define } from "../utils.ts";
import Header from "../components/Header.tsx";
import { page } from "fresh";

export const metadata = {
  title: "About - Ashish Gurjar",
  description:
    "Learn more about Ashish Gurjar, a software developer specializing in building smart applications with clean architecture.",
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

export default define.page(function AboutMe() {
  return (
    <>
      <section class="flex flex-col items-center w-full bg-blue-500 text-white">
        <Header class="max-w-5xl w-full bg-blue-500 text-white" />
        <div class="relative">
          <img
            src="/banner.webp"
            class="w-full object-cover"
            alt="Banner"
          />
          <div class="absolute left-0 top-0 right-0 bottom-0 backdrop-blur-sm backdrop-brightness-50 flex flex-col items-center justify-center">
            <div class="max-w-5xl w-full text-center">
              <span>MORE ABOUT ME</span>
              <h1 class="text-5xl font-bold">Ashish Gurjar</h1>
              <h3 class="text-2xl my-4">
                Building Smart Applications with Clean Architecture.
              </h3>
              <p>
                JavaScript · TypeScript · MongoDB · PostgreSQL · Redis · GRPC ·
                GraphQL
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <p>About Me</p>
    </>
  );
});
