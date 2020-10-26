

import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import HeadTop from './Components/HeadTop/HeadTop';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import PostDetail from './Components/PostDetail/PostDetail';


// export const PosterContext = createContext();

function App() {

  
  
  return (
    // <PosterContext.Provider value = {poster}>
    //   
    //   <Home></Home>
    // </PosterContext.Provider>
    <Router>
      <HeadTop></HeadTop>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/postDetails/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
    

    
  );
}

export default App;
