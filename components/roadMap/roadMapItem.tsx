import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go'
type Props = {
  years: any;
  title: any;
  detail: any;
  descripttion: [];
}

const RoadMapItem = ({ years, title, detail, descripttion }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-3 bg-blue-100 rounded-xl mainShadow">
      <div className="text-xl font-bold text-red-400">
        {years}
      </div>
      <div className="font-bold text-blue-600">
        {title}
      </div>
      <div className='text-sm'>
        {detail}
      </div>

      {descripttion && descripttion.length ? (
        <div className='text-sm'>
          <div className='flex items-center justify-between'>
            <div className={`${open && "font-bold"} mt-3 hover:text-blue-600 cursor-pointer`} onClick={() => setOpen(!open)}>{open ? "Description" : "Read more"}</div>
            {open && (
              <div className='cursor-pointer' onClick={() => setOpen(false)}>
                <AiOutlineCloseCircle size={20} />
              </div>
            )}
          </div>
          <div className={`overflow-hidden transition-all ${open ? "max-h-[1000px]" : "max-h-0"}`}>
            {descripttion.map((item, key) => (
              <div key={key} className='flex gap-1 py-1'>
                <div className='mt-[4px]'>
                  <GoPrimitiveDot size={15} />
                </div>
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      ) : ""}
    </div>
  )
}

export default RoadMapItem