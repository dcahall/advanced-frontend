import { type FC, useCallback } from "react"

import { useTranslation } from "react-i18next"
import { Select, type SelectOption } from "@/shared/ui/select"
import { classNames } from "@/shared/lib/classNames"
import { Currency } from "../../model/types/currency"

interface CurrencySelectProps {
    readonly?: boolean
    value?: string
    onChange?: (value: Currency) => void
    className?: string
}

const optionsList: SelectOption[] = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
    const { readonly, value, onChange, className } = props
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select
            readonly={readonly}
            label={t('Укажите валюту')}
            value={value}
            onChange={onChangeHandler}
            options={optionsList}
            className={classNames('', {}, [className])}
        />
    )
}
