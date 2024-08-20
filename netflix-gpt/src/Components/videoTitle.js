import React from 'react'

const VideoTitle = ({titleData,overview}) => {
  return (
    <div>
       <div className='p-8'>
        <h1 className='text-4xl px-8 pt-10 font-bold'>{titleData}</h1>
        <p className='text-xl px-8 py-2 font-semibold w-2/5'>{overview}</p>
       </div>
       <div className='flex px-10'>
        <button className='py-2 bg-gray-300  rounded-sm px-8 m-2'>▶️ Play</button>
        <button className='py-2 bg-gray-400  rounded-sm px-8 m-2'>More Info</button>
       </div> 
    </div>
  )
}

export default VideoTitle