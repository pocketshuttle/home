import { notFound } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';

const teams = [
  {
    src: '/buchi.png',
    name: 'Mmaduabuchi Omeje',
    role: 'Founder & CEO',
    social: 'https://www.linkedin.com/in/mmaduabuchi-omeje/',
  },
  {
    src: '/femi.png',
    name: 'Femi Michael B.',
    role: 'Head of Operations',
    social: 'https://www.linkedin.com/in/femi-michael-b-319a13138/',
  },
  {
    src: '/santos.png',
    name: 'Abusonwan Santos',
    role: 'Technical Lead',
    social: 'https://www.linkedin.com/in/abusomwan-santos/',
  },
  {
    src: '/chelsea.png',
    name: 'Awfomata Chelsea',
    role: 'Marketing Lead',
    social: 'https://www.linkedin.com/in/awfomatachelsea/',
  },
];

const jobs = [
  {
    job_cat: 'Marketing',
    job_title: 'Field Marketers',
    zone: 'On-site',
    job_type: 'Part-time / Full-time',
    ap: 'https://forms.gle/Bss1taZNjSYwRC836',
    catColor: 'bg-purple-400/10 text-purple-400',
  },
  {
    job_cat: 'Design',
    job_title: 'Graphics Designer',
    zone: 'Remote',
    job_type: 'Part-time',
    ap: 'https://forms.gle/Bss1taZNjSYwRC836',
    catColor: 'bg-sky-400/10 text-sky-400',
  },
];

// Team page is hidden: the route returns a 404. To restore, make TeamPage the default export again
// and re-add the TEAM link in components/Navbar/Navbar.jsx.
export default function HiddenTeamPage() {
  notFound();
}

function TeamPage() {
  return (
    <div style={{ backgroundColor: '#0f0c2e' }} className='min-h-screen'>

      {/* ── Hero ───────────────────────────────────────────── */}
      <div className='pt-40 pb-20 px-4 text-center relative overflow-hidden'>
        {/* subtle background grid */}
        <div className='absolute inset-0 pointer-events-none' aria-hidden='true'>
          <svg className='w-full h-full opacity-[0.04]' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <pattern id='tgrid' width='60' height='60' patternUnits='userSpaceOnUse'>
                <path d='M 60 0 L 0 0 0 60' fill='none' stroke='white' strokeWidth='1' />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#tgrid)' />
          </svg>
        </div>

        <div className='relative z-10 max-w-2xl mx-auto'>
          <p className='text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4'>
            The Team
          </p>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-5 leading-tight'>
            The people building<br />
            <span className='bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              the safety layer
            </span>
          </h1>
          <p className='text-slate-400 text-lg leading-relaxed'>
            A small, focused team on a clear mission — make movement
            accountable and safe for everyone, everywhere.
          </p>
        </div>
      </div>

      {/* ── Team Grid ──────────────────────────────────────── */}
      <div className='px-4 pb-24'>
        <div className='container mx-auto max-w-5xl'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {teams.map((member) => (
              <div
                key={member.name}
                className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-sky-400/40 hover:bg-white/10 transition-all duration-300'
              >
                {/* Photo */}
                <div className='relative h-[280px] w-full overflow-hidden'>
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className='object-cover object-top group-hover:scale-105 transition-transform duration-500'
                  />
                  {/* gradient fade from bottom */}
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0f0c2e] via-transparent to-transparent' />
                </div>

                {/* Info */}
                <div className='p-5 pt-3'>
                  <p className='text-white font-bold text-base leading-snug'>{member.name}</p>
                  <p className='text-sky-400 text-sm mt-0.5'>{member.role}</p>

                  <a
                    href={member.social}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 mt-4 text-xs text-slate-400 hover:text-sky-400 transition-colors border border-white/10 hover:border-sky-400/40 rounded-full px-3 py-1.5'
                  >
                    <FaLinkedinIn className='text-sm' />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Founder Quote ──────────────────────────────────── */}
      <div className='px-4 py-20 border-t border-white/10'>
        <div className='container mx-auto max-w-3xl text-center'>
          <svg
            className='w-10 h-10 text-sky-400/40 mx-auto mb-6'
            fill='currentColor'
            viewBox='0 0 32 32'
          >
            <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
          </svg>
          <blockquote className='text-xl md:text-2xl font-medium text-slate-200 leading-relaxed mb-8'>
            Our mission is to make movement accountable and safe — for every parent
            tracking a child, every family watching a loved one travel, and every
            transport company that needs to know where its fleet is.
          </blockquote>
          <div className='flex items-center justify-center gap-3'>
            <Image
              src='/buchi.png'
              width={48}
              height={48}
              alt='Mmaduabuchi Omeje'
              className='rounded-full border-2 border-sky-400/40 object-cover object-top'
            />
            <div className='text-left'>
              <p className='text-white font-semibold text-sm'>Mmaduabuchi Omeje</p>
              <p className='text-slate-500 text-xs'>Founder & CEO, PocketShuttle</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Open Positions ─────────────────────────────────── */}
      <div className='px-4 py-20 border-t border-white/10'>
        <div className='container mx-auto max-w-3xl'>

          <div className='text-center mb-12'>
            <p className='text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3'>
              Careers
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-3'>
              Open Positions
            </h2>
            <p className='text-slate-400 text-lg'>
              Join a team building the safety infrastructure for movement in Africa.
            </p>
          </div>

          <div className='space-y-4'>
            {jobs.map((job) => (
              <div
                key={job.job_title}
                className='bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-sky-400/30 hover:bg-white/10 transition-all'
              >
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>

                  <div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${job.catColor} mb-3 inline-block`}>
                      {job.job_cat}
                    </span>
                    <h3 className='text-white text-lg font-bold'>{job.job_title}</h3>
                    <div className='flex flex-wrap gap-3 mt-2'>
                      <span className='flex items-center gap-1 text-slate-400 text-xs border border-white/10 rounded-full px-3 py-1'>
                        <IoMdTime className='text-sm' />
                        {job.job_type}
                      </span>
                      <span className='flex items-center gap-1 text-slate-400 text-xs border border-white/10 rounded-full px-3 py-1'>
                        <IoLocationOutline className='text-sm' />
                        {job.zone}
                      </span>
                    </div>
                  </div>

                  <a
                    href={job.ap}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-shrink-0 inline-flex items-center gap-1.5 bg-sky-400 hover:bg-sky-300 text-black text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors'
                  >
                    Apply Now <MdArrowOutward />
                  </a>

                </div>
              </div>
            ))}
          </div>

          {/* No open role? */}
          <div className='mt-10 text-center border border-white/10 bg-white/5 rounded-2xl p-8'>
            <p className='text-slate-300 font-medium mb-2'>Don&apos;t see your role?</p>
            <p className='text-slate-500 text-sm mb-5'>
              We&apos;re always open to hearing from talented people who believe in what we&apos;re building.
            </p>
            <Link href='mailto:hello@pocketshuttle.com'>
              <button className='border border-white/20 hover:bg-white/10 text-slate-300 rounded-lg px-6 py-2.5 text-sm font-medium transition-colors'>
                Send us a message
              </button>
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
