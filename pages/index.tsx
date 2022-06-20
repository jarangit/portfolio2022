import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/aboutMe/aboutMe'
import Banner from '../components/banner/banner'
import { Skills } from '../components/home'
import Portfolio from '../components/home/portfolio'
import Resume from '../components/home/resume'

const Home: NextPage = () => {
  return (
    <div >
      <Banner />
      <AboutMe />
      <Skills/>
      <Resume/>
      <Portfolio/>
    </div>
  )
}

export default Home
