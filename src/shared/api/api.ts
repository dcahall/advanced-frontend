import axios from "axios"
import { USER_LOCAL_STORAGE_KEY } from "@/shared/consts/localStorage"

console.log(_BASE_URL_, typeof _BASE_URL_)
export const $api = axios.create({
    baseURL: _BASE_URL_,
    headers: {
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY)
    }
})
