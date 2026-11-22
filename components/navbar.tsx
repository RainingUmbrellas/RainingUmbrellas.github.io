import Link from "next/link";
export const NavBar = () => {
  return (
    <nav
      className="rounded-t-md"
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        color: "pink",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/projects">Projects</Link>
      <Link href="about">About</Link>
    </nav>
  );
};
