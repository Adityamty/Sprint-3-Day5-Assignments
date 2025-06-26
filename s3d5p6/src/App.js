import React from 'react';
import TodoList from './TodoList';

function App() {
  const todos = [
    "Buy groceries",
    "Complete React assignment",
    "Read a book",
    "Go for a walk"
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>My Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
