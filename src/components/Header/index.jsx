import css from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className={css.container}>
      <FontAwesomeIcon icon={faMugHot} className={css.logo}/>
      <h1 className={css.title}>Välkommen till React Forum</h1>
      <Navbar/>
    </header>);
}
 
export default Header;