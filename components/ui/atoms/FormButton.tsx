import { FC, ReactNode } from 'react'

type FormButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined
  id?: string
  className?: string | undefined
  children: ReactNode
}

export const FormButton: FC<FormButtonProps> = ({
  type,
  className,
  id,
  children,
}) => {
  return (
    <>
      <button
        className={`${className} rounded-md bg-slate-400 px-6 py-2`}
        type={type}
        id={id}
      >
        {children}
      </button>
    </>
  )
}
