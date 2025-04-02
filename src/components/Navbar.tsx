import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{ display: 'flex', gap: '10px', padding: '10px', backgroundColor: '#f0f0f0' }}>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/favorites-things">My Favorite Things</Link>
        </div>
    );
}
export default Navbar;