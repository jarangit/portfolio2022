import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/aboutMe/aboutMe'
import Banner from '../components/banner/banner'
import { Skills } from '../components/home'
import Portfolio from '../components/home/portfolio'
import Resume from '../components/home/resume'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jaran Donchaaim — Full Stack Developer</title>
        <meta
          name="description"
          content="Frontend-focused full stack developer building clean, responsive web applications with React, Next.js, and Angular."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jaran Donchaaim" />
        <meta property="og:title" content="Jaran Donchaaim — Full Stack Developer" />
        <meta
          property="og:description"
          content="Frontend-focused full stack developer building clean, responsive web applications with React, Next.js, and Angular."
        />
        <meta property="og:url" content="https://jaranstudio.com/" />
        <meta property="og:image" content="https://jaranstudio.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jaran Donchaaim — Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Frontend-focused full stack developer building clean, responsive web applications with React, Next.js, and Angular."
        />
        <meta name="twitter:image" content="https://jaranstudio.com/og-image.jpg" />
      </Head>
      <Banner />
      <Skills />
      <Portfolio limit={8} />
      <Resume />
      <AboutMe />
    </div>
  )
}

export default Home
