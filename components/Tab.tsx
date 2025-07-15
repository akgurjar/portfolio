import { type JSX } from "preact";

interface TabProps extends JSX.HTMLAttributes<HTMLDivElement> {
  readonly label: string;
}

export default function Tab(props: TabProps) {
  return (
    <div {...props}>
      {props.children}
    </div>
  );
}
