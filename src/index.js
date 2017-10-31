import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import counter from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));



const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />,
<Provider store={store}>
  <App />
</Provider>,
  rootEl
)

render()
store.subscribe(render)

registerServiceWorker();