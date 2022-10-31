import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";


const AddProduct = ({ onAdd}) => {
    const [product, setProduct] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!product) {
            alert('Please add a product')
            return
        }
        onAdd({ product, title, price})

        setProduct('')
        setTitle('')
        setPrice('')
    }
    return (
        <div className="main">
        <form style={{ marginTop: '8rem', width: '50%', marginLeft: '2 0%', position: "absolute"}} className='add-form' onSubmit=
        {onSubmit}>
            
           <div className='form-control'>
              <label>Product</label> 
              <input type='text' placeholder='Add Product'
              value={product} onChange={(e) =>
              setProduct(e.target.value)}/>   
           </div>
           <div className='form-control'>
              <label>title</label> 
              <input type='text' placeholder='Add title'
               value={title} onChange={(e) =>
                setTitle(e.target.value)}     />   
           </div>
           <div className='form-control' >
              <label>price</label> 
              <input type='number' placeholder='Add Price'
               value={price} onChange={(e) =>
                setPrice(e.target.value)}     />   
           </div>

           
        <Button color="green" type='submit' value='Save' className='btn btn-block'>Save</Button>
        </form>
        </div>
        
    )
}

export default AddProduct