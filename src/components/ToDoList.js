import { useState  , useOptimistic } from "react"

 export  const ToDoList = () =>{
    const [ todo , setTodo ] = useState([])
    console.log(useOptimistic)
 const [ optimistTodo , setOptimistiTodo] = useOptimistic(todo , ((oldTodo , newTodo) =>[
        ...oldTodo ,
        { text : newTodo , pending : true} ]
    )
)
    
    async function handleAddTodo(formData){
        const newTodo = formData.get("todo")

        setOptimistiTodo(newTodo)
        await new Promise((resolve)=> setTimeout(resolve , 1000))
        setTodo((currentTodo)=>[
            ...currentTodo , 
            { text : newTodo , pending : false}
        ])
    }

    return(
        <div>
            <h1>useOptimisTic Hook</h1>
            <form action={handleAddTodo}>
                <input className="border-2 p-1 m-1"  name='todo' placeholder="AddToDo" type="text"></input>
                <button type="submit"> Add Todo</button>
            </form>

            { 
                optimistTodo && optimistTodo.map((item , index)=>(
                <li key={index}>
                    {item.text}
                    {item.pending && <span>(Adding...)</span>}
                    </li>

                )
            )
            }

        </div>
    )
}