import React, { useState } from 'react';
import { AddCategory , GifGrid } from './components';

import './styles.css';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch man']);

  const addCategory = (onNewValue) =>{

    if(categories.includes(onNewValue)) return;

    setCategories([onNewValue,...categories])

  }

  return (
    <div>
      GifExpertApp

      <AddCategory
      /*  setCategories={setCategories} */
      onNewCategory ={value =>{
        addCategory(value)
      }}/>

<ol>
      {
        categories.map((category)=>{
          return <GifGrid key={category} categorie={category}/>
        })
      }
</ol>
    </div>
  )
}
