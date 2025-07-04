import { JSX } from "preact";

interface InputProps extends JSX.InputHTMLAttributes {
  readonly label?: string;
}

export default function Input(props: InputProps) {
  return (
    <fieldset class={props.class}>
      <legend>{props.label ?? props.placeholder ?? "Field Name"}</legend>
      <input
        type="text"
        {...props}
        class="text-sm w-full p-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      />
    </fieldset>
  );
}
