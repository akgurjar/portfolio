import { App, csp, csrf, staticFiles, trailingSlashes } from "fresh";
import { type State } from "./utils.ts";

export const app = new App<State>();

app.use(staticFiles());

app.use(
  csrf({ origin: ["https://ashishgurjar.dev", "https://akgurjar.deno.dev"] }),
);

app.use(trailingSlashes("never"));
app.use(csp());

app.fsRoutes();
