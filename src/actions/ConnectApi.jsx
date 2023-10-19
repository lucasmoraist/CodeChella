import axios from "axios";

const apiPessoa = axios.create({
    baseURL: "http://localhost:8050/api/pessoa"
})

const apiIngresso = axios.create({
    baseURL: "http://localhost:8050/api/ingresso"
})

export { apiIngresso, apiPessoa };