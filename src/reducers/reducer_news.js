import { FETCH_DATA } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
    console.log(action.payload.data.results);
    console.log(state);
    return state.concat([action.payload.data]);
  }
  console.log('Action received', action);
  return state;
}
