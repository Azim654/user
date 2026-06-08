import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMoveToTrash, useRemoveTaskForever, useRestoreTask, useUpdateTask } from '../../hooks/useTasks'
import type { Task as TaskType } from '../../types/task'
import './Task.scss'

type TaskProps = {
  task: TaskType
  isTrash?: boolean
}

export function Task({ task, isTrash = false }: TaskProps) {
  const { t, i18n } = useTranslation()
  const updateTask = useUpdateTask()
  const moveToTrash = useMoveToTrash()
  const restoreTask = useRestoreTask()
  const removeTaskForever = useRemoveTaskForever()

  function toggleTask() {
    updateTask.mutate({
      id: task.id,
      task: { completed: !task.completed },
    })
  }

  const date = new Intl.DateTimeFormat(i18n.language === 'en' ? 'en-US' : 'ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(task.createdAt))

  return (
    <article className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <div>
          <h3>{task.title}</h3>
          <p>{t('createdAt')}: {date}</p>
        </div>

        {!isTrash && (
          <label className="task-check">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={toggleTask}
            />
            <span />
          </label>
        )}
      </div>

      {task.description && <p className="task-description">{task.description}</p>}

      <div className="task-buttons">
        {isTrash ? (
          <>
            <button className="secondary-button" type="button" onClick={() => restoreTask.mutate(task.id)}>
              {t('restore')}
            </button>
            <button className="danger-button" type="button" onClick={() => removeTaskForever.mutate(task.id)}>
              {t('deleteForever')}
            </button>
          </>
        ) : (
          <>
            <Link className="secondary-button" to={`/tasks/${task.id}/edit`}>
              {t('edit')}
            </Link>
            <button className="danger-button" type="button" onClick={() => moveToTrash.mutate(task.id)}>
              {t('delete')}
            </button>
          </>
        )}
      </div>
    </article>
  )
}

export default Task
