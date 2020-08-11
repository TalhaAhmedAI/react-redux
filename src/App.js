import React from "react";
import { createStore } from "redux";
import "./App.css";

function App() {
  const initialState = {
    result: 10,
    lastValues: [],
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        state = {
          ...state,
          result: state.result + action.payload,
          lastValues: [...state.lastValues, action.payload],
        };
        break;
      case "SUBTRACT":
        state = {
          ...state,
          result: state.result - action.payload,
          lastValues: [...state.lastValues, action.payload],
        };
        break;
    }
    return state;
  };
  const store = createStore(reducer);

  store.subscribe(() => {
    console.log("Store updated", store.getState());
  });
  store.dispatch({
    type: "ADD",
    payload: 10,
  });
  store.dispatch({
    type: "SUBTRACT",
    payload: 2,
  });
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
