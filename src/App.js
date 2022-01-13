import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/SignUp';
import Movie from './Components/Movie/Movie';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import Originals from './Components/Originals/Originals';
import Sports from './Components/Sports/Sports';
import TvShows from './Components/TvShows/TvShows.js';
import Premium from './Components/Premium/Premium'
import Otp from './Components/OTP/Otp';
import Search from './Components/Search/Search';


function App() {
  
  return (
    <div style={{ backgroundColor: "#212121" }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tvShows" exact component={TvShows} />
          <Route path="/originals" exact component={Originals} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/movies" exact component={Movie} />
          <Route path="/sports" exact component={Sports} />
          <Route path="/premium" exact component={Premium} />
          <Route path="/otp" exact component={Otp} />
          <Route path="/search" exact component={Search} />
          <Router path="*"><NotFound /></Router>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
