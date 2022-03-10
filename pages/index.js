import Head from 'next/head'
import Image from 'next/image'
import AccordionComponent from '../components/accordion/Accordion'
import Banner from '../components/banner/Banner'
import Contact from '../components/contact/Contact'
import Infos from '../components/infos/Infos'
import Solution from '../components/solution/Solution'
import Steps from '../components/steps/Steps'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner/>
        <Solution/>
        <Steps/>
        <AccordionComponent/>
        <Infos/>
        <Contact/>
      </main>

    </div>
  )
}
