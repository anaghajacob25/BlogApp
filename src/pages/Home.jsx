import React from 'react'
import HomeBlog from '../Components/homeBlog/HomeBlog'
import HomeContent from '../Components/Homecontent/HomeContent'

function Home() {
  return (
    <>
    <div className='home-compo'>
      <HomeContent/>
      <HomeBlog/>
    </div>
    </>
  )
}

export default Home