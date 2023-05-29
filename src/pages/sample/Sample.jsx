import { useContext, useState } from 'react'
import classes from './Sample.module.scss'
import { freelancSamples, landingSamples, realSamples } from '@/constants/samples'
import { ThemeContext } from '@/context/ThemeContext'
import { Helmet } from 'react-helmet-async'
import { AiFillGithub } from 'react-icons/ai'

const Sample = ({ helmetTitle }) => {
  const { theme } = useContext(ThemeContext)
  const [page, setPage] = useState(1)
  return (
    <section className={`${classes.section} text`}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <div className={classes.title}>
        <p className={classes.title__highlight}>نمونه کار ها</p>
        <h2>نمونه کار های من</h2>
      </div>
      <div className={classes.title} style={{ display: 'flex', gap: 20, marginBottom: '2rem' }}>
        <p className={classes.title__highlight} style={page === 1 ? { opacity: '0.6' } : { opacity: '1', cursor: 'pointer' }} onClick={() => setPage(1)}>پروژه واقعی</p>
        <p className={classes.title__highlight} style={page === 2 ? { opacity: '0.6' } : { opacity: '1', cursor: 'pointer' }} onClick={() => setPage(2)}>لندینگ html & css</p>
        <p className={classes.title__highlight} style={page === 3 ? { opacity: '0.6' } : { opacity: '1', cursor: 'pointer' }} onClick={() => setPage(3)}>فریلنسری</p>
      </div>
      <div className={classes.wrapper}>
        {page === 1 && realSamples.map(item => (
          <article key={item.id} className={classes.card}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <hr />
            <p>
              {item.desc}
            </p>
            <div>
              <a className={classes.btn} href={item.href} style={{ backgroundColor: theme === 'light' ? 'black' : "white", color: theme === 'light' ? 'white' : "black" }}>
                مشاهده
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
            <h3>{item.title}</h3>
            <hr />
            <p style={{ textAlign: 'center' }}>
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Sample