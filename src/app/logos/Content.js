"use client"

import React from 'react';
import Popup from 'reactjs-popup';

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

export default function Logos() {
    return (
<section id="Logos">
    <div className="flex flex-col items-center justify-center">

        <div className="max-w-screen-lg grid grid-cols-4 grid-rows-5 gap-6">
            
            <div className="col-span-2 row-span-2">
                    <Popup trigger={
                        <div className="h-full aspect-square rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo1.png"
                                className="p-2 md:p-6 w-72"
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
                            src="/logos/logo1.png"
                            className="p-4 md:p-16 bg-white"
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
                            <div className="absolute top-4 right-4">
                                <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9 31.4L31 24.95C31.3667 24.7167 31.55 24.4 31.55 24C31.55 23.6 31.3667 23.2833 31 23.05L20.9 16.6C20.5333 16.3333 20.15 16.3083 19.75 16.525C19.35 16.7417 19.15 17.0833 19.15 17.55V30.45C19.15 30.9167 19.35 31.2583 19.75 31.475C20.15 31.6917 20.5333 31.6667 20.9 31.4ZM24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05833 11.65 9.875 9.85C11.6917 8.05 13.8167 6.625 16.25 5.575C18.6833 4.525 21.2667 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7333 43.475 29.3167 42.425 31.75C41.375 34.1833 39.95 36.3083 38.15 38.125C36.35 39.9417 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44ZM24 41C28.7333 41 32.75 39.3417 36.05 36.025C39.35 32.7083 41 28.7 41 24C41 19.2667 39.35 15.25 36.05 11.95C32.75 8.65 28.7333 7 24 7C19.3 7 15.2917 8.65 11.975 11.95C8.65833 15.25 7 19.2667 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3 41 24 41Z" fill="black"/>
                                </svg>
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
                            src="/logos/logo2.png"
                            className="p-4 md:p-16 bg-white"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo3.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo4.png"
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
                                className="p-2 md:p-6 w-56"
                                alt="..." />
                            </div>
                            <div className="absolute top-4 right-4">
                                <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9 31.4L31 24.95C31.3667 24.7167 31.55 24.4 31.55 24C31.55 23.6 31.3667 23.2833 31 23.05L20.9 16.6C20.5333 16.3333 20.15 16.3083 19.75 16.525C19.35 16.7417 19.15 17.0833 19.15 17.55V30.45C19.15 30.9167 19.35 31.2583 19.75 31.475C20.15 31.6917 20.5333 31.6667 20.9 31.4ZM24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05833 11.65 9.875 9.85C11.6917 8.05 13.8167 6.625 16.25 5.575C18.6833 4.525 21.2667 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7333 43.475 29.3167 42.425 31.75C41.375 34.1833 39.95 36.3083 38.15 38.125C36.35 39.9417 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44ZM24 41C28.7333 41 32.75 39.3417 36.05 36.025C39.35 32.7083 41 28.7 41 24C41 19.2667 39.35 15.25 36.05 11.95C32.75 8.65 28.7333 7 24 7C19.3 7 15.2917 8.65 11.975 11.95C8.65833 15.25 7 19.2667 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3 41 24 41Z" fill="black"/>
                                </svg>
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
                            src="/logos/logo5.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo6.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo7.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo8.png"
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
                                className="p-2 md:p-6 w-44"
                                alt="..." />
                            </div>
                            <div className="absolute top-4 right-4">
                                <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9 31.4L31 24.95C31.3667 24.7167 31.55 24.4 31.55 24C31.55 23.6 31.3667 23.2833 31 23.05L20.9 16.6C20.5333 16.3333 20.15 16.3083 19.75 16.525C19.35 16.7417 19.15 17.0833 19.15 17.55V30.45C19.15 30.9167 19.35 31.2583 19.75 31.475C20.15 31.6917 20.5333 31.6667 20.9 31.4ZM24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05833 11.65 9.875 9.85C11.6917 8.05 13.8167 6.625 16.25 5.575C18.6833 4.525 21.2667 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7333 43.475 29.3167 42.425 31.75C41.375 34.1833 39.95 36.3083 38.15 38.125C36.35 39.9417 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44ZM24 41C28.7333 41 32.75 39.3417 36.05 36.025C39.35 32.7083 41 28.7 41 24C41 19.2667 39.35 15.25 36.05 11.95C32.75 8.65 28.7333 7 24 7C19.3 7 15.2917 8.65 11.975 11.95C8.65833 15.25 7 19.2667 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3 41 24 41Z" fill="black"/>
                                </svg>
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
                            src="/logos/logo9.png"
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
                                className="p-2 md:p-6 w-44"
                                alt="..." />
                            </div>
                            <div className="absolute top-4 right-4">
                                <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9 31.4L31 24.95C31.3667 24.7167 31.55 24.4 31.55 24C31.55 23.6 31.3667 23.2833 31 23.05L20.9 16.6C20.5333 16.3333 20.15 16.3083 19.75 16.525C19.35 16.7417 19.15 17.0833 19.15 17.55V30.45C19.15 30.9167 19.35 31.2583 19.75 31.475C20.15 31.6917 20.5333 31.6667 20.9 31.4ZM24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05833 11.65 9.875 9.85C11.6917 8.05 13.8167 6.625 16.25 5.575C18.6833 4.525 21.2667 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7333 43.475 29.3167 42.425 31.75C41.375 34.1833 39.95 36.3083 38.15 38.125C36.35 39.9417 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44ZM24 41C28.7333 41 32.75 39.3417 36.05 36.025C39.35 32.7083 41 28.7 41 24C41 19.2667 39.35 15.25 36.05 11.95C32.75 8.65 28.7333 7 24 7C19.3 7 15.2917 8.65 11.975 11.95C8.65833 15.25 7 19.2667 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3 41 24 41Z" fill="black"/>
                                </svg>
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
                            src="/logos/logo10.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

        </div>
        

        <div className="max-w-screen-lg grid grid-cols-4 grid-rows-4 gap-6 pt-6">
            <div className="col-span-2 row-span-2">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo11.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo11.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo12.png"
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
                                className="p-4 md:p-14 lg:p-20 w-64"
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
                            src="/logos/logo13.png"
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
                                className="p-4 md:p-14 lg:p-20 w-64"
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
                            src="/logos/logo14.png"
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
                                className="p-4 md:p-14 lg:p-20 w-64"
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
                            src="/logos/logo15.png"
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
                                className="p-4 md:p-14 lg:p-20 w-64"
                                alt="..." />
                            </div>
                            <div className="absolute top-4 right-4">
                                <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9 31.4L31 24.95C31.3667 24.7167 31.55 24.4 31.55 24C31.55 23.6 31.3667 23.2833 31 23.05L20.9 16.6C20.5333 16.3333 20.15 16.3083 19.75 16.525C19.35 16.7417 19.15 17.0833 19.15 17.55V30.45C19.15 30.9167 19.35 31.2583 19.75 31.475C20.15 31.6917 20.5333 31.6667 20.9 31.4ZM24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05833 11.65 9.875 9.85C11.6917 8.05 13.8167 6.625 16.25 5.575C18.6833 4.525 21.2667 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7333 43.475 29.3167 42.425 31.75C41.375 34.1833 39.95 36.3083 38.15 38.125C36.35 39.9417 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44ZM24 41C28.7333 41 32.75 39.3417 36.05 36.025C39.35 32.7083 41 28.7 41 24C41 19.2667 39.35 15.25 36.05 11.95C32.75 8.65 28.7333 7 24 7C19.3 7 15.2917 8.65 11.975 11.95C8.65833 15.25 7 19.2667 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3 41 24 41Z" fill="black"/>
                                </svg>
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
                            src="/logos/logo16.png"
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
                                className="p-2 md:p-6 w-56"
                                alt="..." />
                            </div>
                            <div className="absolute top-4 right-4">
                                <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9 31.4L31 24.95C31.3667 24.7167 31.55 24.4 31.55 24C31.55 23.6 31.3667 23.2833 31 23.05L20.9 16.6C20.5333 16.3333 20.15 16.3083 19.75 16.525C19.35 16.7417 19.15 17.0833 19.15 17.55V30.45C19.15 30.9167 19.35 31.2583 19.75 31.475C20.15 31.6917 20.5333 31.6667 20.9 31.4ZM24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05833 11.65 9.875 9.85C11.6917 8.05 13.8167 6.625 16.25 5.575C18.6833 4.525 21.2667 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7333 43.475 29.3167 42.425 31.75C41.375 34.1833 39.95 36.3083 38.15 38.125C36.35 39.9417 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44ZM24 41C28.7333 41 32.75 39.3417 36.05 36.025C39.35 32.7083 41 28.7 41 24C41 19.2667 39.35 15.25 36.05 11.95C32.75 8.65 28.7333 7 24 7C19.3 7 15.2917 8.65 11.975 11.95C8.65833 15.25 7 19.2667 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3 41 24 41Z" fill="black"/>
                                </svg>
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
                            src="/logos/logo17.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo18.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>
        </div>


        <div className="max-w-screen-lg grid grid-cols-4 grid-rows-5 gap-6 pt-6">
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo19.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo20.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo21.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo22.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo23.png"
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
                                className="p-2 md:p-6 w-56"
                                alt="..." />
                            </div>
                            <div className="absolute top-4 right-4">
                                <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9 31.4L31 24.95C31.3667 24.7167 31.55 24.4 31.55 24C31.55 23.6 31.3667 23.2833 31 23.05L20.9 16.6C20.5333 16.3333 20.15 16.3083 19.75 16.525C19.35 16.7417 19.15 17.0833 19.15 17.55V30.45C19.15 30.9167 19.35 31.2583 19.75 31.475C20.15 31.6917 20.5333 31.6667 20.9 31.4ZM24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05833 11.65 9.875 9.85C11.6917 8.05 13.8167 6.625 16.25 5.575C18.6833 4.525 21.2667 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7333 43.475 29.3167 42.425 31.75C41.375 34.1833 39.95 36.3083 38.15 38.125C36.35 39.9417 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44ZM24 41C28.7333 41 32.75 39.3417 36.05 36.025C39.35 32.7083 41 28.7 41 24C41 19.2667 39.35 15.25 36.05 11.95C32.75 8.65 28.7333 7 24 7C19.3 7 15.2917 8.65 11.975 11.95C8.65833 15.25 7 19.2667 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3 41 24 41Z" fill="black"/>
                                </svg>
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
                            src="/logos/logo24.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo25.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo26.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo27.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo28.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo29.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 row-start-5">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo30.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo30.png"
                            className="p-4 md:p-16 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
            </div>

            <div className="col-span-2 col-start-3 row-start-5">
                <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="/logos/logo31.png"
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
                            <button className="absolute top-2 right-2" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </button>
                            <img
                            src="/logos/logo31.png"
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