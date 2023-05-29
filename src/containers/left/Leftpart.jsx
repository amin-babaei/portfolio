import {useContext} from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import styles from './Leftpart.module.scss'

const Leftpart = ({children}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${styles.div} ${theme} bgmain`}>
      {children}
    </div>
  )
}

export default Leftpart