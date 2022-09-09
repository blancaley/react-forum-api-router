import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import usePosts from './hooks/usePosts';
import Homepage from './pages/Homepage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  const allPosts = usePosts();
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage allPosts={allPosts}/>}/>
        <Route path="/posts/:id" element={<PostPage/>} />
        <Route path="/about" element={<AboutPage/>}>About</Route>
      </Routes>
      <Navbar/>
    </Router>
);
}
 
export default App;