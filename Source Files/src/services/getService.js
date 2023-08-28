import axios from "axios";

const API_BASE_URL = "http://localhost:1337";

export const getClaims = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/claim`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWawrranty = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/warranty`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCustomer = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/customer`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
