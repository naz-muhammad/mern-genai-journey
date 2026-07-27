import { useState, useSyncExternalStore } from "react";

function App() {

  // let counter = 0;
  let [counter , setCounter] = useState(0)

  return (
    <div className="flex flex-col gap-4 bg-[#414141] p-8 rounded-2xl">
      <h1 className="text-5xl">Count : {counter}</h1>
      <button className="text-2xl bg-[#313131] py-4 rounded-full"
        onClick={()=>{
          counter++
          console.log(counter);
          setCounter(counter)
        }}
      >inc</button>
      <button className="text-2xl bg-[#313131] py-4 rounded-full"
      onClick={()=>{
        
        counter--
        if ( counter >= 0 ) {
          console.log(counter);
          
          setCounter(counter)
        }
        
      }}
      >dec</button>
    </div>
  );
}

export default App;
