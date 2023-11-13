// import { ButtonEdit } from "../ButtonEdit";
import "./TodoItem.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
// import { HiPencil } from "react-icons/hi";

function TodoItem(props) {
  return (
    <section className="itemsContainer">
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={props.onComplete}
        >
          <AiFillLike />
        </span>
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        {/* <span className="Icon Icon-edit" onClick={props.onEdit}>
          <HiPencil/>
        </span> */}
        <span className="Icon Icon-delete" onClick={props.onDelete}>
          <AiTwotoneDelete />
        </span>
      </li>
    </section>
  );
}

export { TodoItem };
