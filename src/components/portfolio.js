import Image, { ImageProps } from 'next/image'

export default function Portfolio() {
    return (
<section id="Portfolio">
<div className="flex items-center justify-center">
  <div  className="max-w-screen-lg grid grid-cols-4 grid-rows-5 gap-3 md:gap-10">
          
          <div className="col-span-2 row-span-2">
              <div className="h-full relative rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <div className="h-full flex items-center justify-center">
                    <img
                    src="/home/Webpages.png"
                    className="md:pt-28 pt-4"
                    alt="..." />
                </div>
                <div className="absolute top-2 left-2 md:top-4 md:right-4 flex">
                    <h3 class="md:text-2xl text-base text-black ">WEBPAGES</h3>
                    <svg class="h-5 w-5 sm:h-9 sm:w-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9 31.4L31 24.95C31.3667 24.7167 31.55 24.4 31.55 24C31.55 23.6 31.3667 23.2833 31 23.05L20.9 16.6C20.5333 16.3333 20.15 16.3083 19.75 16.525C19.35 16.7417 19.15 17.0833 19.15 17.55V30.45C19.15 30.9167 19.35 31.2583 19.75 31.475C20.15 31.6917 20.5333 31.6667 20.9 31.4ZM24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05833 11.65 9.875 9.85C11.6917 8.05 13.8167 6.625 16.25 5.575C18.6833 4.525 21.2667 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7333 43.475 29.3167 42.425 31.75C41.375 34.1833 39.95 36.3083 38.15 38.125C36.35 39.9417 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44ZM24 41C28.7333 41 32.75 39.3417 36.05 36.025C39.35 32.7083 41 28.7 41 24C41 19.2667 39.35 15.25 36.05 11.95C32.75 8.65 28.7333 7 24 7C19.3 7 15.2917 8.65 11.975 11.95C8.65833 15.25 7 19.2667 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3 41 24 41Z" fill="black"/>
                    </svg>
                </div>
              </div>


            {/* <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/webpages" className="">
                  <div class="md:text-2xl text-base text-black pt-1 pl-1 md:pt-4 md:pl-4 flex justify-left">
                      <h3 class="">WEBPAGES</h3>
                      <img
                      src="/misc/Arrow.png"
                      className="w-4 h-4 md:w-6 md:h-6"
                      alt="..." />
                  </div>
                  <div className="h-full flex items-center justify-center">
                                <img
                                src="/webpages/webpage4.png"
                                className="pt-8"
                                alt="..." />
                            </div>
              </a>
            </div> */}
           
          </div>


          <div className="col-span-2 row-span-2 col-start-3">

            <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <a href="/logos" className="h-full">
                  <div className="md:text-2xl text-base text-black pt-1 pl-1 md:pt-4 md:pl-4 flex justify-left">
                      <h3 className="">LOGOS</h3>
                      <img
                      src="/misc/Arrow.png"
                      className="w-4 h-4 md:w-6 md:h-6"
                      alt="..." />
                  </div>
                  <div className="h-full flex items-center justify-center">
                    <img
                      src="/home/Logos.png"
                      className="p-2 mb-6 md:p-16"
                      alt="..." />
                  </div>
              </a>
              </div>

          </div>


          <div className="col-span-4 row-span-2 row-start-3">

            <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/projects" className="">
              <div class="md:text-2xl text-base text-black pt-1 pl-1 md:pt-4 md:pl-4 flex justify-left">
                  <h3 class="">PROJECTS</h3>
                  <img
                  src="/misc/Arrow.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="..." />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/home/Projects.png"
                  className="p-10"
                  alt="..." />
              </div>
            </a>
            </div>

          </div>


          <div className="col-span-2 row-start-5">

          <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/socialMedia" className="">
              <div class="md:text-2xl text-sm text-black pt-1 pl-1 md:pt-4 md:pl-4 flex justify-left">
                  <h3 class="">SOCIAL MEDIA</h3>
                  <img
                  src="/misc/Arrow.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="..." />
              </div>
              <div className="h-full flex items-center justify-center">
                <img
                  src="/home/SocialMedia.png"
                  className="p-1 md:p-8"
                  alt="..." />

              </div>
            </a>
            </div>

          </div>


          <div className="col-span-2 col-start-3 row-start-5">
          <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/icons" className="">
              <div class="md:text-2xl text-sm text-black pt-1 pl-1 md:pt-4 md:pl-4 flex justify-left">
                  <h3 class="">ICONS</h3>
                  <img
                  src="/misc/Arrow.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="..." />
              </div>
              <div className="h-full flex items-center justify-center">
                <img
                  src="/home/Icons.png"
                  className="p-2 md:p-8"
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