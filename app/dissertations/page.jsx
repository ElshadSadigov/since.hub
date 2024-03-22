import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import nextIcon from '../../public/svgs/next-icon.svg'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
       <div className='flex items-center justify-between px-[80px] py-[23px] border-b-[1px] border-[#d9d9d9]'>
        <div className='flex items-center gap-[10px] '>
          <span className='text-[16px] text-[#050123] font-medium'>Ana səhifə</span>
          <Image src={nextIcon} alt='next icon' />
          <span className='text-[16px] text-[#050123] font-medium'>Xidmətlər</span>
          <Image src={nextIcon} alt='next icon' />
          <span className='text-[16px] text-[#050123] font-medium'>Disertasiyalar</span>
        </div>
        <Link href='/' className='flex items-center gap-[5px]'>
          <Image src={backIcon} />
          <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
        </Link>
      </div>
    </div>
  )
}

export default page
