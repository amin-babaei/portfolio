import classes from './Home.module.scss'
import profile from '../../assets/profile.jpg'
import { AiFillGithub, AiFillYahoo, AiFillLinkedin } from 'react-icons/ai'
import { Helmet } from 'react-helmet-async'
const Home = ({helmetTitle}) => {
  return (
    <section className={classes.section}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
        <div className={classes.avatar}>
          <div className={classes.image} style={{backgroundImage: `url(${profile})`}}></div>
        </div>
        <div className={`${classes.detail} text`}>
          <h1>امین بابایی</h1>
          <p> خلاق ، پرتلاش ، ایده پرداز و البته باهوش 😉</p>
          <div className={classes.social}>
            <a href="https://github.com/amin-babaei">
              <AiFillGithub size={30}/>
            </a>
            <a href="mailto:aminbabaei_dev@yahoo.com">
              <AiFillYahoo size={30} />
            </a>
            <a href="https://www.linkedin.com/in/amin-babaei-157953259/">
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
    </section>
  )
}

export default Home