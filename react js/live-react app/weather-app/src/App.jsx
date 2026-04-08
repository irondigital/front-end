import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY";

  const getWeather = async () => {
  if (!city.trim()) {
    setError("Please enter a city");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const res = await fetch(`https://wttr.in/${city}?format=j1`);
    const data = await res.json();

    setWeather(data);

  } catch (err) {
    setError("Failed to fetch weather");
    setWeather(null);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-4">
          Weather App 🌦️
        </h1>

        {/* Search */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter city..."
            className="flex-1 p-2 rounded bg-white/20 outline-none placeholder-gray-200"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={getWeather}
            className="bg-black/30 px-4 rounded hover:bg-black/50"
          >
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && <p className="text-center">Loading...</p>}

        {/* Error */}
        {error && <p className="text-red-300 text-center">{error}</p>}

        {/* Weather Data */}
       {weather && (
  <div className="text-center mt-4 space-y-2">

    <h2 className="text-xl font-semibold capitalize">
      {city}
    </h2>

    <p className="text-3xl font-bold">
      {weather?.current_condition?.[0]?.temp_C}°C
    </p>

    <p>
      {weather?.current_condition?.[0]?.weatherDesc?.[0]?.value}
    </p>

    <div className="flex justify-between mt-4 text-sm">
      <p>💧 {weather?.current_condition?.[0]?.humidity}%</p>
      <p>🌬️ {weather?.current_condition?.[0]?.windspeedKmph} km/h</p>
    </div>

  </div>
)}

      </div>
    </div>
  );
}