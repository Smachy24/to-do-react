import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import TaskCard from './components/task-card';


function App(props: { tasks: { id: string; name: string; completed: boolean }[] }) {
  const taskList = props.tasks.map((task) => (
    <TaskCard key={task.id} name={task.name} completed={task.completed} />
  ));
  

  return (
    <body>
      <Header />
    
      <section className='add-task'>
        <input type="text" placeholder='Titre de la tâche'/>
        <button>+</button>
      </section>

      <section className="task-container">
        {taskList}
      </section>
    </body>
   
  );
}

export default App;
