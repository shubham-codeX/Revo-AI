"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';

function CreateNew() {

  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) =>{
    setFormData(prev =>({
      ...prev,
      [fieldName]:fieldValue
    }))
  }

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-primary text-center'>Create New Shorts</h2>

      <div className='mt-10 shadow-md p-10 rounded-xl'>
        {/* Select Topic */}
        <SelectTopic onUserSelect={onHandleInputChange}/>
        {/* Select Style */}
        <SelectStyle onUserSelect={onHandleInputChange}/>
        {/* Duration */}
        <SelectDuration onUserSelect={onHandleInputChange}/>
        {/* Create Button  */}
        <div className="flex justify-center w-full">
          <Button className="mt-10 px-10 py-4 text-lg font-bold 
                            bg-primary hover:bg-primary/90 
                            text-white rounded-full shadow-2xl 
                            shadow-primary/50 transition-all duration-200 
                            hover:scale-[1.02] active:scale-[0.98] 
                            focus:outline-none focus:ring-4 focus:ring-primary/50">
              Create
          </Button>
      </div>
      </div>
    </div>
  )
}

export default CreateNew
