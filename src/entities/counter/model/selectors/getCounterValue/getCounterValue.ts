import { createSelector } from "@reduxjs/toolkit"
import { getCounter } from "../getCounter/getCounter"
import { type CounterSchema } from "../../types/counterSchema"

export const getCounterValue = createSelector(getCounter, (state: CounterSchema) => state.value)
