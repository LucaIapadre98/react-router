import axios from "axios"
import { useEffect, useState } from "react"

export default function ListPostPage(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/posts").then((res)=>{
           setPosts(res.data.data)
        });

    }, []);
    return (
        <div>
            <div className="container">
                <h3>Lista dei Post:</h3>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                         <th>Title</th>
                    </tr>
                </thead> 
                <tbody>
                    {posts.map((post)=>(
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td>Show</td>
                        </tr>
                    ))}
                </tbody>           
            </table>
        </div>
    )
}