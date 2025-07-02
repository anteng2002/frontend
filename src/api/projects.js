import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;


export const createProject = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/projects`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const updateProject = async (id, data) => {
  const response = await axios.put(`${API_URL}/projects/${id}`, data);
  return response.data;
};


export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/projects/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}