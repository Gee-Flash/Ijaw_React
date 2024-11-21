import Head from "next/head";
import Home from '@/components/header'
import Countdown from "@/components/countdown";
import Note from "@/components/note";
import Map from "@/components/map";

const OnePage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <title>Imomotimi Ijaw Dance Event </title>
      </Head>
      <Home />
      <Countdown />
      <Note />
      <Map />
    </div>
  )
}

export default OnePage;