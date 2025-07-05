import { type JSX } from "preact";

interface TabProps extends JSX.HTMLAttributes<HTMLDivElement> {
  readonly label: string;
}

export default function Tab(props: TabProps) {
  console.log(props.label);
  return (
    <div {...props}>
      {props.children}
    </div>
  );
}
