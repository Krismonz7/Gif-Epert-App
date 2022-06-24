import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categorie}) => {

  const {images,isLoading}  = useFetchGifs(categorie);

  console.log(isLoading)

 /*  const [images,setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true)

  const getImages = async()=>{
    const newImages = await getGifs(categorie);
    setImages(newImages)
  } 
  useEffect(()=>{
    getImages()
  },[]) */

  return (
    <li>

      <h3>{categorie}</h3>
      {
        isLoading ? (<h3>Loading</h3>) : null
      
      }



      <div className='card-grid'>
      {
        images.map((image)=>{
          return (
          <GifGridItem key={image.id} {...image}/>
          )
        })

      }
      </div>
    </li>
  )
}
