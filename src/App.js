import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homeone from './pages/Homeone';
import HomeTwo from './pages/HomeTwo';
import Movie from './pages/Movie';
import MovieDetails from './pages/MovieDetails';
import TvSeries from './pages/TvSeries';
import { useEffect } from "react"
import $ from "jquery";
import Pricing from './pages/Pricing';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import history from './history';

function App() {

  // new
  useEffect(() => {
    function preloader() {
      $('#preloader').delay(0).fadeOut();
    };
    $(window).on('load', function () {
      preloader();


    });
  })
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/">
            <LandingPage />
          </Route>

          <Route exact={true} path="/register">
            <RegisterPage />
          </Route>

          <Route exact={true} path="/login">
            <LoginPage />
          </Route>

          <Route exact={true} path="/home">
            <Homeone />
          </Route>

          {/* <Route exact={true} path="/index-2">
            <HomeTwo />
          </Route>

          <Route exact={true} path="/movie">
            <Movie />
          </Route> */}

          <Route exact={true} path="/details">
            <MovieDetails />
          </Route>

          <Route exact={true} path="/lessons">
            <TvSeries />
          </Route>

          <Route exact={true} path="/pricing">
            <Pricing />
          </Route>

          {/* <Route exact={true} path="/blog">
            <Blogs />
          </Route> */}

          {/* <Route exact={true} path="/blog-details">
            <BlogDetails />
          </Route> */}

          <Route exact={true} path="/contact">
            <ContactPage />
          </Route>


        </Switch>

      </Router>



    </div>
  );
}

export default App;
