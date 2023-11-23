import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const link = `http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`;

export async function getData() {
  let response = await axios.get(link);
  return response.data;
}
