import IconBox from '@/components/ui/atoms/IconBox'
import { FC, ReactNode } from 'react'

const IconTextButton: FC<{
  icon?: ReactNode
  children?: ReactNode
  text?: ReactNode
  className?: string
  onClick?: VoidFunction
}> = ({ icon, children, className, onClick }) => (
  <div
    className={`${[
      'cursor-pointer',
      'p-1',
      'text-white',
      'hover:bg-slate-300',
      ' hover:text-black',
    ].join(' ')} ${className}`}
    onClick={onClick}
  >
    <div className="flex space-x-1">
      <div>
        <IconBox className="p-1">{icon}</IconBox>
      </div>
      <div className="flex items-center">{children}</div>
    </div>
  </div>
)

export default IconTextButton
