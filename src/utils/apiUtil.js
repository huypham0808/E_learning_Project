import axios from "axios";

export const groupid = "GP02";
const api = axios.create({
    baseURL: '"https://elearningnew.cybersoft.edu.vn/api";'
})
api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("USER_LOGIN")
        ? JSON.parse(localStorage.getItem("USER_LOGIN")).accessToken
        : "";

    config.headers = {
        ...config.headers,
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTUzNjAwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1NjgzNjAwfQ.s4X0R0Wi80X0f9MLJ2XYxRKJdQJBW27dwvkpfN03100",
        Authorization: `Bearer ${accessToken}`,
    };
    return config;
});


export default api;
