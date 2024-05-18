import api from "./api";

export const fetchStates = async () => {
  const res = await api.get("/states");
  return res.data;
};

export const fetchCities = async (stateName) => {
  const res = await api.get(`/cities/${stateName}`);
  return res.data;
};
