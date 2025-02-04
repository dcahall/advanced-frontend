import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

// Компонент для тестирования ошибок
export const BugButton = () => {
    const { t } = useTranslation('translation')
    const [error, setError] = useState<boolean>(false)

    const onThrowError = () => {
        setError(true);
    }

    useEffect(() => {
        if (error) {
            throw new Error
        }
    }, [error])

    return (
        <button onClick={onThrowError} >
            {t('Сгенерировать ошибку')}
        </button >
    )
}