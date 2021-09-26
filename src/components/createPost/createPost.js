import axios from "axios";
import { useState,useEffect } from "react";
import "./createPost.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreatePost(){
    
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [image,setImage]=useState("");
    const [url,setUrl]=useState("");
    const [isLoading,setIsLoading]=useState(false);

    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRkNzE0Njk3NTFmMDM1OTBhMzc0OTAiLCJpYXQiOjE2MzI0NjUyMzh9.NGwMP_7S3I-uMZMFCjVFTIRwExD_m9WAIjxWyEJWJhY";
    

    useEffect(() => {
        
        
        
        async function createPost(){
            if(url){
                try {
                    const post=await axios.post("http://localhost:5000/post/create-post",{
                        title,
                        body,
                        photo:url
                    },{headers:{token}});
                    toast.success("successfully created post");
                    setIsLoading(false);
                } catch ({response}) {
                    
                    toast.error(response.data.error);
                    setIsLoading(false);
                }
            }
        }

        createPost();
        

       
    }, [url])

    const HandleSubmit=async(e)=>{
        
        try {
            setIsLoading(true);

            const FromFile =new FormData();
            FromFile.append("file",image);
            FromFile.append("upload_preset","insta-clone");
            FromFile.append("cloud_name","dtdjhqe3m");
            const response=await fetch(" https://api.cloudinary.com/v1_1/dtdjhqe3m/image/upload",{
               method:"post", 
               body:FromFile
            });
            const data=await response.json()
            setUrl(data.url);

        } catch ({response}) {
            toast.error(response.data.error);
            setIsLoading(false);
        }


        
    }

    return(
 
        <div>
           <ToastContainer/>  
        {
            isLoading===true ? <div></div>:
            
            <div className="card input-filed post-card-container"
                   
            >
                <input 
                type="text"
                 placeholder="title"
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                 />
                <input
                 type="text"
                  placeholder="body"
                  value={body}
                 onChange={(e)=>setBody(e.target.value)}
                  />
                <div className="file-field input-field">
                 <div className="btn #64b5f6 blue darken-1">
                     <span>Uplaod Image</span>
                     <input type="file"  onChange={(e)=>setImage(e.target.files[0])} />
                 </div>
                 <div className="file-path-wrapper">
                     <input className="file-path validate" type="text" />
                 </div>
                 </div>
                 <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={()=>HandleSubmit()}
                 >
                     Submit post
                 </button>
     
            </div>
        }
        </div>
    )
}

export default CreatePost;