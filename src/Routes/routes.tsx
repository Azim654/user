import { createBrowserRouter } from 'react-router-dom'
import { ROUTER_PATHS } from './routerPaths'
import { lazy } from 'react'

const Layout = lazy(() => import('../layout/Layout'))
const Main = lazy(() => import('../pages/Main/Main'))
const Active = lazy(() => import('../pages/Active/Active'))
const Completed = lazy(() => import('../pages/Completed/Completed'))
const Can = lazy(() => import('../pages/Can/Can'))
const Settings = lazy(() => import('../pages/Settings/Settings'))
const EditTask = lazy(() => import('../pages/EditTask/EditTask'))

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.main,
        element: <Main />,
      },
      {
        path: ROUTER_PATHS.active,
        element: <Active />,
      },
      {
        path: ROUTER_PATHS.completed,
        element: <Completed />,
      },
      {
        path: ROUTER_PATHS.trash,
        element: <Can />,
      },
      {
        path: ROUTER_PATHS.settings,
        element: <Settings />,
      },
      {
        path: ROUTER_PATHS.editTask,
        element: <EditTask />,
      },
    ],
  },
])
