import React, { Children } from 'react'
import { Header } from './';



const Layout = ({children}) => {

  return (
    <>
    <div className='bg-black bg-opacity-20'>
        <Header/>
        {children}
    </div>
    </>
  )
}

export default Layout