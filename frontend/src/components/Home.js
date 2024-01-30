import React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import MovieCart from "./MovieCart";
import Search from "./Search.js";
import { useAuth } from "../storage/auth.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [movieList, setmovieList] = useState([]);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState("");
  const { isLoggedIn } = useAuth();
  async function getData(value) {
    try {
      value = value ? value : "life";
      const response = await fetch(
        `http://localhost:5001/movies/search/${value}`
      );
      const data = await response.json();
      if (isLoggedIn) {
        setmovieList(data.Search);
        isLoading(false);
      } else {
        isLoading(true);
        setError("Please Login First!");
        navigate("/login");
      }
    } catch (error) {
      console.log("Error while fetching data from backend", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="main">
        <Search childFunction={getData} />
        <div className="home">
          {loading ? (
            <Loader load={error} />
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
