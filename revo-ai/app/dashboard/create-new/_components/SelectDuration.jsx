"use client"
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function SelectDuration({onUserSelect}) {
  return (
    <div className='mb-8 mt-7'>
      {/* 1. Enhanced Heading using the 'primary' color and bolder font */}
      <h2 className='font-extrabold text-3xl text-purple-500 tracking-tight'>Duration</h2>
      
      {/* 2. Subtle secondary text color */}
      <p className='text-muted-foreground mb-6'>Select Video Duration</p>
      
      <Select onValueChange={(value)=>{
        value !='Custom Prompt'&& onUserSelect('duration', value)
        }}>
        <SelectTrigger 
          className="w-full h-14 text-lg font-medium bg-background border-2 border-border 
                     hover:border-primary/50 transition-all duration-200
                     focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background 
                     shadow-lg shadow-primary/10 data-[state=open]:border-primary"
        >
          <SelectValue placeholder="Duration" />
        </SelectTrigger>
        <SelectContent className="shadow-2xl shadow-primary/20">
            {/* 4. Enhanced Item Hover/Focus */}
            <SelectItem 
                value='30 Seconds' 
                className='text-foreground data-[state=checked]:!text-primary data-[highlighted]:!bg-purple-100 data-[highlighted]:!text-primary cursor-pointer'
            >
                30 Seconds
            </SelectItem>
            <SelectItem 
                value='60 Seconds' 
                className='text-foreground data-[state=checked]:!text-primary data-[highlighted]:!bg-purple-100 data-[highlighted]:!text-primary cursor-pointer'
            >
                60 Seconds
            </SelectItem>
        </SelectContent>
    </Select>
    </div>
  )
}

export default SelectDuration