import React from 'react'
import Footer from './footer';
import NavMenu from './navMenu';

type Props = {
  children:any;
}

const Layout = ({children}: Props) => {
  return (
    <div>
      <NavMenu/>
      <div>{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout