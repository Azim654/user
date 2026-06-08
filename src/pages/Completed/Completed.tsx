import { useTranslation } from 'react-i18next'
import { TaskList } from '../../Components/TaskList/TaskList'
import { AppContainer } from '../../layout/AppContainer/AppContainer'

export function Completed() {
  const { t } = useTranslation()

  return (
    <AppContainer>
      <TaskList filter="completed" title={t('completedTasks')} />
    </AppContainer>
  )
}
