import { ReactNode, FC } from 'react'
import { IconBox } from './IconBox'

export const IconButton: FC<{
  children: ReactNode
  onClick?: VoidFunction
}> = ({ children, onClick }) => {
  return (
    <IconBox>
      <div
        className="rounded-full p-2 text-white hover:bg-slate-300 hover:text-black"
        onClick={onClick}
      >
        {children}
      </div>
    </IconBox>
  )
}
