import { type JSX, toChildArray, VNode } from "preact";

interface TabsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  readonly selectedTab?: number;
}

export default function Tabs(props: TabsProps) {
  const tabs = toChildArray(props.children) as VNode<{ label: string }>[];
  const styles = tabs.map((_, index) =>
    `.tabs__header:has(input:nth-child(${
      index + 1
    }):not(:checked)) ~ .tabs__content>div:nth-child(${
      index + 1
    }) {display: none;}.tabs__form:has(input:nth-child(${
      index + 1
    }):not(:checked)) ~ label:nth-child(${
      index + 2
    }) { background-color: transparent; }`
  );
  return (
    <div {...props}>
      <style>{styles.join("")}</style>
      <div class="tabs__header p-[2px] flex h-10 w-full bg-opacity-50 bg-gray-900 rounded-full">
        <form hidden class="tabs__form">
          {tabs.map((_, index) => {
            return (
              <input
                type="radio"
                name="tab"
                id={`tab${index + 1}`}
                hidden
                checked={(props.selectedTab ?? 0) === index}
              />
            );
          })}
        </form>
        {tabs.map((tab, index) => {
          return (
            <label
              for={`tab${index + 1}`}
              class="bg-white dark:bg-gray-800 rounded-full flex-1 h-full px-4 flex items-center justify-center cursor-pointer text-gray-900 dark:text-gray-50 font-medium"
            >
              {tab.props.label}
            </label>
          );
        })}
      </div>
      <div class="tabs__content">{props.children}</div>
    </div>
  );
}
