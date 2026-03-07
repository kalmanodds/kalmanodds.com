import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { slugifyPost } from "@utils/slugify";
import { SITE } from "@config";
import { sortPostsByDate } from "@utils/sortByDate";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = sortPostsByDate(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data }) => ({
      link: `posts/${slugifyPost(data)}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.publishedAt),
    })),
  });
}
