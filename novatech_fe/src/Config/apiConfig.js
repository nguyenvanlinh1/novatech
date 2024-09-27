import axios from "axios"

export const API_BASE_URL = "http://localhost:6789";

const jwt = localStorage.getItem("jwt")
const accessToken = localStorage.getItem("access_token")

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": jwt ? `Bearer ${jwt}` : `Bearer ${accessToken}`,
        'Content-Type': "application/json",
    }
});