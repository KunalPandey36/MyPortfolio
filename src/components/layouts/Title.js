import React from 'react'


const Title = ({title,des}) => {
  return (
    <div>
      <div className='flex flex-col gap-4 font-titleFont py-20 mb-14'>
            <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>{title}</h3>
            <h1 className=' text-5xl text-gray-300 font-bold capitalize'>{des}</h1>
        </div>
    </div>
  )
}

export default Title
