import { NavLink } from 'react-router-dom';
import css from './navbar.module.css';

const Navbar = () => {

  return (
    <nav className={css.navbar}>
      <NavLink 
        to="/"
        className={ ({ isActive }) => `${css.navlink}  ${(isActive ? `${css.active}` : "")}`}>
        Home
      </NavLink> {" | "}
      <NavLink 
        to="/about"
        className={ ({ isActive }) => `${css.navlink}  ${(isActive ? `${css.active}` : "")}`}>
        About
      </NavLink>
    </nav>
  );
}
 
export default Navbar;