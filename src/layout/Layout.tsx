import { Outlet } from 'react-router-dom'
import { Header } from '../Components/Header/Header'

const Layout = () => {
  return (
    <div className="app-shell">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
