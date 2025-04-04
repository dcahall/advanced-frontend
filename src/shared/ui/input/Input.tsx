import { type FC, type InputHTMLAttributes, memo, useEffect, useRef, useState } from "react"

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
        autoFocus = false,
        ...otherProps
    } = props

    const inputRef = useRef< HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    useEffect(() => {
        setIsFocused(autoFocus)
        if (autoFocus) {
            inputRef?.current?.focus()
        }
    }, [autoFocus, inputRef])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setCaretPosition(e?.target?.selectionStart || 0)
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
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
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
