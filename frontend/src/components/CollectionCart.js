import React from "react";

const CollectionCart = ({ username, title, year }) => {
  return (
    <>
      <div className="profile-container">
        <div className="usr list">
          <div className="key">{title}</div>
          <div className="value">{year}</div>
        </div>
      </div>
    </>
  );
};

export default CollectionCart;
