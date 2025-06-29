import type { JSX } from "preact";
import { twMerge } from "tailwind-merge";

export default function Button(props: JSX.ButtonHTMLAttributes) {
  return (
    <button
      {...props}
      class={twMerge(
        "flex items-center text-sm h-10 px-3 rounded-full font-medium box-border",
        props.class as string,
      )}
    />
  );
}
