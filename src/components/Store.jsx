import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Store() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch stores from the API
  const fetchStores = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/stores`);
      setStores(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch stores");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Store List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">{store.name}</h2>
            <p className="text-gray-600">{store.description}</p>
            <p className="text-gray-500 text-sm">Location: {store.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}