import { createSelector } from "@reduxjs/toolkit"
import { getLoginState } from "../getLoginState/getLoginState"
import { type LoginSchema } from "../../types/loginSchema"

export const getError = createSelector(getLoginState, (state: LoginSchema) => state?.error)
