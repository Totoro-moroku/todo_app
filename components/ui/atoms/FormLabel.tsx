import { FC, ReactNode } from 'react'

type FormLabelProps = {
  id?: string
  className?: string | undefined
  children: ReactNode
}
export const FormLabel: FC<FormLabelProps> = ({ id, className, children }) => {
  return (
    <label id={id} className={`${className} px-2 text-sm`}>
      {children}
    </label>
  )
}
