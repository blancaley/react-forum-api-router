import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import css from './pagelayout.module.css';

const PageLayout = () => {
  return (
    <div>
      <Header/>
      <div className={css.main}>
        <Outlet/>
      </div>
    </div>
  );
}
 
export default PageLayout;