import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

type FormFieldProps = {
  label: string
  type?: string
  placeholder: string
  registration: UseFormRegisterReturn
  error?: FieldError
}

export function FormField({
  label,
  type = 'text',
  placeholder,
  registration,
  error,
}: FormFieldProps) {
  return (
    <label>
      <span>{label}</span>

      <input
        type={type}
        placeholder={placeholder}
        {...registration}
      />

      {error && <small>{error.message}</small>}
    </label>
  )
}