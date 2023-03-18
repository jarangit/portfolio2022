import Image from 'next/image'
import React from 'react'
import { CgMail } from 'react-icons/cg'
import { AiOutlinePhone, AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import Link from 'next/link'
import { FaLine } from 'react-icons/fa'
type Props = {}

const Banner = (props: Props) => {
  return (
    <div>
      <div className=' container flex items-center justify-center flex-col'>
        <div className={`border-[4px] mainShadow rounded-full w-[250px] h-[250px] relative`}>
          <Image
            src={`/img/profile.png`}
            alt="profile"
            layout='fill'
            objectFit='contain'

          />
        </div>
        <div id="textBanner">
          <div className='text-center'>
            <div className='text-3xl font-bold'>
              Jaran Donchaaim
            </div>
            <div>
              Frontend Development
            </div>
          </div>

          <div className='flex gap-3 mt-6 justify-center text-black'>
            <a href="mailto:jaran.dch@gmail.com">
              <CgMail
                size={30}
                color="black"
                className={`
              hoverLink
              border rounded-full w-10 h-10 p-2 cursor-pointer border-black`}
              />
            </a>
            <a href="tel:+66982846339">
              <AiOutlinePhone
                size={30}
                color="black"
                className={`
              hoverLink
              border rounded-full w-10 h-10 p-2 cursor-pointer border-black `}
              />
            </a>
            <a href="https://www.instagram.com/jaran_studio/" target={"_blank"} rel="noopener noreferrer">
              <AiOutlineInstagram
                size={30}
                color="black"
                className={`
              hoverLink
              border rounded-full w-10 h-10 p-2 cursor-pointer border-black`}
              />
            </a>
            <a href="https://twitter.com/JDonchaaim" target={"_blank"} rel="noopener noreferrer">
              <FiTwitter
                size={30}
                color="black"
                className={`
              hoverLink
              border rounded-full w-10 h-10 p-2 cursor-pointer border-black`}
              />
            </a>
            <a href="https://line.me/ti/p/Z48derPbze" target={"_blank"} rel="noopener noreferrer">
              <FaLine
                size={30}
                color="black"
                className={`
              hoverLink
              border rounded-full w-10 h-10 p-2 cursor-pointer border-black`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
