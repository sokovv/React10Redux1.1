import { useDispatch, useSelector } from "react-redux";
import {REMOVE, EDIT} from "../redux/actions"

const ListItem = (props) => {
    const dispatch = useDispatch();
  
    const handleRemove = (id) => {
      return {
        type: REMOVE,
        payload: id,
       }
    }
    
    const handleEdit = (id) => {
      return {
        type: EDIT,
        payload: id,
       }
    }

    
  return (
  <li>
    <div className="list-item">
      {" "}
      <div>{props.name}</div>
      <div className="price">{props.price}</div>
      <button onClick={() => dispatch(handleEdit(props.id))}>✎</button>
      <button onClick={() => dispatch(handleRemove(props.id))}>✖</button>
    </div>
  </li>
)};

export default ListItem;
