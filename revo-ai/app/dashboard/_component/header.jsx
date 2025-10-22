import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import {UserButton} from '@clerk/nextjs'
import { Audiowide } from 'next/font/google'
import Link from 'next/link'

const playwrite = Audiowide({ 
    subsets: ['latin'],
    weight: '400', 
});

function Header() {
  return (
    <div className='p-4 px-6 md:px-12 flex items-center justify-between 
        bg-black border-b-2 border-purple-500/50 
        shadow-lg shadow-purple-900/80 sticky top-0 z-50'>
      
      <div className='flex gap-3 items-center'>
        <Image src={'/logo.svg'} alt='logo' width={50} height={50} />
        

        <h2 className={`text-2xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#471396] to-[#BF092F]
                       ${playwrite.className}`}>
            RevoAI
        </h2>
      </div>

    
      <div className='flex gap-4 items-center'>
        <Link href={'/dashboard'}>
          <Button className="bg-purple-600 hover:bg-[#793FDF] transition duration-300 
                          shadow-md hover:shadow-lg shadow-purple-500/50 
                          font-semibold px-5 py-2">
              Dashboard
          </Button>
        </Link>

        <UserButton 
            appearance={{ 
                elements: { 
                    userButtonAvatarBox: "w-10 h-10 ring-2 ring-purple-500"
                } 
            }}
        />
      </div>
    </div>
  )
}

export default Header
