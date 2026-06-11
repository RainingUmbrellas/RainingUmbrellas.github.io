import Navbar from "./components/Navbar";
import { BlogPage } from "./routes/BlogPage";
import './Layout.css';

export const Layout = () => {
    return (
        <div className="layout">
            <header className="header">
                 Banner
            </header>
            <Navbar />
            <main className="main">
                <div className="content">
                    <BlogPage />
                </div>
                <aside className="sidebar">
                    {/* Sidebar content */}
                    Hi everyone! My name is RainingUmbrellas. I am a software engineer with a passion for creating beautiful and functional web applications. I love to learn new technologies and share my knowledge with others.
                </aside>
            </main>
            <footer className="footer">
                {/* Footer content */}
                2025 © RainingUmbrellas. All rights reserved.
            </footer>
        </div>
    )
};