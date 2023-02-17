import { FC } from 'react'

type FormTextareaProps = {
  id?: string
  className?: string | undefined
  placeholder?: string | undefined
  required?: boolean
  autoComplete?: string | undefined
  rows?: number | undefined
  value?: any | undefined
  setValue?: any | undefined
}

const FormTextarea: FC<FormTextareaProps> = ({
  id,
  className,
  placeholder,
  required,
  autoComplete,
  rows,
  value,
  setValue,
}) => {
  return (
    <>
      <textarea
        id={id}
        className={`${className} w-full rounded-md border bg-white px-3 py-2`}
        placeholder={placeholder}
        value={value}
        required={required}
        rows={rows}
        autoComplete={autoComplete}
        onChange={setValue}
      />
    </>
  )
}

export default FormTextarea