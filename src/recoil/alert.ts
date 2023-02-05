import {
  BellIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import { atom, selector } from 'recoil'
import { AlertColorType, AlertType, COLOR_TYPE } from '../types'

export const AlertAtom = atom<AlertType>({
  key: 'alert',
  default: {
    open: false,
    message: null,
    color: '',
    time: 0,
  },
})

export const AlertColorSelector = selector<AlertColorType>({
  key: 'alert.color',
  get: ({ get }) => {
    const alert = get(AlertAtom)

    switch (alert.color) {
      case COLOR_TYPE.GREEN:
        return {
          border: 'border-emerald-400',
          bg: 'bg-emerald-100',
          text: 'text-emerald-900',
          icon: 'text-emerald-700',
        }
      case COLOR_TYPE.RED:
        return {
          border: 'border-red-400',
          bg: 'bg-red-100',
          text: 'text-red-900',
          icon: 'text-red-700',
        }
      default:
        return {
          border: 'border-gray-400',
          bg: 'bg-white',
          text: 'text-gray-900',
          icon: 'text-gray-700',
        }
    }
  },
})

export const AlertIconSelector = selector({
  key: 'alert.icon',
  get: ({ get }) => {
    const alert = get(AlertAtom)

    switch (alert.color) {
      case COLOR_TYPE.GREEN:
        return CheckCircleIcon

      case COLOR_TYPE.RED:
        return ExclamationCircleIcon
      default:
        return BellIcon
    }
  },
})
