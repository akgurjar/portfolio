import { JSX } from "preact";
import { twMerge } from "tailwind-merge";

export default function Link(props: JSX.AnchorHTMLAttributes) {
  return (
    <a
      {...props}
      class={twMerge(
        "flex items-center relative text-sm h-10 px-3 rounded-full font-medium overflow-hidden",
        props.class as string,
      )}
      target={props.target ?? "_blank"}
      rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <div class="absolute left-0 top-0 h-full w-full bg-current opacity-0 hover:opacity-10">
      </div>
      {props.children}
    </a>
  );
}
