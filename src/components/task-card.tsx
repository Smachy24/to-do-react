import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import '../styles/task-card.css';

function TaskCard(props: { id: string; completed: boolean; name: string; deleteTask: (id: string) => void }) {
  return (
    <div className='task-card' id={props.id}>
      <input type="checkbox" defaultChecked={props.completed} />
      <p>{props.name}</p>
      <FontAwesomeIcon icon={faTrashCan} onClick={() => props.deleteTask(props.id)} />
    </div>
  );
}

export default TaskCard;
