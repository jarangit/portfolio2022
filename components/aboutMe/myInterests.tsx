import React from 'react'
import {BiFootball, BiNetworkChart} from 'react-icons/bi'
import {BsFillMusicPlayerFill} from 'react-icons/bs'
import {HiPhotograph} from 'react-icons/hi'
import {GrBitcoin} from 'react-icons/gr'
import {FaGuitar, FaHeartbeat, FaGamepad} from 'react-icons/fa'
type Props = {}

const interests = [
  { icon: <BiFootball size={22} />, label: 'Football' },
  { icon: <BsFillMusicPlayerFill size={22} />, label: 'Music' },
  { icon: <FaGuitar size={22} />, label: 'Guitar' },
  { icon: <BiNetworkChart size={22} />, label: 'Technology' },
  { icon: <FaHeartbeat size={22} />, label: 'Heart' },
  { icon: <FaGamepad size={22} />, label: 'Game' },
  { icon: <HiPhotograph size={22} />, label: 'Photograph' },
  { icon: <GrBitcoin size={22} />, label: 'Crypto' },
]

const MyInterests = (props: Props) => {
  return (
    <div className="cardBorder rounded-xl bg-white p-6">
      <div className="text-lg font-extrabold text-slate-900">
        My Interests
      </div>

      <div className='mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3'>
        {interests.map((item) => (
          <div key={item.label} className='border border-slate-100 rounded-xl w-full p-3 flex flex-col items-center gap-1.5 text-slate-600 bg-slate-50/60'>
            {item.icon}
            <div className="text-xs font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyInterests
