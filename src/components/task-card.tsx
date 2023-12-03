import '../styles/task-card.css'

function TaskCard(props: { completed: boolean, name: string }) {
  return (
    <div className='task-card' >
      <input type="checkbox" defaultChecked={props.completed} />
      <p>{props.name}</p>
    </div>
  );
}

export default TaskCard;