import Image from 'next/image'
import React from 'react'
import nextIcon from '../../public/svgs/next-icon.svg'
import backIcon from '../../public/svgs/back-icon.svg'
import Link from 'next/link'

const layout = ({children}) => {
  return (
    <div>
     <div className='px-[80px] py-[23px] flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
            <span className='text-[16px] font-medium text-[#050123]'>Ana səhifə</span>
            <Image src={nextIcon} alt='next icon'/>
            <span className='text-[16px] font-medium text-[#050123]'>Profil</span>
        </div>
        <Link href='/' className='flex items-center gap-[5px]'>
            <Image src={backIcon} alt='back icon'/>
            <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
        </Link>
     </div>
     <div className='w-full flex gap-[40px] px-[80px] py-[16px] border-[1px] border-[#d9d9d9] bg-[#64c343]'>
        <Link href='/' className='text-[14px] font-medium text-[#fff] px-[16px] py-[8px]'>Profil</Link> 
        <Link href='/' className='text-[14px] font-medium text-[#fff] px-[16px] py-[8px]'>Redaktə et</Link> 
        <Link href='/' className='text-[14px] font-medium text-[#fff] px-[16px] py-[8px]'>Paylaşımlar</Link> 
        <Link href='/' className='text-[14px] font-medium text-[#fff] px-[16px] py-[8px]'>Yadda saxla</Link> 
        <Link href='/' className='text-[14px] font-medium text-[#fff] px-[16px] py-[8px]'>İcma</Link> 
     </div>
     <div className='mt-[80px] mb-[120px]'>{children}</div>
    </div>
  )
}

export default layout
