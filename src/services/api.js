import axios from "axios";

const api = axios.create({
  baseURL: "https://instaclone-softeam.herokuapp.com/"
});

export default api;
