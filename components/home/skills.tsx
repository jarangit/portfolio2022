import Image from 'next/image'
import React from 'react'
import { skills } from '../../data/skills'

type Props = {}

const Skills = (props: Props) => {
  return (
    <section className="container">
      <div className="py-12 md:py-16">
        <div>
          <h2 className="sectionTitle">My Skills</h2>
          <p className="sectionSubtitle text-sm">
            Tools and technologies I use to build modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {skills.map((item) => (
            <div
              key={item.name}
              className="cardBorder rounded-xl bg-white px-4 py-4 flex items-center gap-3 hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 w-11 h-11 relative grid place-items-center rounded-lg bg-slate-50 border border-slate-100 overflow-hidden">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={32}
                  height={32}
                  objectFit="contain"
                />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-slate-900 truncate">{item.name}</div>
                <div className="text-xs text-slate-500">{item.experience}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
