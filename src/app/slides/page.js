import Image from 'next/image'
import Header    from "../../components/pageHeader"
import Hero      from "./hero"
import Contact from "../../components/contact"
import Footer from "../../components/footer"
import Content from './content'

export default function slides() {
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


   