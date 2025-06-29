import { createDefine } from "fresh";

export interface State {
  metadata?: {
    title: string;
    description: string;
    keywords: string;
    image: string;
  };
}

export const define = createDefine<State>();
