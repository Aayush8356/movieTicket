import React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import MovieCart from "./MovieCart";
import Search from "./Search.js";
import Nav from "./Nav.js";

const Home = () => {
  const [movieList, setmovieList] = useState([]);
  const [loading, isLoading] = useState(true);
  const [token, setToken] = useState("");
  async function getData(value) {
    setToken(localStorage.getItem("token"));
    try {
      const response = await fetch(
        `http://localhost:5001/movies/search/${value}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (data.Search !== undefined) {
        setmovieList(data.Search);
        isLoading(false);
      } else {
        isLoading(true);
      }
    } catch (error) {
      console.log(
        error,
        "there's an error while fetching the data from backend"
      );
    }
  }
  useEffect(() => {
    getData();
  }, [token]);
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
