interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}
export default function BlogPostPage({ params }: BlogPostPageProps) {
  //const {id} = await params;
  const post = { title: "Post #A", content: "Testing 1 2 3" };
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
