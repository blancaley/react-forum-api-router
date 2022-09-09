import './Homepage.css';
import usePosts from '../hooks/usePosts';
import Post from './Post';

function Homepage() {
  const allPosts = usePosts();

  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <main>
        {allPosts.map((p, i) => <Post key={i} title={p.title}/>)}
      </main>
    </div>
  );
}

export default Homepage;
