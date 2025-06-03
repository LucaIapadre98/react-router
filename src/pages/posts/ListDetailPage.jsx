import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function ListDetailPage(){
    // USO LO USEPARAMS PER PRENDERE L'ID //
    const { id } = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/posts/${id}`)
        .then((res)=>{
            console.log(res.data.data);
        })
        .catch((err)=>{
            alert("Id non trovato in lista!")
        })
    }, [])
    return (
        <div>
            <div className="container">
                <h3>Post Detail</h3>
            </div>
        </div>
    )
}