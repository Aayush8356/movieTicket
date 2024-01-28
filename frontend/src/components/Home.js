import React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import MovieCart from "./MovieCart";
import Search from "./Search.js";
import Nav from "./Nav.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movieList, setmovieList] = useState([]);
  const [loading, isLoading] = useState(true);
  // const navigate = useNavigate();
  async function getData(value) {
    try {
      const response = await fetch(
        `http://localhost:5001/movies/search/${value}`
      );
      const data = await response.json();
      if (data.Search !== undefined) {
        setmovieList(data.Search);
        isLoading(false);
      } else {
        isLoading(true);
      }
    } catch (error) {
      console.log(error, "Invalid credentials or Token Expired");
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Nav show="none" />
      <div className="main">
        <Search childFunction={getData} />
        <div className="home">
          {loading ? (
            <Loader load={"Bad Movie Name, Try different movie title"} />
          ) : (
            movieList.map((i) => (
              <MovieCart
                key={i.imdbID}
                Poster={i.Poster}
                Name={i.Title}
                Type={i.Type}
                Year={i.Year}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
