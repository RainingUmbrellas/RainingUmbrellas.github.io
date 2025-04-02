export const BlogPost = () => {
    return (
        <div>
            <h1>Blog Post</h1>
            <p>This is a blog post.</p>
        </div>
    )
}
// Compare this snippet from src/routes/BlogPost.tsx:
// import { useParams } from 'react-router-dom';
//
// export const BlogPost = () => {
//     const { id } = useParams();
//     return (
//         <div>        