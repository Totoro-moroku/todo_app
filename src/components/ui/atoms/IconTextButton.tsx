import { FC, ReactNode } from 'react'
import { IconBox } from './IconBox'

export const IconTextButton: FC<{
  icon?: ReactNode
  children?: ReactNode
  text?: ReactNode
  className?: string
  onClick?: VoidFunction
}> = ({ icon, children, className, onClick }) => (
  <div
    className={`cursor-pointer p-1 text-white hover:bg-slate-300 hover:text-black ${className}`}
    onClick={onClick}
  >
    <div className="flex space-x-1">
      <div>
        <IconBox>{icon}</IconBox>
      </div>
      <div className="flex items-center">{children}</div>
    </div>
  </div>
)
