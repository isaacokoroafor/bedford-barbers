import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { ReactSVG } from "react-svg";
import { Navigation } from '../js/menu';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuBar() {
  return (
    <Disclosure as="nav" className="w-full overflow-hidden text-gray-100">
      <div className="mx-auto ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <a href='/' className='w-full flex ml-12 sm:ml-0'>
              <ReactSVG loading={() => <span>Loading</span>}
              className='h-20 w-20 stroke-white' src='logo.svg'></ReactSVG>
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {Navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-gray-100' : '',
                      'rounded-md px-1 md:px-3 py-2 font-medium text-gray-200',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="inline-flex gap-1 md:gap-5">
            <a href="#book" className='rounded py-2 px-10 border border-gray-500'>
                BOOK NOW
            </a>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {Navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-gray-900 ' : 'text-gray-800',
                'block rounded-md px-3 py-2 text-lx3 font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
