import blog from "https://pax.deno.dev/windchime-yk/deno_blog@fe28eea48aa9cecf49f94e9b6a2e1837fd2415b4/blog.tsx";

blog({
  title: "WhyK Reading",
  author: "WhyK",
  description: "技術書について書き残したいことを書きます",
  avatar: "./windchime2.jpg",
  avatarClass: "full",
  favicon: "./windchime2.jpg",
  ogImage: "./windchime2.jpg",
  twitterCard: "summary",
  links: [
    { title: "Twitter", url: "https://twitter.com/windchime_yk", target: "_blank" },
    { title: "GitHub", url: "https://github.com/windchime-yk", target: "_blank" },
  ],
});
