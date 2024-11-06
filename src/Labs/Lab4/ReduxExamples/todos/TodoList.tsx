import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux"; // Import useSelector to access the state from the Redux store

export default function TodoList() {
    // Use useSelector to retrieve the todos from the Redux store
    const { todos } = useSelector((state: any) => state.todosReducer);

    return (
        <div id="wd-todo-list-redux" className="container">
            <h2 className="my-3">Todo List</h2>
            <ul className="list-group">
                {/* Render TodoForm to add or update todos */}
                <TodoForm />

                {/* Render the list of TodoItems using the todos from the Redux store */}
                {todos.map((todo: any) => (
                    <TodoItem todo={todo} />
                ))}
            </ul>
            <hr />
        </div>
    );
}
