import React from 'react'

function page() {
  return (
    <div>
         <div className='w-[300px] md:w-[900px] mx-auto pt-40'>
        <div>
        <h1 className='text-[30px] md:text-[50px] text-center font-bold'>Privacy Policy</h1>
        <p className='text-center text-[16px] mb-20'>Last updated:25-01-2025 </p>

        <p className='font-bold mb-5'>PocketShuttle (&quot;the App&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your information when you use our school bus management application.</p>

        <p className='font-bold mb-2'>Information We Collect</p>
        <p>a. Location Data:</p>
        <ul  className='mb-5 text-slate-800'>
            <li>We collect real-time location data to provide accurate bus tracking services.</li>
            <li>Location data is collected only when the App is in use and with your consent.</li>
            <li>We do not collect location data when the App is closed or not in active use.</li>
        </ul>
        <p className='font-bold mb-2'>User Information:</p>
        <ul  className='mb-5 text-slate-800'>
            <li> When you create an account, we collect personal details such as your name, email address, phone number, and school details.</li>
            <li>This information is used to identify and communicate with you.</li>
        </ul>
        <p className='font-bold mb-2'>Device Information:</p>
        <ul  className='mb-5 text-slate-800'>
            <li>We may collect information about the device you use to access the App, such as device type, operating system, and unique identifiers.</li>
        </ul>
        <p className='font-bold mb-2'>Usage Data:</p>
        <ul  className='mb-5 text-slate-800'>
            <li>We collect data on how you interact with the App to improve our services and user experience.</li>
        </ul>
        <p className='font-bold mb-2'>How We Use Your Information</p>
        <ul  className='mb-5 text-slate-800'>
            <li>To provide and improve our school bus management services.</li>
            <li>To notify users of bus locations and estimated arrival times.</li>
            <li>To ensure the safety and efficiency of school transportation.</li>
            <li>To respond to user inquiries and support requests.</li>
            <li>To monitor and analyze trends to enhance the App&apos;s performance.</li>
        </ul>
        <p className='font-bold mb-2'>Sharing of Information</p>
        <ul  className='mb-5 text-slate-800'>
            <li> Third-Party Service Providers: - We may share your information with trusted service providers who assist in operating the App, such as hosting providers and analytics services.</li>
            <li>Legal Requirements:- We may disclose your information if required by law or to protect the rights, property, or safety of PocketShuttle, its users, or others.</li>
            <li>Aggregated Data:- Non-personal, aggregated data may be shared for research and analysis purposes.</li>
        </ul>

        <p className='font-bold mb-2'>Data Security</p>
        <ul  className='mb-5 text-slate-800'>
            <li>We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, or destruction.</li>
            <li>Despite our efforts, no data transmission over the internet can be guaranteed to be completely secure.</li>
        </ul>

        <p className='font-bold mb-2'>Your Choices and Rights</p>
        <ul  className='mb-5 text-slate-800'>
            <li>Access and Update: - You may access and update your personal information through the App settings.</li>
            <li>Location Services:- You can enable or disable location tracking through your device settings at any time.</li>
            <li>Data Deletion:- You can request the deletion of your personal data by contacting us at hello@pocketshuttle.com.</li>
        </ul>
        <p className='font-bold mb-2'>Retention of Data</p>
        <ul  className='mb-5 text-slate-800'>
            <li>We retain your information for as long as necessary to provide our services and comply with legal obligations.</li>
            <li>Once data is no longer needed, it will be securely deleted or anonymized.</li>
        </ul>
        <p className='font-bold mb-2'>Children's Privacy</p>
        <ul  className='mb-5 text-slate-800'>
            <li>Our services are intended for parents and guardians; however, we may collect limited information about children as provided by parents.</li>
            <li>We do not knowingly collect personal information directly from children under 13 without parental consent.</li>
        </ul>
        <p className='font-bold mb-2'>Changes to This Privacy Policy</p>
        <ul  className='mb-5 text-slate-800'>
            <li>We may update this Privacy Policy periodically. Changes will be posted in the App, and we encourage you to review it regularly.</li>
            <li>Continued use of the App after changes implies acceptance of the updated policy.</li>
        </ul>
        <p className='font-bold mb-2'>Contact Us</p>
        <ul  className='mb-5 text-slate-800'>
            <li> If you have any questions or concerns about this Privacy Policy, please contact us at hello@pocketshuttle.com.</li>
        </ul>
        <p  className='mb-5 text-slate-800'>By using PocketShuttle, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
        </div>
    </div>
    </div>
  )
}

export default page