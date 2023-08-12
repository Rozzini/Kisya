import Logos from "./logos"
import Header    from "../../components/pageHeader"
import Hero      from "../../components/hero"
import Contact from "../../components/contact"
import Footer from "../../components/footer"

export default function icons() {
  return (
    <main className="bg-white px-12">
      <Header />
      <Hero />
      <Logos />
      <Contact />
      <Footer />
    </main>
  )
}


   