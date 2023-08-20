import Head from "next/head";
import Header    from "../components/header"
import Hero      from "../components/hero"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="bg-white px-4 md:px-12">
      <Head>
        <meta property="og:image" content="/home/SocialMedia.png" />
        <meta property="og:title" content="My Next.js App" />
        <meta
          property="og:description"
          content="This is a sample app for OGP settings"
        />
      </Head>
      <Header />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}


   