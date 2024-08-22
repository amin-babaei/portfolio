import { useContext, useState } from 'react'
import classes from './Sample.module.scss'
import { freelancSamples, landingSamples, realSamples } from '@/constants/samples'
import { ThemeContext } from '@/context/ThemeContext'
import { Helmet } from 'react-helmet-async'
import { AiFillGithub } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const Sample = ({ helmetTitle }) => {
  const { theme } = useContext(ThemeContext)
  const [page, setPage] = useState(1)
  const { t, i18n:{ language } } = useTranslation()

  return (
    <section className={`${classes.section} text`}>
      <Helmet>
        <title>{t("portfolio__title")}</title>
      </Helmet>
      <div className={classes.title}>
        <p className={classes.title__highlight}>{t("portfolio__title")}</p>
        <h2>{t("portfolio__me")}</h2>
      </div>
      <div className={classes.title} style={{ display: 'flex', gap: 20, marginBottom: '2rem' }}>
        <p className={classes.title__highlight} style={page === 1 ? { opacity: '0.6' } : { opacity: '1', cursor: 'pointer' }} onClick={() => setPage(1)}>{t("portfolio__real")}</p>
        <p className={classes.title__highlight} style={page === 2 ? { opacity: '0.6' } : { opacity: '1', cursor: 'pointer' }} onClick={() => setPage(2)}>{t("portfolio__landing")}</p>
        <p className={classes.title__highlight} style={page === 3 ? { opacity: '0.6' } : { opacity: '1', cursor: 'pointer' }} onClick={() => setPage(3)}>{t("portfolio__freelance")}</p>
      </div>
      <div className={classes.wrapper}>
        {page === 1 && realSamples.map(item => (
          <article key={item.id} className={classes.card}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <hr />
            <p>
              {`${t("portfolio__developed")} : ${item.desc}`}
            </p>
            <div>
              <a className={classes.btn} href={item.href} target='_blank' style={{ backgroundColor: theme === 'light' ? 'black' : "white", color: theme === 'light' ? 'white' : "black" }}>
                {t("portfolio__view")}
              </a>
              <a href={item.github}>
                <AiFillGithub size={30}/>
              </a>
            </div>
          </article>
        ))}
        {page === 2 && landingSamples.map(item => (
          <article key={item.id} className={classes.card}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <hr />
            <p style={{ textAlign: 'center' }}>
              {item.desc}
            </p>
          </article>
        ))}
        {page === 3 && freelancSamples.map(item => (
          <article key={item.id} className={classes.card}>
            <img src={item.img} alt="" />
            <h3>{item.title[language]}</h3>
            <hr />
            <p style={{ textAlign: 'center' }}>
              {item.desc[language]}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Sample