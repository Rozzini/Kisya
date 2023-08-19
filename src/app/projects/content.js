"use client"


import React from 'react';
import Popup from 'reactjs-popup';

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

export default function Content() {
    return (
<section id="Logos">
    <div className="flex flex-col items-center justify-center">

        
        <div className="max-w-screen-2xl w-full grid grid-cols-2 grid-rows-5 gap-4 md:gap-8">
            <div className="col-span-2">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                  src="/projects/Project1.png"
                                className="p-8 md:p-12 lg:p-32"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4 " onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                              src="/projects/Project1.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>


            <div className="row-start-2">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                  src="/projects/Project2.png"
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
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4 " onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                              src="/projects/Project2.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>


            <div className="row-start-2">
                    <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                  src="/projects/Project3.png"
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
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4 " onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                              src="/projects/Project3.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                  src="/projects/Project4.png"
                                  className="p-8 md:p-12 lg:p-32"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4 " onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                              src="/projects/Project4.png"
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
                                  src="/projects/Project5.png"
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
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4 " onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                              src="/projects/Project5.png"
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
                                  src="/projects/Project6.png"
                                  className="p-4 md:p-8 lg:p-16"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4 " onClick={close}>
 src="/projects/Project                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                              src="/projects/Project6.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="row-start-5">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                  src="/projects/Project7.png"
                                  className="p-4 md:p-8 lg:p-16"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                       {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4 " onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                              src="/projects/Project7.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="row-start-5">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                  src="/projects/Project8.png"
                                  className="p-4 md:p-8 lg:p-16"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                        {close => (
                        <div className="w-full relative justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4 " onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                              src="/projects/Project8.png"
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