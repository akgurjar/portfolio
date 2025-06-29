import { define } from "../utils.ts";
import Header from "../components/Header.tsx";

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
          <div></div>
        </div>
      </section>
      <p>About Me</p>
    </>
  );
});
