import React from 'react';
import Link from 'next/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const plans = [
  {
    name: 'Basic',
    nameColor: 'text-teal-400',
    borderColor: 'border-teal-400',
    shadowColor: 'hover:shadow-teal-600',
    price: 'Free',
    priceNote: 'Get started at no cost',
    cta: null,
    features: [
      'Family account setup',
      'Start & share live trips',
      'Real-time location tracking',
      'Basic arrival notifications',
      'Up to 3 linked viewers',
    ],
  },
  {
    name: 'Premium',
    nameColor: 'text-sky-300',
    borderColor: 'border-sky-300',
    shadowColor: 'hover:shadow-sky-600',
    price: 'Get in touch',
    priceNote: 'Tailored for schools & transport companies',
    cta: 'mailto:hello@pocketshuttle.com',
    features: [
      'Everything in Basic',
      'Geofencing & zone alerts',
      'Unlimited viewers per trip',
      'Trip event logs & history',
      'SMS & WhatsApp notifications',
      'School / fleet dashboard',
      'Driver management & assignment',
      'Priority customer support',
    ],
  },
];

const Subscribe = () => {
  return (
    <div className='inner_download py-24 px-4'>
      <div className='container mx-auto max-w-5xl'>

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
        <div className='flex flex-col md:flex-row justify-center items-stretch gap-6'>
          {plans.map(({ name, nameColor, borderColor, shadowColor, price, priceNote, cta, features }) => (
            <div
              key={name}
              className={`flex-1 max-w-[480px] min-h-[520px] border ${borderColor} hover:shadow-md ${shadowColor} bg-white/5 rounded-2xl rounded-se-3xl p-8 transition-all`}
            >
              <h3 className={`text-2xl font-semibold ${nameColor} mb-1`}>{name}</h3>
              <p className='text-slate-400 text-sm mb-4'>{priceNote}</p>
              <p className='text-4xl font-bold text-slate-200 mb-6'>
                {price === 'Free' ? (
                  <><span className='text-xl font-normal'>₦</span>0</>
                ) : (
                  <span className='text-2xl'>{price}</span>
                )}
              </p>

              {cta ? (
                <Link href={cta}>
                  <button className={`w-full border ${borderColor} ${nameColor} rounded-md py-3 font-medium hover:bg-white/10 transition-colors mb-6`}>
                    Contact Us
                  </button>
                </Link>
              ) : (
                <Link href='https://app.pocketshuttle.com/login'>
                  <button className='w-full bg-teal-400 text-black rounded-md py-3 font-semibold hover:bg-teal-300 transition-colors mb-6'>
                    Get Started Free
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
