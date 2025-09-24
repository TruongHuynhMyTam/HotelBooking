import React from 'react'

const Title = ({ title, subTitle }) => {
  return (
    <div className='text-center'>
      <h2 className='font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
        {title}
      </h2>
      <p className='text-gray-600 max-w-4xl mx-auto text-base leading-relaxed'>
        {subTitle}
      </p>
    </div>
  )
}

export default Title;
