import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";



//creation of context
  export const AppContext = createContext();

 //provision of context
export default function AppcontextProvider({children}){

    const[loading,setLoading] = useState(false);
    const[post,setPost] = useState([]);
    const[page,setPage]= useState(1);
    const[totalpages,setTotalpages]=useState(null);

//Api Call for data

async function Fetchdata(page){
        setLoading(true)
        
        let url = `${baseUrl}?page=${page}`;
        try{
            const fetchdata = await fetch(url)
            const result = await fetchdata.json();
            setPage(result.page);
            setPost(result.posts);
            setTotalpages(result.totalPages);
            console.log(result)

        }
        catch(error)
        {
            // alert("error");
            console.log("jj")
            setPage(1)
            setPost([])
            setTotalpages(null);
        }

        setLoading(false);
}
    const obj ={
        loading,
        setLoading,
        post,
        setPost,
        page,
        setPage,
        totalpages,
        setTotalpages,
        Fetchdata,
    };

    return ( <AppContext.Provider value={obj}>
        {children}
    </AppContext.Provider>)
 }

