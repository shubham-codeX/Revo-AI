"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import EmptyState from './_component/EmptyState';
import Link from 'next/link';

function Dashboard() {
  const [videoList, setVideoList]=useState([]);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Link href={'dashboard/create-new'}>
          <Button>+ Create New</Button>
        </Link>
      </div>

      {/* Empty State */}
      {videoList?.length==0&&<div className='py-20'>
          <EmptyState />
      </div>}
    </div>
  )
}

export default Dashboard
