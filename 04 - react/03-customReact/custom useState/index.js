//   function useState(initialValue) {
//   let state = initialValue;

//   function setState(newValue) {
//     state = newValue;
//     console.log("State is now:", state);
//   }

//   return [state, setState];
// }

// const [state , setState] = useState(3)
// setState(state+1)


function useState(initialValue) {
  let state = initialValue;

  function setState(newValue) {
    state = newValue;
    console.log("New State:", state);
  }

  return [state, setState];
}

const [count, setCount] = useState(0);

console.log(count); // 0

setCount(10);