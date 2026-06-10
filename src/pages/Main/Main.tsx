import { useTranslation } from 'react-i18next'
import { TaskList } from '../../Components/TaskList/TaskList'
import { AppContainer } from '../../layout/AppContainer/AppContainer'


export function Main() {
  const { t } = useTranslation()

  return (
    <AppContainer>
      <TaskList filter="all" title={t('allTasks')} />
    </AppContainer>
  )
}

export default Main