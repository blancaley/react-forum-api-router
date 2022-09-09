import { Link } from 'react-router-dom'

const PostTitle = ( { title, id } ) => {
  return (
    <div>
      <Link to={`/posts/${id}`}><h3>{title}</h3></Link>
    </div>

  );
}
 
export default PostTitle;