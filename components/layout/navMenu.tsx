import Link from 'next/link'
import React, { useState } from 'react'
import { navLinks, profile } from '../../data/profile'

type Props = {}

const NavMenu = (props: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="container">
        <div className="flex justify-between items-center h-[68px]">
          <Link href={'/'}>
            <a className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                {profile.firstName}
              </span>
              <span className="hidden sm:inline text-xs font-medium text-slate-500">
                {profile.role}
              </span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#0f1f3d] text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Let&apos;s Talk
              <span aria-hidden>→</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-slate-200"
              aria-label="Toggle menu"
            >
              <span className="text-xl leading-none">{open ? '×' : '≡'}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-1 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2.5 rounded-lg hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 bg-[#0f1f3d] text-white font-semibold px-4 py-2.5 rounded-lg"
            >
              Let&apos;s Talk →
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default NavMenu
