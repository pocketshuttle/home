
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

function page() {
  return (
    <div className='pt-60 w-[300px] md:w-[900px] mx-auto '>
        <h1 className='text-[30px] md:text-[50px] text-center font-bold'>Frequently Asked Questions (FAQ)</h1>
        <div>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Does PocketShuttle track my location all the time?</AccordionTrigger>
                  <AccordionContent>
                  No, we only collect your location when the App is in use and with your consent.
                 </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger> Can I turn off location tracking?</AccordionTrigger>
                  <AccordionContent>
                  Yes, you can disable location tracking through your device settings at any time.                 </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>How secure is my personal information?</AccordionTrigger>
                  <AccordionContent>
                  We implement industry-standard security measures to protect your data, but we recommend keeping your login credentials secure.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Can I delete my account and data?</AccordionTrigger>
                  <AccordionContent>
                  Yes, you can request account deletion by contacting us at hello@pocketshuttle.com.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Will my data be shared with third parties?
                </AccordionTrigger>
                  <AccordionContent>
                  We only share your data with trusted service providers as outlined in our Privacy Policy.                 </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
    </div>
  )
}

export default page