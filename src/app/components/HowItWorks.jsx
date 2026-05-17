import React from 'react';
import { MapPin, Radio, CheckCircle } from 'lucide-react';

const steps = [
  {
    Icon: MapPin,
    step: '01',
    color: 'text-sky-400',
    borderColor: 'border-sky-400/30',
    glowColor: 'bg-sky-400/10',
    title: 'A Trip Begins',
    desc: 'A driver starts a route, a traveler shares their journey, or a student boards a bus. The trip activates and live location streaming begins — automatically.',
  },
  {
    Icon: Radio,
    step: '02',
    color: 'text-purple-400',
    borderColor: 'border-purple-400/30',
    glowColor: 'bg-purple-400/10',
    title: 'Authorized Viewers See Live',
    desc: 'Parents, family members, school admins, or transport operators watch the live map — real-time location, speed, heading, and estimated arrival time.',
  },
  {
    Icon: CheckCircle,
    step: '03',
    color: 'text-green-400',
    borderColor: 'border-green-400/30',
    glowColor: 'bg-green-400/10',
    title: 'Everyone Arrives Safely',
    desc: 'Every stop, pickup, and arrival is logged with a timestamp. Viewers are notified automatically. Safety confirmed, trip closed.',
  },
];

const tripParts = [
  'Trip ID', 'Driver', 'Vehicle', 'Participants',
  'Authorized Viewers', 'Location Stream', 'Event Log',
];

const HowItWorks = () => {
  return (
    <div className='feature_bg py-24 px-4' id='how-it-works'>
      <div className='container mx-auto max-w-5xl'>

        {/* heading */}
        <div className='text-center mb-16'>
          <p className='text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3'>
            How It Works
          </p>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4'>
            Simple. Realtime. Accountable.
          </h2>
          <p className='text-slate-400 text-lg max-w-xl mx-auto'>
            Everything in PocketShuttle revolves around one concept — the <span className='text-white font-semibold'>Trip</span>.
          </p>
        </div>

        {/* 3 steps */}
        <div className='grid md:grid-cols-3 gap-6'>
          {steps.map(({ Icon, step, color, borderColor, glowColor, title, desc }) => (
            <div
              key={step}
              className={`relative border ${borderColor} bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all`}
            >
              <span className='text-7xl font-black text-white/5 absolute top-4 right-5 select-none leading-none'>
                {step}
              </span>
              <div className={`${glowColor} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>{title}</h3>
              <p className='text-slate-400 text-sm leading-relaxed'>{desc}</p>
            </div>
          ))}
        </div>

        {/* trip anatomy pill row */}
        <div className='mt-14 border border-white/10 bg-white/5 rounded-2xl p-8'>
          <p className='text-center text-slate-500 text-xs uppercase tracking-widest mb-6'>
            Every trip contains
          </p>
          <div className='flex flex-wrap justify-center gap-3'>
            {tripParts.map((part) => (
              <span
                key={part}
                className='bg-white/10 text-slate-200 text-sm px-4 py-2 rounded-full border border-white/10'
              >
                {part}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
