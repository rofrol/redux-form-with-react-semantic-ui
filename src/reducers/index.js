import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  reducer,
  form: reduxFormReducer,
});

export default rootReducer;
