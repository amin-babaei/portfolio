import classes from './Home.module.scss'
import profile from '@/assets/profile.jpg'
import { AiFillGithub, AiFillYahoo, AiFillLinkedin } from 'react-icons/ai'
import { Helmet } from 'react-helmet-async'
import resume from '@/assets/amin-babaei-resume.pdf'
import { useTranslation } from 'react-i18next'
const Home = ({helmetTitle}) => {

  const {t} = useTranslation()

  return (
    <section className={classes.section}>
      <Helmet>
        <title>{t("home__fullname")}</title>
      </Helmet>
        <div className={classes.avatar}>
          <div className={classes.image} style={{backgroundImage: `url(${profile})`}}></div>
        </div>
        <div className={`${classes.detail} text`}>
          <h1>{t("home__fullname")}</h1>
          <p>{t("home__description")}</p>
          <div className={classes.social}>
            <a href="https://github.com/amin-babaei">
              <AiFillGithub size={30}/>
            </a>
            <a href="mailto:aminbabaei_dev@yahoo.com">
              <AiFillYahoo size={30} />
            </a>
            <a href="https://www.linkedin.com/in/amin-babaei">
              <AiFillLinkedin size={30} />
            </a>
          </div>
          <a href={resume} download>{t("home__resume")}</a>
        </div>
    </section>
  )
}

export default Home