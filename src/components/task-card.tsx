import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import '../styles/task-card.css'

function TaskCard(props: { completed: boolean, name: string }) {
  return (
    <div className='task-card' >
      <input type="checkbox" defaultChecked={props.completed} />
      <p>{props.name}</p>
      <FontAwesomeIcon icon={faTrashCan} />
    </div>
  );
}

export default TaskCard;