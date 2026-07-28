import React from 'react';
import Link from 'next/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const plans = [
  {
    name: 'Free',
    nameColor: 'text-teal-400',
    borderColor: 'border-teal-400',
    shadowColor: 'hover:shadow-teal-600',
    price: 'Free',
    priceNote: 'Get started at no cost',
    cta: { label: 'Get Started Free', href: 'https://app.pocketshuttle.com/login', filled: true },
    features: [
      'One parent account',
      'One child',
      'One connected driver',
      'Basic live location',
      'Pickup and drop-off status',
      'Emergency alerts',
      'Limited trip history (24 hours)',
      'Standard push notifications',
    ],
  },
  {
    name: 'Pro Family',
    nameColor: 'text-sky-400',
    borderColor: 'border-sky-400',
    shadowColor: 'hover:shadow-sky-600',
    price: '₦1,500',
    priceSuffix: '/month',
    priceNote: 'For families who want more visibility',
    badge: 'Most Popular',
    cta: { label: 'Get Started', href: 'https://app.pocketshuttle.com/login', filled: true },
    features: [
      'Multiple children and drivers',
      'Extended location and trip history',
      'Driver ETA and "driver nearby" alerts',
      'Custom places and geofences',
      'Route-deviation and unusual-stop alerts',
      'SMS or WhatsApp notifications',
      'Scheduled recurring trips',
      'Multiple family viewers or emergency contacts',
      'Downloadable trip reports',
      'Priority support',
    ],
  },
  {
    name: 'School / Operator Pro',
    nameColor: 'text-purple-400',
    borderColor: 'border-purple-400',
    shadowColor: 'hover:shadow-purple-600',
    price: 'Get in touch',
    priceNote: 'For schools, drivers & transport operators',
    cta: { label: 'Contact Us', href: 'mailto:hello@pocketshuttle.com', filled: false },
    features: [
      'More buses, students, teachers, and drivers',
      'Fleet-wide live map',
      'Driver and vehicle assignment tools',
      'Attendance automation',
      'Route performance and pickup analytics',
      'Parent notification automation',
      'CSV bulk uploads and exports',
      'Driver verification workflows',
      'Staff accounts with permissions',
      'Longer audit-log and report retention',
    ],
  },
  {
    name: 'Enterprise',
    nameColor: 'text-amber-400',
    borderColor: 'border-amber-400',
    shadowColor: 'hover:shadow-amber-600',
    price: 'Custom',
    priceNote: 'For large or multi-branch operations',
    cta: { label: 'Talk to Sales', href: 'mailto:hello@pocketshuttle.com', filled: false },
    features: [
      'Unlimited or high-volume usage',
      'Multiple schools or branches',
      'Custom roles and permissions',
      'Advanced safety analytics',
      'API and webhook access',
      'Branded parent portal and notifications',
      'Data exports and integrations',
      'Dedicated onboarding and support',
      'Custom retention and compliance controls',
      'Service-level agreements',
    ],
  },
];

const alwaysIncluded = [
  'Emergency / panic functionality',
  'Active-trip basic location visibility',
  'Pickup and drop-off confirmation',
  'Account security and password recovery',
  'Privacy controls',
  'Ability to revoke a driver or viewer',
  'Critical safety notifications',
];

const Subscribe = () => {
  return (
    <div className='inner_download py-24 px-4'>
      <div className='container mx-auto max-w-7xl'>

        {/* heading */}
        <div className='text-center mb-16'>
          <p className='text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3'>
            Pricing
          </p>
          <h2 className='text-3xl md:text-5xl font-bold text-slate-200 mb-4'>
            Simple, transparent pricing.
          </h2>
          <p className='text-slate-400 text-lg max-w-lg mx-auto'>
            Start free for families. Scale up for schools, fleets, and transport companies.
          </p>
        </div>

        {/* plan cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch'>
          {plans.map(({ name, nameColor, borderColor, shadowColor, price, priceSuffix, priceNote, badge, cta, features }) => (
            <div
              key={name}
              className={`relative flex flex-col flex-1 border ${borderColor} hover:shadow-md ${shadowColor} bg-white/5 rounded-2xl rounded-se-3xl p-8 transition-all`}
            >
              {badge && (
                <span className={`absolute -top-3 right-6 text-xs font-semibold px-3 py-1 rounded-full bg-sky-400 text-black`}>
                  {badge}
                </span>
              )}

              <h3 className={`text-xl font-semibold ${nameColor} mb-1`}>{name}</h3>
              <p className='text-slate-400 text-sm mb-4'>{priceNote}</p>
              <p className='text-3xl font-bold text-slate-200 mb-6'>
                {price === 'Free' ? (
                  <><span className='text-xl font-normal'>₦</span>0</>
                ) : (
                  <>
                    <span>{price}</span>
                    {priceSuffix && <span className='text-base font-normal text-slate-400'>{priceSuffix}</span>}
                  </>
                )}
              </p>

              {cta.filled ? (
                <Link href={cta.href}>
                  <button className='w-full bg-teal-400 text-black rounded-md py-3 font-semibold hover:bg-teal-300 transition-colors mb-6'>
                    {cta.label}
                  </button>
                </Link>
              ) : (
                <Link href={cta.href}>
                  <button className={`w-full border ${borderColor} ${nameColor} rounded-md py-3 font-medium hover:bg-white/10 transition-colors mb-6`}>
                    {cta.label}
                  </button>
                </Link>
              )}

              <ul className='space-y-3'>
                {features.map((f) => (
                  <li key={f} className='flex items-start gap-2 text-slate-300 text-sm'>
                    <IoIosCheckmarkCircle className={`${nameColor} text-lg flex-shrink-0 mt-0.5`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* always included */}
        <div className='mt-12 border border-white/10 bg-white/5 rounded-2xl rounded-se-3xl p-8'>
          <h3 className='text-slate-200 font-semibold text-lg mb-4 text-center'>
            Available on every plan — always free, never locked away
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
            {alwaysIncluded.map((f) => (
              <div key={f} className='flex items-start gap-2 text-slate-300 text-sm'>
                <IoIosCheckmarkCircle className='text-teal-400 text-lg flex-shrink-0 mt-0.5' />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* footnote */}
        <p className='text-center text-slate-500 text-sm mt-10'>
          Need something custom?{' '}
          <Link href='mailto:hello@pocketshuttle.com' className='text-sky-400 hover:underline'>
            Talk to us
          </Link>
          {' '}and we&apos;ll build a plan that fits.
        </p>

      </div>
    </div>
  );
};

export default Subscribe;
