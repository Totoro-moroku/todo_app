import { FC, FormEventHandler, ReactNode } from 'react'

type FormType = {
  children: ReactNode
  className?: string | undefined
  onSubmit?: FormEventHandler | undefined
}

const Form: FC<FormType> = ({ children, className, onSubmit }) => {
  return (
    <main>
      <form className={`${className} border-slate-300`} onSubmit={onSubmit}>
        {children}
      </form>
    </main>
  )
}

export default Form
