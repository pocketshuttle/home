import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Monitor, Smartphone, MapPin, Bell, Shield, Users } from 'lucide-react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import './apps.css';

const platforms = [
  {
    Icon: Monitor,
    name: 'Web App',
    status: 'Available Now',
    statusClass: 'bg-green-400/15 text-green-400 border-green-400/30',
    desc: 'Full-featured dashboard for school admins, transport operators, and families. Track live trips, manage routes, and review history — all in your browser.',
    href: 'https://app.pocketshuttle.com/login',
    cta: 'Open Web App',
    features: ['Live map dashboard', 'Route & fleet management', 'Trip history & reports', 'Works on any device'],
    color: 'border-sky-400/30',
    iconBg: 'bg-sky-400/10',
    iconColor: 'text-sky-400',
  },
  {
    Icon: Smartphone,
    name: 'Mobile PWA',
    status: 'Available Now',
    statusClass: 'bg-green-400/15 text-green-400 border-green-400/30',
    desc: 'Install PocketShuttle directly from your browser — no app store needed. GPS tracking, push notifications, and live trip sharing optimized for mobile.',
    href: 'https://app.pocketshuttle.com/login',
    cta: 'Install on Phone',
    features: ['GPS location sharing', 'Push notifications', 'Offline-ready PWA', 'Add to home screen'],
    color: 'border-purple-400/30',
    iconBg: 'bg-purple-400/10',
    iconColor: 'text-purple-400',
  },
  {
    Icon: Smartphone,
    name: 'Native Mobile App',
    status: 'Coming Soon',
    statusClass: 'bg-orange-400/15 text-orange-400 border-orange-400/30',
    desc: 'A dedicated iOS and Android app with deep OS integration — background tracking, richer notifications, and a native experience for drivers and travelers.',
    href: 'mailto:hello@pocketshuttle.com',
    cta: 'Join Waitlist',
    features: ['Background GPS tracking', 'Native push alerts', 'iOS & Android', 'Panic button widget'],
    color: 'border-orange-400/30',
    iconBg: 'bg-orange-400/10',
    iconColor: 'text-orange-400',
  },
];

const coreCapabilities = [
  { Icon: MapPin, label: 'Live Location', desc: '3–5 sec GPS updates while moving' },
  { Icon: Bell, label: 'Smart Alerts', desc: 'Push, SMS, WhatsApp & Email' },
  { Icon: Shield, label: 'Safety Engine', desc: 'Panic button & trip timeout detection' },
  { Icon: Users, label: 'Multi-Role', desc: 'One platform for every user type' },
];

export default function AppsPage() {
  return (
    <div className='app_page min-h-screen'>

      {/* ── Hero ──────────────────────────────────────────── */}
      <div className='app_head_img flex flex-col justify-center items-center text-center px-4'>
        <div className='max-w-3xl'>
          <span className='inline-block bg-white/10 border border-white/20 text-slate-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6'>
            Platform Access
          </span>
          <h1 className='text-4xl md:text-6xl font-bold text-white leading-tight mb-5'>
            One Platform.<br />
            <span className='bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Every Device.
            </span>
          </h1>
          <p className='text-slate-300 text-lg md:text-xl max-w-xl mx-auto'>
            Access PocketShuttle on web or mobile — track trips, manage fleets,
            and keep your people safe from anywhere.
          </p>
        </div>
      </div>

      {/* ── Core capabilities strip ───────────────────────── */}
      <div className='border-b border-white/10 py-8 px-4'>
        <div className='container mx-auto max-w-4xl'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {coreCapabilities.map(({ Icon, label, desc }) => (
              <div key={label} className='flex items-start gap-3'>
                <div className='bg-sky-400/10 p-2 rounded-lg flex-shrink-0 mt-0.5'>
                  <Icon className='w-5 h-5 text-sky-400' />
                </div>
                <div>
                  <p className='text-white text-sm font-semibold'>{label}</p>
                  <p className='text-slate-500 text-xs mt-0.5 leading-relaxed'>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Platform Cards ────────────────────────────────── */}
      <div className='py-20 px-4'>
        <div className='container mx-auto max-w-5xl'>
          <div className='text-center mb-14'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-3'>Choose your platform</h2>
            <p className='text-slate-400 text-lg max-w-lg mx-auto'>
              Whether you&apos;re at a desk or on the road, PocketShuttle meets you where you are.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {platforms.map(({ Icon, name, status, statusClass, desc, href, cta, features, color, iconBg, iconColor }) => (
              <div
                key={name}
                className={`border ${color} bg-white/5 rounded-2xl p-7 flex flex-col hover:bg-white/10 transition-all`}
              >
                <div className='flex items-start justify-between mb-5'>
                  <div className={`${iconBg} w-11 h-11 rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusClass}`}>
                    {status}
                  </span>
                </div>

                <h3 className='text-xl font-bold text-white mb-2'>{name}</h3>
                <p className='text-slate-400 text-sm leading-relaxed mb-5 flex-1'>{desc}</p>

                <ul className='space-y-2 mb-7'>
                  {features.map((f) => (
                    <li key={f} className='flex items-center gap-2 text-slate-300 text-sm'>
                      <IoIosCheckmarkCircle className={`${iconColor} text-base flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={href}>
                  <button className={`w-full border ${color} ${iconColor} rounded-lg py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors`}>
                    {cta} →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── "One App" visual divider ─────────────────────── */}
      <div className='flex justify-center items-center py-4 px-4'>
        <div className='h-px w-16 bg-white/10'></div>
        <span className='text-slate-600 text-xs uppercase tracking-widest mx-4'>Consistent across all platforms</span>
        <div className='h-px w-16 bg-white/10'></div>
      </div>

      {/* ── Phone mockup section ─────────────────────────── */}
      <div className='py-16 px-4'>
        <div className='container mx-auto max-w-4xl'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-12'>

            {/* Text side */}
            <div className='max-w-md text-center md:text-left'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Designed for the road,<br />not the office.
              </h2>
              <p className='text-slate-400 leading-relaxed mb-6'>
                Drivers launch trips in one tap. Parents watch live. Admins monitor fleets
                from any screen. The experience is fast, clear, and built around real-world
                movement — not software complexity.
              </p>
              <div className='flex flex-col sm:flex-row gap-3 justify-center md:justify-start'>
                <Link href='https://app.pocketshuttle.com/login'>
                  <button className='bg-sky-400 hover:bg-sky-300 text-black rounded-md px-6 py-3 font-semibold text-sm transition-colors'>
                    Try the Web App
                  </button>
                </Link>
                <Link href='/solutions'>
                  <button className='border border-white/25 hover:bg-white/10 text-white rounded-md px-6 py-3 font-medium text-sm transition-colors'>
                    See Solutions
                  </button>
                </Link>
              </div>
            </div>

            {/* Phone image */}
            <div className='flex justify-center'>
              <div className='relative'>
                <div className='absolute inset-0 bg-sky-400/10 rounded-3xl blur-3xl scale-110'></div>
                <Image
                  src='/phone.png'
                  width={220}
                  height={440}
                  alt='PocketShuttle mobile app'
                  className='relative drop-shadow-2xl'
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <div className='py-16 px-4 border-t border-white/10'>
        <div className='container mx-auto max-w-2xl text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>Ready to get started?</h2>
          <p className='text-slate-400 mb-7'>
            No installation required. Open the web app and start tracking in minutes.
          </p>
          <Link href='https://app.pocketshuttle.com/login'>
            <button className='bg-sky-400 hover:bg-sky-300 text-black rounded-md px-8 py-3 font-semibold transition-colors'>
              Open PocketShuttle
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}
