import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Header  from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import  Posts  from './Components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Comments from './Components/Comments/Comments';
import Albums from './Components/Albums/Albums';
import ShowAlbum from './Components/ShowAlbum/ShowAlbum';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {
  return (
    <div>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path='/Login' component={Login}></Route>
          <Route path='/Posts' component={Posts}></Route> 
          <Route path='/Comments/:id' component={Comments}></Route>
          <Route path='/Albums' component={Albums}></Route> 
          <Route path='/ShowAlbum/:id' component={ShowAlbum}></Route>
          <Route path='/CreatePost' component={CreatePost}></Route> 
          <Route path='/' component={Login}></Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
