import React from 'react'
import MyInterests from './myInterests'
import PersonalDetails from './personalDetails'
import { BsDownload } from 'react-icons/bs'
type Props = {}

const AboutMe = (props: Props) => {
  return (
    <div className='bg-gray-100 py-20 mt-10'>
      <div className='container'>
        <div className='text-center text-2xl font-bold'>
          About me
        </div>

        <div className='grid  grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
          <PersonalDetails />
          <MyInterests />
        </div>
      </div>
    </div>
  )
}

export default AboutMe