import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { routes } from './Routes/routes'
import { useUiStore } from './store/useUiStore'

import './styles/global.scss'

function App() {
  const theme = useUiStore((state) => state.theme)
  const language = useUiStore((state) => state.language)
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  return <RouterProvider router={routes} />
}

export default App
