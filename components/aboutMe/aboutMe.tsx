import React from 'react'
import MyInterests from './myInterests'
import PersonalDetails from './personalDetails'
import WhatIDo from './whatIDo'
import { education } from '../../data/experience'
type Props = {}

const AboutMe = (props: Props) => {
  return (
    <section id="about" className="bg-[#f8faff] border-y border-slate-100 scroll-mt-20">
      <div className='container py-12 md:py-16'>
        <h2 className='sectionTitle'>About me</h2>
        <p className='sectionSubtitle text-sm'>
          Frontend-focused full stack developer building practical web products.
        </p>

        <div className="mt-6">
          <WhatIDo />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 items-start'>
          <div className="flex flex-col gap-5">
            <PersonalDetails />
            <div className="cardBorder rounded-xl bg-white p-6">
              <div className="text-lg font-extrabold text-slate-900">Education</div>
              <ul className="mt-4 space-y-3 text-sm">
                {education.map((item) => (
                  <li key={item.title}>
                    <div className="text-xs font-semibold text-slate-400">{item.period}</div>
                    <div className="font-bold text-slate-800">{item.title}</div>
                    <div className="text-slate-500">{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <MyInterests />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
