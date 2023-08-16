"use client"


import React from 'react';
import Popup from 'reactjs-popup';

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

export default function Content() {
    return (
<section id="Logos">
    <div className="flex flex-col items-center justify-center">

    <div className="max-w-screen-lg grid grid-cols-2 grid-rows-6 gap-2 md:gap-6">
        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage1.png"
                                className="p-1 md:p-8"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                    >
                    {close => (
                        <div className="w-full overflow-auto relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage1.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage2.png"
                                className="p-1 md:p-8"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage2.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
                   <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage3.png"
                                className="p-1 md:p-8"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage3.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>     
        </div>

        <div >
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage4.png"
                                className="pt-8"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >
                    
                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage4.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
                        <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage5.png"
                                className="p-1 md:p-8"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >
                    
                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage5.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage6.png"
                                className=""
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage6.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage7.png"
                                className="pt-12"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage7.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage8.png"
                                className="p-1 md:p-8"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage8.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage9.png"
                                className="p-1 md:p-8"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage9.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage10.png"
                                className="pt-12 px-12"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage10.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage11.png"
                                className=""
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage11.png"
                            className="p-1 md:p-8 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpage12.png"
                                className="p-1 md:p-8"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-[-30px] right-1 md:top-[-30px] md:right-[-30px]" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpage12.png"
                            className="p-1 md:p-8 bg-white"
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