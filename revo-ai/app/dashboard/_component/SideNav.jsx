"use client"
import { CircleUserRound, PanelsTopLeft, ShieldPlus, UserRoundPlus } from 'lucide-react'
import React from 'react'
import Link from 'next/link';

function SideNav() {
    const activePath = '/dashboard'; 

    const MenuOption=[
        {
            id:1,
            name:'Dashboard',
            path:'/dashboard',
            icon:PanelsTopLeft
        },
        {
            id:2,
            name:'New',
            path:'/create-new',
            icon:UserRoundPlus
        },
        {
            id:3,
            name:'Upgrade',
            path:'/upgrade',
            icon:ShieldPlus
        },
        {
            id:4,
            name:'Account',
            path:'/account',
            icon:CircleUserRound
        },

    ]

  return (
    <div className='w-64 h-screen shadow-2xl p-5 shadow-purple-900'>
      <div className='grid gap-4'>
        {MenuOption.map((item) => {
            const isActive = item.path === activePath;

            return ( 
                <Link href={item.path} key={item.id}>
                    <div 
                        className={`
                            flex items-center gap-4 p-3 rounded-lg cursor-pointer 
                            transition-all duration-300 ease-in-out
                            
                            // 1. Default white text
                            text-white
                            
                            // 3. Active state (same as hover state)
                            ${isActive 
                                ? 'text-purple-500 font-extrabold scale-[1.05] bg-gray-800' 
                                : 'hover:text-purple-500 hover:font-extrabold hover:scale-[1.18]'
                            }
                        `}
                    >
                        <item.icon className='w-6 h-6' />
                        <h2 className='text-lg'>{item.name}</h2>
                    </div>
                </Link>
            )
        })}
      </div>
    </div>
  )
}

export default SideNav
