import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Container from '../../common/Container'

function layout({children}) {
  return (<>
     <Navbar/>
      <Container>
  
    {children}
    <Footer/>
    </Container></>
  )
}

export default layout