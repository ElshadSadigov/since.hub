"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import instagram from '../public/svgs/instagram.svg'
import facebook from '../public/svgs/facebook.svg'
import mail from '../public/svgs/mail.svg'
import search from '../public/svgs/search.svg'
import down from '../public/svgs/down.svg'

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='w-full fixed z-[999] left-0 top-0'>
      <div className='flex justify-between px-[80px] py-[20px] bg-[#fff]'>
        <div className='flex items-center gap-[20px]'>
            <Link href='/' className='flex items-center gap-[10px]'>
                <Image src={instagram} alt='instagram'/>
                <span className='text-[14px] text-[#050123]'>Instagram</span>
            </Link>
            <div className='w-[2px] h-[18px] rounded-[15px] bg-[#000]'></div>
            <Link href='/' className='flex items-center gap-[10px] '>
                <Image src={facebook} alt='facebook'/>
                <span className='text-[14px] text-[#050123]'>Facebook</span>
            </Link>
        </div>
        <div>
            <Link href='/' className='flex items-center gap-[10px]'>
                <Image src={mail} alt='mail'/>
                <span className='text-[14px] text-[#050123]'>infosince.hub@gmail.com</span>
            </Link>
        </div>
      </div>
      <div className='px-[80px] py-[20px] flex justify-between items-center w-full bg-[#374AF3]'>
        <Link href='/' className='flex items-start'>
            <span className='text-[36px] font-bold text-[#050123]'>SİNCE</span>
            <span className='text-[36px] font-bold text-[#fff]'>.HUB</span>
            <span className='font-black text-[#fff] text-[36px] translate-y-[-25px]'>.</span>
        </Link>
        <div className='flex items-center gap-[180px]'>
            <ul className='flex items-center gap-[40px] text-[16px] text-[#fff] font-medium'>
                <li><Link href='/about'>Haqqımızda</Link></li>
                <li><Link href='/rules'>Qaydalar</Link></li>
                <li onClick={()=>setShow(!show)} className='relative flex items-center gap-[5px]'>
                  <span className='cursor-pointer list-hover'>Xidmətlər</span>
                  <Image src={down} alt='down icon'/>
                  <ul className={` ${ show ? 'block' : "hidden"} absolute left-0 top-0 bg-[#fff] text-[#000] mt-[30px] rounded-[8px] shadow-lg`}>
                    <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                      <Link href='/blogs'>Bloglar</Link>
                      </li>
                    <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                      <Link href='/books'>Kitablar</Link>
                      </li>
                    <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                      <Link href='/articles'>Məqalələr</Link>
                      </li>
                    <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                      <Link href='/dissertations'>Disertasiyalar</Link>
                    </li>
                    <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                      <Link href='/question-and-answer'>Sual cavab</Link>
                    </li>
                    <li className='ps-[12px] pe-[35px] py-[8px] hover:bg-[#374af3] hover:bg-opacity-10 cursor-pointer'>
                      <Link href='/forum'>Forum</Link>
                    </li>
                  </ul>
                </li>
                <li><Link href='/contact'>Əlaqə</Link></li>
            </ul>
            <div className='flex items-center gap-[30px]'>
                <Link href='/'><Image src={search} alt='search'/></Link>
                <div className='flex items-center gap-[7px] cursor-pointer'> 
                    <span className='text-[#fff] text-[24px] '>AZ</span>
                    <Image src={down} alt='sown'/>
                </div>
                <Link href='/register' className='px-[21px] py-[10px] border-[1px] border-[#fff] rounded-[8px] text-[16px] font-medium text-[#fff]'>Daxil ol</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
