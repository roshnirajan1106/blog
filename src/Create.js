import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = ()=>
{   const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [author,setauthor] = useState('mario');
    const[loading,setloading] =useState(false);
    const history = useHistory(); //redirecting them to new route
    const handleSubmit =(e) =>
    {   
        setloading(true);
       e.preventDefault(); 

       const blog ={title,body,author};
      
        fetch('http://localhost:8000/blogs',{
            method :'POST',
            headers :{'Content-Type' :"application/json"},
            body : JSON.stringify(blog)
        })
        .then(() =>
        {
            console.log("New Blog Added");
            setloading(false);
            //history.go(-1);
            history.push('/');
        })

        
       
    }
    return (
        <div className ="create">
       
           <h2>Add a blog!</h2>
        <form onSubmit ={handleSubmit}>
            <label>Blog title :</label>
            <input onChange ={(e) =>settitle(e.target.value)}type="text" required value={title}/>
            <label>Blog Body :</label>
            <textarea value={body} onChange={(e)=> setbody(e.target.value )}type="text" required ></textarea>
            <label>Author :</label>
            <select value={author} onChange ={(e) => setauthor(e.target.value)}>
                <option value ="mario"> Mario</option>
                <option value="yoshi">Yoshi</option>
            </select>
            {!loading &&<button>Add Blog</button> }
            {loading && <button disabled>Loading .. </button>}
        </form>
      
        
        
        </div>
    );
}
export default Create