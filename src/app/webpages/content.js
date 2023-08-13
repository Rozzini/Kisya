"use client"


import React from 'react';
import Popup from 'reactjs-popup';

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

export default function Content() {
    return (
<section id="Logos">
    <div className="flex flex-col items-center justify-center">

    <div className="max-w-screen-lg grid grid-cols-2 grid-rows-7 gap-3 md:gap-8">
        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/webpages/webpage1.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage1.png"
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
                                src="/webpages/webpage2.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage2.png"
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
                                src="/webpages/webpage3.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage3.png"
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
                                src="/webpages/webpage4.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage4.png"
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
                                src="/webpages/webpage5.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage5.png"
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
                                src="/webpages/webpage6.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage6.png"
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
                                src="/webpages/webpage7.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage7.png"
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
                                src="/webpages/webpage8.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage8.png"
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
                                src="/webpages/webpage9.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage9.png"
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
                                src="/webpages/webpage10.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage10.png"
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
                                src="/webpages/webpage11.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage11.png"
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
                                src="/webpages/webpage12.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage12.png"
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
                                src="/webpages/webpage13.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage13.png"
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
                                src="/webpages/webpage14.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/webpages/webpage14.png"
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