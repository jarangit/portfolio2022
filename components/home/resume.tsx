import React, { useState } from 'react'
import { workExperience } from '../../data/experience'
import { profile } from '../../data/profile'

type Props = {}

const Resume = (props: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="container scroll-mt-20">
      <div className="py-6 md:py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="sectionTitle">Work Experience</h2>
            <p className="sectionSubtitle text-sm">
              A summary of my professional experience.
            </p>
          </div>
          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
          >
            View full resume <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {workExperience.map((job, idx) => {
            const open = openIndex === idx
            return (
              <div key={job.company} className="grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-3 md:gap-6 items-start">
                <div className="flex gap-3">
                  <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-100 shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-slate-500">{job.period}</span>
                </div>

                <div className={`cardBorder rounded-xl bg-white overflow-hidden ${open ? 'mainShadow' : ''}`}>
                  <button
                    onClick={() => setOpenIndex(open ? null : idx)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="w-10 h-10 grid place-items-center rounded-lg bg-slate-100 text-lg shrink-0">
                      💼
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-[15px] font-bold text-slate-900 truncate">
                        {job.title}
                      </span>
                      <span className="block text-[13px] text-slate-500">{job.company}</span>
                    </span>
                    <span className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}>
                      ⌄
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all ${open ? 'max-h-[800px]' : 'max-h-0'}`}>
                    <div className="px-4 pb-4 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mx-4 mt-1">
                      <p className="pt-3">{job.summary}</p>
                      <ul className="mt-2 space-y-1.5">
                        {job.highlights.map((h) => (
                          <li key={h} className="flex gap-2">
                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume
