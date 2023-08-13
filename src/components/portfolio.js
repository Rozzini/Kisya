import Image, { ImageProps } from 'next/image'

export default function Portfolio() {
    return (
<section id="Portfolio">
<div className="flex items-center justify-center">
  <div  className="max-w-screen-lg grid grid-cols-4 grid-rows-8 gap-3 md:gap-10">
          
          <div className="col-span-2 row-span-2">

            <div className="aspect-square rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/webpages" className="">
                  <div class="md:text-2xl text-base text-black pt-1 pl-1 md:pt-4 md:pl-4 flex justify-left">
                      <h3 class="">WEBPAGES</h3>
                      <img
                      src="/misc/Arrow.png"
                      className="w-4 h-4 md:w-6 md:h-6"
                      alt="..." />
                  </div>
                  <div className="h-full flex items-bottom justify-center">
                  <img
                    src="/home/Webpages.png"
                    className="pt-2 md:pt-12"
                    alt="..." />

                  </div>
              </a>
            </div>
           
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

            <div className="rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/projects" className="">
              <div class="md:text-2xl text-base text-black pt-1 pl-1 md:pt-4 md:pl-4 flex justify-left">
                  <h3 class="">PROJECTS</h3>
                  <img
                  src="/misc/Arrow.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="..." />
              </div>
              <div className="h-full flex items-center justify-center">
                <img
                  src="/home/Projects.png"
                  className="p-10"
                  alt="..." />
              </div>
            </a>
            </div>

          </div>


          <div className="col-span-2 row-span-2 row-start-5">

         <div className="h-full rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/slides" className="">
              <div class="md:text-2xl text-base text-black pt-1 pl-1 md:pt-4 md:pl-4 flex justify-left">
                  <h3 class="">SLIDES</h3>
                  <img
                  src="/misc/Arrow.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="..." />
              </div>
              <div className="h-full flex items-center justify-center">
                <img
                  src="/home/Slides.png"
                  className="p-1 md:p-8"
                  alt="..." />

              </div>
            </a>
            </div>

          </div>


          <div className="col-span-2 col-start-3 row-start-5">

          <div className="rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
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


          <div className="col-span-2 col-start-3 row-start-6">
          <div className="rounded border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
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