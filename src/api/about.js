import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;


export const getAbout = async () => {
  try {
    const response = await axios.get(`${API_URL}/content/about`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}