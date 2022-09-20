import SinglePost from '../../components/SinglePost';
import css from './homepage.module.css';

function Homepage({ allPosts }) {
  return (
    <div>
      <main className={css.container}>
        <h2>Alla inlägg</h2>
        <p className={css.small}>{allPosts.length} inlägg</p>
        
        {allPosts.map((p, i) => <SinglePost key={i} title={p.title} id={p.id}/>)}
      </main>
    </div>
  );
}

export default Homepage;
