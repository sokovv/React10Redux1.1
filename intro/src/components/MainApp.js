import { useDispatch, useSelector } from "react-redux";
import { SET_USER_NAME, SET_USER_PRICE } from "../redux/actions";
import change from "../redux/change";
import update from "../redux/update";
import ListItem from "./ListItem";

export const MainApp = () => {
  const dispatch = useDispatch();
  const { setName, price, listService, edit, editId } = useSelector(
    (state) => state.reducer
  );

  const submitHandler = (e) => {
    e.preventDefault();
    if (!edit) {
      dispatch(change());
    }
    if (edit) {
      dispatch(update(editId));
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-add">
          <input
            type="text"
            required
            value={setName}
            onChange={(e) => {
              dispatch({
                type: SET_USER_NAME,
                payload: e.target.value,
              });
            }}
          />
          <input
            type="number"
            required
            value={price}
            onChange={(e) => {
              dispatch({
                type: SET_USER_PRICE,
                payload: e.target.value,
              });
            }}
          />

          <div>
            <button>Save</button>
            {edit && <button>Cancel</button>}
          </div>
        </div>
      </form>
      <ul className="list">
        {listService.map((item) => (
          <ListItem
            key={item.id}
            name={item.name}
            price={item.price}
            id={item.id}
          />
        ))}
      </ul>
    </>
  );
};

export default MainApp;
