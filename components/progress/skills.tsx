import React from 'react'

type Props = {
  text: string;
  value: number;
  years: number;
}

const ProgressBarSkills = ({text, value, years}: Props) => {
  return (
    <div className = "mb-5">
      <div className='mb-1'>{text}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
        <div className="bg-blue-600 h-2.5 rounded-full relative" style={{ width: `${value * 2.5}%` }}>
          <div className = {`absolute right-0 -top-3 text-sm  rounded-full p-1 bg-blue-600 border border-blue-600 text-white`}>
            {years}Y
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBarSkills