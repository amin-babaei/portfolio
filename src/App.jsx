import AppContainers from '@/containers/AppContainers'
import '@/styles/index.scss'
import { useTranslation } from 'react-i18next'
import { EnglishFlag, IranFlag } from './locale/icons';
function App() {

  const {i18n: { dir, language, changeLanguage }} = useTranslation()

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'fa' : 'en';
    changeLanguage(newLang);
  };

  return (
    <div dir={dir()} className="App">
      <AppContainers/>
      <button className='flag' onClick={handleLanguageChange} style={{
        top: '20px',
        left: language === 'fa' ? '20px' : 'auto',
        right: language === 'en' ? '20px' : 'auto',
        transform: 'translateY(0)',
      }}>
        {language === 'fa' ? <EnglishFlag/> : <IranFlag/>}
      </button>
    </div>
  )
}

export default App
