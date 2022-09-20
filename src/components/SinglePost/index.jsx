import { Link } from 'react-router-dom';
import css from './singlePost.module.css';

const SinglePost = ( { title, id } ) => {
  return (
    <Link className={css.singlePost} to={`/posts/${id}`}>
      <h3>{title}</h3>
    </Link>
  );
}
 
export default SinglePost;