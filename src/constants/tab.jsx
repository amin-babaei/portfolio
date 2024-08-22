import { useTranslation } from "react-i18next";
import { BsFileCodeFill, BsPersonFill } from "react-icons/bs";
import { IoIosCall, IoMdHome } from "react-icons/io";

export const tabsData = () => {
    const {t} = useTranslation()
    const tabs = [
        { id: 1,label: t("aside__home"), icon: <IoMdHome size={19}/>},
        { id: 2,label: t("aside__about"), icon: <BsPersonFill size={19}/>},
        { id: 3,label: t("aside__portfolio"), icon: <BsFileCodeFill size={19}/>},
        { id: 4,label: t("aside__contact"), icon: <IoIosCall size={19}/>},
    ];

    return tabs;
};