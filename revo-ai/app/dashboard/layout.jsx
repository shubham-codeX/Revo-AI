import React, { children } from 'react'
import Header from './_component/header'

function DashboardLayout({children}) {
  return (
    <div>
      <div>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
