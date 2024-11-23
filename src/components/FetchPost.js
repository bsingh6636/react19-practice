import { useEffect, useState , use} from "react"

const FetchPost = ( ) =>{

    // const [ posts , setPosts] = useState()
    // const [ isPending , setIsPending] = useState(true)

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response)=>response.json())
    //         .then((data)=>{
    //             setPosts(data)
    //             setIsPending(false)
    //         })
    // },[])

    const promise = fetch('https://jsonplaceholder.typicode.com/posts')
             .then((response)=>response.json())
    const post = use(promise)
   
console.log(post)
   
    return(
       
            <div className="flex flex-col">
                <h1>Use of use</h1>
                {post && post.map((post)=><span key={post.id}>{post.title}</span>)}
            </div>
    )
}

export default FetchPost;