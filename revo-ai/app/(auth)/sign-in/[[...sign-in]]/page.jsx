import { SignIn } from '@clerk/nextjs'
import Image from 'next/image' 

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-end p-8 md:p-16 relative">
      <div className="absolute inset-0 z-0">
        <Image src={'/login.jpg'} alt='login' fill className='object-cover'/>
      </div>
      <div className="z-10 p-6 md:p-10 shadow-2xl shadow-black">
        <SignIn />
      </div>
    </div>
)
}