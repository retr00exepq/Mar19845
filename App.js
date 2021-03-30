import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import About from './pages/About/About';
import Exercises from './pages/Exercises/Exercises';
import Home from './pages/Home/Home';
import Recomendations from './pages/Recomendations/Recomendations';
import Tutors from './pages/tutor/tutor';
import Navbar from './Components/Navbar/Navbar';


const App = () =>{
      return(
        <Router>
        <Navbar/>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/exercises" exact>
              <Exercises/>
            </Route>
            <Route path="/recomendations" exact>
              <Recomendations/>
            </Route>
            <Route path="/tutors" exact>
              <Tutors/>
            </Route>
            <Route path="/about" exact>
              <About/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
       </Router>
      );
}

export default App;
