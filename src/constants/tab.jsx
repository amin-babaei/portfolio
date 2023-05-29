import { BsFileCodeFill, BsPersonFill } from "react-icons/bs";
import { IoIosCall, IoMdHome } from "react-icons/io";

export const tabsData = () => {
    const tabs = [
        { id: 1,label: "صفحه اصلی", icon: <IoMdHome size={19}/>},
        { id: 2,label: "درباره من", icon: <BsPersonFill size={19}/>},
        { id: 3,label: "نمونه کار ها", icon: <BsFileCodeFill size={19}/>},
        { id: 4,label: "تماس با من", icon: <IoIosCall size={19}/>},
    ];

    return tabs;
};