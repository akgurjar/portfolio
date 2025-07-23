import Button from "./Button.tsx";
import Dialog from "./Dialog.tsx";
import Input from "./Input.tsx";
import Link from "./Link.tsx";
import Tab from "./Tab.tsx";
import Tabs from "./Tabs.tsx";
import Textarea from "./Textarea.tsx";

export default function ConnectDialog() {
  return (
    <Dialog
      id="connect-dialog"
      class="w-11/12 max-w-lg py-4"
    >
      <div class="flex items-center justify-center gap-4">
        <Link
          href="https://github.com/akgurjar"
          target="_blank"
          class="p-0 w-8 h-8 flex items-center justify-center"
          title="Github"
        >
          <svg viewBox="0 0 30 30" class="fill-current h-8 w-8">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/akgurjar"
          class="p-0 w-8 h-8 flex items-center justify-center"
          title="Linkedin"
        >
          <svg viewBox="0 0 30 30" class="fill-current h-8 w-8">
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
          </svg>
        </Link>
        <Link
          href="https://x.com/its_akgurjar"
          class="p-0 w-8 h-8 flex items-center justify-center"
          title="X (Twitter)"
        >
          <svg viewBox="0 0 24 24" class="fill-current h-8 w-8">
            <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z" />
          </svg>
        </Link>
      </div>
      <Tabs class="m-6">
        <Tab label="Quick Contact">
          <div class="flex gap-2 my-4">
            <a
              href="mailto:hello@ashishgurjar.dev"
              class="flex-1 block border border-gray-700 rounded hover:border-blue-500/50"
            >
              <div class="flex items-center border-b border-gray-700 p-4 bg-linear-to-r from-blue-500/10 to-transparent">
                <svg
                  viewBox="0 0 24 24"
                  class="fill-blue-500 h-8 w-8 mx-auto"
                >
                  <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4zM20 18H4V8L12 13L20 8V18zM12 11L4 6H20L12 11z" />
                </svg>
                <span class="block flex-1 ml-4">Send Mail</span>
              </div>
              <div class="p-4">
                <h3 class="font-medium">hello@ashishgurjar.dev</h3>
                <p class="mt-2 opacity-60">Send me a email directly</p>
              </div>
            </a>
            <a
              href="/calender"
              class="flex-1 block border border-gray-700 rounded hover:border-pink-500/50"
            >
              <div class="flex items-center border-b border-gray-700 p-4 bg-linear-to-r from-pink-500/10 to-transparent">
                <svg
                  viewBox="0 -960 960 960"
                  class="fill-pink-500 h-8 w-8 mx-auto"
                >
                  <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                </svg>
                <span class="block flex-1 ml-4">Book a Call</span>
              </div>
              <div class="p-4">
                <h3 class="font-medium">Schedule a time slot</h3>
                <p class="mt-2 opacity-60">Book a call on my calender</p>
              </div>
            </a>
          </div>
        </Tab>
        <Tab label="Fill Form">
          <form class="mt-6" method="dialog">
            <div class="flex gap-2 my-4 w-full">
              <Input
                label="Full Name"
                placeholder="Ashish Gurjar"
                type="text"
                class="block w-full"
              />
              <Input
                label="Email ID"
                placeholder="your.email@domain.com"
                type="email"
                class="block w-full"
              />
            </div>
            <Textarea
              label="Message"
              placeholder="Type your message here..."
              rows={4}
            />
            <div class="flex justify-center items-center mt-4">
              <Button class="bg-blue-600 px-6">Send Message</Button>
            </div>
          </form>
        </Tab>
      </Tabs>
    </Dialog>
  );
}
