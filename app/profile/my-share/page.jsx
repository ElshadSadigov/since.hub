import Image from 'next/image'
import React from 'react'
import down from '../../../public/svgs/down-black.svg'
import deleteIcon from '../../../public/svgs/delete-icon.svg'
import ProfileCard from '@/components/profile-card'

const page = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div className='px-[80px]'>
      <div className='flex flex-col gap-[20px] pb-[20px] border-b-[1px] border-[#050123] border-opacity-15'>
        <span className='text-[24px] font-medium text-[#050123]'>Paylaşımlar</span>
        <p className='text-[16px] text-[#050123]'>Şəxsi paylaşımlarınızı profilinizdə istədiyiniz kimi idarə edin.</p>
      </div>
      <div className='mt-[70px]'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[60px]'>
                <span className='text-[16px] font-medium text-[#050123] text-opacity-50'>12 paylaşım</span>
                <div className='flex items-center gap-[5px] cursor-pointer'>
                    <span className='text-[16px] font-medium text-[#050123]'>Blog</span>
                    <Image src={down} alt='down icon' className='text-[#000]'/> 
                </div>
            </div>
            <div className='flex items-center gap-[24px]'>
                <div className='flex items-center gap-[5px] px-[16px] py-[6px] rounded-[4px] border-[1px] border-[#050123] border-opacity-25 cursor-pointer'>
                    <label htmlFor="Hamısı" className='text-[16px] text-[#050123] text-opacity-50 font-medium cursor-pointer'>Hamısı</label>
                    <input type="checkbox" id="Hamısı" className='w-[20px] h-[20px]'/>
                </div>
                <button className='flex items-center gap-[10px] px-[16px] py-[6px] rounded-[4px] border-[1px] border-[#050123] border-opacity-25 cursor-pointer'>
                    <span className='text-[16px] text-[#050123] text-opacity-50 font-medium'>Sil</span>
                    <Image src={deleteIcon} alt='delet icon'/>
                </button>
            </div>
        </div>
        <div className='mt-[38px] grid grid-cols-3 gap-x-[32px] gap-y-[48px]'>
            {
                data.map(item=>{
                    return <ProfileCard key={item}/>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default page
