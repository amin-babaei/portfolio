import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@/context/ThemeContext'
import { TabProvider } from '@/context/TabContext'
import '@/styles/index.scss'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TabProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </TabProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
