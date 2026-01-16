export interface BlogProps {
  readonly slug: string;
  readonly banner: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
  //   readonly tags: string[];
  //   readonly content: JSX.Element;
}

export default function Blog(props: BlogProps) {
  const url = "/blogs/" + props.slug;
  return (
    <section class="max-w-md bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <img
        class="w-full h-52 object-cover rounded-t-xl"
        src={props.banner}
        alt="Tech Insights"
      />
      <div class="p-6">
        <time class="text-sm text-gray-500">{props.date}</time>
        <h3 class="font-bold text-xl text-gray-900 mt-2 mb-3">
          <a href={url} class="hover:text-blue-600 transition duration-200">
            {props.title}
          </a>
        </h3>
        <p class="text-gray-700 text-base leading-relaxed line-clamp-3">
          {props.description}
        </p>
        <a
          href={url}
          class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
        >
          Read More &rarr;
        </a>
      </div>
    </section>
  );
}
