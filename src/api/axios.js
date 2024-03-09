import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "6f251f0e39a767ca35aa9b8d161e8255",
    language: "ko-KR",
  },
});

export default instance;
