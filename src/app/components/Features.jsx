import React from 'react';
import { Navigation, MapPin, Shield, Bell, ClipboardList, Share2 } from 'lucide-react';

const features = [
  {
    Icon: Navigation,
    title: 'Live Location Tracking',
    desc: 'GPS updates every 3–5 seconds while moving, 8–10 when slowing, and 15–20 when stationary — adaptive frequency that saves battery without losing accuracy.',
    tag: 'Core',
    tagClass: 'bg-sky-400/10 text-sky-400',
  },
  {
    Icon: MapPin,
    title: 'Geofencing Engine',
    desc: 'Define zones — school gates, bus stops, home addresses, interstate terminals. Get notified the moment someone enters or leaves a boundary.',
    tag: 'Core',
    tagClass: 'bg-sky-400/10 text-sky-400',
  },
  {
    Icon: Shield,
    title: 'Safety Engine',
    desc: 'Panic button for drivers and travelers. Trip timeout detection — if movement stops unexpectedly, authorized viewers are notified and alerts escalate automatically.',
    tag: 'Safety',
    tagClass: 'bg-red-400/10 text-red-400',
  },
  {
    Icon: Bell,
    title: 'Smart Notification Engine',
    desc: 'Push notifications for speed. SMS as a critical fallback. WhatsApp for premium updates. Email for detailed trip reports. Every channel, covered.',
    tag: 'Alerts',
    tagClass: 'bg-purple-400/10 text-purple-400',
  },
  {
    Icon: ClipboardList,
    title: 'Trip Event Log',
    desc: 'Every pickup, stop, route deviation, and arrival is recorded with a timestamp. Full accountability trail for every journey — always retrievable.',
    tag: 'Records',
    tagClass: 'bg-green-400/10 text-green-400',
  },
  {
    Icon: Share2,
    title: 'Live Trip Sharing',
    desc: 'Share a live trip link with anyone instantly — no app required for viewers. Perfect for family check-ins, emergency situations, or one-off trips.',
    tag: 'Sharing',
    tagClass: 'bg-orange-400/10 text-orange-400',
  },
];

const Features = () => {
  return (
    <div className='bg-slate-50 py-24 px-4' id='features'>
      <div className='container mx-auto max-w-6xl'>

        {/* heading */}
        <div className='text-center mb-16'>
          <p className='text-[#201678] text-sm font-semibold uppercase tracking-widest mb-3'>
            Platform Features
          </p>
          <h2 className='text-3xl md:text-5xl font-bold text-slate-900 mb-4'>
            Everything you need,<br />built into one platform.
          </h2>
          <p className='text-slate-500 text-lg max-w-xl mx-auto'>
            PocketShuttle handles location, safety, alerts, and accountability — so
            you never have to wonder where your people are.
          </p>
        </div>

        {/* feature grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map(({ Icon, title, desc, tag, tagClass }) => (
            <div
              key={title}
              className='bg-white border border-slate-200 rounded-2xl rounded-se-3xl p-7 hover:shadow-xl transition-all'
            >
              <div className='flex items-start justify-between mb-5'>
                <div className='p-3 bg-[#201678]/5 rounded-xl'>
                  <Icon className='w-6 h-6 text-[#201678]' />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagClass}`}>
                  {tag}
                </span>
              </div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>{title}</h3>
              <p className='text-slate-500 text-sm leading-relaxed'>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Features;
