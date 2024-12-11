import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    // HW! find out why passing an arrow function is better than passing an actual value
    setCount(() => count + 1)
    //setCount(count + 1)
  }

  // reason why the int doesnt increase - 
  // react does not update visually the component unless it knows it needs to
  return (
    <div>
      <button className='btn btn-primary' onClick={handleClick}>You clicked on me {count} times</button>
    </div>
  );
}

export default Counter;