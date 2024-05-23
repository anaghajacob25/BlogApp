import './HomeBlog.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function HomeBlog() {
  return (
    <>
     <section className='home_blog' style={{width:'100%',height:'auto'}} data-aos="fade-up" >
      <div>
        <div className='d-flex justify-content-center align-items-center flex-column'>
         <h1>Recent Posts</h1>
          <h5>Where Stories Find Their Home</h5>


        </div>

        <div  className='d-flex justify-content-center align-items-center flex-column'>
        <Link className='recent' >
           <div className='blog_one ' data-aos="fade-up">
             <div className='blog_content d-flex justify-content-between'>
             <div className='blog_img'> <img width={'100%'} height={'100%'} src="" alt="" />
             </div>
              <div className='blog_description d-flex justify-content-between  flex-column'>
                <div className='d-flex justify-content-between flex-column '>
                  <h2>sfhh</h2>
                  <p className='home-desc'>jsjdkd
                  <Link className='read' >Read More</Link></p>
                  <hr />
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='chip'>shas</p>
                   <div className='views'>144<i className="fa-regular fa-eye"></i></div>
                   <div><i className='fa-regular fa-heart'></i></div>
                </div>
              </div>
  
             </div>
           
           </div>
        </Link>

        
         

        </div>
         <p className='text-center'>No Blogs</p>  
          

        
        <Link className='showBtn' >
         <Button >Show All Posts</Button>
         </Link>



      </div>
    </section>
    </>
  )
}

export default HomeBlog