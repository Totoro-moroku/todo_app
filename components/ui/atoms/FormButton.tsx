import { FC, ReactNode } from 'react'

type FormButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined
  id?: string
  className?: string | undefined
  children: ReactNode
  onClick?: any | undefined
}

export const FormButton: FC<FormButtonProps> = ({
  type,
  className,
  id,
  children,
  onClick,
}) => {
  return (
    <>
      <button
        className={`${className} rounded-md bg-slate-400 px-6 py-2`}
        type={type}
        id={id}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
