
import Blog from "./Blogs"
import useFetch from "./useFetch";

const Home = () => {
   
  const {data : blogs,loading,error} = useFetch( ' http://localhost:8000/blogs');
    
    
    return (
        <div className="home">
        
        {loading && <h2>Loading ....</h2>}
        {error}
        {blogs && <Blog blogs={blogs} title="All blogs" />}

        </div>
    )
}

export default Home
