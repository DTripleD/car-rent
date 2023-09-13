export const getAllCars = () => {
  return fetch("https://648c2bcb8620b8bae7ec606b.mockapi.io/advert").then(
    (res) => res.json()
  );
};
