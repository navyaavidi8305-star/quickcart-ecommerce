import axios from "axios";

const api = axios.create({

baseURL:
"https://quickcart-api-vvna.onrender.com/api"

});

export default api;