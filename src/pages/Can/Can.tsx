import { useTranslation } from 'react-i18next'
import { TaskList } from '../../Components/TaskList/TaskList'
import { AppContainer } from '../../layout/AppContainer/AppContainer'

export function Can() {
  const { t } = useTranslation()

  return (
    <AppContainer>
      <TaskList filter="trash" title={t('deletedTasks')} />
    </AppContainer>
  )
}

export default Can
