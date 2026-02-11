import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const Todo = () => {
    const [todos, setTodos] = useState ([]);
    const [newTodo, setNewTodo] = useState('');

    // Fetch Todos from Firestore
    useEffect(() => {
        const fetchTodos = async () => {
            const querySnapshot = await getDocs(collection(db, "todos"));
            setTodos(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id})))
        };
        fetchTodos();
    }, []); // Empty dependency so it only runs once

    // Add new Todo
    const addTodo = async() => {
        if (newTodo.trim() === '') return;
        const docRef = await addDoc(collection(db, "todos"), {
            text: newTodo,
            completed: false,
        });
        setTodos([...todos, { text: newTodo, completed: false, id: docRef.id }]);
        setNewTodo('');
    }

    // Delete a Todo

    return (
        <>
            <div>
                <h1>Todo</h1>
                <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo;