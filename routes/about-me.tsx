import { define } from "../utils.ts";
import Header from "../components/Header.tsx";
import { page } from "fresh";
import Footer from "../components/Footer.tsx";
import Link from "../components/Link.tsx";

export const metadata = {
  title: "About - Ashish Gurjar",
  description:
    "Learn more about Ashish Gurjar, a software developer specializing in building smart applications with clean architecture.",
  keywords:
    "Ashish Gurjar, software developer, clean architecture, smart applications, JavaScript, TypeScript, MongoDB, PostgreSQL, Redis, GRPC, GraphQL",
  image: "/banner.webp",
};
export const handler = define.handlers({
  GET(ctx) {
    ctx.state.metadata = metadata;
    return page();
  },
});

export default define.page(function AboutMe() {
  const yearsOfExperience = Math.round(new Date().getFullYear() - 2018);
  return (
    <>
      <section class="flex flex-col items-center w-full text-white">
        <Header class="max-w-5xl w-full text-white fixed z-50" />
        <div class="relative">
          <img
            src="/images/banner-p.jpg"
            class="min-h-96 min-w-full object-cover"
            alt="Banner"
          />
          <div class="z-40 absolute left-0 top-0 right-0 bottom-0 backdrop-blur-sm backdrop-brightness-50 flex flex-col items-center justify-center">
            <div class="max-w-4xl w-full text-center pt-16 flex flex-col items-center">
              <h1 class="text-5xl font-bold w-fit text-transparent bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text">
                Ashish Gurjar
              </h1>
              <h3 class="text-2xl my-4">
                Building Smart Applications with Clean Architecture.
              </h3>
              <p>
                Technical Lead with {yearsOfExperience + " "}
                years of experience building and maintaining scalable,
                high-performance systems. Expertise in Typescript, JavaScript
                Frameworks and microservices architecture.
              </p>
              <div class="mt-6 flex gap-4">
                <Link
                  href="https://github.com/akgurjar"
                  target="_blank"
                  class="p-0 w-12 h-12 flex items-center justify-center"
                  title="Github"
                >
                  <svg viewBox="0 0 30 30" class="fill-current h-10 w-10">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/akgurjar"
                  class="p-0 w-12 h-12 flex items-center justify-center"
                  title="Linkedin"
                >
                  <svg viewBox="0 0 30 30" class="fill-current h-10 w-10">
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                  </svg>
                </Link>
                <Link
                  href="https://x.com/its_akgurjar"
                  class="p-0 w-12 h-12 flex items-center justify-center"
                  title="X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" class="fill-current h-10 w-10">
                    <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z" />
                  </svg>
                </Link>
                <Link
                  href="/"
                  class="p-0 w-12 h-12 flex items-center justify-center"
                  title="Facebook"
                >
                  <svg viewBox="0 0 24 24" class="fill-current h-10 w-10">
                    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                  </svg>
                </Link>
                <Link
                  href="/"
                  class="p-0 w-12 h-12 flex items-center justify-center"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" class="fill-current h-10 w-10">
                    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                  </svg>
                </Link>
                <Link
                  href="/"
                  class="p-0 w-12 h-12 flex items-center justify-center"
                  title="Youtube"
                >
                  <svg viewBox="0 0 24 24" class="fill-current h-10 w-10">
                    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
        About Me <br />
        <br />
        <br />
        <br />
        <br />
      </p>
      <Footer />
    </>
  );
});
