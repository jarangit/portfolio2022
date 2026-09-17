import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { navLinks, profile } from '../../data/profile'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer id="contact" className="mt-0">
      <div className="container">
        <div className="bg-[#f4f7fd] cardBorder rounded-2xl px-6 py-8 md:px-10 md:py-10 my-10 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
          <div>
            <div className="text-2xl font-extrabold tracking-tight text-slate-900">
              Have a small web task?
              <br />
              Let&apos;s bring it to life.
            </div>
          </div>
          <div className="text-sm text-slate-600 md:max-w-sm">
            Need a page built, an API connected, or a frontend issue fixed? I&apos;m
            open for freelance work and always happy to discuss new opportunities.
          </div>
          <a
            href={profile.emailHref}
            className="shrink-0 inline-flex items-center gap-2 bg-[#0f1f3d] text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Let&apos;s Talk <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="container py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-slate-900">{profile.firstName}</span>
            <span className="text-xs text-slate-500">{profile.role}</span>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-blue-600">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-slate-700">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 grid place-items-center rounded-full border border-slate-200 hover:text-blue-600 hover:border-blue-600 transition-colors"
            >
              <AiFillLinkedin size={18} />
            </a>
          </div>
        </div>
        <div className="container pb-6 text-xs text-slate-400 md:text-right">
          © 2024 {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
