import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from './useFetch';

const BlogDetails = () => {
    
    const {id} = useParams();
    const history = useHistory();
    const {data : blog ,loading,error} = useFetch(`http://localhost:8000/blogs/${id}`);
    function handleClick()
    {
        fetch('http://localhost:8000/blogs'+blog.id ,
        {
            method :'DELETE',
        })
        .then(() =>
        {
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
           {loading && <h2>Loading ..</h2>}
           {error &&<div>{error} </div>}
           {blog &&
           ( <article>
                <h2>{blog.title}</h2>
                <div>
                    {blog.body}
                </div>
            </article>
           
           )}
           <button onClick ={handleClick}>delete</button>
         </div>
    )
}

export default BlogDetails
