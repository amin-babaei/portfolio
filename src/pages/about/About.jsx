import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { Helmet } from 'react-helmet-async';
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { TbBrandJavascript } from 'react-icons/tb'
import { FaUniversity } from 'react-icons/fa'

import classes from './About.module.scss'
import about from '@/assets/ab1.jpg'
import resume from '@/assets/amin-babaei-resume.pdf'

const About = ({ helmetTitle }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <section className={`${classes.section} text`}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <div className={classes.title}>
        <p className={classes.title__highlight}>درباره من</p>
        <h2>درباره من</h2>
      </div>
      <div className={classes.image__wrapper}>
        <img src={about} alt="" />
        <a href={resume} download style={{ backgroundColor: theme === 'light' ? 'black' : "white", color: theme === 'light' ? 'white' : "black" }}>دانلود رزومه</a>
      </div>
      <div>
        <div className={classes.about__title}>
          <h4>محمد امین بابایی</h4>
          <p>توسعه دهنده وب</p>
        </div>
        <div className={classes.about__text}>
          <p>
          سلام! من محمد امین بابایی ، متولد 6 آذر سال 1382 و ساکن مشهد هستم. از اوایل سال 99 به یادگیری برنامه‌نویسی علاقه مند شدم و بعد از مدتی به گرایش وب متمایل شدم. در حال حاضر بصورت تخصصی در زمینه فرانت‌اند (React و Next.js) فعالیت می‌کنم. همچنین، برای پروژه‌های شخصی که به API نیاز دارند، از Express.js برای توسعه بک‌اند استفاده می‌کنم.
          </p>
        </div>
        <VerticalTimeline layout='2-column-left' lineColor="rgb(156 163 175)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(66 66 66)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(66 66 66)' }}
            iconStyle={{ background: '#000', color: '#fff', marginRight: '8px', marginLeft: 0 }}
            icon={<AiFillHtml5 />}
          >
            <p>
              html - css - sass - bootstrap - mdbootstrap - tailwindcss - semantic ui - mui - antd
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(66 66 66)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(66 66 66)' }}
            iconStyle={{ background: '#000', color: '#fff' }}
            icon={<TbBrandJavascript />}
          >
            <p>
              javascript - typescript - jquery - node - react - reactnative - next - redux
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(66 66 66)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(66 66 66)' }}
            iconStyle={{ background: '#000', color: '#fff' }}
            icon={<AiFillGithub />}
          >
            <p>
              git - github - mongodb - photoshop - xd - figma
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(66 66 66)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(66 66 66)' }}
            iconStyle={{ background: '#000', color: '#fff' }}
            icon={<FaUniversity />}
          >
            <p>
              computer diploma - Islamic Azad University (present)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default About