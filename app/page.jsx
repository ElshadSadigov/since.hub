import AboutCard from "@/components/about-card";
import aboutIcon1 from '../public/svgs/about-icon1.svg'
import aboutIcon2 from '../public/svgs/about-icon2.svg'
import aboutIcon3 from '../public/svgs/about-icon3.svg'
import aboutImg from '../public/imgs/about-img.png'
import Image from "next/image";
import Link from "next/link";


export default function Home() {
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
            color = 'orange-400'
            title='Dəyərlərimiz'
            text='İşimizi sadiqliklə, şəffaflıqla və etik normativlərlə üstün tuturuq. Müştərilərimiz və tərəfdaşlarımızla sağlam əlaqələr qurmağa önəlik veririk.'
            />
            <AboutCard 
            img={aboutIcon2}
            color ='red-400'
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
          <Image src={aboutImg} alt="about img" className="w-[350px] h-full"/>
        </div>
      </div>
      <div className="flex gap-[24px] px-[80px] pt-[120px] pb-[150px]">
        <div className="bg-[#374AF3] rounded-[16px] flex flex-col w-1/4">
          <span>Bloglar və daha çoxu</span>
          <span>#Kitablar</span>
          <li>Məqalələr</li>
        </div>
        <div className="px-[28px] py-[25px] flex flex-col items-start w-3/4">
          <span className="text-[16px] text-[#374af3] font-medium">İndi başla</span>
          <span className="text-[28px] text-[#050123] font-medium">Paylaşmaq üçün buradasınız: Bilik İcmasına xoş gəlmisiniz!</span>
          <ul className="ms-[15px] mt-[20px] text-[#050123] text-opacity-50 list-disc flex flex-wrap gap-x-[55px] gap-y-[15px]">
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
    </div>
  );
}
