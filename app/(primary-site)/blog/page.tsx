import { Post } from "@/components/post";

export function generateStaticParams() {
  return [{ slug: "first-post" }, { slug: "second-post" }];
}
export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const posts = [{ title: "Post 1" }, { title: "Post 2" }];

  const { slug } = await params;
  return (
    <div>
      Blog posts coming soon.{" "}
      {/* <ul>
      {posts.map((post, index) => (
        <Post
          key={`${post.title}-${index + 1}`}
          postNumber={index + 1}
          title={post.title}
        />
      ))}
    </ul> */}
    </div>
  );
}
