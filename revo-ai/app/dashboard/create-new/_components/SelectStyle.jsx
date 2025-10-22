import Image from 'next/image'
import React from 'react'

function SelectStyle({onUserSelect}) {
    const styleOptions=[
        // NOTE: Make sure these images exist in your public folder!
        { name:'Realistic', image:'/fiction.png' },
        { name:'Anime', image:'/anime.jpg' },
        { name:'Comic', image:'/comic.jpg' },
        { name:'WaterColor', image:'/watercolor.jpg' },
        { name:'Game', image:'/game.jpg' },
        { name:'Vintage', image:'/historic.png' },
    ]
    const [selectedStyle, setSelectedStyle] = React.useState('Realistic'); 
    const baseCardClasses = 'relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out cursor-pointer group';
    
  return (
    <div className='mt-7'>
      <h2 className='font-extrabold text-3xl text-purple-500 tracking-tight mb-2'>Style</h2>
      
      <p className='text-muted-foreground mb-6'>Creation Type</p>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6'>
        {styleOptions.map((item, index) => {
            const isSelected = item.name === selectedStyle;
            
            return (
                <div 
                    key={item.name}
                    className={`${baseCardClasses} ${
                        isSelected 
                            ? 'ring-2 ring-primary ring-offset-2 ring-offset-background shadow-primary/60 scale-105' 
                            : 'hover:scale-[1.03] hover:shadow-primary/30'
                    }`}
                    onClick={() => setSelectedStyle(item.name)}
                >
                    <Image 
                        src={item.image} 
                        alt={item.name}
                        width={200}
                        height={200}
                        className='h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-90'
                        onClick={()=>{
                            // setSelectedStyle(item.name)
                            onUserSelect('imageStyle', item.name)
                        }}
                    />
                    
                    <div className='absolute inset-x-0 bottom-0 p-3 bg-black/60 backdrop-blur-sm'>
                        <h2 className='text-white text-center font-semibold text-lg tracking-wide'>{item.name}</h2>
                    </div>
                    {isSelected && (
                         <div className="absolute top-2 right-2 p-1 bg-primary/80 rounded-full text-white">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                         </div>
                    )}
                </div>
            );
        })}
      </div>
    </div>
  )
}

export default SelectStyle