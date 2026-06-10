import type { UseFormRegisterReturn } from 'react-hook-form'

type TextareaFieldProps = {
  label: string
  placeholder: string
  registration: UseFormRegisterReturn
}

export function TextareaField({
  label,
  placeholder,
  registration,
}: TextareaFieldProps) {
  return (
    <label>
      <span>{label}</span>

      <textarea
        placeholder={placeholder}
        {...registration}
      />
    </label>
  )
}