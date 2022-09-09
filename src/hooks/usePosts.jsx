import { useState, useEffect } from "react";
import axios from "axios";

const usePosts = () => {
  const [ allPosts, setAllPosts ] = useState();
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setAllPosts(data);
    }
    fetchPosts();
  }, [])
  return allPosts;
}
 
export default usePosts;