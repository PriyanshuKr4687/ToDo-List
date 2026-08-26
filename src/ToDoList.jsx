import React, { useState } from "react";

function ToDoList() {
    const [Input, setInput] = useState("");

    const [todolist, setTodolist] = useState([])

    if (Input.trim === "") return;

    const addTodoItem = () => {
        const item = { id: todolist.length + 1, text: Input.trim(), completed: false };

        setTodolist((prev) => [...prev, item])
        setInput("");
    };

    const toggleCompleted = (id) => {
        setTodolist (todolist.map((tog) => {
            if (tog.id === id) {
                return {
                    ...tog, completed: !tog.completed
                }
            }
            else {
                return tog;
            }
        }))
    }

    const deleteTodo = (id) => {
        setTodolist (
            todolist.filter(
                (del) => (del.id !== id)
            )
        )
    }

    return (
        <div>
            <h2>Write your ToDos.</h2>
            <input type="text" placeholder="Enter Todo"
                value={Input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => addTodoItem()}>Add</button>

            <ol>
                {todolist.map((t) => <li key={t.id}>
                    <input type="checkbox" checked={t.completed} onChange={() => toggleCompleted(t.id)} />
                    <span className={t.completed ? "strikeThrough" : ""}>{t.text}</span>
                    <button onClick={() => deleteTodo(t.id)}>Delete</button>

                </li>)}
            </ol>
        </div>
    );
}

export default ToDoList;