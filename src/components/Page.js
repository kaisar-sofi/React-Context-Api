import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Page = () => {
  const{page,totalpages,Fetchdata}= useContext(AppContext)
  return (
    
    <div>
      <div>
      { page>1 &&
          <button onClick={()=>(
            Fetchdata(page-1)
          )}>Previous</button>
      }
      { page < totalpages &&
           <button onClick={()=>(
          Fetchdata(page+1)
        )}>Next</button>
      }
    </div>
    <div>
       <span>Page {page} of {totalpages} </span> 
    </div>
    </div>
  )
}

export default Page
