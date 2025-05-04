import React from 'react'
import { Button, ButtonTheme } from "@/shared/ui/button"
import { useSelector } from "react-redux"
import { counterActions } from "../model/slices/counterSlice"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"
import { useTranslation } from "react-i18next"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"

export const Counter = () => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const value = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <Button onClick={increment} theme={ButtonTheme.OUTLINE} data-testid="increment-btn">
                {t('Увеличить')}
            </Button>
            <Button onClick={decrement} theme={ButtonTheme.OUTLINE} data-testid="decrement-btn">
                {t('Уменьшить')}
            </Button>
        </div>
    )
}
