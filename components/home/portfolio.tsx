import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const dataProjects = [
  {
    url: "https://trusting-fermat-862f07.netlify.app/",
    img: "/img/project/p1.png",
  },
  {
    url: "https://fl-real-estate.vercel.app/",
    img: "/img/project/p2.png",
  },
  {
    url: "https://fl-accom.vercel.app/",
    img: "/img/project/p3.png",
  },
  {
    url: "https://fl-deeplyzone.vercel.app/",
    img: "/img/project/p4.png",
  },
  {
    url: "https://elegant-minsky-47a98f.netlify.app/",
    img: "/img/project/p5.png",
  },
  {
    url: "https://pedantic-easley-c3d2c6.netlify.app/",
    img: "/img/project/p6.png",
  },
  {
    url: "https://dazzling-leakey-4ee9b4.netlify.app/",
    img: "/img/project/p7.png",
  },
  {
    url: "https://blissful-booth-a78f28.netlify.app/",
    img: "/img/project/p8.png",
  },
  {
    url: "https://fantastic-mochi-9975a4.netlify.app/",
    img: "/img/project/p9.png",
  },
  {
    url: "https://fl-evermoon.vercel.app/",
    img: "/img/project/p10.png",
  },
  {
    url: "https://app.netlify.com/sites/mystifying-ptolemy-83c3f3/overview",
    img: "/img/project/p11.png",
  },
  {
    url: "https://bruno-nu.vercel.app/",
    img: "/img/project/p12.png",
  },
]

const Portfolio = (props: Props) => {
  return (
    <div className="py-20">
      <div className="container">
        <div className='text-center text-3xl font-bold'>
          Portfolio
        </div>
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-5 mt-10`}>
          {dataProjects.map((item: any, key: any) => (
            <Link href={item.url} key = {key}>
              <div key={key} className="mainShadow w-[100%] h-[150px] lg:h-[250px] relative rounded-xl overflow-hidden">
                <Image
                  src={item.img}
                  alt=""
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio