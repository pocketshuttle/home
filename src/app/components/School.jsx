import React from 'react';
import Link from 'next/link';
import { Users, School as SchoolIcon, Truck, Briefcase } from 'lucide-react';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const segments = [
  {
    Icon: Users,
    color: 'text-sky-400',
    iconBg: 'bg-sky-400/10',
    title: 'Parents & Families',
    desc: 'Track your children, monitor a family member on an interstate trip, or share your own live journey with loved ones — all from one app.',
    points: [
      'Child pickup & drop-off alerts',
      'Live family trip sharing',
      'ETA notifications to connected viewers',
      'Emergency panic button',
    ],
  },
  {
    Icon: SchoolIcon,
    color: 'text-purple-400',
    iconBg: 'bg-purple-400/10',
    title: 'Schools',
    desc: 'Manage your entire school bus fleet, assign drivers, monitor routes, and keep parents informed — all from a central admin dashboard.',
    points: [
      'Fleet & route management',
      'Student attendance tracking',
      'Driver assignment & monitoring',
      'Parent-facing announcements',
    ],
  },
  {
    Icon: Truck,
    color: 'text-green-400',
    iconBg: 'bg-green-400/10',
    title: 'Interstate Transport',
    desc: "Give passengers' families real peace of mind. Share live bus locations, ETAs, and digital manifests for every long-distance trip.",
    points: [
      'Digital passenger manifests',
      'Live vehicle tracking per trip',
      'Checkpoint & terminal notifications',
      'Safe arrival confirmation',
    ],
  },
  {
    Icon: Briefcase,
    color: 'text-orange-400',
    iconBg: 'bg-orange-400/10',
    title: 'Corporate & Staff',
    desc: 'Coordinate staff shuttles, track corporate fleet movement, and give HR teams full visibility into employee transport status.',
    points: [
      'Staff bus coordination',
      'Corporate fleet live monitoring',
      'Route deviation alerts',
      'Trip history & movement reports',
    ],
  },
];

const School = () => {
  return (
    <div className='school_bg py-24 px-4' id='who-its-for'>
      <div className='container mx-auto max-w-6xl'>

        {/* heading */}
        <div className='text-center mb-16'>
          <p className='text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3'>
            Who It&apos;s For
          </p>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4'>
            One platform.{' '}
            <span className='bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              Every journey type.
            </span>
          </h2>
          <p className='text-slate-400 text-lg max-w-xl mx-auto'>
            Whether you&apos;re a parent, a school admin, a transport company, or an
            adult traveler — PocketShuttle was built for you.
          </p>
        </div>

        {/* segment grid */}
        <div className='grid md:grid-cols-2 gap-6'>
          {segments.map(({ Icon, color, iconBg, title, desc, points }) => (
            <div
              key={title}
              className='bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all'
            >
              <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className='text-2xl font-bold text-white mb-3'>{title}</h3>
              <p className='text-slate-400 text-sm leading-relaxed mb-6'>{desc}</p>
              <ul className='space-y-2'>
                {points.map((pt) => (
                  <li key={pt} className='flex items-center gap-2 text-slate-300 text-sm'>
                    <IoIosCheckmarkCircle className={`${color} text-lg flex-shrink-0`} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className='text-center mt-12'>
          <Link href='/solutions'>
            <button className='border border-white/30 hover:bg-white/10 text-white rounded-md px-8 py-3 font-medium transition-colors'>
              Explore all solutions &rarr;
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default School;
