import React from "react";
import {useState} from "react";

interface AddFormProps {
    addNewTodo: (title: string) => void;
}

const AddForm: React.FC<AddFormProps> = ({ addNewTodo }) => {
    const [title, setTitle] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title) {
            console.log(title);
            addNewTodo(title);
            setTitle("");
        }
    }

    return (
        <div className="flex items-center justify-center flex-col W-full">
            <h1 className="text-4xl p-10">Ajouter une tache</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-full text-center items-center justify-center">
                <input type="text" className="border-4 w-4/5 p-5" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" className="border-4 w-4/5 p-5 bg-blue-500 text-white">Ajouter</button>
            </form>
        </div>
    );
}


export default AddForm;