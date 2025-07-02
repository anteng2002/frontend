import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;


export const createMessage = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/messages`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}