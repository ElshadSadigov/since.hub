import React from 'react'
import profileImg from '../../public/imgs/profil-img.png'
import camera from '../../public/svgs/camera.svg'
import Image from 'next/image'

const page = () => {
  return (
    <div className='xl:px-[80px] lg:px-[50px] md:px-[30px] px-[16px]'>
      <div className='flex items-center gap-[30px] pb-[20px] border-b-[1px] border-[#050123] border-opacity-15'>
        <div className='w-[80px] h-[80px] relative'>
          <Image src={profileImg} alt='profile img' className='w-full h-full rounded-[80px] border-[2px] border-[#374af3]'/>
          <div className='absolute right-[-10px] bottom-0 w-[30px] h-[30px] cursor-pointer rounded-[30px] bg-[#374af3] flex items-center justify-center'>
          <Image src={camera} alt='camera icon' />
          </div>
        </div>
        <div className='flex flex-col '>
          <span className='text-[24px] font-semibold text-[#050123] '>Mery Jane</span>
          <span className='text-[18px] font-medium text-[#050123] text-opacity-50'>Pyhton developer</span>
        </div>
      </div>
      <div className='mt-[70px] flex flex-col gap-[32px]'>
        <div className='grid md:grid-cols-3 gap-[32px]'>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="loc" className='md:text-[18px] text-[16px] text-[#050123]'>Məkan</label>
            <input type="text" id='loc' placeholder='Məkan fərdiləşdirilməsi' className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="tel" className='md:text-[18px] text-[16px] text-[#050123]'>Telefon</label>
            <input type="tel" id='tel' placeholder="Məkan fərdiləşdirilməsi" className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="email" className='md:text-[18px] text-[16px] text-[#050123]'>E-poçt ünvanı</label>
            <input type="email" id='email' placeholder='E-poçt ünvanınızı daxil edin' className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="full-name" className='md:text-[18px] text-[16px] text-[#050123]'>Ad, soyad</label>
            <input type="text" id='full-name' placeholder='Advə soyadınızı daxil edin' className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="peşə" className='md:text-[18px] text-[16px] text-[#050123]'>Peşə</label>
            <input type="text" id='peşə' placeholder='Peşənizi daxil edin' className='px-[20px] py-[16px] rounded-[8px] border-[1px] border-[#050123] border-opacity-15 outline-none'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
