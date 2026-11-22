interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "first-post" }, { slug: "second-post" }];
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  //const {id} = await params;
  const post = { title: "Post #A", content: "Testing 1 2 3" };
  const { slug } = await params;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
