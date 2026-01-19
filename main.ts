import { App, csrf, staticFiles, trailingSlashes } from "fresh";
import { type State } from "./utils.ts";

export const app = new App<State>();

app.use(staticFiles());

app.use(
  csrf({ origin: ["https://ashishgurjar.dev", "https://akgurjar.deno.dev"] }),
);

app.use(trailingSlashes("never"));
app.use(async (ctx) => {
  const resp = await ctx.next();
  resp.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' https://raw.githubusercontent.com https://placehold.co https://www.quantitativebrokers.com data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
  );
  return resp;
});

app.fsRoutes();
