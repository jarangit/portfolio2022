import React from 'react'
import { FiPenTool, FiLayers, FiCode } from 'react-icons/fi'
import { services } from '../../data/services'

const icons = {
  ux: <FiPenTool size={20} />,
  product: <FiLayers size={20} />,
  frontend: <FiCode size={20} />,
}

const WhatIDo = () => {
  return (
    <div className="cardBorder rounded-xl bg-white p-6">
      <div className="text-lg font-extrabold text-slate-900">What I do</div>
      <p className="mt-1 text-sm text-slate-500">
        Design and frontend services I can help with.
      </p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-slate-100 rounded-xl p-4 bg-slate-50/60 hover:bg-white hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 grid place-items-center rounded-lg bg-white border border-slate-200 text-blue-600">
              {icons[service.icon]}
            </div>
            <div className="mt-3 text-[15px] font-bold text-slate-900">
              {service.title}
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
              {service.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatIDo
