import { twMerge } from "tailwind-merge";
import Logo from "./Logo.tsx";

export default function Footer(props: { readonly class?: string }) {
  return (
    <footer
      class={twMerge(
        "w-full bg-slate-800 text-slate-50 p-4 flex flex-col items-center",
        props.class,
      )}
    >
      <div class="max-w-5xl w-full flex items-start justify-between gap-8">
        <div class="max-w-xs flex-1">
          <Logo class="h-10 fill-current" />
          <p class="my-4">
            I'm Ashish Gurjar - a full-stack developer & Tech Enthusiast. Thanks
            for checking out my website!
          </p>
          <p>
            © {new Date().getFullYear()} Ashish Gurjar. All rights reserved.
          </p>
        </div>
        <div class="flex flex-col mt-4 gap-2 justify-center items-end">
          <a href="/">Home</a>
          <a href="/about-me">About Me</a>
          <a href="/services">Services</a>
          <a href="/blogs">Blogs</a>
        </div>
      </div>
      <p class="max-w-5xl w-full text-center mt-4 border-t border-slate-700 pt-4">
        Made with ❤️ using Deno Fresh and Tailwind CSS.
      </p>
    </footer>
  );
}
