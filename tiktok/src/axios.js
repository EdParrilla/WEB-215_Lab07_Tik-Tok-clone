import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-mem-bakend.herokuapp.com/",
});

export default instance;