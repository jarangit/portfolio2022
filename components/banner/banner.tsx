import Image from 'next/image'
import React from 'react'
import { CgMail } from 'react-icons/cg'
import { AiOutlinePhone, AiFillLinkedin } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { profile } from '../../data/profile'

type Props = {}

const Banner = (props: Props) => {
  return (
    <section id="home" className="heroGradient border-b border-slate-100">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <div className="shrink-0 w-[140px] h-[140px] md:w-[168px] md:h-[168px] relative rounded-full overflow-hidden ring-4 ring-white mainShadow">
              <Image
                src={`/img/profile.jpeg`}
                alt={profile.name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="min-w-0">
              <div className="text-[11px] font-bold tracking-[0.18em] text-slate-400">
                HELLO, I&apos;M
              </div>
              <h1 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                {profile.name}
              </h1>
              <div className="mt-1 text-lg font-semibold text-slate-700">
                {profile.role}
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 max-w-xl">
                {profile.intro}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
                <a href={profile.emailHref} className="inline-flex items-center gap-2 hover:text-blue-600">
                  <CgMail size={18} />
                  <span className="font-medium">{profile.email}</span>
                </a>
                <a href={profile.phoneHref} className="inline-flex items-center gap-2 hover:text-blue-600">
                  <AiOutlinePhone size={18} />
                  <span className="font-medium">{profile.phone}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:pt-2">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 bg-[#0f1f3d] text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BsDownload size={16} />
              Download Resume
            </a>
            <a
              href={profile.emailHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 text-sm font-semibold px-5 py-3 rounded-lg border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <FiSend size={14} />
              Let&apos;s Work Together
            </a>
            <div className="flex lg:justify-end gap-2 mt-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 grid place-items-center rounded-full border border-slate-200 bg-white hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                <AiFillLinkedin size={18} />
              </a>
              <a
                href={profile.emailHref}
                aria-label="Email"
                className="w-9 h-9 grid place-items-center rounded-full border border-slate-200 bg-white hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                <CgMail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
