import { api } from './axios'
import type { CreateTaskDto, Task, UpdateTaskDto } from '../types/task'

export async function getTasks(): Promise<Task[]> {
  const { data } = await api.get<Task[]>('/tasks')
  return data
}

export async function getTaskById(id: string): Promise<Task> {
  const { data } = await api.get<Task>(`/tasks/${id}`)
  return data
}

export async function createTask(task: CreateTaskDto): Promise<Task> {
  const now = new Date().toISOString()

  const { data } = await api.post<Task>('/tasks', {
    title: task.title,
    description: task.description || '',
    completed: false,
    deleted: false,
    createdAt: now,
    updatedAt: now,
  })

  return data
}

export async function updateTask(id: string, task: UpdateTaskDto): Promise<Task> {
  const { data } = await api.patch<Task>(`/tasks/${id}`, {
    ...task,
    updatedAt: new Date().toISOString(),
  })

  return data
}

export async function deleteTaskToTrash(id: string): Promise<Task> {
  return updateTask(id, { deleted: true })
}

export async function restoreTask(id: string): Promise<Task> {
  return updateTask(id, { deleted: false })
}

export async function removeTaskForever(id: string): Promise<Task> {
  const { data } = await api.delete<Task>(`/tasks/${id}`)
  return data
}
