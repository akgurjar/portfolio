import { JSX } from "preact";

interface TextareaProps extends JSX.TextareaHTMLAttributes {
  readonly label?: string;
}

export default function Textarea(props: TextareaProps) {
  return (
    <fieldset class={props.class}>
      <legend>{props.label ?? props.placeholder ?? "Field Name"}</legend>
      <textarea
        {...props}
        class="text-sm w-full p-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      >
      </textarea>
    </fieldset>
  );
}
