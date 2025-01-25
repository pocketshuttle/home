import React from 'react'

function page() {
  return (
    <div>
        <div className='w-[300px] md:w-[900px] mx-auto pt-40'>
        <div>
            <h1 className='text-[30px] md:text-[50px] text-center font-bold'>Terms of Service</h1>
            <p className='text-center text-[16px] mb-20'>Last updated:25-01-2025 </p>
        </div>
        <p className='font-bold mb-5'>Welcome to PocketShuttle, a school bus management application designed to enhance the safety, convenience, and efficiency of school transportation. By using our application, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.</p>

        <p className='font-bold mb-2'> Acceptance of Terms</p>
        <p className='mb-5 text-slate-800'>By accessing or using PocketShuttle (&quot;the App&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the App.</p>

        <p className='font-bold mb-2'>Use of the Application</p>
        <ul  className='mb-5 text-slate-800'>
            <li>a. You must be at least 18 years old or have parental/guardian consent to use the App.</li>
            <li>b. You agree to use the App only for its intended purpose of school bus transportation management.</li>
            <li>c. Unauthorized use, including but not limited to, data extraction, resale, or misuse of collected information, is strictly prohibited.</li>
        </ul>

        <p className='font-bold py-2'>User Data and Privacy</p>
        <p>a. Location Data:</p>
        <ul  className='mb-5 text-slate-800'>
            <li>- PocketShuttle collects real-time location data to provide accurate bus tracking services.</li>
            <li>- Location data is collected only when the App is in use and with your consent.</li>
            <li>- We do not share your location data with third parties except as required for service functionality or by law.</li>
        </ul>
        <p>b. Data Security:</p>
        <ul  className='mb-5 text-slate-800'>
            <li>- We implement reasonable security measures to protect your data from unauthorized access or disclosure.</li>
            <li>- Despite our efforts, we cannot guarantee absolute security of your data.</li>
        </ul>
        <p>c. Privacy Policy:</p>
        <p  className='mb-5 text-slate-800'>- By using the App, you also agree to our Privacy Policy, which outlines how your data is collected, used, and protected.</p>

        <p className='font-bold mb-2'>User Responsibilities</p>
        <ul  className='mb-5 text-slate-800'>
            <li>a. You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>b. You agree not to use the App in any way that disrupts its functionality or compromises its security.</li>
            <li>c. You must ensure that the device used to access the App is secure and up to date.</li>
        </ul>
        <p className='font-bold mb-2'> Service Availability and Modifications</p>
        <ul  className='mb-5 text-slate-800'>
            <li>a. We strive to provide uninterrupted service; however, we do not guarantee that the App will always be available or error-free.</li>
            <li>b. We reserve the right to modify, update, or discontinue the App at any time without prior notice.</li>
        </ul>
        <p className='font-bold mb-2'>Limitation of Liability</p>
        <ul  className='mb-5 text-slate-800'>
            <li>a. PocketShuttle and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the App.</li>
            <li>b. We do not guarantee the accuracy or completeness of location tracking and disclaim liability for any transportation delays or issues.</li>
        </ul>
        <p className='font-bold mb-2'>Termination</p>
        <ul  className='mb-5 text-slate-800'>
            <li>a. We reserve the right to terminate or suspend your access to the App at our discretion, without prior notice, if you violate these Terms of Service.</li>
            <li>b. Upon termination, all rights and licenses granted to you will cease immediately.</li>
        </ul>
        <p className='font-bold mb-2'> Governing Law</p>
        <p  className='mb-5 text-slate-800'>These Terms of Service shall be governed by and construed in accordance with the laws of the State. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in the State.</p>

        <p className='font-bold mb-2'>Changes to Terms</p>
        <p  className='mb-5 text-slate-800'>We may update these Terms of Service from time to time. We will notify users of any material changes by posting the updated terms on the App. Continued use of the App after such changes constitutes acceptance of the updated terms.</p>

        <p className='font-bold mb-2'>Contact Information</p>
        <p  className='mb-5 text-slate-800'>If you have any questions or concerns regarding these Terms of Service, please contact us at <span> <a href="mailto:hello@pocketshuttle.com">hello@pocketshuttle.com</a> </span></p>

        <p  className='mb-5 text-slate-800'>By using PocketShuttle, you acknowledge that you have read and understood these Terms of Service and agree to abide by them.</p>
    </div>
    </div>
  )
}

export default page