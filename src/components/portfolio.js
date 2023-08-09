import Image, { ImageProps } from 'next/image'

export default function Portfolio() {
    return (
<section id="Portfolio">
<div  className="mx-auto max-w-screen-lg grid grid-cols-4 grid-rows-8 gap-10">
          <div className="border-2 border-grey-900 rounded col-span-2 row-span-2">
            <a href="/webpages" class="group relative block overflow-hidden">
              <Image
                alt='Product Image'
                className="object-cover transition duration-500 group-hover:scale-110"
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
              <div class="absolute text-2xl tracking-tight text-black top-5 left-5 flex justify-between">
                  <h3 class="">WEBPAGES</h3>
                  <svg class="pl-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
          <div className="border-2 border-grey-900 rounded col-span-2 row-span-2 col-start-3">
            <a href="/logos" class="group relative block overflow-hidden">
              <Image
                alt='Product Image'
                className="object-cover transition duration-500 group-hover:scale-110"
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
               <div class="absolute text-2xl tracking-tight text-black top-5 left-5 flex justify-between">
                  <h3 class="">LOGOS</h3>
                  <svg class="pl-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
          <div className="border-2 border-grey-900 rounded col-span-4 row-span-2 row-start-3">
            <a href="/projects" class="group relative block overflow-hidden">
                <Image
                  alt='Product Image'
                  className="object-cover transition duration-500 group-hover:scale-110"
                  src='/drop-shirt-0.png'
                  height={540}
                  width={540}
                  quality="85"
                />
                 <div class="absolute text-2xl tracking-tight text-black top-5 left-5 flex justify-between">
                  <h3 class="">PROJECTS</h3>
                  <svg class="pl-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              </a>
          </div>
          <div className="border-2 border-grey-900 rounded col-span-2 row-span-2 row-start-5">
          <a href="/slides" class="group relative block overflow-hidden">
              <Image
                alt='Product Image'
                className="object-cover transition duration-500 group-hover:scale-110"
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
               <div class="absolute text-2xl tracking-tight text-black top-5 left-5 flex justify-between">
                  <h3 class="">SLIDES</h3>
                  <svg class="pl-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
          <div className="border-2 border-grey-900 rounded col-span-2 col-start-3 row-start-5">
          <a href="/socialMedia" class="group relative block overflow-hidden">
              <Image
                alt='Product Image'
                className="object-cover transition duration-500 group-hover:scale-110"
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
               <div class="absolute text-2xl tracking-tight text-black top-5 left-5 flex justify-between">
                  <h3 class="">SOCIAL MEDIA</h3>
                  <svg class="pl-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
          <div className="border-2 border-grey-900 rounded col-span-2 col-start-3 row-start-6">
          <a href="/icons" class="group relative block overflow-hidden">
              <Image
                alt='Product Image'
                className="object-cover transition duration-500 group-hover:scale-110"
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
               <div class="absolute text-2xl tracking-tight text-black top-5 left-5 flex justify-between">
                  <h3 class="">ICONS</h3>
                  <svg class="pl-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
      </div>
</section>

    )
}