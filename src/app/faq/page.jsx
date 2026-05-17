import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is PocketShuttle?",
    a: "PocketShuttle is a real-time movement accountability and safety platform. It is not just a school bus app — it serves families, schools, interstate transport companies, and corporate organizations by providing live location tracking, safety alerts, and trip accountability tools."
  },
  {
    q: "Who can use PocketShuttle?",
    a: "Anyone who needs to track or share movement. Parents tracking their children's school bus. Adults sharing a live trip with family while traveling interstate. Schools managing their entire bus fleet. Transport companies giving passengers' families real-time bus visibility. Corporate HR teams coordinating staff shuttles."
  },
  {
    q: "How does live location tracking work?",
    a: "When a trip is active, the driver or traveler's device sends GPS coordinates to our server. Location updates are sent every 3–5 seconds while moving, 8–10 seconds when slowing, and 15–20 seconds when stationary. Authorized viewers — such as parents or family members — see this location in real-time on a map."
  },
  {
    q: "Does PocketShuttle track my location all the time?",
    a: "No. Location is only collected when a trip is explicitly active and with your consent. When no trip is running, no location data is gathered. You are always in control."
  },
  {
    q: "Can I turn off location tracking mid-trip?",
    a: "Yes. You can pause or end a trip at any time through the app, which will stop location sharing immediately."
  },
  {
    q: "What is the Family Mode?",
    a: "Family Mode lets any adult start a live trip and share it with family members — no app required for the viewer. A family member receives a link and can watch the trip on a live map. This is perfect for late-night travel, interstate trips, or any situation where a loved one wants peace of mind."
  },
  {
    q: "What happens if a vehicle stops unexpectedly?",
    a: "PocketShuttle has a trip timeout detection feature. If movement stops unexpectedly during an active trip, the system automatically notifies authorized viewers and can escalate an alert if movement does not resume within a defined window."
  },
  {
    q: "Is there a panic button?",
    a: "Yes. Drivers and travelers can trigger an emergency panic alert from within the app. This immediately notifies all authorized viewers on the trip and flags the trip as requiring attention."
  },
  {
    q: "How does the School module work?",
    a: "Schools get a dedicated admin dashboard where they can manage bus routes, assign drivers, monitor students, and send announcements to parents. Parents receive automatic alerts for pickup, drop-off, and when the bus is near. Schools are one customer segment on the platform — the system works independently of them."
  },
  {
    q: "What is a digital manifest for interstate transport?",
    a: "A digital manifest is a structured record of all passengers on a given trip — name, seat, contact details, and destination. Transport operators create this before departure, and it enables accurate accountability tracking and family notifications throughout the journey."
  },
  {
    q: "How secure is my personal data?",
    a: "We implement industry-standard security practices. Location data is tied to active trips and is not retained indefinitely. We do not sell personal data. For full details, please read our Privacy Policy."
  },
  {
    q: "Can I delete my account and data?",
    a: "Yes. You can request full account and data deletion by contacting us at hello@pocketshuttle.com. We will process your request promptly."
  },
];

export default function FAQPage() {
  return (
    <div className='pt-40 pb-24 px-4'>
      <div className='w-[340px] md:w-[780px] mx-auto'>

        <div className='text-center mb-14'>
          <p className='text-sky-500 text-sm font-semibold uppercase tracking-widest mb-3'>FAQ</p>
          <h1 className='text-3xl md:text-5xl font-bold mb-4'>Frequently Asked Questions</h1>
          <p className='text-slate-500 text-lg max-w-md mx-auto'>
            Everything you need to know about PocketShuttle — the platform, the
            technology, and how it keeps people safe.
          </p>
        </div>

        <Accordion type="single" collapsible className='space-y-1'>
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className='border-b border-slate-200'>
              <AccordionTrigger className='text-left text-base font-medium py-5 hover:no-underline'>
                {item.q}
              </AccordionTrigger>
              <AccordionContent className='text-slate-600 text-sm leading-relaxed pb-5'>
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className='mt-14 text-center border border-slate-200 rounded-2xl p-8 bg-slate-50'>
          <p className='text-slate-700 font-semibold mb-2'>Still have questions?</p>
          <p className='text-slate-500 text-sm mb-5'>
            Our team is ready to help — whether you&apos;re a parent, a school, or a transport company.
          </p>
          <a
            href='mailto:hello@pocketshuttle.com'
            className='inline-block bg-[#201678] hover:bg-[#180D63] text-white rounded-md px-6 py-3 text-sm font-medium transition-colors'
          >
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
}
