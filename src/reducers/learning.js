import { LEARN_STUFF } from '../actions/index';

export default function(state = {
  amount: 30,
  activated: true
}, action) {;
  switch (action.type) {
    case LEARN_STUFF:
    console.log(state)
    console.log(action.payload);
  return state.concat(action.payload);
}
return state;
}
