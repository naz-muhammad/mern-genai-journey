// The value of premitive data type are store in stack memeory 

let myName = "Naz M"; 

let anotherName = myName; 
anotherName = "Naz Muhammad";

console.log(myName);      // Output: Naz M
console.log(anotherName); // Output: Naz Muhammad

// This happens because Strings are a primitive data type. 
// They are copied by value, making them completely independent of each other.


/*

 STACK MEMORY
┌───────────────┬─────────────────┐
│ Variable Name │ Value Stored    │
├───────────────┼─────────────────┤
│ myName        │ "Naz M"         │  <-- Untouched and original
├───────────────┼─────────────────┤
│ anotherName   │ "Naz Muhammad"  │  <-- Independent updated copy
└───────────────┴─────────────────┘

*/




//                                          Heap Memory 




// Reference Types: Stored in the Heap, Linked by the Stack

let user1 = { 
    name: "Naz M" 
}; 

let user2 = user1; // Copies the pointer, NOT the object

user2.name = "Naz Muhammad";

console.log(user1.name); // Output: Naz Muhammad
console.log(user2.name); // Output: Naz Muhammad



/*

    STACK MEMORY                         HEAP MEMORY
 (Fast, Fixed Size)                  (Large, Dynamic Pool)
┌───────────┬──────────┐            ┌──────────────────────────┐
│ Variable  │ Value    │            │ Memory Address & Content │
├───────────┼──────────┤            ├──────────────────────────┤
│ user1     │ Ref #001 ├───────────►│ [Ref #001]           │
├───────────┼──────────┤            │ { name: "Naz Muhammad" } │
│ user2     │ Ref #001 ├───────────►│                        │
└───────────┴──────────┘            └──────────────────────────┘
                                         ▲
                                         │
                    Both variables point │
                    to this single object.


*/