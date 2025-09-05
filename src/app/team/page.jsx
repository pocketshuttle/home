import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";





const teams = [
  {
    src: "/buchi.png",
    name: "Mmaduabuchi Omeje",
    role: "Founder",
    social: "https://www.linkedin.com/in/mmaduabuchi-omeje/"
  },
    {
    src: "/femi.png",
    name: "Femi Michael B.",
    role: "Head of Operation",
    social: "https://www.linkedin.com/in/femi-michael-b-319a13138/"

  },
    {
    src: "/santos.png",
    name: "Abusonwan Santos",
    role: "Technical Lead",
    social: "https://www.linkedin.com/in/abusomwan-santos/"

  },
      {
    src: "/chelsea.png",
    name: "Awfomata Chelsea",
    role: "Marketing Lead",
    social: "https://www.linkedin.com/in/awfomatachelsea/"

  },
]

const jobs = [
  {
    job_cat: "Design",
    job_title: "Product Design",
    zone: "hybrid",
    job_type: "Part-time",
    ap: "#"
  },
   {
    job_cat: "Design",
    job_title: "Product Design",
    zone: "hybrid",
    job_type: "Part-time",
    ap: "#"
  },
   {
    job_cat: "Design",
    job_title: "Product Design",
    zone: "hybrid",
    job_type: "Part-time",
    ap: "#"
  },
]

function page() {
  return (
    <div className='px-5 bg-gray-50 md:px-[60px]'>
        <div className='pt-[130px] w-auto md:w-[500px]'>
            <p className='text-[13px]'>The team</p>
            <h2 className='text-[30px] font-medium'>Meet Our Dedicated Team</h2>
            <p className='pt-3'>At PocketShuttle, our team is driven by a shared passion for safety, innovation, and excellence. Together, we work to create smarter, safer school transportation solutions that give parents peace of mind and help schools operate seamlessly.</p>
        </div>
        <div className='flex bg-white flex-wrap justify-center my-4 items-center rounded-md'>
         {teams.map((team, index)=>(
        <div  className="flex flex-col items-start py-6 md:pr-4" key={index}>
           <Image className='w-[300px] md:w-[350px] rounded-xl' src={team.src} width={220} height={220} alt='img'/>
            <p className='font-bold mt-2'>{team.name}</p>
            <p>{team.role}</p>
            <a href={team.social}><FaLinkedinIn /></a>
        </div>
        ))}
        </div>  

          <div className='h-[130px] py-[20px]'>
          <h1 className='text-[25px] font-semibold mt-[20px] text-center'>Open Positions</h1>
            <p className='text-center text-[13px] py-[6px]'>Join the PocketShuttle Team.</p>
        </div>

        <div className='b'>
          {jobs.map((job, index)=>(
            <div className='my-5 p-5 rounded-md bg-white' key={index}>
              <div className='flex justify-between items-center'>
                <p className='text-[13px]'>{job.job_cat}</p>
                 <a className='flex text-[13px]' href={job.ap}>View job<MdArrowOutward /></a>
              </div>

                <div>
                  <p className='text-[15px] my-1 font-semibold'>{job.job_title}</p>
                  <div className='flex gap-2'>
                    <div className='flex text-[13px] justify-start items-center'>
                    <IoMdTime />
                    <p>{job.job_type}</p>
                    </div>
                     <div className='flex text-[13px] justify-start items-center'>
                      <IoLocationOutline />
                      <p>{job.zone}</p>
                     </div>
                </div>
                </div>
              </div>
          ))}
        </div>
        <div className='text-center py-[30px] bg-white h-[300px]'>
          <h1 className='md:w-[1000px] w-[280px] mx-auto md:text-[24px] text-[16px] font-semibold'>At PocketShuttle, our mission is simple: to give parents peace of mind and schools the tools they need to keep children safe. Every child&apos;s journey should be as secure as their destination, and we&apos;re here to make that a reality</h1>
          <Image className='rounded-full block mx-auto mt-6' src={"/buchi.png"} width={60}  height={60} alt='img'/>
          <p className='text-center font-semibold text-[13px]'>Mmaduabuchi Omeje</p>
        </div>
    </div>
  )
}

export default page