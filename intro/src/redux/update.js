import {UPDATE} from "./actions"

const update = (arr) => {
  return {
    type: UPDATE,
    payload: arr,
  }
}

export default update;