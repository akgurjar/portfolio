import type { PageProps } from "fresh";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en" class="h-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Developer Portfolio - Ashish Gurjar</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-gray-950 text-gray-100 font-sans leading-relaxed">
        <Component />
      </body>
    </html>
  );
}
