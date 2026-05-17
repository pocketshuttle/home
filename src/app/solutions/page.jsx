import React from 'react';
import Link from 'next/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { Users, School, Truck, Briefcase, ArrowRight } from 'lucide-react';

const solutions = [
  {
    id: 'school',
    tag: 'Education',
    tagClass: 'bg-sky-400/10 text-sky-400',
    Icon: School,
    iconBg: 'bg-sky-400/10',
    iconColor: 'text-sky-400',
    borderColor: 'border-sky-400/20',
    checkColor: 'text-sky-400',
    title: 'School Transportation',
    headline: 'Give every parent peace of mind, every school day.',
    desc: 'PocketShuttle connects schools, drivers, and parents in a single real-time loop — from the moment a bus leaves the depot to when the last student steps off safely.',
    flow: [
      { label: 'Bus departs depot', note: 'Trip activates, location stream begins' },
      { label: 'Parents notified', note: 'Push alert: "Bus is on the way"' },
      { label: 'Geofence triggered near school', note: 'Admin & parents alerted' },
      { label: 'Student picked up', note: 'Clock-in logged, parent notified' },
      { label: 'Bus arrives at destination', note: 'Trip ends, arrival confirmed' },
    ],
    features: [
      'Live bus tracking on parent & admin dashboards',
      'Automated pickup and drop-off notifications',
      'Geofence alerts when bus nears school or home',
      'Driver assignment and route management',
      'Student attendance via clock-in / clock-out',
      'Parent-facing mobile announcements',
    ],
    roles: ['School Admin', 'Bus Driver', 'Parent', 'Student'],
  },
  {
    id: 'family',
    tag: 'B2C',
    tagClass: 'bg-purple-400/10 text-purple-400',
    Icon: Users,
    iconBg: 'bg-purple-400/10',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-400/20',
    checkColor: 'text-purple-400',
    title: 'Family Movement',
    headline: "Know your family is safe — without calling every 10 minutes.",
    desc: 'Any adult can start a trip and share it live with family. Whether traveling interstate, commuting late at night, or heading across town — everyone stays in the loop without guesswork.',
    flow: [
      { label: 'Traveler starts a trip', note: 'One tap activates live location sharing' },
      { label: 'Family receives share link', note: 'No app required to view' },
      { label: 'Live map updates every 3–5 seconds', note: 'Speed, heading, ETA visible' },
      { label: 'Geofence reached at destination', note: 'Family automatically notified' },
      { label: 'Arrival confirmed', note: 'Trip ends, everyone informed' },
    ],
    features: [
      'One-tap live trip sharing with family members',
      'Real-time GPS stream every 3–5 seconds while moving',
      'Automated ETA updates to connected viewers',
      'Arrival notifications when destination is reached',
      'Panic button for emergency situations',
      'No app required for family viewers (link-based)',
    ],
    roles: ['Adult Traveler', 'Family Viewer', 'Driver'],
  },
  {
    id: 'interstate',
    tag: 'Transport',
    tagClass: 'bg-green-400/10 text-green-400',
    Icon: Truck,
    iconBg: 'bg-green-400/10',
    iconColor: 'text-green-400',
    borderColor: 'border-green-400/20',
    checkColor: 'text-green-400',
    title: 'Interstate Transport',
    headline: 'From Abuja to Lagos — families track every kilometer.',
    desc: "Transport companies create digital manifests, share live bus locations with passengers' families, and confirm safe arrivals at every checkpoint. Replace anxiety with accountability.",
    flow: [
      { label: 'Manifest created with passenger list', note: 'Digital record per trip' },
      { label: 'Bus departs terminal', note: 'Live location shared with authorized families' },
      { label: 'Checkpoint reached', note: 'Families notified with updated ETA' },
      { label: 'Passenger boarding confirmed', note: 'Family alerted at each stop' },
      { label: 'Final destination reached', note: 'Safe arrival confirmed to all viewers' },
    ],
    features: [
      'Digital passenger manifests per trip',
      'Live vehicle location shared with authorized families',
      'Checkpoint and terminal arrival notifications',
      'ETA calculations updated in real-time',
      'Passenger boarding confirmation',
      'Safe arrival verification for every traveler',
    ],
    roles: ['Transport Operator', 'Bus Driver', 'Passenger', 'Family Viewer'],
  },
  {
    id: 'corporate',
    tag: 'Enterprise',
    tagClass: 'bg-orange-400/10 text-orange-400',
    Icon: Briefcase,
    iconBg: 'bg-orange-400/10',
    iconColor: 'text-orange-400',
    borderColor: 'border-orange-400/20',
    checkColor: 'text-orange-400',
    title: 'Corporate & Staff Transport',
    headline: 'Full fleet visibility for HR. Full accountability for staff.',
    desc: 'Corporate organizations coordinate staff shuttles, monitor corporate fleet movement in real-time, and ensure transport accountability — all from a central dashboard built for operations teams.',
    flow: [
      { label: 'Daily staff routes scheduled', note: 'Routes and stops configured by admin' },
      { label: 'Bus departs pickup points', note: 'Staff boarding confirmed per stop' },
      { label: 'Fleet visible on live dashboard', note: 'All vehicles tracked simultaneously' },
      { label: 'Route deviation detected', note: 'Admin alerted immediately' },
      { label: 'Staff arrive at office', note: 'Trip logged, HR report generated' },
    ],
    features: [
      'Corporate fleet live monitoring dashboard',
      'Staff pick-up and drop-off confirmation',
      'Route deviation alerts for administrators',
      'Multi-vehicle simultaneous tracking',
      'Scheduled route management',
      'Movement reports and trip history exports',
    ],
    roles: ['Fleet Admin', 'Driver', 'Staff Member', 'HR Manager'],
  },
];

