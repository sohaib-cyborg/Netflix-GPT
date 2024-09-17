import React from 'react'

const VideoTitle = ({titleData,overview}) => {
  return (
    <div className='absolute  text-white bg-gradient-to-r from-black w-screen aspect-video pt-14 pl-10'>
       <div className='pt-20 pb-2 px-8'>
        <h1 className='text-4xl pt-10 font-bold'>{titleData}</h1>
        <p className='text-xl py-4 font-semibold w-2/6'>{overview}</p>
       </div>
       <div className='flex px-8'>
        <button className='py-2 bg-gray-300  rounded-sm px-8 m-2'>▶️ Play</button>
        <button className='py-2 bg-gray-400  rounded-sm px-8 m-2'>More Info</button>
       </div> 
    </div>
  )
}

export default VideoTitle