import { XMarkIcon } from '@heroicons/react/24/outline'
import { FC, ReactNode, useEffect } from 'react'
import { useAlert } from '../../hooks/useAlert'
import { AlertDailog } from '../ui/elements/AlertDailog'

type AlertProps = {
  children: ReactNode
}

export const Alert: FC<AlertProps> = ({ children }) => {
  const { alert, hideAlert, color, Icon } = useAlert()

  useEffect(() => {
    if (alert.open) {
      setTimeout(() => {
        hideAlert()
      }, alert.time)
    }
    return
  }, [alert.open, alert.time, hideAlert])

  if (!alert.open) return <>{children}</>

  return (
    <>
      <AlertDailog
        open={alert.open}
        style={` ${color?.bg} ${color?.border}`}
        onClose={() => hideAlert()}
      >
        <div className="flex">
          <Icon className={`${color?.icon} w-7 flex-none`} />
          <div className={`${color?.text} grow `}>{alert.message}</div>
          <div className="flex-none p-1 rounded-full cursor-pointer hover:opacity-50">
            <XMarkIcon
              className={`${color?.icon} w-5`}
              onClick={() => hideAlert()}
            />
          </div>
        </div>
      </AlertDailog>
      <>{children}</>
    </>
  )
}
