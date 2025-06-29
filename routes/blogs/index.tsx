import Header from "../../components/Header.tsx";
import Link from "../../components/Link.tsx";
import { define } from "../../utils.ts";

export default define.page(function Blogs() {
  return (
    <>
      <section class="flex flex-col items-center bg-blue-500 text-white ">
        <Header class="max-w-5xl w-full text-inherit" />
        <div class="max-w-5xl w-full flex-1 mt-10 py-4">
          <h1 class="text-6xl font-medium text-center">
            PASS IT ON
          </h1>
          <p class="text-center">
            Knowledge increases by sharing but not by saving.
          </p>
          <div class="flex">
            <Link href="?technology=html">HTML 5</Link>
            <Link href="?technology=html">CSS 3</Link>
            <Link href="?technology=html">HTML</Link>
            <Link href="?technology=html">HTML</Link>
          </div>
        </div>
      </section>
      <p>Blogs</p>
    </>
  );
});
