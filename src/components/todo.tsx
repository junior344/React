import React,{ useState} from "react";
import AddForm from "./addForm";

const Todo = () => {
  const [todos, setTodo] = useState([{
        id: 1,
        title: "Todo 1",
        completed: false
    },
    {
        id: 2,
        title: "Todo 2",
        completed: false
    },
    {
        id: 3,
        title: "Todo 3",
        completed: false
    },
    {
        id: 4,
        title: "Todo 4",
        completed: false
    }
]);
const addTodo = (title: string) => {
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: false
    }
    setTodo([...todos, newTodo]);
}
console.log(todos);
    return (
        <div className="flex items-center justify-center flex-col W-full dark:bg-slate-800">
            <h1 className="text-4xl p-10 text-slate-500 dark:text-slate-400 mt-2 text-sm"> vous avez {todos.length} tache a faire</h1>
            <ul className="flex flex-col w-full text-center items-center justify-center">
                {todos.map(todo => {
                    return <li className="border-4 w-4/5 p-5 text-slate-500 dark:text-slate-400 mt-2 text-sm" key={todo.id}>{todo.title}</li>
                })}
            </ul>
            <AddForm addNewTodo  ={addTodo}/>
        </div>
    );
}

export default Todo;