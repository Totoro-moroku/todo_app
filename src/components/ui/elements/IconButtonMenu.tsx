import { Menu, Transition } from '@headlessui/react'
import { FC, ReactNode } from 'react'
import { IconBox } from '../atoms/IconBox'
import { IconButton } from '../atoms/IconButton'

type Menu = {
  children?: ReactNode
  items: any[]
  title?: ReactNode
  className?: string
}

export const IconButtonMenu: FC<Menu> = ({
  children,
  title,
  className,
  items,
}) => {
  return (
    <Menu>
      {({ open, close }) => (
        <>
          <IconBox>
            <Menu.Button>
              <IconButton>{children}</IconButton>
            </Menu.Button>
          </IconBox>
          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {items && (
              <Menu.Items
                className={`${className} absolute right-0 z-20 mt-2 mr-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                {title || <div>{title}</div>}
                {items?.map((item, i) => (
                  <Menu.Item key={i}>
                    <div onClick={close}>{item}</div>
                  </Menu.Item>
                ))}
              </Menu.Items>
            )}
          </Transition>
        </>
      )}
    </Menu>
  )
}
