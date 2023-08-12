import Logos from "./logos"
import Header    from "../../components/pageHeader"
import Hero      from "./hero"
import Contact from "../../components/contact"
import Footer from "../../components/footer"

export default function icons() {
  return (
    <main className="bg-white px-4 md:px-12">
      <Header />
      <Hero />
      <Logos />
      <Contact />
      <Footer />
    </main>
  )
}


   