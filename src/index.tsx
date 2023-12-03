import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const data = [
  {id: "todo-0", name: 'AAAA', completed: true},
  {id: "todo-1", name: 'BBBBBBBB', completed: false},
  {id: "todo-0", name: 'CCCCCCCCC', completed: true},
]

root.render(
  <React.StrictMode>
    <App tasks={data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
