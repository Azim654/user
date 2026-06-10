import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FormField, TextareaField } from '../Formfield'
import type { TaskFormValues } from '../../types/task'
import './taskForm.scss'

type TaskFormProps = {
  onSubmit: (values: TaskFormValues) => void
  submitText: string
  isLoading?: boolean
  onCancel?: () => void
  defaultValues?: TaskFormValues
}

export function TaskForm({
  onSubmit,
  submitText,
  isLoading = false,
  onCancel,
  defaultValues,
}: TaskFormProps) {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues,
  })

  return (
    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label={t('title')}
        placeholder={t('titlePlaceholder')}
        registration={register('title', {
          required: t('titleRequired'),
          minLength: {
            value: 2,
            message: t('minTitle'),
          },
        })}
        error={errors.title}
      />

      <TextareaField
        label={t('description')}
        placeholder={t('descriptionPlaceholder')}
        registration={register('description')}
      />

      <div className="form-actions">
        {onCancel && (
          <button type="button" onClick={onCancel}>
            {t('cancel')}
          </button>
        )}

        <button type="submit" disabled={isLoading}>
          {isLoading ? t('loading') : submitText}
        </button>
      </div>
    </form>
  )
}