import axios from "axios"
import { USER_LOCAL_STORAGE_KEY } from "@/shared/consts/localStorage"

export const $api = axios.create({
    baseURL: _BASE_URL_,
    headers: {
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY)
    }
})
