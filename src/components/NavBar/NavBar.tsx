import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/cat-1">cat-1</NavLink>
        </li>
        <li>
          <NavLink to="/cat-2">cat-2</NavLink>
        </li>
        <li>
          <NavLink to="/cat-3">cat-3</NavLink>
        </li>
        <li>
          <NavLink to="/cat-4">cat-4</NavLink>
        </li>
        <li>
          <NavLink to="/cat-5">cat-5</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
