export default function Header() {
    return (
    <header class="w-full mt-5 text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
            <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                AP
            </a>
            <nav class="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
                <a href="#_" class="mr-5 font-medium hover:text-gray-900">Home</a>
                <a href="#_" class=" border-l border-gray-200 mr-5 font-medium hover:text-gray-900">About</a>
                <a href="#_" class=" border-l border-gray-200 font-medium hover:text-gray-900">Contact</a>
            </nav>
            <div class="items-center h-full">
                <a href="#_" class="mr-5 font-medium hover:text-gray-900">CV</a>
            </div>
        </div>
    </header>
    )
}