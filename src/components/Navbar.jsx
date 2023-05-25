import { Link } from "react-router-dom";
    
const Navbar = () => {
    const links = [
        {id:1, name: "Home", path: "/" },
        {id:2, name: "About", path: "/about" },
        {id:3, name: "Products ", path: "/products" },
    ]; 
    
    return (
        <nab>
            <ul>
                {links.map((link) => (
                    <li key= {link.id}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nab>
    );
};

export default Navbar;