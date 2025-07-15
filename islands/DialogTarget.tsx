import { type JSX } from "preact";
import Button from "../components/Button.tsx";

interface ButtonProps extends JSX.ButtonHTMLAttributes {
  readonly dialogTarget: string;
}

export default function DialogTarget<T>(
  { dialogTarget, ...props }: ButtonProps,
) {
  const onClick = () => {
    const dialog = document.getElementById(dialogTarget) as HTMLDialogElement;
    dialog.showModal();
  };
  return <Button {...props} onClick={onClick} />;
}
