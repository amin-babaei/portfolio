import { useCallback, useEffect,useState,useContext } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineMenuFold } from "react-icons/ai";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Hexagon } from '@/constants/particle'

import classes from "./Rightpart.module.scss";
import { ThemeContext } from "@/context/ThemeContext";
import { tabsData } from "@/constants/tab";
import { TabContext } from "@/context/TabContext";

const RightPart = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { handlePageNumber, show, setShow } = useContext(TabContext)
    const [particlesContainer, setParticlesContainer] = useState('');

    const tabs = tabsData()
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        setParticlesContainer(container);
    }, []);

    useEffect(() => {
        if (particlesContainer && particlesContainer.currentTheme !== theme) {
            particlesContainer.loadTheme(theme);
        }
    }, [theme, particlesContainer]);

    return (
        <aside className={`${theme} ${classes.rightpart} bgaside`} style={{ right: show && 0 }}>
            <Particles id='tsparticles' className={classes.tsparticles} init={particlesInit} loaded={particlesLoaded} options={Hexagon} width={'75%'} style={{ position: 'absolute', top: 0 }} />
            <button className={`${theme} text btn-mode`} style={{ background: theme === 'dark' && 'rgb(40 40 40)' }} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
            </button>
            <a className={`btn-mode ${classes.hamburger}`} onClick={() => setShow(!show)}>
                <AiOutlineMenuFold style={{ transform: show ? 'rotate(180deg)' : 'none', transitionDuration: '0.5s', background: theme === 'dark' && 'rgb(40 40 40)', color: theme === 'dark' && 'white' }} />
            </a>
            <div className={`${classes.rightpart__inner} text`}>
                <div className={classes.logo}>
                    <h2>توسعه دهنده وب</h2>
                </div>
                <div className={classes.menu}>
                    <ul>
                        {tabs.map((tab,index) =>(
                            <li key={index} onClick={() => handlePageNumber(tab.id)} id={tab.id}>
                                {tab.icon}
                                {tab.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <footer>
                    <p className="text">© تمامی حقوق مادی و معنوی این سایت متعلق به محمد امین بابایی است</p>
                </footer>
            </div>
        </aside>
    )
}
export default RightPart