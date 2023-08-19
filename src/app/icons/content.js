"use client"


import React from 'react';
import Popup from 'reactjs-popup';

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

export default function Content() {
    return (
<section id="Logos">
    <div className="flex flex-col items-center justify-center">

        <div className="max-w-screen-2xl w-full grid grid-cols-2 gap-4 md:gap-8">


                <div>
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/Icons/Icons1.png"
                                className="p-12 md:p-16 lg:p-20 xl:p-40"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative flex justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/Icons/Icons1.png"
                            className="p-4 md:p-16 bg-white w-9/12"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
                </div>       

                <div>
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/Icons/Icons2.png"
                                className="p-12 md:p-16 lg:p-20 xl:p-40"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative flex justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/Icons/Icons2.png"
                            className="p-4 md:p-16 w-9/12 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
                </div>       

                <div>
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/Icons/Icons3.png"
                                className="p-4 sm:p-10 md:p-12 lg:p-16"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative flex justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/Icons/Icons3.png"
                            className="p-4 md:p-16 w-9/12 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
                </div>       

                <div>
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/Icons/Icons4.png"
                                className="p-16 md:p-20 lg:p-28 xl:p-52"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative flex justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/Icons/Icons4.png"
                            className="p-4 md:p-16 w-9/12 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
                </div>       

                <div>
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/Icons/Icons5.png"
                                className="p-16 md:p-20 lg:p-28 xl:p-52"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative flex justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/Icons/Icons5.png"
                            className="p-4 md:p-16 w-9/12 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
                </div>       

                <div>
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/Icons/Icons6.png"
                                className="p-12 md:p-16 lg:p-20 xl:p-40"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative flex justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/Icons/Icons6.png"
                            className="p-4 md:p-16 w-9/12 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
                </div>       

        </div>
        

    </div>
    
</section>

    )
}