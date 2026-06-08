import { useEffect, useRef } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import type { TaskFormValues } from '../../types/task'
import './taskForm.scss'

type TaskFormProps = {
  defaultValues?: TaskFormValues
  onSubmit: SubmitHandler<TaskFormValues>
  submitText?: string
  isLoading?: boolean
  onCancel?: () => void
}

export function TaskForm({ defaultValues, onSubmit, submitText, isLoading = false, onCancel }: TaskFormProps) {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: defaultValues || {
      title: '',
      description: '',
    },
  })

  const hasReset = useRef(false)

  useEffect(() => {
  if (defaultValues && !hasReset.current) {
    reset(defaultValues)
    hasReset.current = true
  }
}, [defaultValues, reset])


  return (
    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>{t('title')}</span>
        <input
          type="text"
          placeholder={t('titlePlaceholder')}
          {...register('title', {
            required: t('titleRequired'),
            minLength: {
              value: 2,
              message: t('minTitle'),
            },
          })}
        />
        {errors.title && <small>{errors.title.message}</small>}
      </label>

      <label>
        <span>{t('description')}</span>
        <textarea
          placeholder={t('descriptionPlaceholder')}
          {...register('description')}
        />
      </label>

      <div className="task-form__actions">
        {onCancel && (
          <button className="secondary-button" type="button" onClick={onCancel}>
            {t('cancel')}
          </button>
        )}
        <button className="primary-button" type="submit" disabled={isLoading}>
          {isLoading ? t('loading') : submitText || t('save')}
        </button>
      </div>
    </form>
  )
}
