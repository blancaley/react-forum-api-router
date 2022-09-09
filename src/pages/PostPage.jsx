import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";

const PostPage = () => {
  const { id } = useParams();
  const [ singlePost, setSinglePost ] = useState();
  const [ allComments, setAllComments ] = useState([]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setSinglePost(data);
    } catch (error) {
      console.log(error)
    }
  }

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
      setAllComments(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [])
  
  return (
    <div>
      <Link to="/">
        <button>Go to homepage</button>
      </Link>
      <h1>{ singlePost?.title }</h1>
      <p>{singlePost?.body}</p>
      {allComments
        .filter(comment => comment.postId === singlePost?.id)
        .map((c, i)=><Comment key={i} name={c.name} email={c.email} body={c.body}/>)}
    </div>
    );
}
 
export default PostPage;