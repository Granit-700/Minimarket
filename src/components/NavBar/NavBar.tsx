import { NavLink } from "react-router-dom";
import { useAppStore } from "../../api/appStore";

const NavBar = () => {
  const { fetchProducts, categories } = useAppStore();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        {categories.map(({ id }) => (
          <li>
            <NavLink key={id} to={`/${id}`} onClick={() => fetchProducts(id)}>
              {id}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
