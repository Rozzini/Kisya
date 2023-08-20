"use client"


import React from 'react';
import Popup from 'reactjs-popup';

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

export default function Content() {
    return (
<section id="Logos">
    <div className="flex flex-col items-center justify-center">

    <div className="max-w-screen-2xl w-full grid grid-cols-2 grid-rows-6 gap-4 md:gap-8">
        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpages/Webpage1.png"
                                className="p-6 md:p-16"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                    >
                    {close => (
                        <div className="w-full overflow-auto relative flex justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpages/Webpage1.png"
                            className="p-1 md:p-8 md:w-8/12 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
            <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <a href="https://seals.flexn.io/" target="_blank" className='hover:border'>
                    <div className="h-full flex items-center justify-center">
                        <img
                        src="./Webpages/Webpage2.png"
                        className="p-4 md:p-8"
                        alt="..." />
                    </div>
                    <div className="absolute z-40 top-2 right-4 md:top-4 md:right-4 flex space-x-4">
                            <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                            </svg>
                    </div>
                </a>
            </div>            
        </div>

        <div >  
            <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <a href="https://www.sport1.tv/welcome" target="_blank" className='hover:border'>
                    <div className="h-full flex items-center justify-center">
                        <img
                        src="./Webpages/Webpage3.png"
                        className="p-6 md:p-12"
                        alt="..." />
                    </div>
                    <div className="absolute z-40 top-2 right-4 md:top-4 md:right-4 flex space-x-4">
                            <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                            </svg>
                    </div>
                </a>
            </div> 
        </div>

        <div >
            <Popup trigger={
                <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <div className="h-full flex items-center justify-center">
                        <img
                        src="./Webpages/Webpage4.png"
                        className="absolute bottom-0 pr-8 lg:pr-20"
                        alt="..." />
                    </div>
                </div>}
                {...{overlayStyle}}
                modal
                lockScroll
            >
            
            {close => (
                <div className="w-full relative flex justify-center items-center bg-white">
                    <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4" onClick={close}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                        </svg>
                    </div>
                    <img
                    src="./Webpages/Webpage4.png"
                    className="p-1 md:p-8 md:w-8/12 bg-white"
                    alt="..." />
                </div>
            )}
            </Popup>
        </div>

        <div >
            <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <a href="https://create.flexn.org/" target="_blank" className='hover:border'>
                    <div className="h-full flex items-center justify-center">
                        <img
                        src="./Webpages/Webpage5.png"
                        className="pl-4 md:pl-8"
                        alt="..." />
                    </div>
                    <div className="absolute z-40 top-2 right-4 md:top-4 md:right-4 flex space-x-4">
                            <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                            </svg>
                    </div>
                </a>
            </div>
        </div>

        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpages/Webpage6.png"
                                className=""
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative flex justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpages/Webpage6.png"
                            className="p-1 md:p-8 md:w-8/12 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
            <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <a href="https://www.flexn.org/" target="_blank" className='hover:border'>
                    <div className="h-full flex items-center justify-center">
                        <img
                        src="./Webpages/Webpage7.png"
                        className="absolute bottom-0 pr-8 lg:pr-20"
                        alt="..." />
                    </div>
                    <div className="absolute z-40 top-2 right-4 md:top-4 md:right-4 flex space-x-4">
                            <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                            </svg>
                    </div>
                </a>
            </div>
        </div>

        <div >
            <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <a href="https://www.amazon.com/Deutsche-Streaming-Allianz-GmbH-Krimirausch/dp/B08ZQVJZVC" target="_blank" className='hover:border'>
                    <div className="h-full flex items-center justify-center">
                        <img
                        src="./Webpages/Webpage8.png"
                        className="p-6 md:p-16"
                        alt="..." />
                    </div>
                    <div className="absolute z-40 top-2 right-4 md:top-4 md:right-4 flex space-x-4">
                            <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                            </svg>
                    </div>
                </a>
            </div>
        </div>

        <div >
            <Popup trigger={
                        <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                            <div className="h-full flex items-center justify-center">
                                <img
                                src="./Webpages/Webpage9.png"
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
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpages/Webpage9.png"
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
                                src="./Webpages/Webpage10.png"
                                className="p-4 md:pt-12 md:px-12"
                                alt="..." />
                            </div>
                        </div>}
                        {...{overlayStyle}}
                        modal
                        lockScroll
                    >

                    {close => (
                        <div className="w-full relative flex justify-center items-center bg-white">
                            <div className="hover:cursor-pointer absolute top-1 right-1 md:top-4 md:right-4" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                </svg>
                            </div>
                            <img
                            src="./Webpages/Webpage10.png"
                            className="p-1 md:p-8 md:w-8/12 bg-white"
                            alt="..." />
                        </div>
                    )}
                    </Popup>
        </div>

        <div >
            <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <a href="https://www.flexn.io/" target="_blank" className='hover:border'>
                    <div className="h-full flex items-center justify-center">
                        <img
                        src="./Webpages/Webpage11.png"
                        className=""
                        alt="..." />
                    </div>
                    <div className="absolute z-40 top-2 right-4 md:top-4 md:right-4 flex space-x-4">
                            <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                            </svg>
                    </div>
                </a>
            </div>
        </div>

        <div >
            <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <a href="https://renative.org/" target="_blank" className='hover:border'>
                    <div className="h-full flex items-center justify-center">
                        <img
                        src="./Webpages/Webpage12.png"
                        className="pl-2 md:pl-4"
                        alt="..." />
                    </div>
                    <div className="absolute z-40 top-2 right-4 md:top-4 md:right-4 flex space-x-4">
                            <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                            </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>

    </div>
    
</section>

    )
}