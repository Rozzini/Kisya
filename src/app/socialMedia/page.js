import Image from 'next/image'
import Header    from "../../components/pageHeader"
import Hero      from "../../components/hero"
import Contact from "../../components/contact"
import Footer from "../../components/footer"

export default function socialMedia() {
  return (
    <main className="bg-white px-12">
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </main>
  )
}


   