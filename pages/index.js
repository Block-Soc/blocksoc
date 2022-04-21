import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import Offerings from '../components/Offerings'
import HorizontalTimeline from '../components/HorizontalTimeline'


export default function Home() {
  return (
    <div>
      <Head>
        <title>BlocksocDAO</title>
        <meta name="google-site-verification" content="6ScdAOOBeybqZCJ11P1i-70LolkGwkbrgenM2RrtJLY" />
        <meta charset="utf-8" />
        <meta name="title" content="BlocksocDAO" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Join a community of innovators, acquire core skills and build a portfolio, while contributing to the DAO." />
        <meta property='og:url' content='https://blocksoc.io' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='BlocksocDAO' />
        <meta property='og:image' content='https://blocksoc.io/small_og.png' />
        <meta property='og:description' content='Join a community of innovators, acquire core skills and build a portfolio, while contributing to the DAO.' />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@block_soc" />
        <meta name="twitter:title" content="BlocksocDAO" />
        <meta name="twitter:description" content="Join a community of innovators, acquire core skills and build a portfolio, while contributing to the DAO." />
        <meta name="twitter:image" content="https://blocksoc.io/BlackLogo.jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="">
        <HeroSection />
        <Offerings />
        <HorizontalTimeline />
      </main>
      <Footer />
    </div>
  )
}
