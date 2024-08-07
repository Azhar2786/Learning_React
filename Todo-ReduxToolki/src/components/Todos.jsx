import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo, toggleComplete } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editableTodoId, setEditableTodoId] = useState(null);
    const [todoMsg, setTodoMsg] = useState('');

    const handleEditTodo = (id, text) => {
        dispatch(updateTodo({ id, text }));
        setEditableTodoId(null);
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${
                            todo.completed ? "bg-green-200" : "bg-gray-200"
                        }`}
                        key={todo.id}
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleComplete(todo.id)}
                            />
                            <input
                                type="text"
                                value={editableTodoId === todo.id ? todoMsg : todo.text}
                                onChange={(e) => setTodoMsg(e.target.value)}
                                readOnly={editableTodoId !== todo.id}
                                className={`border-none bg-transparent outline-none ${todo.completed ? "line-through" : ""}`}
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    if (editableTodoId === todo.id) {
                                        handleEditTodo(todo.id, todoMsg);
                                    } else {
                                        setEditableTodoId(todo.id);
                                        setTodoMsg(todo.text);
                                    }
                                }}
                                className="text-white bg-blue-500 py-1 px-4 rounded"
                                disabled={todo.completed}
                            >
                                {editableTodoId === todo.id ? 'Save' : 'Edit'}
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 py-1 px-4 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
