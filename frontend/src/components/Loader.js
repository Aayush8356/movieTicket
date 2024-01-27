import React from "react";
const Loader = ({ message, error, load = "loading..." }) => {
  return (
    <div className="loading">
      <div>{error}</div>
      <p>{load}</p>
      <p>{message}</p>
    </div>
  );
};

export default Loader;
