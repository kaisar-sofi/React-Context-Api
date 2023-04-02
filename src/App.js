import React, { useContext, useEffect } from 'react'
import Page from "./components/Page"
import Blogs from "./components/Blogs"
import Header from './components/Header'
import { AppContext } from './context/AppContext'
import "./App.css"
export default function App() {

  const{Fetchdata} = useContext(AppContext)
  useEffect(()=>{
    Fetchdata()
  },[])
  return(
    <div>
      <Header/>
      <Blogs/>
      <Page/>
    </div>
  )
}
