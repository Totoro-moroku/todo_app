import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment, ReactNode, useState } from 'react'
import { IconBox } from '../atoms/IconBox'

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
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Menu>
      <IconBox>
        <Menu.Button className="p-2 text-white rounded-full hover:bg-slate-300 hover:text-black">
          {children}
        </Menu.Button>
      </IconBox>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {items && (
          <Menu.Items
            className={`${className} absolute right-0 z-50 mt-2 mr-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            {title || <div>{title}</div>}
            {items?.map((item, i) => (
              <Menu.Item key={i}>
                <>{item}</>
              </Menu.Item>
            ))}
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  )
}
