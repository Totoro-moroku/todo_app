import { POSITION_TYPE } from '@/types'
import { FC, ReactNode } from 'react'

type TooltipProps = {
  name: string | ReactNode
  position: POSITION_TYPE
  children: ReactNode
  className?: string
}

const getPositionClass = (position: POSITION_TYPE) => {
  switch (position) {
    case POSITION_TYPE.TOP:
      return [' left-1/2', '-translate-x-1/2', 'bottom-[calc(100%+5px)]']
    case POSITION_TYPE.BOTTOM:
      return [' left-1/2', '-translate-x-1/2', 'top-[calc(100%+5px)]']

    case POSITION_TYPE.LEFT:
      return ['top-1/2', '-translate-y-1/2', 'left-[calc(100%+5px)]']

    case POSITION_TYPE.RIGHT:
      return ['top-1/2', '-translate-y-1/2', 'right-[calc(100 % +5px)]']
  }
}

const Tooltip: FC<TooltipProps> = ({ name, position, children, className }) => {
  const positionClass = getPositionClass(position)

  return (
    <div className={`group relative`}>
      <div
        className={`${[
          'rounded',
          'bg-slate-800',
          'text-white',
          'absolute',
          'opacity-0',
          'group-hover:opacity-100',
          'inline-block',
          'whitespace-nowrap ',
          'p-1',
          'text-sm',
          ...positionClass,
        ].join(' ')} ${className}`}
      >
        {name}
      </div>
      {children}
    </div>
  )
}

export default Tooltip
