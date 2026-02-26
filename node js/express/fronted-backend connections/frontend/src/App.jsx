import React, { useEffect, useState } from "react";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {plants.map((plant) => (
          <div key={plant.id} className="border p-4 rounded shadow">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">{plant.name}</h2>
            <p>{plant.type}</p>
            <p className="font-semibold">₹{plant.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
