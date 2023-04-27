// import redux from 'redux';  // if it is react 
const redux = require('redux') // if it is node

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

// Action is an object with the type property
// {
//   type: BUY_CAKE,
//   info: 'First redux action'
// }

// ActionCreator is a function that return the action

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

// Reducer
// (previousState, action) => newState

const initialState = {  // previousState
  numOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,  // copy of a state
      numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
}

// Redux Store -> One store for entire application

// Responsibilities:

// 1. Holds applicatoin state
// 2. Allows access to state via getState()
// 3. Allows state to be updated via dispatch(action)
// 4. Registers listeners via subscribe(listener)
// 5. Handles unregistering of listeners via the function returned by subscribe(listener)

const store = createStore(reducer)  // 1. Holds application state
console.log('Initial state:', store.getState()) 
const unsubscribe = store.subscribe(() => console.log('Updated state:', store.getState()))  // 4. Registers Listeners via subscribe(listener)
store.dispatch(buyCake()) // 3. Allows state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()    // 5. unsubscribe