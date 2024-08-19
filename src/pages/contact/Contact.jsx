import { useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser';
import classes from './Contact.module.scss'
import validate from './validate'
import loadimd from '@/assets/loading.gif'
import Toast from '@/components/Toast';
const Contact = ({helmetTitle}) => {

const initialState = { name: '', email: '', message: '' }
const [userData, setUserData] = useState(initialState)
const [loading, setLoading] = useState(false)
const [toast, setToast] = useState({ message: '', type: '', visible: false });

const form = useRef();
  const { name, email, message } = userData

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }

  const sendEmail = (e) => {
    e.preventDefault()
    const errMsg = validate(name, email, message)
    if (errMsg) {
      setToast({ message: errMsg, type: 'error', visible: true });
      return;
    }

    setLoading(true)
    emailjs.sendForm(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_TEMPLATEID, form.current, import.meta.env.VITE_PUBLICKEY)
    .then(() => {
      setLoading(false)
      setUserData(initialState)
      setToast({ message: 'ایمیل با موفقیت ارسال شد', type: 'success', visible: true });
    }, (error) => {
      setLoading(false)
      setToast({ message: 'خطایی رخ داده است، لطفا دوباره امتحان کنید', type: 'error', visible: true });
    });
  };

  const closeToast = () => {
    setToast({ ...toast, visible: false });
  };

  if(loading) return <div className={classes.loading}><img src={loadimd} alt="loading" /></div>

  return (
    <section className={`${classes.section} text`}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      {toast.visible && <Toast message={toast.message} type={toast.type} visible={toast.visible} onClose={closeToast} />}
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