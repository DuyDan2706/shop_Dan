
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";


export const CONFIG_API = {
    AUTH : {
        INDEX :`${BASE_URL}/auth/login`
    }
}