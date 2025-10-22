"use client"
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

function SelectTopic({onUserSelect}) {
  const options = ['Custom Prompt', 'Random AI Story', 'Scary story','Historical Facts','Bed Time Story','Motivationsl','Fun Facts']
  const [selectedOption, setSelectedOption]=useState();
  return (
    <div className='mb-8'>
      <h2 className='font-bold text-3xl text-purple-500 mb-2'>Content</h2>
      <p className='text-gray-400 mb-4'>Select Topic</p>
      
      <Select onValueChange={(value)=>{
        setSelectedOption(value)
        value !='Custom Prompt'&& onUserSelect('topic', value)
        }}>
        <SelectTrigger 
          className="w-full h-14 text-lg
                     focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all shadow-sm shadow-violet-500"
        >
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index)=>(
            <SelectItem key={index} value={item} className='hover:!bg-purple-300 focus:!bg-purple-200 focus:text-violet-600'>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
    </Select>

          {selectedOption == 'Custom Prompt' && 
            <Textarea 
              className="mt-4 h-32 
                         focus:bg-violet-100 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-violet-500 transition-all
                         shadow-sm shadow-violet-500" 
              onChange={(e)=>onUserSelect('topic', e.target.value)}
              placeholder="Type Custom Topic for video" 
            />
          }

    </div>
  )
}

export default SelectTopic
