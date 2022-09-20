import css from './aboutpage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Aboutpage = () => {
  return (
    <div className={css.container}>
      <div className={css.topInfo}>
        <div>
          <h1 className={css.title}>React Forum POC (Proof of Concept)</h1>
          <h2>Inlämningsuppgift 2</h2>
          <p>Lärare: Brandon Duarte Tsegai</p>
          <p>Student: Blanca Cecilia Ley Li</p>
        </div>
        <a href="https://github.com/blancaley/react-forum-api-router">
          <FontAwesomeIcon icon={faGithub} className={css.github}/>
        </a>
      </div>
      <div>
        <p>Din uppgift är att skapa ett forum som innehåller inlägg och kommentarer. Alla dessa ska hämtas från följande API-endpoints:
        </p>
        <p>Inlägg: https://jsonplaceholder.typicode.com/posts</p>
        <p>Kommentarer: https://jsonplaceholder.typicode.com/comments</p>

        <h3>/ (startsidan)</h3>
        <p>Användaren ska se samtliga inlägg - skriv endast ut titel för inläggen.</p>
        <p>När man klickar på titeln för ett inlägg ska användaren navigeras till en ny sida med URL:en /post/:id .</p>
        
        <h3>/post/:id</h3>
        <p>Här ska användaren kunna se inläggets titel och textinnehåll. Skriv även ut samtliga kommentarer som gjorts i detta inlägg. Varje kommentar ska innehålla dess textinnehåll, samt namn och mail på personen som kommenterat.</p>
        <p>Det ska även finnas en knapp för att gå tillbaka till listan över samtliga inlägg (startsidan).</p>

        <h3>Tekniska krav</h3>
        <p>En användare ska kunna skriva in ett id i URL:en (t.ex /post/9) och kunna se inlägget med det id:et.</p>
      </div>



      
    </div>
  );
}
 
export default Aboutpage;