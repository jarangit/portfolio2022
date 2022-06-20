import React from 'react'

type Props = {
  years:any;
  title: any;
  detail: any;
}

const RoadMapItem = ({years, title, detail}: Props) => {
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
    </div>
  )
}

export default RoadMapItem