import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useTasks } from '../../hooks/useTasks'
import { useUiStore } from '../../store/useUiStore'
import { Task } from '../Task/Task'
import type { TaskFilter } from '../../types/task'
import './taskList.scss'
import Sort from '../Sort'
import { CreateTaskModal } from '../Modal/CreateTaskModal'

type TaskListProps = {
  filter?: TaskFilter
  title: string
}

export function TaskList({ filter = 'all', title }: TaskListProps) {
  const { t } = useTranslation()
  const { data = [], isLoading, isError } = useTasks()
  const sort = useUiStore((state) => state.sort)
  const search = useUiStore((state) => state.search)
  const openCreateModal = useUiStore((state) => state.openCreateModal)

  const stats = useMemo(() => {
    const notDeleted = data.filter((task) => !task.deleted)
    return {
      all: notDeleted.length,
      active: notDeleted.filter((task) => !task.completed).length,
      completed: notDeleted.filter((task) => task.completed).length,
      trash: data.filter((task) => task.deleted).length,
    }
  }, [data])

  const tasks = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim()

    return data
      .filter((task) => {
        if (filter === 'trash') return task.deleted
        if (task.deleted) return false
        if (filter === 'active') return !task.completed
        if (filter === 'completed') return task.completed
        return true
      })
      .filter((task) => {
        if (!normalizedSearch) return true
        return `${task.title} ${task.description}`.toLowerCase().includes(normalizedSearch)
      })
      .toSorted((a, b) => {
        if (sort === 'old') return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        if (sort === 'alphabet') return a.title.localeCompare(b.title)
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })
  }, [data, filter, search, sort])

  if (isLoading) return <p className="state-text">{t('loading')}</p>
  if (isError) return <p className="state-text error">{t('error')}</p>

  return (
    <section className="tasks-page">
      <div className="hero-card">
        <div>
          <h1>{title}</h1>
        </div>
        <button className="primary-button" type="button" onClick={openCreateModal}>
          + {t('createTask')}
        </button>
      </div>

      <div className="stats-grid">
        <div><b>{stats.all}</b><span>{t('statsAll')}</span></div>
        <div><b>{stats.active}</b><span>{t('statsActive')}</span></div>
        <div><b>{stats.completed}</b><span>{t('statsCompleted')}</span></div>
        <div><b>{stats.trash}</b><span>{t('statsTrash')}</span></div>
      </div>

      <Sort />

      <CreateTaskModal />

      {tasks.length === 0 ? (
        <p className="state-text">{t('empty')}</p>
      ) : (
        <div className="tasks-grid">
          {tasks.map((task) => (
            <Task key={task.id} task={task} isTrash={filter === 'trash'} />
          ))}
        </div>
      )}
    </section>
  )
}
