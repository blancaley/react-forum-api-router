import './Homepage.css';
import PostTitle from '../components/PostTitle';

function Homepage({ allPosts }) {
  return (
    <div>
      <main>
        {allPosts.map((p, i) => <PostTitle key={i} title={p.title} id={p.id}/>)}
      </main>
    </div>
  );
}

export default Homepage;
