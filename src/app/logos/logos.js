"use client"

import { Popover, Transition } from "@headlessui/react"

export default function Logos() {
    return (
<section id="Logos">
    <div className="flex flex-col items-center justify-center">

        <div className="max-w-screen-lg grid grid-cols-4 grid-rows-5 gap-3">
            
            <Popover className="col-span-2 row-span-2">
                <Popover.Button className="h-full">
                    <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo1.png"
                                className="p-1 md:p-8"
                                alt="..." />
                            </div>
                    </div>
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 bg-black opacity-30"/>
                    <Popover.Panel 
                        className="absolute left-0 w-full flex justify-center items-center"
                        >
                            <div className="bg-white flex justify-center p-12">
                                    <img
                                    src="/logos/logo1.png"
                                    className=""
                                    alt="..." />
                            </div>
                    </Popover.Panel>
            </Popover>


            <Popover className="col-span-2 col-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo2.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </Popover>

            <div className="col-start-3 row-start-2">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo3.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-start-4 row-start-2">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo4.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 row-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo5.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-start-1 row-start-4">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo6.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-start-2 row-start-4">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo7.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 row-span-2 col-start-3 row-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo8.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 row-start-5">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo9.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 col-start-3 row-start-5">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo10.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

        </div>
        

        <div className="max-w-screen-lg grid grid-cols-4 grid-rows-4 gap-3 pt-3">
            <div className="col-span-2 row-span-2">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo11.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 row-span-2 col-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo12.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="row-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo13.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="row-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo14.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="row-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo15.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="row-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo16.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 row-start-4">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo17.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 col-start-3 row-start-4">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo18.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>
        </div>


        <div className="max-w-screen-lg grid grid-cols-4 grid-rows-5 gap-3 pt-3">
            <div >
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo19.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div >
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo20.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-start-1 row-start-2">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo21.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-start-2 row-start-2">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo22.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 row-span-2 col-start-3 row-start-1">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo23.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 row-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo24.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-start-3 row-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo25.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-start-4 row-start-3">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo26.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="row-start-4">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo27.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="row-start-4">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo28.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 row-start-4">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo29.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 row-start-5">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo30.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-span-2 col-start-3 row-start-5">
                <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <a href="/slides" className="">
                        <div className="h-full flex items-center justify-center">
                            <img
                            src="/logos/logo31.png"
                            className="p-1 md:p-8"
                            alt="..." />
                        </div>
                    </a>
                </div>
            </div>

        </div>


    </div>
    
</section>

    )
}