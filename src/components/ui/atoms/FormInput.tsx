import { FC, HTMLInputTypeAttribute } from 'react'

type FormInputProps = {
  type: HTMLInputTypeAttribute
  id?: string
  className?: string | undefined
  placeholder?: string | undefined
  required?: boolean
  autoComplete?: string | undefined
  max?: number | string | undefined
  maxLength?: number | undefined
  min?: number | string | undefined
  minLength?: number | undefined
  value?: any | undefined
  setValue?: any | undefined
}

const FormInput: FC<FormInputProps> = ({
  type,
  id,
  className,
  placeholder,
  required,
  autoComplete,
  max,
  maxLength,
  min,
  minLength,
  value,
  setValue,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        className={`${className} w-full rounded-md border bg-white px-3 py-2`}
        placeholder={placeholder}
        value={value}
        required={required}
        max={max}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        autoComplete={autoComplete}
        onChange={setValue}
      />
    </>
  )
}

export default FormInput