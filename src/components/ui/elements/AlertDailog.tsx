import { Dialog } from '@headlessui/react'
import { FC, ReactNode } from 'react'

type AlertDailogProps = {
  open: boolean
  children?: ReactNode
  style: string
  onClose(value: boolean): void
}

const AlertDailog: FC<AlertDailogProps> = ({
  open,
  children,
  style,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      as="div"
      className={[
        'ease',
        'fixed',
        'inset-0',
        'z-20',
        'flex',
        'justify-center',
        'overflow-y-auto',
        'transition',
        'duration-500',
      ].join(' ')}
      onClose={onClose}
    >
      <Dialog.Panel className={`absolute top-12 m-1 text-center`}>
        <div
          className={`${style} ${[
            'w-64',
            'rounded-md',
            'border-2',
            'bg-white',
            'p-2',
            'text-lg',
            'shadow-xl',
          ].join(' ')}`}
        >
          {children}
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default AlertDailog