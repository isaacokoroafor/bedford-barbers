import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { ReactSVG } from "react-svg";
import { Navigation } from '../js/menu';
import { LogoIcon } from './svg/logo';
import { BooksyIcon } from './svg/booksy';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuBar() {
  return (
    <Disclosure as="nav" className="w-full overflow-hidden bg-black z-10 text-gray-100 sticky py-5 shadow-2xl shadow-white/5 top-0">
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
              <a href='/' aria-label='home' className='w-full flex ml-16  sm:ml-0 '>
	              <LogoIcon ></LogoIcon>
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-2 2xl:space-x-4 mt-4"
              data-animate="[&>a]:to:y-0|opacity-1|ease-back|stagger-0.09">
                {Navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-gray-100' : '',
                      'rounded-md translate-y-10 font-medium opacity-0 text-gray-200 ',
                    )}
                  >
                    <span className='flex scale-95 hover:scale-100 transition-discrete duration-300 hover:shadow-white/5'>
                    {item.name}

                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="inline-flex gap-1 md:gap-5 opacity-0 translate-x-full" 
                    data-animate="to:x-0|opacity-1|scrollTrigger.trigger-[&]|ease-back|scrollTrigger.scrub-true">
            <a href="https://booksy.com/en-gb/46833_bedford-barber-co_barber_143761_bedford" 
            className='group/headbooknow rounded [&>svg]:w-10 [&>svg]:h-10 flex py-2 px-10 border border-white/5  hover:shadow-white/50 hover:bg-white/5'>
            
                              <BooksyIcon></BooksyIcon>
            <span className='flex ml-2 scale-95 group-hover/shadow-white/50 transition-discrete duration-500 group-hover/headbooknow:brightness-125'>
            BOOK NOW

                </span>
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
                item.current ? 'text-white' : 'text-white',
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
