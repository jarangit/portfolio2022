import React from 'react'

type Props = {}

const PersonalDetails = (props: Props) => {
  return (
    <div>
      <div className="text-2xl font-bold">
        Personal Details
      </div>

      <ul className="mt-3 flex flex-col gap-2">
        <li className='flex gap-2'>
          <div className='min-w-[100px] text-red-400 font-bold'>
          Birthdate
          </div>
          <div>
          3 octนber 1996
          </div>
        </li>
        <li className='flex gap-2'>
          <div className='min-w-[100px] text-red-400 font-bold'>
          Phone
          </div>
          <div>
            0882266023
          </div>
        </li>
        <li className='flex gap-2'>
          <div className='min-w-[100px] text-red-400 font-bold'>
          Email
          </div>
          <div>
            jaran.dch@gmail.com
          </div>
        </li>
        <li className='flex gap-2'>
          <div className='min-w-[100px] text-red-400 font-bold'>
          Job Status
          </div>
          <div>
            Full time
          </div>
        </li>
      
      </ul>
    </div>
  )
}

export default PersonalDetails