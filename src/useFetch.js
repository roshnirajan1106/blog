//use is important
import { useState,useEffect } from "react";
const useFetch = (url)=>{
   
    const [data,setdata]= useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
    useEffect(
        ()=>{
            const abortCont = new AbortController();
         fetch(url,{signal : abortCont.signal})
            .then(res =>{
                if(!res.ok)
                {
                    throw Error('Could Not fetch data');
                }
               return res.json();
            })
            .then(data =>{ 
                
                setdata(data);
                console.log("the data is " ,data);
                setloading(false);
                seterror(null);
                })
                .catch((e) =>{
                    //setdata(null);
                    if(e.name === 'AbortError')
                    {
                        console.log("fetch aborted");
                    }else {
                    setloading(false);
                    seterror(e.message);
                    }

                })
                return () => abortCont.abort();
                
            },[url]);

            return {data , loading,error};
}
export default useFetch;