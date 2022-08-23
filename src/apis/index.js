import axios from "axios";

export const covidData = axios.create({
  baseURL: "https://covidnigeria.herokuapp.com/api",
});
