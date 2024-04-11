import axios from "axios"

// * congih 
import { CONFIG_API } from "src/configs/api"

// * types
import { TLoginAuth } from "src/types/auth"

export const loginAuth =async (data:TLoginAuth)=>{
    try {
    const res = await axios.post(CONFIG_API.AUTH.INDEX,data) 
    // eslint-disable-next-line newline-before-return
    return res.data
    }catch(e) {
    return null
    }
}