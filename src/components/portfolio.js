import Image, { ImageProps } from 'next/image'

export default function Portfolio() {
    return (
        <div className="mx-auto grid max-w-screen-2x1 grid-cols-4 grid-rows-8 gap-10">
            <div className="bg-red-900 col-span-4 row-span-2">
            <Image
                alt='Product Image'
                className=''
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
            </div>
            <div className="bg-red-900 col-span-2 row-span-2 row-start-3">
            <Image
                alt='Product Image'
                className=''
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
            </div>
            <div className="bg-red-900 col-start-3 row-start-3">
            <Image
                alt='Product Image'
                className=''
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
            </div>
            <div className="bg-red-900 col-start-4 row-start-3">
            <Image
                alt='Product Image'
                className=''
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
            </div>
            <div className="bg-red-900 col-span-2 col-start-3 row-start-4">
            <Image
                alt='Product Image'
                className=''
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
            </div>
            <div className="bg-red-900 col-span-2 row-span-2 row-start-5">
            <Image
                alt='Product Image'
                className=''
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
            </div>
            <div className="bg-red-900 col-span-2 row-span-2 col-start-3 row-start-5">
            <Image
                alt='Product Image'
                className=''
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
            </div>
            <div className="bg-red-900 col-span-4 row-span-2 row-start-7">
            <Image
                alt='Product Image'
                className=''
                src='/drop-shirt-0.png'
                height={540}
                width={540}
                quality="85"
              />
            </div>
        </div>
    )
}