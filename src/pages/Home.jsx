import React from 'react'
import Sidebar from '../component/Aside/Sidebar/sidebar'
import Header from '../component/Wrapper/Header/Header'
function Home() {
  return (
    <div>
      <div className='d-flex'>
      <Sidebar></Sidebar>
       <Header className="flex-1"></Header>
        
        </div>

    </div>
  )
}

export default Home