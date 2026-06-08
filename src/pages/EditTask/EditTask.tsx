import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AppContainer } from '../../layout/AppContainer/AppContainer'
import { TaskForm } from '../../Components/TaskForm/TaskForm'
import { useTask, useUpdateTask } from '../../hooks/useTasks'
import type { TaskFormValues } from '../../types/task'
import './editTask.scss'

export function EditTask() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { data: task, isLoading, isError } = useTask(id)
  const updateTask = useUpdateTask()

  function handleSubmit(values: TaskFormValues) {
    if (!id) return

    updateTask.mutate(
      {
        id,
        task: values,
      },
      {
        onSuccess: () => navigate('/'),
      },
    )
  }

  if (isLoading) return <AppContainer><p className="state-text">{t('loading')}</p></AppContainer>
  if (isError || !task) return <AppContainer><p className="state-text error">{t('error')}</p></AppContainer>

  return (
    <AppContainer>
      <section className="edit-page">
        <div className="edit-card">
          <Link className="back-link" to="/">← {t('goBack')}</Link>
          <h1>{t('editPageTitle')}</h1>

          <TaskForm
            defaultValues={{
              title: task.title,
              description: task.description,
            }}
            onSubmit={handleSubmit}
            submitText={t('save')}
            isLoading={updateTask.isPending}
            onCancel={() => navigate('/')}
          />
        </div>
      </section>
    </AppContainer>
  )
}
