import { createSelector } from "@reduxjs/toolkit"
import { getLoginState } from "../getLoginState/getLoginState"
import { type LoginSchema } from "../../types/loginSchema"

export const getIsLoading = createSelector(getLoginState, (state: LoginSchema) => state?.isLoading)
