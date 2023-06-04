import './TodoItem.css'
import { AiTwotoneDelete } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <span 
        className={`Icon Icon-check ${props.
        completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
         <AiFillLike/>
        </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span 
      className='Icon Icon-delete'
      onClick={props.onDelete}
      >
        <AiTwotoneDelete/>
      </span>
    </li>
  );
}

export { TodoItem };