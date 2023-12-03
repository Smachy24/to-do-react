import React from 'react';
import './App.css';
import Header from './components/header';
import TaskCard from './components/task-card';


function App() {
  return (
    <body>
      <Header />
    
      <section className='add-task'>
        <input type="text" placeholder='Titre de la tâche'/>
        <button>+</button>
      </section>

      <section className="task-container">
        <TaskCard name="AAAAA" completed={true}/>
        <TaskCard name="BBBBB" completed={false}/>
        <TaskCard name="CCCCC" completed={true}/>
      </section>
    </body>
   
  );
}

export default App;
