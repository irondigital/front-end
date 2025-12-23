
import React from "react";
import UserCard from "./mains";

function App() {
  return (
    <div>
      <UserCard name="Milan" age={25} location="Mumbai" />
      <UserCard name="Devdas" age={28} location="Delhi" />
    </div>
  );
}

export default App;
