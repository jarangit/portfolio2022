import Image from 'next/image'
import React from 'react'
import { projects } from '../../data/projects'

type Props = {
  limit?: number
}

const Portfolio = (props: Props) => {
  const { limit = 8 } = props
  const visible = projects.slice(0, limit)

  return (
    <section id="projects" className="container scroll-mt-20">
      <div className="py-6 md:py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="sectionTitle">Featured Projects</h2>
            <p className="sectionSubtitle text-sm">
              A few projects that show what I can do. Each project solves a real problem with a practical approach.
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
            View all projects <span aria-hidden>→</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {visible.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cardBorder rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative w-full h-[160px] bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="text-[15px] font-bold text-slate-900">{item.title}</div>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-600 flex-1">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="shrink-0 w-8 h-8 grid place-items-center rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
