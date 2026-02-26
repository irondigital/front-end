// useeffect is react hooks that allow you to perform side effect in functional Component.

// like when fetchdata from server
// Sets a timer

// Adds event listeners

// Updates document title

// Works with localStorage

// Manually changes DOM 

import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

// that can provide 3 main case :

// run only oncuechange
useEffect(() => {
  console.log("Runs once");
}, []);

// run when specific value change
useEffect(() => {
  console.log("Count changed");
}, [count]);

// run on every re-render

useEffect(() => {
  console.log("Runs every render");
});