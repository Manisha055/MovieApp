import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopRatedPage from "./components/TopRatedPage";
import UpcomingMoviePage from "./UpcomingMoviePage";
import SingleMovieDetailPage from "./components/SingleMovieDetailPage";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route exact path="/TopRatedPage" element={<TopRatedPage />} />
          <Route
            exact
            path="/UpcomingMoviePage"
            element={<UpcomingMoviePage />}
          />
          <Route
            exact
            path="/SingleMovieDetailPage"
            element={<SingleMovieDetailPage />}
          />
        </Routes>
      </Router>
      {/* </div> */}
    </>
  );
}

export default App;
