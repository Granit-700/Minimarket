import { NavLink } from "react-router-dom";
import { categories } from "../../../db";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        {categories.map(({ id }) => (
          <li>
            <NavLink key={id} to={`/${id}`}>
              {id}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
