import { useSignal } from "@preact/signals";
import { useCallback, useEffect } from "preact/hooks";

interface EffectProps {
  readonly texts: string[];
}

export default function InputEffect({ texts }: EffectProps) {
  const data = useSignal<string>("");
  const animate = useCallback((textIndex: number) => {
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    const text = texts[textIndex];
    if (!text) {
      return;
    }
    let counter = 0;
    data.value = "";
    const id = setInterval(() => {
      if (counter >= text?.length) {
        clearInterval(id);
        setTimeout(animate, 1000, textIndex + 1);
      }
      data.value += text.charAt(counter);
      counter++;
    }, 100);
  }, []);
  useEffect(() => animate(0), []);
  return <>{data.value}</>;
}
