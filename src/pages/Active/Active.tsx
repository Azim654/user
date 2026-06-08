import { useTranslation } from 'react-i18next'
import { TaskList } from '../../Components/TaskList/TaskList'
import { AppContainer } from '../../layout/AppContainer/AppContainer'

export function Active() {
  const { t } = useTranslation()

  return (
    <AppContainer>
      <TaskList filter="active" title={t('activeTasks')} />
    </AppContainer>
  )
}
