import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../storage/auth";
const MovieCart = ({ title, poster, type, year }) => {
  const { token } = useAuth();
  const URL = "https://movie-ticket-api.onrender.com";
  const saveMovieInList = async () => {
    const response = await fetch(`${URL}/movies/collection`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, poster, type, year }),
    });
    if (response.ok) {
      console.log({ response });
      toast(`${title} added`, {
        position: "top-center",
      });
    } else {
      toast("already added", {
        position: "top-center",
      });
    }
  };
  return (
    <div
      className="movie"
      style={{
        "row-gap": "1em",
      }}
    >
      <img src={poster} alt={title} />
      <h1
        style={{
          width: "240px",
          height: "42px",
          overflow: "hidden",
          "text-overflow": "ellipsis",
          "white-space": "wrap",
          "text-align": "center",
        }}
      >
        {title}
      </h1>
      <p>Type: {type}</p>
      <p>Released In: {year}</p>

      <div className="fav-btn">
        <button
          style={{
            width: "50px",
            borderRadius: "0%",
            cursor: "pointer",
          }}
          onClick={saveMovieInList}
        >
          Fav+
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};
export default MovieCart;
