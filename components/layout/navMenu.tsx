import Link from 'next/link'
import React, { useMemo } from 'react'

type Props = {}

const NavMenu = (props: Props) => {
  const styles = useMemo(() => ({
    hoverLink: `
    hover:text-blue-600
    transition all
    duration-300
    `
  }), [])
  return (
    <div className={`container`}>
      <div className='flex justify-between items-center h-20'>
        <div className='text-5xl font-bold'>
          <Link href={'/'}>
            <a   className={`hoverLink text-black`}>
              Jr
            </a>
          </Link>
        </div>
        <div>
          {/* <ul className='flex gap-6'>
            <li>
              <Link href={"/"}>
                <a  className={`hoverLink`}>HOME</a>
              </Link>
            </li>
            <li>
              <Link href={"/myCv"}>
                <a  className={`hoverLink`}>MY CV</a>
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default NavMenu