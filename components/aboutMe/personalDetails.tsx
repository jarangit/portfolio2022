import React from 'react'
import { personalDetails } from '../../data/experience'

type Props = {}

const PersonalDetails = (props: Props) => {
  return (
    <div className="cardBorder rounded-xl bg-white p-6">
      <div className="text-lg font-extrabold text-slate-900">
        Personal Details
      </div>

      <ul className="mt-4 flex flex-col gap-3 text-sm">
        {personalDetails.map((item) => (
          <li key={item.label} className="flex gap-3">
            <div className="min-w-[100px] text-blue-600 font-bold">
              {item.label}
            </div>
            <div className="text-slate-700">
              {item.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PersonalDetails
