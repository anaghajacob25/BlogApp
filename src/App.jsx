import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header/Header'
import Home from './pages/Home'
import EditBlog from './pages/EditBlog';
import Blog from './pages/Blog/Blog';
import { Route, Routes } from 'react-router';

function App() {
  

  return (
    <>
     <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit-blog' element={<EditBlog/>}/>
        <Route path='/blogs' element={<Blog/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
