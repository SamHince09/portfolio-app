import { NavLink } from "react-router-dom";

function Navigation() {
    return(
        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>

            <NavLink to="/about">
                About
            </NavLink>

            <NavLink to="/projects">
                Projects
            </NavLink>

            <NavLink to="/contact">
                Contact
            </NavLink>
        </nav>
    )
}

export default Navigation;