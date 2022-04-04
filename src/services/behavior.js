import axios from "axios";
const baseUrl = "http://192.168.2.134:3001/api/behaviors";

const create = async (newBehavior) => {
  const response = await axios.post(baseUrl, newBehavior);
  return response.data;
};

export default { create };
