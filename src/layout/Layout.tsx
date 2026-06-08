import { Outlet } from 'react-router-dom'
import { Header } from '../Components/Header/Header'
import { CreateTaskModal } from '../Components/Modal/CreateTaskModal'

const Layout = () => {
  return (
    <div className="app-shell">
      <Header />
      <Outlet />
      <CreateTaskModal />
    </div>
  )
}

export default Layout
