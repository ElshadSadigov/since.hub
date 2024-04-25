import React from 'react'
import profileImg from '../../../public/imgs/profil-img.png'
import camera from '../../../public/svgs/camera.svg'
import Image from 'next/image'
import CommunityCard from '@/components/community-card'

const page = () => {
  return (
    <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px]'>
      <div className='flex items-center gap-[30px] pb-[20px] border-b-[1px] border-[#050123] border-opacity-15'>
        <div className='w-[80px] h-[80px] relative'>
          <Image src={profileImg} alt='profile img' className='w-full h-full rounded-[80px] border-[2px] border-[#374af3]' />
          <div className='absolute right-[-10px] bottom-0 w-[30px] h-[30px] cursor-pointer rounded-[30px] bg-[#374af3] flex items-center justify-center'>
            <Image src={camera} alt='camera icon' />
          </div>
        </div>
        <div className='flex flex-col '>
          <span className='text-[24px] font-semibold text-[#050123] '>Mery Jane</span>
          <span className='text-[18px] font-medium text-[#050123] text-opacity-50'>Pyhton developer</span>
        </div>
      </div>
      <div className='mt-[70px] flex flex-col gap-[34px]'>
        <CommunityCard/>
        <CommunityCard/>
      </div>
    </div>
  )
}

export default page
