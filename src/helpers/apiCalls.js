import axios from "axios";

const API_URL = "https://student-journal-back-end.onrender.com";

export const fetchEntries = async () => {
  const res = await axios.get(`${API_URL}/entry`);
  return res.data;
};

export const fetchEntry = async (id) => {
  const res = await axios.get(`${API_URL}/entry/${id}`);
  return res.data;
};

export const getNewQuote = async () => {
  const res = await axios.get(`https://zenquotes.io/api/random`);
  return res;
};

export const createEntry = async (entry) => {
  const res = await axios.post(`${API_URL}/entry`, { ...entry });
  return res;
};

export const updateEntry = async (id, entry) => {
  console.log(id, entry);
  const res = await axios.put(`${API_URL}/entry/${id}`, { ...entry });
  return res;
};

export const deleteEntry = async (id) => {
  const res = await axios.delete(`${API_URL}/entry/${id}`);
  return res;
};
