import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CollectionCart = ({ title, year }) => {
  const URL = "http://localhost:5001";
  const handleDelete = async () => {
    try {
      const response = await fetch(`${URL}/movies/collection/remove`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "DELETE",
        body: JSON.stringify({ title }),
      });
      console.log("Yes, deleted successfully");
      toast(`${title} removed`);
      setTimeout(function () {
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="c-container">
        <div className="profile-container collection-container">
          <div className="usr list c-list">
            <div className="key c-key">{title}</div>
            <div className="value c-value">{year}</div>
          </div>
          <div className="del-btn">
            <button
              className="delete"
              style={{
                color: "white",
                borderRadius: "0px",
                backgroundColor: "#D11A2A",
              }}
              onClick={handleDelete}
            >
              Delete
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionCart;
