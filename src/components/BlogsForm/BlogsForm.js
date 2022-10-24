import React from "react";
import { useState } from "react";


function BlogsForm({addBlog}){
    const [blog, setBlog] = useState({title:"", body:""});
   

    const handleInput = (e) => {
        setBlog((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       if (blog.title == "" && blog.body==""){
        return
       }
        addBlog(blog);
        setBlog({title:"", body:""});
    }

    return(
        <>
        <form onSubmit={handleSubmit} >
            <input type='text' name='title' value={blog.title} onChange={handleInput} placeholder="ABC" />
            <input type='text' name='body' value={blog.body} onChange={handleInput} placeholder="Body" />
            <button type="submit" >Submit</button>
        </form>
        </>

    );

    
}

export default BlogsForm