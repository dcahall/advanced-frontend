import { type FC, type InputHTMLAttributes, memo, useState } from "react"

import cls from './Input.module.scss'

import { classNames } from "@/shared/lib/classNames"

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    className?: string
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
}
const InputInner: FC<InputProps> = (props) => {
    const {
        className,
        onChange,
        value,
        placeholder = '',
        type = 'text',
        ...otherProps
    } = props

    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {
                placeholder && <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            }
            <div className={cls.caretWrapper}>
                <input
                    type={type}
                    value={value}
                    onClick={console.log}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...otherProps}
                />
                {
                    isFocused &&
                    <span
                        style={{ left: `${caretPosition * 9}px` }}
                        className={cls.caret}
                    />
                }
            </div>
        </div>
    )
}

export const Input = memo(InputInner)
