export default function Header() {
    return (
    <header class="invisible md:visible sticky top-0 z-10 w-full text-gray-700 bg-white border-b border-gray-100 shadow-md body-font">
        <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
            <a href="#" class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                AP
            </a>
            <nav class="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
                <a href="#About" class="mr-5 font-medium hover:text-gray-900">About</a>
                <a href="#Portfolio" class="mr-5 font-medium hover:text-gray-900">Portfolio</a>
                <a href="#Contact" class="font-medium hover:text-gray-900">Contact</a>
            </nav>
            <div class="items-center h-full">
                <a href='CV.pdf'
                   download="AnastasiiaPolubynskaCV"
                   target="_blank"
                   rel="noreferrer"
                   class="mr-5 font-medium hover:text-gray-900 hover:border-b">
                    CV
                </a>
            </div>
        </div>
    </header>
    )
}