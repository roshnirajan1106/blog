import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = ({blogs,title}) => {
  
    return (
        <div className="blog-list">
            <p>{title}</p>
            { blogs.map((blog) => (
                <div className="blog-preview" key ={blog.id}> 
                   <Link to={`/blogs/${blog.id}`}>
                   <h2>{blog.title}</h2>  
                    <p>Written By {blog.author}</p>
                   </Link>
                    
  
                </div>
            ))}
        </div>
    )
}

export default Blogs
