"use client"

import React from 'react';
import Popup from 'reactjs-popup';

const overlayStyle = { background: 'rgba(0,0,0,0.5)'};

export default function Logos() {
    return (
<section id="Logos">
    <div className="flex flex-col items-center justify-center">

        <div className="max-w-screen-lg grid grid-cols-4 grid-rows-5 gap-2 md:gap-6">
            
            <div className="col-span-2 row-span-2">
                    <Popup trigger={
                        <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo1.png"
                                className="p-2 md:p-6 w-64"
                                alt="..." />
                            </div>
                            
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo1.png"
                            className="p-8 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 col-start-3">
                    <Popup trigger={
                        <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo2.png"
                                className="p-2 md:p-6 w-56"
                                alt="..." />
                            </div>
                            
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo2.png"
                            className="p-8 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-start-3 row-start-2">
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo3.png"
                                className="p-2 md:p-6 w-52"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                         {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo3.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-start-4 row-start-2">
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo4.png"
                                className="p-2 md:p-6 w-52"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo4.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 row-start-3">
                    <Popup trigger={
                        <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo5.png"
                                className="p-2 md:p-6 w-16 md:w-28"
                                alt="..." />
                            </div>
                            
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo5.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-start-1 row-start-4">
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo6.png"
                                className="p-2 md:p-6 w-32"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo6.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-start-2 row-start-4">
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo7.png"
                                className="p-2 md:p-6 w-32"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo7.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 row-span-2 col-start-3 row-start-3">
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo8.png"
                                className="p-2 md:p-6 w-90"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo8.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 row-start-5">
                    <Popup trigger={
                        <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo9.png"
                                className="p-2 md:p-6 w-16 md:w-28"
                                alt="..." />
                            </div>
                            
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo9.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 col-start-3 row-start-5">
                    <Popup trigger={
                        <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo10.png"
                                className="p-2 md:p-6 w-16 md:w-28"
                                alt="..." />
                            </div>
                            
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo10.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

        </div>
        

        <div className="max-w-screen-lg grid grid-cols-4 grid-rows-4 gap-2 md:gap-6 pt-2 md:pt-6">
            <div className="col-span-2 row-span-2">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo11.png"
                                className="p-2 md:p-6 w-32 md:w-56"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo11.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 row-span-2 col-start-3">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo12.png"
                                className="p-2 md:p-6 w-40 md:w-56"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo12.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="row-start-3">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo13.png"
                                className="p-4 md:p-14 lg:p-20 w-16 md:w-64"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo13.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="row-start-3">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo14.png"
                                className="p-4 md:p-14 lg:p-20 w-16 md:w-64"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo14.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="row-start-3">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo15.png"
                                className="p-4 md:p-14 lg:p-20 w-16 md:w-64"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo15.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="row-start-3">
                <Popup trigger={
                        <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo16.png"
                                className="p-4 md:p-8 lg:p-20 w-56"
                                alt="..." />
                            </div>
                            
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo16.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 row-start-4">
                <Popup trigger={
                        <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo17.png"
                                className="p-2 md:p-6 w-24 sm:w-56"
                                alt="..." />
                            </div>
                            
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo17.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 col-start-3 row-start-4">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo18.png"
                                className="p-2 md:p-6 w-16 md:w-32"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo18.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>
        </div>


        <div className="max-w-screen-lg grid grid-cols-4 grid-rows-4 gap-2 md:gap-6 pt-2 md:pt-6">
            <div>
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo19.png"
                                className="p-4 md:p-12 lg:p-16 w-64"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo19.png"
                            className="p-4 md:p-16 bg-white"
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
                                src="/logos/logo20.png"
                                className="p-4 md:p-10 lg:p-16 w-56"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo20.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-start-1 row-start-2">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo21.png"
                                className="p-4 md:p-10 lg:p-16 w-56"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo21.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-start-2 row-start-2">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo22.png"
                                className="p-4 md:p-10 lg:p-16 w-56"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo22.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 row-span-2 col-start-3 row-start-1">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo23.png"
                                className="p-2 md:p-6 w-56"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo23.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 row-start-3">
                <Popup trigger={
                        <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo24.png"
                                className="p-2 md:p-6 w-16 md:w-32"
                                alt="..." />
                            </div>
                            
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo24.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-start-3 row-start-3">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo25.png"
                                className="p-2 md:p-6 w-16 md:w-32"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo25.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-start-4 row-start-3">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo26.png"
                                className="p-2 md:p-6 w-16 md:w-32"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo26.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="row-start-4">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo27.png"
                                className="p-2 md:p-6 w-24 md:w-32"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo27.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="row-start-4">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo28.png"
                                className="p-2 md:p-6 w-24 md:w-32"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo28.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 row-start-4">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo29.png"
                                className="p-2 md:p-6 w-56"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="/images/Biglogo29.png"
                            className="p-4 md:p-16 bg-white"
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