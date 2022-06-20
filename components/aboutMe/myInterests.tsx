import React from 'react'
import {BiFootball, BiNetworkChart} from 'react-icons/bi'
import {BsFillMusicPlayerFill} from 'react-icons/bs'
import {HiPhotograph} from 'react-icons/hi'
import {GrBitcoin} from 'react-icons/gr'
import {FaGuitar, FaHeartbeat, FaGamepad} from 'react-icons/fa'
type Props = {}

const MyInterests = (props: Props) => {
  return (
    <div>
      <div>
        <div className="text-2xl font-bold">
          My Interests
        </div>

        <div className='mt-3 grid  grid-cols-2 md:grid-cols-4 gap-3 '>
          <div className='mainShadow  w-full p-3 rounded-xl flex flex-col items-center drop-shadow-2xl'>
            <BiFootball size = {30}/>
            <div>Football</div>
          </div>
          <div className='mainShadow  w-full p-3 rounded-xl flex flex-col items-center drop-shadow-2xl'>
            <BsFillMusicPlayerFill size = {30}/>
            <div>Music</div>
          </div>
          <div className='mainShadow  w-full p-3 rounded-xl flex flex-col items-center drop-shadow-2xl'>
            <FaGuitar size = {30}/>
            <div>Guitar</div>
          </div>
          <div className='mainShadow  w-full p-3 rounded-xl flex flex-col items-center drop-shadow-2xl'>
            <BiNetworkChart size = {30}/>
            <div>Technology</div>
          </div>
          <div className='mainShadow  w-full p-3 rounded-xl flex flex-col items-center drop-shadow-2xl'>
            <FaHeartbeat size = {30}/>
            <div>Heart</div>
          </div>
          <div className='mainShadow  w-full p-3 rounded-xl flex flex-col items-center drop-shadow-2xl'>
            <FaGamepad size = {30}/>
            <div>Game</div>
          </div>
          <div className='mainShadow  w-full p-3 rounded-xl flex flex-col items-center drop-shadow-2xl'>
            <HiPhotograph size = {30}/>
            <div>Photograph</div>
          </div>
          <div className='mainShadow  w-full p-3 rounded-xl flex flex-col items-center drop-shadow-2xl'>
            <GrBitcoin size = {30}/>
            <div>Crypto</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyInterests