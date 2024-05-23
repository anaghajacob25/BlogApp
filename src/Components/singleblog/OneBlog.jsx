import { Link } from 'react-router-dom';
import './OneBlog.css'
import { ToastContainer } from 'react-toastify';
import { Card, Col, Row } from 'react-bootstrap';

function OneBlog() {
  
  return (
<div style={{marginTop:'100px'}} className='container' >
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
     
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>23-5-24</p>
            <h1>ddfghj,k</h1>
            <div className='blog-subCategory'>
                <div>
                </div>
            
            </div>
          </header>
          <img src="" alt='cover' />
          <p className='blog-desc'>szdfghjkll</p>
        </div>


       

        
        <> <h1 className='related'>Related Post</h1>
         
         <Row className='row-cols-1 row-cols-md-3 g-4'>

         
             <Col>
             <Card className='mt-5 mb-5'  style={{width:'250px',height:'320px'}} >

            

              <Card.Img width={'100%'}  height={'190px'} style={{borderRadius:'0.75rem',padding:'10px'}} variant="top" src="fb" alt="img"  />

              <Card.Body>
      <Card.Title className='title-card d-flex justify-content-center align-items-center flex-column'>
        <p>title</p>
        <h6 style={{fontSize:'12px'}} >sdfghjkl</h6>

      
        </Card.Title>
      
    </Card.Body>

             </Card>
             
             
             
             </Col>

         </Row>
         
         
         
         </>


<ToastContainer position='top-center'
theme='colored' autoClose={2000} />
</div>
)
}

export default OneBlog