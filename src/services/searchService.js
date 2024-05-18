import { fetchCities, fetchStates } from "../api/searchApi";

export const getStates = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const states = await fetchStates();
      resolve(states);
    } catch (error) {
      reject(error);
    }
  });
};

export const getCities = (stateName) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!stateName) {
        throw new Error("State name required !");
      }
      const cities = await fetchCities(stateName);
      resolve(cities);
    } catch (error) {
      reject(error);
    }
  });
};
