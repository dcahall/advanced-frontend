import { type ChangeEvent, type FC, memo, useMemo } from "react"

import cls from './Select.module.scss'

import { classNames, type Mods } from "@/shared/lib/classNames"

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    options?: SelectOption[]
    label?: string
    className?: string
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select: FC<SelectProps> = memo((props) => {
    const { options, label, className, value, onChange, readonly } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) { onChange(e.target.value) }
    }

    const optionsList = useMemo(() => {
        return options?.map((opt) => {
            return <option className={cls.option} key={opt.value} value={opt.value}>
                {opt.content}
            </option>
        })
    }, [options])

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {
                label &&
                <span className={cls.label}>{`${label}>`}</span>
            }
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    )
})
