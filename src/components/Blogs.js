import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext"
import Spinner from './Spinner';


const Blogs = () => {
  const{loading,post} = useContext(AppContext);
  // console.log(loading)
  return (
    <div>
      {
        loading ? <Spinner/> : 
        (
          
            post.length==0 ? (<div>No post</div>) : 
            (
               post.map((data)=>(
                <div key={data.id}>
                  <p className='font-semibold text-yellow-300'>{data.title}</p>
                  <p>
                    By <span>{data.author}</span> on <span>{data.category}</span>
                  </p>
                  <p>Posted on {data.date}</p>
                  <p>{data.content}</p>
                  <div>
                    {data.tags.map((tag,index)=>(
                    <span key={index}>
                    #{tag}
                    </span>
                    ))}
                  </div>
                </div>
               ))
            )
          
        )
      }
    </div>
  )
}

export default Blogs
