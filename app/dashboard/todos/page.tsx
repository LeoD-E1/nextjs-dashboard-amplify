'use client';

import { useState, useEffect } from 'react';
import type { Schema } from '@/amplify/data/resource';
// import '@/app/ui/todo.module.css';
import '@aws-amplify/ui-react/styles.css';
import { client } from '@/app/page';

export default function App() {
  const [todos, setTodos] = useState<Array<Schema['Todo']['type']>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt('Todo content'),
    });
  }

  const deleteTodo = (id: string) => {
    client.models.Todo.delete({ id });
  };

  return (
    <main className="main">
      <h1 className="h1">My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
            {todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}