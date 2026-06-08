import { useTranslation } from 'react-i18next'
import { useCreateTask } from '../../hooks/useTasks'
import { useUiStore } from '../../store/useUiStore'
import { TaskForm } from '../TaskForm/TaskForm'
import type { TaskFormValues } from '../../types/task'
import './modal.scss'

export function CreateTaskModal() {
  const { t } = useTranslation()
  const isOpen = useUiStore((state) => state.isCreateModalOpen)
  const close = useUiStore((state) => state.closeCreateModal)
  const createTask = useCreateTask()

  if (!isOpen) return null

  function handleSubmit(values: TaskFormValues) {
    createTask.mutate(values, {
      onSuccess: close,
    })
  }

  return (
    <div className="modal-backdrop" onMouseDown={close}>
      <div className="modal" onMouseDown={(event) => event.stopPropagation()}>
        <div className="modal__header">
          <h2>{t('createTask')}</h2>
          <button type="button" onClick={close}>
            ×
          </button>
        </div>

        <TaskForm
          onSubmit={handleSubmit}
          submitText={t('createTask')}
          isLoading={createTask.isPending}
          onCancel={close}
        />
      </div>
    </div>
  )
}
