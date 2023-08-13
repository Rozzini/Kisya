import Image from 'next/image'
import Header    from "../../components/pageHeader"
import Hero      from "./hero"
import Contact from "../../components/contact"
import Footer from "../../components/footer"
import Content from './content'

export default function webpages() {
  return (
    <main className="bg-white px-4 md:px-12">
      <Header />
      <Hero />
      <Content />
      <Contact />
      <Footer />
    </main>
  )
}


{/* <div class="aspect-video">
    <iframe
      class="w-full h-full"
      src="/VideoTest.mp4"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div> */}