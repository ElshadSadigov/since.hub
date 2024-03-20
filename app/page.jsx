import AboutCard from "@/components/about-card";
import aboutIcon1 from '../public/svgs/about-icon1.svg'
import aboutIcon2 from '../public/svgs/about-icon2.svg'
import aboutIcon3 from '../public/svgs/about-icon3.svg'
import aboutImg from '../public/imgs/about-img.png'
import shareImg from '../public/imgs/share-img.png'
import booksImg from '../public/imgs/books-img.png'
import maqasImg from '../public/imgs/maqas-img.png'
import bloqsImg from '../public/imgs/bloqs-img.png'
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";


export default function Home() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div>
      <div>
        Slide part
      </div>
      <div className="w-full flex items-center justify-between ps-[80px] bg-[#EEFAFA]">
        <div className="flex flex-col items-start">
          <span className="text-[36px] text-[#050123] font-medium">Haqqımızda</span>
          <span className="mt-[10px] text-[#050123] text-opacity-50 text-[20px]  font-medium">3 əsas mərhələdə haqqımızda daha çox məlumat əldə edin</span>
          <div className="mt-[50px] flex gap-[32px] ">
            <AboutCard
              img={aboutIcon1}
              color='orange-400'
              title='Dəyərlərimiz'
              text='İşimizi sadiqliklə, şəffaflıqla və etik normativlərlə üstün tuturuq. Müştərilərimiz və tərəfdaşlarımızla sağlam əlaqələr qurmağa önəlik veririk.'
            />
            <AboutCard
              img={aboutIcon2}
              color='red-400'
              title=' Hədəflərimiz'
              text='Mükəmməl xidmət təklifi üçün planlı və yüksək standartlarda çalışmağı hədəfləyirik. Uzunmüddətli nailiyyət əldə etməyi hədəfləyirik.'
            />
            <AboutCard
              img={aboutIcon3}
              color='green-400'
              title='Missiyamız'
              text='Müştərilərimizə uğur yolculuğunda tərəfdaşlıq və dəstək təmin etmək istəyirik. Layiqli xidmət missiyamızın əsasını təşkil edir.'
            />
          </div>
        </div>
        <div className="bg-gradient-to-br from-transparent via-teal-100 to-teal-300">
          <Image src={aboutImg} alt="about img" className="w-[350px] h-full" />
        </div>
      </div>
      <div className="flex gap-[24px] px-[80px] pt-[120px] pb-[150px]">
        <div className="bg-[#374AF3] rounded-[16px] flex flex-col w-[364px] relative overflow-hidden">
          <span className="text-[16px] text-[#fff] mt-[40px] ms-[50px]">Bloglar və daha çoxu</span>
          <span className="text-[32px] font-semibold text-[#fff] my-[36px] ms-[20px]">#Kitablar</span>
          <li className="text-[#fff] text-opacity-75 text-[20px] rotate-[-5deg] mt-[30px] ms-[28px]">Məqalələr</li>
          <Image src={shareImg} alt="share img" className="absolute right-0 bottom-0 z-10" />
          <svg className="absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" width="364" height="182" viewBox="0 0 364 182" fill="none">
            <path d="M364 182C364 158.099 359.292 134.433 350.146 112.352C341 90.2703 327.594 70.2068 310.693 53.3066C293.793 36.4063 273.73 23.0003 251.648 13.8539C229.567 4.70757 205.901 -1.04473e-06 182 0C158.099 1.04473e-06 134.433 4.70757 112.352 13.8539C90.2703 23.0003 70.2068 36.4063 53.3066 53.3066C36.4063 70.2068 23.0003 90.2704 13.8539 112.352C4.70756 134.433 -2.08945e-06 158.099 0 182L364 182Z" fill="url(#paint0_linear_1345_12199)" />
            <defs>
              <linearGradient id="paint0_linear_1345_12199" x1="182" y1="0" x2="182" y2="182" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0.17" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="px-[28px] bg-[#F8F8F8] rounded-[16px] py-[25px] flex flex-col items-start w-3/4">
          <span className="text-[16px] text-[#374af3] font-medium">İndi başla</span>
          <span className="text-[28px] text-[#050123] font-medium">Paylaşmaq üçün buradasınız: Bilik İcmasına xoş gəlmisiniz!</span>
          <ul className="ms-[15px] mt-[20px] text-[16px] text-[#050123] text-opacity-50 list-disc flex flex-wrap gap-x-[55px] gap-y-[15px]">
            <li>Universitet məlumatları</li>
            <li>Araşdırma-tədqiqat</li>
            <li>Faydalı məlumatlar</li>
            <li>Fayllar</li>
            <li>Yazılar</li>
            <li>Kitablar</li>
            <li>Bloglar</li>
            <li>Məqalələr</li>
            <li>Disertasiyalar</li>
            <li>Yenilik-xəbər</li>
            <li>Sual cavab</li>
          </ul>
          <Link href='/' className="px-[32px] py-[16px] mt-[50px] bg-[#374af3] rounded-[8px] text-[16px] font-bold text-[#fff]">Paylaşım et</Link>
        </div>
      </div>
      <div className="px-[80px]">
        <div className="flex flex-col items-center">
          <span className="text-[24px] font-medium text-[#050123] ">Gündəmdə olan</span>
          <span className="mt-[5px] text-[16px] text-[#050123] text-opacity-50">Gündəmdə olan ən son yazılar və mövzular üçün bizi ziyarət edin. Maraqlı məqalə və kitabları kəşf edin!</span>
        </div>
        <div className="grid grid-cols-3 gap-[32px] mt-[30px]">
          <div className="relative h-[250px] rounded-[8px] overflow-hidden">
            <div className="w-full h-full absolute left-0 top-0  bg-[#050123] bg-opacity-50 flex items-center justify-center">
              <span className="px-[56px] py-[15px] rounded-[8px] bg-[#fff] bg-opacity-25 text-[30px] font-medium text-[#fff]">Bloqlar</span>
            </div>
            <Image src={bloqsImg} alt="bloq img" className=" w-full h-full"/>
          </div>
          <div className="relative h-[250px] rounded-[8px] overflow-hidden">
            <div className="w-full h-full absolute left-0 top-0  bg-[#050123] bg-opacity-50 flex items-center justify-center">
              <span className="px-[56px] py-[15px] rounded-[8px] bg-[#fff] bg-opacity-25 text-[30px] font-medium text-[#fff]">Məqalələr</span>
            </div>
            <Image src={maqasImg} alt="bloq img" className=" w-full h-full"/>
          </div>
          <div className="relative h-[250px] rounded-[8px] overflow-hidden">
            <div className="w-full h-full absolute left-0 top-0  bg-[#050123] bg-opacity-50 flex items-center justify-center">
              <span className="px-[56px] py-[15px] rounded-[8px] bg-[#fff] bg-opacity-25 text-[30px] font-medium text-[#fff]">Kitablar</span>
            </div>
            <Image src={booksImg} alt="bloq img" className=" w-full h-full"/>
          </div>
        </div>
      </div>
      <div className="mt-[150px] px-[80px] bg-[#F9F9F9] py-[80px] flex flex-col gap-[100px]">
        <div>
          <div className="flex justify-between">
            <span className="text-[24px] text-[#050123] font-medium">Məqalələr</span>
            <Link href='/' className="text-[18px] font-medium text-[#374af3]">daha çox</Link>
          </div>
          <div className="mt-[16px] grid grid-cols-4 gap-x-[32px] gap-y-[48px]">
            {
              data.map(item =>{
                return <Card key={item} />
              })
            }
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <span className="text-[24px] text-[#050123] font-medium">Bloglar</span>
            <Link href='/' className="text-[18px] font-medium text-[#374af3]">daha çox</Link>
          </div>
          <div className="mt-[16px] grid grid-cols-4 gap-x-[32px] gap-y-[48px]">
            {
              data.map(item =>{
                return <Card key={item} />
              })
            }
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <span className="text-[24px] text-[#050123] font-medium">Kitablar</span>
            <Link href='/' className="text-[18px] font-medium text-[#374af3]">daha çox</Link>
          </div>
          <div className="mt-[16px] grid grid-cols-4 gap-x-[32px] gap-y-[48px]">
            {
              data.map(item =>{
                return <Card key={item} />
              })
            }
          </div>
        </div>
      </div>
      <div className="px-[80px] py-[150px]">
          s
      </div>
    </div>
  );
}
