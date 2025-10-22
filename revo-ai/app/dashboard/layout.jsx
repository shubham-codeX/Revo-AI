import React, { children } from 'react'
import Header from './_component/Header'
import SideNav from './_component/SideNav'

function DashboardLayout({children}) {
  return (
    <div>
      <div className='hidden md:block h-screen bg-black fixed mt-[65px] w-64'>
        <SideNav />
      </div>
      <div>
        <Header />
          <div className='md:ml-64 lg:ml-64 sm:ml-32 p-10'>
            {children}
          </div>
      </div>
    </div>
  )
}

export default DashboardLayout
