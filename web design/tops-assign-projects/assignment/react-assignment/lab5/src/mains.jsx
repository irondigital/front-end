import React from "react";

function UserCard({ name, age, location }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "250px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
    margin: "10px"
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserCard;
