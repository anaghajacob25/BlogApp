import { Link } from 'react-router-dom';
import './Blog.css'
import Search from '../../Components/search/Search';
 import Category from '../../Components/Category/Category';
import LatestBlog from '../../Components/LatestBlog/LatestBlog';
import Pagination from '../../Components/Pagination/Pagination'; 
import OneBlog from '../../Components/singleblog/OneBlog'; 
function Blog() {
  
  return (
<>  
<div className='first container'>
  <h3 className='text-center'>Latest Blogs</h3>
   <div className='latest-blog'>
   <LatestBlog/>
   </div>
   </div>
   <Search/>
   <Category/>
  <Pagination/>

</>
  )
}

export default Blog