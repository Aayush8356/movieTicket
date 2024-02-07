import React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import MovieCart from "./MovieCart";
import Search from "./Search.js";
import { useAuth } from "../storage/auth.js";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [movieList, setmovieList] = useState([]);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setpage] = useState(1);
  const [full, setFull] = useState(1);
  const { isLoggedIn } = useAuth();
  async function getData(value) {
    try {
      value = value ? value : "life";
      const response = await fetch(
        `http://localhost:5001/movies/search/${value}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.statusCode === 500) {
        isLoading(true);
        setError("Please Login First!");
      }
      const data = await response.json();
      if (isLoggedIn) {
        // console.log(response.data.error, "from if part");
        setmovieList(data.Search);
        console.log(data.totalResults);
        isLoading(false);
      } else {
        isLoading(true);
        setError("Please Login First!");
        navigate("/login");
      }
    } catch (error) {
      isLoading(true);
      console.log("Error while fetching data from backend", error);
      navigate("/login");
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
                poster={i.Poster}
                title={i.Title}
                type={i.Type}
                year={i.Year}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
