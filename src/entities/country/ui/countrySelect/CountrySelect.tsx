import { type FC, useCallback } from "react"

import { useTranslation } from "react-i18next"
import { Select, type SelectOption } from "@/shared/ui/select"
import { classNames } from "@/shared/lib/classNames"
import { Country } from "../../model/types/country"

interface CountrySelectProps {
    readonly?: boolean
    value?: string
    onChange?: (value: Country) => void
    className?: string
}

const optionsList: SelectOption[] = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Armenia, content: Country.Russia }
]

export const CountrySelect: FC<CountrySelectProps> = (props) => {
    const { readonly, value, onChange, className } = props
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select
            readonly={readonly}
            label={t('Укажите страну')}
            value={value}
            onChange={onChangeHandler}
            options={optionsList}
            className={classNames('', {}, [className])}
        />
    )
}
