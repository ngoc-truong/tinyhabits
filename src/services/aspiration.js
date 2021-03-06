import axios from "axios";
const baseUrl = "http://192.168.2.134:3001/api/aspirations";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const create = async (newAspiration) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newAspiration, config);
  return response.data;
};

const deleteAspiration = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.status;
};

export default { create, deleteAspiration, setToken };
