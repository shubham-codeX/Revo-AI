import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function EmptyState() {
  return (
    <div class="flex flex-col items-center justify-center text-center px-8 py-24 bg-gray-50 rounded-xl border-2 border-dotted">
        <h2 class="text-xl font-semibold mb-2">No short videos yet</h2>
        <p class="text-gray-500 mb-4">Create your first short video to get started!</p>
        <Link href={'dashboard/create-new'}>
            <Button>Create New</Button>
        </Link>
    </div>
  )
}

export default EmptyState
