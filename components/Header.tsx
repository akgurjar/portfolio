import { twMerge } from "tailwind-merge";
import Link from "./Link.tsx";
import Logo from "./Logo.tsx";
import DialogTarget from "../islands/DialogTarget.tsx";
import ConnectDialog from "./ConnectDialog.tsx";

export default function Header(props: { readonly class?: string }) {
  return (
    <header
      class={twMerge(
        "h-16 px-3 flex items-center justify-between text-blue-600",
        props.class,
      )}
    >
      <a href="/" class="hover:scale-125 transition-transform">
        <Logo class="h-7 fill-current" />
      </a>
      <nav class="flex items-center gap-1">
        <Link href="/about-me" target="_self">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            class="fill-current mr-2"
          >
            <path d="M444-288h72v-240h-72v240Zm35.79-312q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm.49 504Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
          </svg>
          About Me
        </Link>
        <Link href="/services" target="_self">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            class="fill-current mr-2"
          >
            <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
          </svg>
          Services
        </Link>
        <Link href="/portfolio" target="_self">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            class="fill-current mr-2"
          >
            <path d="M96-144v-92q0-26 12.5-47.5T143-318q54-32 114.5-49T384-384q66 0 126.5 17T625-318q22 13 34.5 34.5T672-236v92H96Zm72-72h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-312q-54 0-106 14t-99 42q-4.95 2.83-7.98 7.91-3.02 5.09-3.02 12V-216Zm216-216q-60 0-102-42t-42-102h-12q-5.4 0-8.7-3.3-3.3-3.3-3.3-8.7 0-5.4 3.3-8.7 3.3-3.3 8.7-3.3h12q0-40 19.8-72.52Q279.6-705.03 312-724v64q0 5.4 3.3 8.7 3.3 3.3 8.7 3.3 5.4 0 8.7-3.3 3.3-3.3 3.3-8.7v-74.84q11-4.16 22.9-6.66 11.91-2.5 25-2.5 13.1 0 25.1 2.5 12 2.5 23 6.66V-660q0 5.4 3.3 8.7 3.3 3.3 8.7 3.3 5.4 0 8.7-3.3 3.3-3.3 3.3-8.7v-64q32.4 18.87 52.2 51.22Q528-640.43 528-600h12q5.4 0 8.7 3.3 3.3 3.3 3.3 8.7 0 5.4-3.3 8.7-3.3 3.3-8.7 3.3h-12q0 60-42 102t-102 42Zm.21-72Q414-504 435-525.15T456-576H312q0 30 21.21 51t51 21Zm261.94 120-5.07-25.31Q636-411 631.5-414q-4.5-3-8.5-6l-24 9-17-30 19-15.65q0-2.35-.5-5.35-.5-3-.5-6t.5-6q.5-3 .5-5.35L582-495l17-30 24 9q4-3 8.67-6 4.66-3 9.33-5l5.09-25H680l4 25q5 2 10 5t9 6l24-9 17 30-19 15.65q0 2.35.5 5.35.5 3 .5 6t-.5 6q-.5 3-.5 5.35L744-441l-17 30-24-9q-4 3-8.85 5.86-4.86 2.85-10.15 5.14l-4 25h-33.85ZM663-443q11 0 18-7t7-18q0-11-7-18t-18-7q-11 0-18.5 7t-7.5 18q0 11 7.5 18t18.5 7Zm81-133-7-37q-8-2-14-6t-12-9l-35 12-24-42 28-24q-1-4-1.5-7t-.5-7q0-4 .5-7.5t1.5-7.5l-28-24 24-42 35 12q6-5 12-9t14-6l6.88-36H792l8 36q8 2 14 6t12 9l34-12 24 42-27 24q1 4 1 7.5v7.5q0 4-.5 7.5T856-681l28 24-24 42-35-12q-6 5-12 9t-14 6l-6.87 36H744Zm23.96-77q18.04 0 30.54-12.46t12.5-30.5q0-18.04-12.46-30.54t-30.5-12.5q-18.04 0-30.54 12.46t-12.5 30.5q0 18.04 12.46 30.54t30.5 12.5ZM384-216Z" />
          </svg>Portfolio
        </Link>
        <Link href="/blogs" target="_self">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            class="fill-current mr-2"
          >
            <path d="M288-288h288v-72H288v72Zm0-156h384v-72H288v72Zm0-156h384v-72H288v72Zm-72 456q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z" />
          </svg>
          Blogs
        </Link>
      </nav>
      <DialogTarget
        dialogTarget="connect-dialog"
        class="px-4 text-current border border-solid border-current"
      >
        Let's Talk
      </DialogTarget>
      <ConnectDialog />
    </header>
  );
}
