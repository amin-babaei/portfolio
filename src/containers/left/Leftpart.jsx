import {useContext} from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import styles from './Leftpart.module.scss'
import { useTranslation } from 'react-i18next'

const Leftpart = ({children}) => {
  const {theme} = useContext(ThemeContext)
  const { i18n } = useTranslation();
  const direction = i18n.dir();

  return (
    <div className={`${styles.div} ${theme} bgmain`} style={direction === 'ltr' ? { marginLeft: 'auto' } : { marginRight: 'auto' }}>
      {children}
    </div>
  )
}

export default Leftpart