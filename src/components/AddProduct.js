import React from "react";
import { Button,Container } from "react-bootstrap";

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
     
        <Container style={{ marginTop: '10rem', width: '40%', marginLeft: '15%',height: '60%', backgroundColor: '#635858',position: "absolute",borderBlock: '5rem'}}>
            <h1 style={{position: "absolute",marginLeft: "6rem",}}>Add new form</h1>
        
        <form style={{ marginTop: '5rem', width: '50%', marginLeft: '20%',position: "absolute"}} className='add-form' onSubmit=
        {onSubmit}>
            
           <div style={{padding: "1rem"}} >
              <label>Product</label> 
              <input type='text' placeholder='Add Product'
              value={product} onChange={(e) =>
              setProduct(e.target.value)}/>   
           </div>
           <div >
              <label>Title</label> 
              <input type='text' placeholder='Add title'
               value={title} onChange={(e) =>
                setTitle(e.target.value)}     />   
           </div>
           <div  >
              <label>Price</label> 
              <input type='number' placeholder='Add Price'
               value={price} onChange={(e) =>
                setPrice(e.target.value)}     />   
           </div>

           <div style={{padding: "1rem",marginTop: "10%"}}>
        <Button color="green" type='submit' value='Save' className='btn btn-block' >Save</Button>
        </div>
       </form>
      
        </Container>
    )
}

export default AddProduct