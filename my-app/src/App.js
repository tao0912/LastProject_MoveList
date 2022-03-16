import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/home/home";
import MovieList from "./containers/movieList/movieList";
import MovieBlockList from "./containers/movieBlockList/movieBlockList";
import MovieLikeList from "./containers/movieLikeList/movieLikeList";

const App = () => {
  return (
    <Router>
      <h1>Top Rated Movies List</h1>
      <div className="nav-container-menu">
        <ul className="nav-container-menu-items">
          <li>
            <Link className="btn btn-primary btn-lg" role="button" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="btn btn-primary btn-lg"
              role="button"
              to="/movieList"
            >
              Movie List
            </Link>
          </li>
          <li>
            <Link
              className="btn btn-primary btn-lg"
              role="button"
              to="/movieBlockList"
            >
              Movie Block List
            </Link>
          </li>
          <li>
            <Link
              className="btn btn-primary btn-lg"
              role="button"
              to="/movieLikeList"
            >
              Movie Like List
            </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movieList" exact>
          <MovieList />
        </Route>
        <Route path="/movieBlockList" exact>
          <MovieBlockList />
        </Route>
        <Route path="/movieLikeList" exact>
          <MovieLikeList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
