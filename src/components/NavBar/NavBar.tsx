import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { useAppStore } from "../../api/appStore";

const NavBar = () => {
  const { products } = useAppStore();

  const categories = useMemo(() => {
    const map = new Map(products.map((p) => [p.category, { id: p.category }]));
    return [...map.values()];
  }, [products]);

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
