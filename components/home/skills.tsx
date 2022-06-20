import Image from 'next/image'
import React from 'react'
import ProgressBarSkills from '../progress/skills'

type Props = {}
const dataIconsSkills = [
  {
    text: "Html",
    img: "/img/html.png",
  },
  {
    text: "Css",
    img: "/img/css.webp",
  },
  {
    text: "JavaScript",
    img: "/img/js.png",
  },
  {
    text: "TypeScript",
    img: "/img/ts.png",
  },
  {
    text: "React",
    img: "/img/react.png",
  },
  {
    text: "Next js",
    img: "/img/next.svg",
  },
  {
    text: "Gatsby js",
    img: "/img/gb.png",
  },
  {
    text: "Material UI",
    img: "/img/mt.png",
  },
  {
    text: "Styles components",
    img: "/img/sc.png",
  },
  {
    text: "Tailwind Css",
    img: "/img/tailwind.png",
  },
  {
    text: "Node js",
    img: "/img/node.png",
  },
  {
    text: "Redux",
    img: "/img/redux.png",
  },

]
const Skills = (props: Props) => {
  return (
    <div className='container'>
      <div className='py-20'>
        <div className={`text-center text-2xl font-bold`}>
          Skills
        </div>

        <div className={`grid grid-cols-1 gap-5 md:grid-cols-2 mt-10`}>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-5 text-xs">
            {dataIconsSkills.map((item: any, key: any) => (
              <div className="text-center text-gray-500" key = {key}>
                <Image
                  src={item.img}
                  alt=''
                  width={50}
                  height={50}
                />
                <div>{item.text}</div>
              </div>
            ))}
          </div>
          <div>
            <ProgressBarSkills
              text={"HTML / CSS / JS"}
              value={40}
              years={4}
            />
            <ProgressBarSkills
              text={"React / Next js"}
              value={30}
              years={3}
            />
            <ProgressBarSkills
              text={"Redux / TypeScript / Gatsby"}
              value={10}
              years={1}
            />
            <ProgressBarSkills
              text={"Tailwind / Material UI / Styles Components"}
              value={10}
              years={1}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills