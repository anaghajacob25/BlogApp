/* import React, { useEffect, useState } from 'react' */
import './AddBlog.css'
import { Button} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { MDBInput } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';


const options = ["Travel","Fashion","Technology","Fitness","Sports","Food","Movies"]


   
function AddBlog() {
        
  return (
    <div className='addblog '>
     <div className='addblog-content'>
       
              <h1 className='text-center'>Add Blog</h1>
           <Form className='contact-form '>
         
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='mb-3'  type="text"  placeholder="Enter Video Caption" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
          className='contact__form-area'
          
            as="textarea"
           
            
            style={{ height: '11rem' }}
          />
        </Form.Group>
      
        <Form.Group className="position-relative mb-3">
            <Form.Label>Image</Form.Label>
            <MDBInput
              type="file"
              validation='Please enter title'
              
              
            />
            
          </Form.Group>
          <select className='category-dropdown w-100'>
           <option>
            Select Category
           </option>
           {options.map((option,index)=>(
            <option key={index} value={option || ""}>
              {option}
            </option>
           ))}
          </select>

          <div className='buttons d-flex justify-content-between mt-3'>
             <Button type='submit'  >Update</Button>
             <Button>Back to Home</Button>
  
           </div>
      
           </Form>
          
           <ToastContainer position='top-center'
        theme='colored' autoClose={2000} />
     </div>
    </div>
  )
}

export default AddBlog