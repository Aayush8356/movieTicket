import React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import MovieCart from "./MovieCart";
import Search from "./Search.js";
import Nav from "./Nav.js";

const Home = () => {
  const [movieList, setmovieList] = useState([]);
  const [loading, isLoading] = useState(true);
  async function getData(value) {
    try {
      const response = await fetch(
        `http://localhost:5001/movies/search/${value}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWF5dXNoMyIsImVtYWlsIjoiYWF5dXNoM0BnbWFpbC5jb20iLCJpZCI6IjY1YWViZWMwMzg1ZjFlZGViOTE5NjRkYyJ9LCJpYXQiOjE3MDYzNzk1NTQsImV4cCI6MTcwNjM4MDc1NH0.4pzkp_WQu2Ge9lpzG1rDTdfbUKvS3v9lhY8C0gas_nI",
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
