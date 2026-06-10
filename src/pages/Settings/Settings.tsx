import { useTranslation } from 'react-i18next'
import { AppContainer } from '../../layout/AppContainer/AppContainer'
import { useUiStore } from '../../store/useUiStore'
import './settings.scss'

export function Settings() {
  const { t } = useTranslation()
  const theme = useUiStore((state) => state.theme)
  const language = useUiStore((state) => state.language)
  const setTheme = useUiStore((state) => state.setTheme)
  const setLanguage = useUiStore((state) => state.setLanguage)

  return (
    <AppContainer>
      <section className="settings-page">
        <div className="settings-card">
          <h1>{t('settings')}</h1>

          <div className="settings-control">
            <div>
              <h2>{t('theme')}</h2>
              <p>{t('light')} / {t('dark')}</p>
            </div>

            <div className="segmented">
              <button
                className={theme === 'light' ? 'active' : ''}
                type="button"
                onClick={() => setTheme('light')}
              >
                ☀️ {t('light')}
              </button>
              <button
                className={theme === 'dark' ? 'active' : ''}
                type="button"
                onClick={() => setTheme('dark')}
              >
                🌙 {t('dark')}
              </button>
            </div>
          </div>

          <div className="settings-control">
            <div>
              <h2>{t('language')}</h2>
              <p>i18next + react-i18next</p>
            </div>

            <div className="segmented">
              <button
                className={language === 'ru' ? 'active' : ''}
                type="button"
                onClick={() => setLanguage('ru')}
              >
                RU
              </button>
              <button
                className={language === 'en' ? 'active' : ''}
                type="button"
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </section>
    </AppContainer>
  )
}

export default Settings
