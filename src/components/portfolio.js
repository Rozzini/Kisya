import Image, { ImageProps } from 'next/image'

export default function Portfolio() {
    return (
<section id="Portfolio">
<div className="flex items-center justify-center">
    <div  className="max-w-screen-lg grid grid-cols-4 grid-rows-5 gap-3 md:gap-10">
          
          <div className="col-span-2 row-span-2">
            <a href="/webpages" className="h-full">
              <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <div className="h-full flex items-center justify-center">
                    <img
                    src="/home/Webpages.png"
                    className="md:pt-28 pt-4"
                    alt="..." />
                </div>
                <div className="absolute top-2 left-4 md:top-4 md:right-4 flex">
                    <h3 class="md:text-2xl text-base text-black ">WEBPAGES</h3> 
                    <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                    </svg>
                </div>
              </div>
            </a>          
          </div>

          <div className="col-span-2 row-span-2 col-start-3">
            <a href="/logos" className="h-full">

            <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                  <div className="h-full flex items-center justify-center">
                    <img
                      src="/home/Logos.png"
                      className="p-2 mb-6 md:p-16"
                      alt="..." />
                  </div>
                  <div className="absolute top-2 left-4 md:top-4 md:right-4 flex">
                    <h3 class="md:text-2xl text-base text-black ">LOGOS</h3> 
                    <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                    </svg>
                </div>
              </div>
            </a>

          </div>


          <div className="col-span-4 row-span-2 row-start-3">
            <a href="/projects" className="h-full">
              <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <div className="flex items-center justify-center">
                  <img
                    src="/home/Projects.png"
                    className="pt-12 px-4"
                    alt="..." />
                </div>
                <div className="absolute top-2 left-4 md:top-4 md:right-4 flex">
                    <h3 class="md:text-2xl text-base text-black ">PROJECTS</h3> 
                    <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                    </svg>
                </div>
              </div>
            </a>
          </div>


          <div className="col-span-2 row-start-5">
            <a href="/icons" className="">
              <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                  <div className="h-full flex items-center justify-center">
                    <img
                      src="/home/Icons.png"
                      className="p-2"
                      alt="..." />
                  </div>
                  <div className="absolute top-2 left-4 md:top-4 md:right-4 flex">
                    <h3 class="text-sm md:text-2xl text-base text-black ">ICONS</h3> 
                    <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                    </svg>
                </div>
              </div>
            </a>
          </div>


          <div className="col-span-2 col-start-3 row-start-5">
            <a href="/socialMedia" className="">
                <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                    <div className="h-full flex items-center justify-center">
                      <img
                        src="/home/SocialMedia.png"
                        className=""
                        alt="..." />
                    </div>
                    <div className="absolute top-2 left-4 md:top-4 md:right-4 flex">
                      <h3 class="text-sm md:text-2xl text-base text-black ">SOCIAL MEDIA</h3> 
                      <svg class="sm:ml-2 h-5 w-5 md:h-7 md:w-7" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6042 9.75209L7.20107 25.1552C7.00732 25.349 6.78128 25.4458 6.52295 25.4458C6.26462 25.4458 6.03857 25.349 5.84482 25.1552C5.65107 24.9615 5.5542 24.7354 5.5542 24.4771C5.5542 24.2188 5.65107 23.9927 5.84482 23.799L21.2479 8.39584H12.7229C12.4485 8.39584 12.2184 8.30247 12.0327 8.11571C11.847 7.92894 11.7542 7.69752 11.7542 7.42144C11.7542 7.14535 11.847 6.91581 12.0327 6.73282C12.2184 6.54984 12.4485 6.45834 12.7229 6.45834H23.5729C23.8474 6.45834 24.0775 6.55118 24.2632 6.73686C24.4489 6.92254 24.5417 7.15261 24.5417 7.42709V18.2771C24.5417 18.5516 24.4483 18.7817 24.2616 18.9673C24.0748 19.153 23.8434 19.2458 23.5673 19.2458C23.2912 19.2458 23.0617 19.153 22.8787 18.9673C22.6957 18.7817 22.6042 18.5516 22.6042 18.2771V9.75209Z" fill="black"/>
                      </svg>
                  </div>
                </div>
              </a>
          </div>
      </div>
      </div>
</section>

    )
}


