import axios from "axios"
import { useEffect } from "react"

export default function ListPostPage(){
    useEffect(()=>{
        axios.get("http://localhost:3000/posts").then((res)=>{
            console.log(res);
        });

    }, []);
    return (
        <div>
            <div className="container">
                <h1>Lista dei Post:</h1>
            </div>
        </div>
    )
}