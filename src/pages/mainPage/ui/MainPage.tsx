import { useTranslation } from "react-i18next"
import { memo, useState } from "react"
import { Input } from "@/shared/ui/input"

const MainPage = memo(() => {
    const { t } = useTranslation('main')
    const [value, setValue] = useState('')

    return (
        <div>
            {t('Главная страница')}
            <Input value={value} onChange={setValue} placeholder="Введите текст"/>
        </div>
    )
})

export default MainPage
