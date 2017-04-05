import { FETCH_DATA } from '../actions/index';
import axios from 'axios';

export default function(state = [], action) {;
  switch (action.type) {
    case FETCH_DATA:
    console.log(state)
    console.log(action.payload.data.results);
  return state.concat(action.payload.data);
}
return state;
}
// export default function(state = [], action) {
//   switch (action.type) {
//     case FETCH_DATA:
//     console.log(action.payload.data.results);
//     console.log(state);
//     console.log(action.payload);
//     return state.news.concat([action.payload.data.results]);
//   }
//   console.log('Action received', action);
//   console.log(action.payload);
//   return state;
// }
