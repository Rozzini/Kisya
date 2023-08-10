import Image, { ImageProps } from 'next/image'

export default function Portfolio() {
    return (
<section id="Portfolio">
<div  className="mx-auto max-w-screen-lg grid grid-cols-4 grid-rows-8 gap-10">
          
          <div className="col-span-2 row-span-2">

            <div className="border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/webpages" className="">
                  <div class="md:text-2xl text-base text-black pt-4 pl-4 flex justify-left">
                      <h3 class="">WEBPAGES</h3>
                      <img
                      src="/Arrow.png"
                      className="w-4 h-4 md:w-6 md:h-6"
                      alt="..." />
                  </div>
                  <img
                    src="/Webpages.png"
                    className="pt-12"
                    alt="..." />
              </a>
            </div>
           
          </div>


          <div className="col-span-2 row-span-2 col-start-3">

            <div className="h-full border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
                <a href="/logos" className="">
                  <div class="md:text-2xl text-base text-black pt-4 pl-4 flex justify-left">
                      <h3 class="">LOGOS</h3>
                      <img
                      src="/Arrow.png"
                      className="w-4 h-4 md:w-6 md:h-6"
                      alt="..." />
                  </div>
                  <img
                    src="/Logos.png"
                    className="mx-auto"
                    alt="..." />
              </a>
              </div>

          </div>


          <div className="col-span-4 row-span-2 row-start-3">

            <div className="border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/projects" className="">
              <div class="md:text-2xl text-base text-black pt-4 pl-4 flex justify-left">
                  <h3 class="">PROJECTS</h3>
                  <img
                  src="/Arrow.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="..." />
              </div>
                <img
                  src="/Projects.png"
                  className="pt-12"
                  alt="..." />
            </a>
            </div>

          </div>


          <div className="col-span-2 row-span-2 row-start-5">

         <div className="h-full border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/slides" className="">
              <div class="md:text-2xl text-base text-black pt-4 pl-4 flex justify-left">
                  <h3 class="">SLIDES</h3>
                  <img
                  src="/Arrow.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="..." />
              </div>
                <img
                  src="/Slides.png"
                  className="pt-12"
                  alt="..." />
            </a>
            </div>

          </div>


          <div className="col-span-2 col-start-3 row-start-5">

          <div className="border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/socialMedia" className="">
              <div class="md:text-2xl text-base text-black pt-4 pl-4 flex justify-left">
                  <h3 class="">SOCIAL MEDIA</h3>
                  <img
                  src="/Arrow.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="..." />
              </div>
                <img
                  src="/SocialMedia.png"
                  className="pt-12"
                  alt="..." />
            </a>
            </div>

          </div>


          <div className="col-span-2 col-start-3 row-start-6">
          <div className="border border-[#9d9d9d] hover:border-2 hover:border-[#000000] ">
              <a href="/icons" className="">
              <div class="md:text-2xl text-base text-black pt-4 pl-4 flex justify-left">
                  <h3 class="">ICONS</h3>
                  <img
                  src="/Arrow.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="..." />
              </div>
                <img
                  src="/Icons.png"
                  className="pt-12"
                  alt="..." />
            </a>
            </div>
          </div>
      </div>
</section>

    )
}