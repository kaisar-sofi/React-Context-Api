import React, { useEffect, useState } from 'react'
import { FaRegMoon,FaRegSun } from "react-icons/fa";
const Header = () => {
 const[theme,setTheme]=useState("light-theme")
  useEffect((()=>{
    document.body.className = theme;
  }),[theme])
  function iconhandler()
  {
    setIcons((value)=>(!value))
    if(theme==="dark-theme")
    {
      setTheme("light-theme")
    }
    else{
      setTheme("dark-theme")
    }
    
  }
 
  const[icon,setIcons] =useState(false)
  console.log(icon)
  return (
    <div className='flex gap-3'>
      <header>
        <h1>My blogss</h1>
      </header>
    <div className='mx-4'>

    <button onClick={iconhandler}>
    {
      icon ? (<FaRegMoon/>) : (<FaRegSun/>)
    }
    </button>
      
     
    </div>

    </div>
  )
}

export default Header
