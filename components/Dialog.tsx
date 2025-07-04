import { JSX } from "preact";
import { twMerge } from "tailwind-merge";

export default function Dialog(
  props: JSX.DialogHTMLAttributes,
) {
  return (
    <dialog
      closedby="any"
      {...props}
      class={twMerge(
        "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 rounded-lg backdrop:bg-gray-950 backdrop:opacity-70",
        props.class as string,
      )}
    >
      {props.children}
    </dialog>
  );
}
