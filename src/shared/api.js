import axios from "axios";

axios.defaults.baseURL = "https://648c2bcb8620b8bae7ec606b.mockapi.io";

export const getCar = async () => {
  const car = await axios.get(`/advert`);
  return car.data;
};
