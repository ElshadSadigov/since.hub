import Image from 'next/image'
import React from 'react'
import nextIcon from '../../public/svgs/next-icon.svg'
import backIcon from '../../public/svgs/back-icon.svg'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <div className='flex items-center justify-between px-[30px] md:px-[80px] py-[23px] border-b-[1px] border-[#d9d9d9]'>

        <div className='flex items-center gap-[10px] mt-[10px] md:mt-[0px]'>
            <span className='text-[16px] text-[#050123] font-medium'>Ana səhifə</span>
            <Image src={nextIcon} alt='next icon'/>
            <span className='text-[16px] text-[#050123] font-medium'>Haqqımızda</span>
        </div>
        <Link href='/' className='flex items-center gap-[5px]'>
            <Image src={backIcon}/>
            <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
        </Link>
      </div>
      <div className='mt-[50px] md:mt-[80px] mb-[120px] px-[30px] md:px-[80px] flex flex-col items-center'>
        <span className='text-[24px] md:text-[32px] font-semibold text-[#050123]'>Haqqımızda</span>
        <div className='mt-[50px] flex flex-col gap-[30px]'>
            <p className='text-[16px] text-[#050123]'>THIS DOCUMENT CONTAINS IMPORTANT INFORMATION REGARDING YOUR RIGHTS AND OBLIGATIONS, AS WELL AS CONDITIONS, LIMITATIONS, AND EXCLUSIONS THAT APPLY TO YOU. PLEASE READ IT CAREFULLY.</p>
            <p className='text-[16px] text-[#050123]'>BY ACCESSING OR USING THE DIGITAL PLATFORMS (AS DEFINED BELOW), YOU ACCEPT AND AGREE TO BE BOUND BY THESE TERMS OF USE (“TERMS OF USE”) (INCLUDING THE ARBITRATION AGREEMENT AND CLASS ACTION WAIVER SET FORTH HEREIN, PURSUANT TO WHICH YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION (EXCEPT AS OTHERWISE PROVIDED HEREIN) AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION) and our Privacy Policy , AND YOU REPRESENT THAT (A) YOUR ACCESS TO AND USE OF THE DIGITAL PLATFORMS WILL BE IN ACCORDANCE WITH THESE TERMS OF USE AND ALL APPLICABLE LAWS, RULES AND REGULATIONS AND (B) YOU ARE OF LEGAL AGE TO ENTER INTO A BINDING CONTRACT. If you do not agree to these Terms of Use and the Privacy Policy , you may not access or otherwise use the Digital Platforms.</p>
            <p className='text-[16px] text-[#050123]'>The following Terms of Use are entered into by and between you and Sotheby’s (“Sotheby’s” or “we” or “us” or “our” or other similar pronouns) and, together with any documents incorporated herein by reference, govern your access to and use of the Sotheby’s website at www.sothebys.com , and the websites for Sotheby’s Wine, Sotheby’s Diamonds, or any other Sotheby’s website on which this is posted (each, a “Sotheby’s Website”), whether accessed through the Sotheby’s website (desktop or mobile) and/or Sotheby’s applications for mobile and tablet devices (collectively, the “Digital Platforms”).</p>
            <p className='text-[16px] text-[#050123]'>For the avoidance of doubt, your use of certain areas, services or features of the Digital Platforms may be subject to additional terms, which will be posted or otherwise made available to you in connection with such area or feature. By way of example, your purchase of non-auction products through the Sotheby’s Digital Platforms will be governed by the applicable Terms of Sale, and your participation in online auctions shall be governed by the Conditions of Sale applicable to the relevant auction. Sotheby’s consignments and purchases are governed by terms located at www.sothebys.com .</p>
            <p className='text-[16px] text-[#050123]'>We may change these Terms of Use from time to time, at any time without notice to you, by posting such changes on the Sotheby’s Websites. It is your responsibility to periodically check the Terms of Use. You will know if these Terms of Use have been revised since your last visit to the Digital Platforms by referring to the “Last Modified” date at the bottom of this page. IF YOU DO NOT AGREE TO THE CURRENT VERSION OF THE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO REFRAIN FROM ACCESSING OR OTHERWISE USING THE DIGITAL PLATFORMS.</p>
        </div>
      </div>
    </div>
  )
}
export default page
