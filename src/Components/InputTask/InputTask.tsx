import { useState, type FormEvent } from 'react'
import './InputTask.scss'

type InputTaskProps = {
  onAddTask: (title: string, description: string) => void
}

export function InputTask({ onAddTask }: InputTaskProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    onAddTask(title, description)

    setTitle('')
    setDescription('')
  }

  return (
    <form className="input-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Описание задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Добавить</button>
    </form>
  )
}

export default InputTask
