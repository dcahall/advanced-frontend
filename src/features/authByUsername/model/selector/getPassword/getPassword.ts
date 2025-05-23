import { createSelector } from "@reduxjs/toolkit"
import { getLoginState } from "../getLoginState/getLoginState"
import { type LoginSchema } from "../../types/loginSchema"

export const getPassword = createSelector(getLoginState, (state?: LoginSchema) => state?.password || '')