export default function SolutionsPage() {
  return (
    <div className='pt-32 pb-24 px-4' style={{ backgroundColor: '#0f0c2e' }}>
      <div className='container mx-auto max-w-5xl'>

        {/* page header */}
        <div className='text-center mb-20'>
          <p className='text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3'>Solutions</p>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-5'>
            Built for every<br />
            <span className='bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              type of journey
            </span>
          </h1>
          <p className='text-slate-400 text-lg max-w-xl mx-auto'>
            PocketShuttle is not a school bus app. It&apos;s a real-time movement
            accountability platform — serving four distinct markets from one infrastructure.
          </p>
        </div>

        {/* solution blocks */}
        <div className='space-y-24'>
          {solutions.map(({
            id, tag, tagClass, Icon, iconBg, iconColor, borderColor, checkColor,
            title, headline, desc, flow, features, roles,
          }) => (
            <section key={id} id={id} className={`border ${borderColor} bg-white/5 rounded-3xl p-8 md:p-12`}>

              {/* section header */}
              <div className='flex items-start gap-4 mb-8'>
                <div className={`${iconBg} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagClass} mb-2 inline-block`}>
                    {tag}
                  </span>
                  <h2 className='text-2xl md:text-3xl font-bold text-white'>{title}</h2>
                </div>
              </div>

              <p className='text-xl md:text-2xl font-semibold text-slate-200 mb-4 leading-snug'>
                &ldquo;{headline}&rdquo;
              </p>
              <p className='text-slate-400 leading-relaxed mb-10'>{desc}</p>

              <div className='grid md:grid-cols-2 gap-10'>

                {/* trip flow */}
                <div>
                  <p className='text-xs text-slate-500 uppercase tracking-widest mb-5'>Trip Flow</p>
                  <ol className='space-y-4'>
                    {flow.map((step, i) => (
                      <li key={i} className='flex gap-4'>
                        <div className='flex flex-col items-center flex-shrink-0'>
                          <span className={`w-7 h-7 rounded-full ${iconBg} ${iconColor} flex items-center justify-center text-xs font-bold`}>
                            {i + 1}
                          </span>
                          {i < flow.length - 1 && (
                            <div className='w-px flex-1 bg-white/10 mt-1'></div>
                          )}
                        </div>
                        <div className='pb-4'>
                          <p className='text-slate-200 text-sm font-semibold'>{step.label}</p>
                          <p className='text-slate-500 text-xs mt-0.5'>{step.note}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* features + roles */}
                <div>
                  <p className='text-xs text-slate-500 uppercase tracking-widest mb-5'>Features</p>
                  <ul className='space-y-3 mb-8'>
                    {features.map((f) => (
                      <li key={f} className='flex items-start gap-2 text-slate-300 text-sm'>
                        <IoIosCheckmarkCircle className={`${checkColor} text-lg flex-shrink-0 mt-0.5`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className='text-xs text-slate-500 uppercase tracking-widest mb-3'>User Roles</p>
                  <div className='flex flex-wrap gap-2'>
                    {roles.map((role) => (
                      <span key={role} className='bg-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-full border border-white/10'>
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* bottom CTA */}
        <div className='mt-24 text-center border border-white/10 bg-white/5 rounded-3xl p-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Ready to get started?
          </h2>
          <p className='text-slate-400 text-lg mb-8 max-w-md mx-auto'>
            Join the platform that is redefining how movement accountability works.
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
            <Link href='https://app.pocketshuttle.com/login'>
              <button className='bg-sky-400 hover:bg-sky-300 text-black rounded-md w-[210px] px-6 py-3 font-semibold transition-colors'>
                Launch App
              </button>
            </Link>
            <Link href='mailto:hello@pocketshuttle.com'>
              <button className='border border-white/30 hover:bg-white/10 text-white rounded-md w-[210px] px-6 py-3 font-medium transition-colors'>
                Contact Sales
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
