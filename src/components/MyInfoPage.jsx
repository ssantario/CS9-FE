import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

export default function MyInfoPage() {
  const { user } = useContext(UserContext); // Get the logged-in user
  const [data, setData] = useState(null);

  // Fetch user information
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/manager/${user.name}`
      );
      setData(response.data.name);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">My Information</h1>
        {data ? (
          <div className="text-center">
            <p className="text-lg font-semibold">Name: {data}</p>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
}