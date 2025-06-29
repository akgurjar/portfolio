import type { PageProps } from "fresh";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ashish Gurjar - Full Stack Developer</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-gray-100 text-gray-900 font-sans">
        <Component />
      </body>
    </html>
  );
}
