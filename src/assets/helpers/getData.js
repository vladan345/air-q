import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const link = `https://api.waqi.info/feed/here/?token=${API_KEY}`;

export async function getData() {
   let response = await axios.get(link);
   return response.data;
}
