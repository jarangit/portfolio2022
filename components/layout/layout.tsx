import React from 'react'
import Footer from './footer';
import NavMenu from './navMenu';

type Props = {
  children:any;
}

const Layout = ({children}: Props) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <NavMenu/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
