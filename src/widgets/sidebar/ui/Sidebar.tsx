import {FC, useState} from "react";

import cls from './Sidebar.module.scss';

import {classNames} from "@/shared/lib/ClassNames";
import {ThemeSwitcher} from "@/shared/ui/themeSwitcher";

interface NavbarProps {
    className?: string
}

export const Sidebar: FC<NavbarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.navbar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>expand</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};
