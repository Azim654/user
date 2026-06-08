import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createTask,
  deleteTaskToTrash,
  getTaskById,
  getTasks,
  removeTaskForever,
  restoreTask,
  updateTask,
} from '../api/tasksApi'
import type { CreateTaskDto, Task, UpdateTaskDto } from '../types/task'

export function useTasks() {
  return useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })
}

export function useTask(id?: string) {
  return useQuery<Task>({
    queryKey: ['tasks', id],
    queryFn: () => getTaskById(id as string),
    enabled: Boolean(id),
  })
}

export function useCreateTask() {
  const queryClient = useQueryClient()

  return useMutation<Task, Error, CreateTaskDto>({
    mutationFn: createTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })
}

export function useUpdateTask() {
  const queryClient = useQueryClient()

  return useMutation<Task, Error, { id: string; task: UpdateTaskDto }>({
    mutationFn: ({ id, task }) => updateTask(id, task),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      queryClient.invalidateQueries({ queryKey: ['tasks', variables.id] })
    },
  })
}

export function useMoveToTrash() {
  const queryClient = useQueryClient()

  return useMutation<Task, Error, string>({
    mutationFn: deleteTaskToTrash,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })
}

export function useRestoreTask() {
  const queryClient = useQueryClient()

  return useMutation<Task, Error, string>({
    mutationFn: restoreTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })
}

export function useRemoveTaskForever() {
  const queryClient = useQueryClient()

  return useMutation<Task, Error, string>({
    mutationFn: removeTaskForever,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })
}
