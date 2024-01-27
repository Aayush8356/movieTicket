import React from "react";
const MovieCart = ({ Name, Poster, Type, Year }) => {
  return (
    <div
      className="movie"
      style={{
        "row-gap": "1em",
      }}
    >
      <img src={Poster} alt={Name} />
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
        {Name}
      </h1>
      <p>Type: {Type}</p>
      <p>Released In: {Year}</p>

      <div className="fav-btn">
        <button
          style={{
            width: "50px",
            borderRadius: "0%",
            cursor: "pointer",
          }}
        >
          +Fav
        </button>
      </div>
    </div>
  );
};
export default MovieCart;
