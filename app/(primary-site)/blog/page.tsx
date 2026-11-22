import { Post } from "@/components/post";
export default function Blog() {
  const posts = [{ title: "Post 1" }, { title: "Post 2" }];
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
