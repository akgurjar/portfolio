import { twMerge } from "tailwind-merge";
import Logo from "./Logo.tsx";

export default function Footer(props: { readonly class?: string }) {
  return (
    <footer
      class={twMerge(
        "flex items-center justify-center bg-slate-800 text-slate-50 p-4",
        props.class,
      )}
    >
      <div class="max-w-xs">
        <Logo class="h-10 fill-current" />
        <p class="my-4">
          I'm Ashish Gurjar - a full-stack developer & Tech Enthusiast. Thanks
          for checking out my website!
        </p>
        <p>© {new Date().getFullYear()} Ashish Gurjar. All rights reserved.</p>
      </div>
      <div class="flex-1"></div>
    </footer>
  );
}
