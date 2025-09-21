import axios from "axios";

export async function getEmployees() {
  const response = await axios.get(`http://localhost:3000/employee`);
  return response.data;
}
