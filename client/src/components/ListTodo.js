import React,{Fragment, useEffect,useState} from "react";


import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    //delete todo function 

    const deleteTodo = async(id) => {
        try{
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "Delete"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
        }catch(err){
            console.error(err.message);
        }
    };

    const markDone = async(id) => {
        try{
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({done: true}),
            });

            setTodos(todos.map(todo => {
                if(todo.todo_id !== id){
                    return {...todo, done: true};
                }

                return todo;
            }));
        }catch(err){
            console.error(err.message);
        }
    };



    const getTodos = async() => {
        try{
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            
            setTodos(jsonData);
        } catch(err){
            console.error(err.message);
        }
    };

    useEffect(() =>  {
        getTodos();
    }, []);

    return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td>
                           <input
                                type="checkbox"
                                checked={todo.done}
                                onChange={() => markDone(todo.todo_id)}
                            />
                        </td>
                        <td>
                            <button 
                                className="btn btn-danger" 
                                onClick={() => deleteTodo(todo.todo_id)}
                            >    
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
           </table>

    </Fragment>
    );
};

export default ListTodos;