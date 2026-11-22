interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return [{ id: "first-post" }, { id: "second-post" }];
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = { title: "Post #A", content: "Testing 1 2 3" };
  const { id } = await params;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
