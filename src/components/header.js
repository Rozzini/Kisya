"use client"

import { Popover, Transition } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"

export default function Header() {
    return (
        <Popover class="sticky top-0 z-10 w-full  text-[#9D9D9D] bg-white border-b border-[#9D9D9D]">
            <div class="py-2 md:py-4 container flex items-center justify-between mx-auto md:flex-row">
                <a href="/" class="font-medium text-gray-900 title-font md:mb-0 hover:text-[#565656]">
                    AP
                </a>
                <nav class="hidden sm:flex flex-wraph-full  items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
                    <a href="#About" class="mr-5 font-medium hover:text-black">About</a>
                    <a href="#Portfolio" class="mr-5 font-medium hover:text-black">Portfolio</a>
                    <a href="#Contact" class="font-medium hover:text-black">Contact</a>
                </nav>

                <div className="flex grow item-center justify-end sm:hidden">
                    <Popover.Button className="inline-flex item-center justify-center
                    rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>

            <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30"/>
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
                >
                    
                    <div className="rounded-lg bg-white shadow-lg
                                    ring-l ring-black ring-opacity-5
                                    divide-y-2 divide-gray-50">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                <a href="/" className="text-black font-bold">AP</a>
                                    <div className="mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md
                                                                  bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500
                                                                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-6">
                                        <Popover.Button>
                                        <a href="#About" class="font-medium hover:text-black">About</a>

                                        </Popover.Button>
                                        <Popover.Button>
                                        <a href="#Portfolio" class="font-medium hover:text-black">Portfolio</a>
                                            
                                        </Popover.Button>
                                        <Popover.Button>
                                        <a href="#Contact" class="font-medium hover:text-black">Contact</a>
                                            
                                        </Popover.Button>
                                    </nav>
                                </div>
                                <div className="mt-6">
                                    <a href='Anastasiia_Polubynska_CV.pdf'
                                        target="_blank"
                                        rel="noreferrer"
                                        class="flex font-medium border-b border-white hover:text-[#565656] hover:border-black">
                                            CV
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.375 16.25C3.075 16.25 2.8125 16.1375 2.5875 15.9125C2.3625 15.6875 2.25 15.425 2.25 15.125V3.875C2.25 3.575 2.3625 3.3125 2.5875 3.0875C2.8125 2.8625 3.075 2.75 3.375 2.75H8.04375C8.20312 2.75 8.33672 2.80422 8.44453 2.91266C8.55234 3.02111 8.60625 3.15548 8.60625 3.31578C8.60625 3.47609 8.55234 3.60938 8.44453 3.71563C8.33672 3.82188 8.20312 3.875 8.04375 3.875H3.375V15.125H14.625V10.4563C14.625 10.2969 14.6792 10.1633 14.7877 10.0555C14.8961 9.94766 15.0305 9.89375 15.1908 9.89375C15.3511 9.89375 15.4844 9.94766 15.5906 10.0555C15.6969 10.1633 15.75 10.2969 15.75 10.4563V15.125C15.75 15.425 15.6375 15.6875 15.4125 15.9125C15.1875 16.1375 14.925 16.25 14.625 16.25H3.375ZM14.625 4.68125L7.55625 11.75C7.44375 11.8625 7.3125 11.9156 7.1625 11.9094C7.0125 11.9031 6.88125 11.8438 6.76875 11.7313C6.65625 11.6188 6.6 11.4875 6.6 11.3375C6.6 11.1875 6.65625 11.0563 6.76875 10.9438L13.8375 3.875H10.2938C10.1344 3.875 10.0008 3.82078 9.89297 3.71234C9.78516 3.60389 9.73125 3.46952 9.73125 3.30922C9.73125 3.14891 9.78516 3.01562 9.89297 2.90938C10.0008 2.80313 10.1344 2.75 10.2938 2.75H15.75V8.20625C15.75 8.36563 15.6958 8.49922 15.5873 8.60703C15.4789 8.71484 15.3445 8.76875 15.1842 8.76875C15.0239 8.76875 14.8906 8.71484 14.7844 8.60703C14.6781 8.49922 14.625 8.36563 14.625 8.20625V4.68125Z" fill="#565656"/>
                                            </svg>
                                    </a>
                                </div>
                            </div>
                    </div>
                </Popover.Panel>
            </Transition>

                <div class="hidden sm:block items-center h-full ">
                    <a href='Anastasiia_Polubynska_CV.pdf'
                    target="_blank"
                    rel="noreferrer"
                    class="flex font-medium border-b border-white hover:text-[#565656] hover:border-black">
                        CV
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.375 16.25C3.075 16.25 2.8125 16.1375 2.5875 15.9125C2.3625 15.6875 2.25 15.425 2.25 15.125V3.875C2.25 3.575 2.3625 3.3125 2.5875 3.0875C2.8125 2.8625 3.075 2.75 3.375 2.75H8.04375C8.20312 2.75 8.33672 2.80422 8.44453 2.91266C8.55234 3.02111 8.60625 3.15548 8.60625 3.31578C8.60625 3.47609 8.55234 3.60938 8.44453 3.71563C8.33672 3.82188 8.20312 3.875 8.04375 3.875H3.375V15.125H14.625V10.4563C14.625 10.2969 14.6792 10.1633 14.7877 10.0555C14.8961 9.94766 15.0305 9.89375 15.1908 9.89375C15.3511 9.89375 15.4844 9.94766 15.5906 10.0555C15.6969 10.1633 15.75 10.2969 15.75 10.4563V15.125C15.75 15.425 15.6375 15.6875 15.4125 15.9125C15.1875 16.1375 14.925 16.25 14.625 16.25H3.375ZM14.625 4.68125L7.55625 11.75C7.44375 11.8625 7.3125 11.9156 7.1625 11.9094C7.0125 11.9031 6.88125 11.8438 6.76875 11.7313C6.65625 11.6188 6.6 11.4875 6.6 11.3375C6.6 11.1875 6.65625 11.0563 6.76875 10.9438L13.8375 3.875H10.2938C10.1344 3.875 10.0008 3.82078 9.89297 3.71234C9.78516 3.60389 9.73125 3.46952 9.73125 3.30922C9.73125 3.14891 9.78516 3.01562 9.89297 2.90938C10.0008 2.80313 10.1344 2.75 10.2938 2.75H15.75V8.20625C15.75 8.36563 15.6958 8.49922 15.5873 8.60703C15.4789 8.71484 15.3445 8.76875 15.1842 8.76875C15.0239 8.76875 14.8906 8.71484 14.7844 8.60703C14.6781 8.49922 14.625 8.36563 14.625 8.20625V4.68125Z" fill="#565656"/>
                        </svg>
                    </a>
                </div>
            </div>
        </Popover>

    )
}

// hidden md:block 