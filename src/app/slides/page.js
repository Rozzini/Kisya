import Image from 'next/image'
import Header    from "../../components/pageHeader"
import Hero      from "../../components/hero"
import Contact from "../../components/contact"
import Footer from "../../components/footer"

export default function slides() {
  return (
    <main className="bg-white px-12">
      <Header />
      <Hero />
      <div class="aspect-video">
    <iframe
      class="w-full h-full"
      src="/VideoTest.mp4"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
      <Contact />
      <Footer />
    </main>
  )
}


   