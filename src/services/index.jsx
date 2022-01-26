import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-eu-paciente.herokuapp.com/",
});
