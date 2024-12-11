import { useState, useReducer } from "react";

function reducer(state, action) {
  if (action.type == "ADD") {
    return state + action.payload;
  } else if (action.type == "SUBTRACT") {
    return state - action.payload;
  } else {
    return state;
  }
}

function NewCounter() {
  let initialState = 0;

  const [count, dispatch] = useReducer(reducer, initialState);

  function handleClick(operation) {   
    console.log('operation', operation);

    let type = null

    if (operation == 'cow') {
        type = 'ADD'
    }
    else if (operation == 'bull') {
      type = 'SUBTRACT'
    }    
    
    if(type != null) {
      dispatch({ type: type, payload: 1 });
    }
  }

  // reason why the int doesnt increase -
  // react does not update visually the component unless it knows it needs to
  //
  return (
    <div>
      <button className="btn btn-primary" onClick={() => handleClick('cow')}>
        {" "}
        +{" "}
      </button>
      <p>Your count is {count}</p>
      <button className="btn btn-primary" onClick={() => handleClick('lamb')}>
        {" "}
        -{" "}
      </button>
    </div>
  );
}

export default NewCounter;
