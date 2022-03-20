import axios from "axios";
const baseUrl = "http://192.168.2.134:3001/api/users/";

const getUserData = async (user) => {
  const response = await axios.get(`${baseUrl}${user.id}`);
  return response.data;
};

export default { getUserData };
