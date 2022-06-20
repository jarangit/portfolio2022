import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiOutlinePhone } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import { FiTwitter } from 'react-icons/fi'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="py-3 bg-gray-300" >

      <div className='flex gap-3 mb-3 justify-center'>
        <a href="mailto:jaran.dch@gmail.com">
          <CgMail
            size={30}
            color = "black"
            className={`
              hoverLink
              border rounded-full w-10 h-10 p-2 cursor-pointer border-black`}
          />
        </a>
        <a href="tel:+66882266023">
          <AiOutlinePhone
            size={30}
            color = "black"
            className={`
              hoverLink
              border rounded-full w-10 h-10 p-2 cursor-pointer border-black`}
          />
        </a>
        <a href="https://www.instagram.com/jaran_studio/" target={"_blank"} rel="noopener noreferrer">
          <AiOutlineInstagram
            size={30}
            color = "black"
            className={`
              hoverLink
              border rounded-full w-10 h-10 p-2 cursor-pointer border-black`}
          />
        </a>
        <a href="https://twitter.com/JDonchaaim" target={"_blank"} rel="noopener noreferrer">
          <FiTwitter
            size={30}
            color = "black"
            className={`
              hoverLink
              border rounded-full w-10 h-10 p-2 cursor-pointer border-black`}
          />
        </a>
      </div>
      <div className='text-center'>
        © Copyright 2019 <span className='text-blue-600 font-bold' >Jaran</span>. All rights reserved.
      </div>
    </div>
  )
}

export default Footer