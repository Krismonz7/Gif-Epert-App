import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputvalue, setinputvalue] = useState('')

    const onInputChange = (e) =>{
       
        setinputvalue(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(inputvalue.trim().length <= 1)return;
        /* setCategories(categories =>[
          ...categories,
          inputvalue
        ]) */
        onNewCategory(inputvalue.trim())
        setinputvalue('')
    }


  return (
    <>
    <form onSubmit={onSubmit}>
    <input 
    type="text" 
    placeholder='Buscar Gifs'
    value={inputvalue}
    onChange={onInputChange}
    />
    </form>
    </>
  )
}
