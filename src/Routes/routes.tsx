import { createBrowserRouter } from 'react-router-dom'
import { Main } from '../pages/Main/Main'
import { Active } from '../pages/Active/Active'
import { Completed } from '../pages/Completed/Completed'
import { Can } from '../pages/Can/Can'
import { Settings } from '../pages/Settings/Settings'
import { EditTask } from '../pages/EditTask/EditTask'
import Layout from '../layout/Layout'
import { ROUTER_PATHS } from './routerPaths'

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
