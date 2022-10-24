import React from "react";
import { useState } from "react";


function CRUDForm({addFormBlog}){
    const [formBlog, setFormBlog] = useState({title:"", body:""});
   

    const handleInput = (e) => {
        setFormBlog((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({formBlog})
       if (formBlog.title == "" && formBlog.body==""){
        return
       }
        addFormBlog(formBlog);
        setFormBlog({title:"", body:""});
    }

    return(
        <>
        <form onSubmit={handleSubmit} >
            <input type='text' name='title' value={formBlog.title} onChange={handleInput} placeholder="ABC" />
            <input type='text' name='body' value={formBlog.body} onChange={handleInput} placeholder="Body" />
            <button type="submit" >Submit</button>
        </form>
        </>

    );

    
}

export default CRUDForm