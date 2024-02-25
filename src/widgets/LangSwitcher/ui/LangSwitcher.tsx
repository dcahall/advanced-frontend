import {FC} from "react";
import {useTranslation} from "react-i18next";

import cls from './LangSwitcher.module.scss';

import {classNames} from "@/shared/lib/ClassNames";
import { Button } from "@/shared/ui/button";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation()

    const changeLng = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            onClick={changeLng}
            className={classNames(cls.langSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};
