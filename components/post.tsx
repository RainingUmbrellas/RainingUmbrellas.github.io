interface PostProps {
  postNumber: number;
  title: string;
}

export const Post = ({ postNumber, title }: PostProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>Blog Post #{postNumber} </div>
    </div>
  );
};
