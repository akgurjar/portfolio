import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import InputEffect from "../islands/InputEffect.tsx";
import { define } from "../utils.ts";

const TITLES = [
  "Ashish Gurjar",
  "A Developer",
  "A Technical Lead",
  "A JavaScript Enthusiast",
];

export default define.page(function Home() {
  return (
    <>
      <section class="flex flex-col items-center bg-blue-100 min-h-screen">
        <Header class="max-w-5xl w-full" />
        <div class="max-w-5xl w-full flex-1 flex items-center">
          <div class="flex-1">
            <h3 class="text-4xl">Hello there, I'm</h3>
            <h1 class="text-5xl my-4 font-medium min-h-12">
              <InputEffect texts={TITLES} />
            </h1>
            <p>
              Welcome to my portfolio of captivating digital experiences.
              Explore my work and lets create something extraordinary together.
            </p>
            <div class="flex gap-3 mt-6">
              <Button class="bg-blue-600 text-white px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  class="fill-white mr-2"
                >
                  <path d="M96-192v-92q0-26 12.5-47.5T143-366q54-32 115-49t126-17q23 0 46.5 3t49.5 9l-61 62q-15-2-22-2h-13q-53 0-105 14t-100 42q-4.95 2.94-7.98 8.24Q168-290.47 168-284v20h286l71 72H96Zm530 0L491-328l50-51 85 85 187-186 51 50-238 238ZM384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm70 216Zm-69.79-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21Zm-.21-72Z" />
                </svg>
                Hire Me
              </Button>
              <Button class="text-blue-600 border border-solid border-blue-600 px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  class="fill-blue-600 mr-2"
                >
                  <path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z" />
                </svg>
                RESUME
              </Button>
            </div>
          </div>
          <svg viewBox="0 0 479 467" width="0" height="0">
            <defs>
              <clipPath id="mask0">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </clipPath>
            </defs>
          </svg>
          <div></div>
          <img
            src="/images/photo-p.jpg"
            loading="lazy"
            alt="Profile"
            class="object-cover scale-75"
            style="height: 479px; width: 479px; clip-path: url(#mask0);"
          />
        </div>
      </section>
      <main>
        <section class="p-10 bg-white">
        </section>
      </main>
      <Footer />
    </>
  );
});
