import { ReactNode, FC } from 'react'

export const IconBox: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className="h-full w-full">
      <div className={`${className} flex items-center justify-center p-1`}>
        {children}
      </div>
    </div>
  )
}
