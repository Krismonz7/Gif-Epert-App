import React from 'react'

export const GifGridItem = ({title,id,url}) => {

  return (
    <div className='card'>
        <p>{title}</p>
        <img src={url} alt=""/>
    </div>
  )
}
