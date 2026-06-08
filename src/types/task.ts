export type Task = {
  id: string
  title: string
  description: string
  completed: boolean
  deleted: boolean
  createdAt: string
  updatedAt: string
}

export type TaskFormValues = {
  title: string
  description: string
}

export type CreateTaskDto = TaskFormValues
export type UpdateTaskDto = Partial<Pick<Task, 'title' | 'description' | 'completed' | 'deleted'>>

export type TaskFilter = 'all' | 'active' | 'completed' | 'trash'
export type SortType = 'new' | 'old' | 'alphabet'
export type ThemeType = 'light' | 'dark'
export type LanguageType = 'ru' | 'en'
