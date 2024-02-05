import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../storage/auth";
import Loader from "../components/Loader";
import CollectionCart from "../components/CollectionCart";

const MyCollections = () => {
  const [list, setList] = useState([]);
  const [loading, isLoading] = useState(true);
  const { token, user } = useAuth();
  const URL = "http://localhost:5001";

  const getData = async () => {
    try {
      const response = await fetch(`${URL}/movies/collection/view`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.statusCode !== 200 || !response) {
        isLoading(true);
      }
      const data = await response.json();
      console.log(data.movie);
      isLoading(false);
      setList(data.movie);
    } catch (error) {
      isLoading(true);
      console.log("Error while fetching data from backend", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="profile-heading">{user.username}'s Collections</div>
      {loading ? (
        <Loader />
      ) : (
        list.map((i) => <CollectionCart title={i.title} year={i.year} />)
      )}
    </>
  );
};

export default MyCollections;