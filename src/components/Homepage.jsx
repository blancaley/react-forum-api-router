import './Homepage.css';
import usePosts from '../hooks/usePosts';

function Homepage() {
  const allPosts = usePosts([]);

  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <main>
        {allPosts}
      </main>
    </div>
  );
}

export default Homepage;
