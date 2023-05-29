import { useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser';
import classes from './Contact.module.scss'
import validate from './validate'
import { Toaster, toast } from 'react-hot-toast';
import loadimd from '@/assets/loading.gif'
const Contact = ({helmetTitle}) => {

const initialState = { name: '', email: '', message: '' }
const [userData, setUserData] = useState(initialState)
const [loading, setLoading] = useState(false)

const form = useRef();
  const { name, email, message } = userData

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }

  const sendEmail = (e) => {
    e.preventDefault()
    const errMsg = validate(name, email, message)
    if(errMsg) return toast.error(errMsg)

    setLoading(true)
    emailjs.sendForm(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_TEMPLATEID, form.current, import.meta.env.VITE_PUBLICKEY)
    .then(() => {
      toast.success('پیام شما با موفقیت ارسال شد')
      setLoading(false)
      setUserData(initialState)
    }, (error) => {
      toast.error('خطایی رخ داد')
      setLoading(false)
    });
  };

  if(loading) return <div className={classes.loading}><img src={loadimd} alt="loading" /></div>

  return (
    <section className={`${classes.section} text`}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
        <div className={classes.title}>
            <p className={classes.title__highlight}>تماس با من</p>
            <h2>تماس با من</h2>
        </div>
        <form ref={form} onSubmit={sendEmail} className={`${classes.form} text`}>
          <input type="text" placeholder='نام شما' name='name' value={name} onChange={handleChangeInput}/>
          <input type="text" placeholder='ایمیل' name='email' value={email} onChange={handleChangeInput}/>
          <textarea cols="30" rows="10" placeholder='متن ارسالی را اینجا بنویسید' name='message' value={message} onChange={handleChangeInput}></textarea>
          <button type='submit'>ارسال</button>
        </form>
    </section>
  )
}

export default Contact