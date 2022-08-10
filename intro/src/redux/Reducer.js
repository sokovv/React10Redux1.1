import {
  CHANGE,
  SET_USER_NAME,
  SET_USER_PRICE,
  REMOVE,
  EDIT,
  UPDATE,
  CHANGE_FILTER,
} from "./actions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  filter: "",
  editId: "",
  setName: "",
  edit: false,
  price: "",
  listService: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case CHANGE:
      return {
        ...state,
        listService: [
          ...state.listService,
          { id: uuidv4(), name: state.setName, price: state.price },
        ],
        setName: "",
        price: "",
        edit: false,
      };
    case REMOVE:
      return {
        ...state,
        listService: state.listService.filter(
          (item) => item.id !== action.payload
        ),
        edit: false,
        setName: "",
        price: "",
      };
    case EDIT:
      const findEdit = state.listService.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        edit: true,
        setName: findEdit.name,
        price: findEdit.price,
        editId: findEdit.id,
      };
    case UPDATE:
      let foundIndex = state.listService.findIndex(
        (item) => item.id === action.payload
      );
      state.listService[foundIndex] = {
        id: action.payload,
        name: state.setName,
        price: state.price,
      };
      return {
        ...state,
        listService: [...state.listService],
        setName: "",
        price: "",
        edit: false,
      };
    case SET_USER_NAME:
      return {
        ...state,
        setName: action.payload,
      };
    case SET_USER_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
