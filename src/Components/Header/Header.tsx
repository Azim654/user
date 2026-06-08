import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ROUTER_PATHS } from '../../Routes/routerPaths'
import { useUiStore } from '../../store/useUiStore'
import './header.scss'

export function Header() {
  const { t } = useTranslation()
  const openCreateModal = useUiStore((state) => state.openCreateModal)
  const theme = useUiStore((state) => state.theme)
  const setTheme = useUiStore((state) => state.setTheme)

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="header">
      <NavLink to={ROUTER_PATHS.main} className="header__logo">
        <span>✓</span>
        {t('appTitle')}
      </NavLink>

      <nav className="header__nav">
        <NavLink to={ROUTER_PATHS.main}>{t('main')}</NavLink>
        <NavLink to={ROUTER_PATHS.active}>{t('active')}</NavLink>
        <NavLink to={ROUTER_PATHS.completed}>{t('completed')}</NavLink>
        <NavLink to={ROUTER_PATHS.trash}>{t('trash')}</NavLink>
        <NavLink to={ROUTER_PATHS.settings}>{t('settings')}</NavLink>
      </nav>

      <div className="header__actions">
        <button className="icon-button" type="button" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button className="primary-button" type="button" onClick={openCreateModal}>
          + {t('createTask')}
        </button>
      </div>
    </header>
  )
}
