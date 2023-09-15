import axios from "axios";

// const { VITE_API_URL } = process.env;

const instance = axios.create({
  // baseURL: VITE_API_URL,
  baseURL: "https://648c2bcb8620b8bae7ec606b.mockapi.io",
});

export default instance;
