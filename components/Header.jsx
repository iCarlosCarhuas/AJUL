import React, { useState, useEffect } from 'react'

import Link from 'next/link'

import { getCategories } from '../services';

const Header = () => {  
  const [categories, setCategories] = useState([]);
  
    useEffect(()=>{
      getCategories()
        .then((newCategories) => setCategories(newCategories))
    },[]);
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b xl:w-full inline-block border-gray-400 py-8">
            <div className="md:float-left block bg-green-300 bg-opacity-60 sm:w-60 border-2 border-green-600 rounded">
                <Link href="/">
                    <span className="cursor-pointer font-bold text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-500 to-green-600 flex">
                      <a className="pt-2 ml-2">AJUL</a>
                    <img src="/Logo Oficial.png" className=" h-20 mx-3">
                    </img>
                    </span>                    
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
              {categories.map((category)=> (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                   {category.name}    
                  </span>
                </Link>
              ))}
            </div>
        </div> 
    </div>
  )
}

export default Header