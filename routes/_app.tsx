import type { PageProps } from "fresh";
import type { State } from "../utils.ts";

export default function App({ Component, state }: PageProps<unknown, State>) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          {state?.metadata?.title ?? "Ashish Gurjar - Full Stack Developer"}
        </title>
        <meta
          name="description"
          content={state?.metadata?.description ??
            "Ashish Gurjar is a software developer specializing in building smart applications with clean architecture."}
        />
        <meta
          name="keywords"
          content={state?.metadata?.keywords ??
            "Ashish Gurjar, software developer, clean architecture, smart applications, JavaScript, TypeScript, MongoDB, PostgreSQL, Redis, GRPC, GraphQL"}
        />
        <meta
          name="image"
          content={state?.metadata?.image ?? "/banner.webp"}
        />
        <meta name="author" content="Ashish Gurjar" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body class="bg-black/5 text-black dark:bg-black dark:text-white font-sans">
        <Component />
      </body>
    </html>
  );
}
