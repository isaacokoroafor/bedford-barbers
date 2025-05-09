import clsx from 'clsx'
import { Fragment } from 'react'
import { Description, Field, Label, Textarea, Input, Button } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
  return (
    <>
    <h2 id="contact" className='scroll-mt-28'>
        <EnvelopeIcon className='h-10 inline'></EnvelopeIcon> Bedford Barber co
    </h2>
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className=" text-white">Your Email</Label>
        <Description className="text-lg text-white/50">So we can get back to you.</Description>
        <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
        />
      </Field>
    </div>
    <div className="w-full max-w-lg px-4">
      <Field>
        <Label className=" text-white">Message</Label>
        <Description className="text-lg text-white/50">We will get back to you asap.</Description>
        <Textarea
          className={clsx(
            'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
          rows={3}
        />
      </Field>
      
    <Button className="ml-auto mr-0 mt-5 flex items-center cursor-pointer gap-2 rounded-md border-gray-700 px-3 py-1.5  text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline  data-hover:bg-white/5 ">
      Send email
    </Button>
    </div>
    <div className="w-full max-w-md px-4">

    </div>
    </>
  )
}