import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Example API

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createData = async (formData) => {
  try {
    const res = await axios.post(`${API_URL}/create`, formData); // ✅ Pass formData
    return res.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};
