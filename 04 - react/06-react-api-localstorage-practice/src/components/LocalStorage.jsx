import React from "react";

const LocalStorage = () => {
  localStorage.clear();
  sessionStorage.clear();

  // localStorage.setItem("name" , "naz muhammad")

  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  saveToLocalStorage("name", "ayan");
  saveToLocalStorage("age", 17);
  saveToLocalStorage("gender", "male");
  saveToLocalStorage("fatherName", "Irfan");

  saveToLocalStorage("name1", "Naz M");
  saveToLocalStorage("age1", 20);
  saveToLocalStorage("gender1", "male");
  saveToLocalStorage("fatherName1", "Fateh Khan");

  // localStorage.removeItem('name')
  // localStorage.removeItem('fatherName')

  function deleteFromLocalStorage(key) {
    localStorage.removeItem(key);
  }

  return ( 
    <div className="flex h-screen justify-center items-center"> 
      {/* Added border-collapse and border color to the table */}
      <table className="border-collapse border border-gray-300"> 
        {/* Added bottom border to the header row */}
        <tr className="border-b border-gray-300"> 
          {/* Added side borders and padding to each header cell */}
          <th className="border border-gray-300 p-2">Name</th> 
          <th className="border border-gray-300 p-2">Age</th> 
          <th className="border border-gray-300 p-2">Father Name</th> 
          <th className="border border-gray-300 p-2">Gender</th> 
          <th className="border border-gray-300 p-2">Button</th> 
        </tr> 
        {/* Added bottom border to the first row */}
        <tr className="border-b border-gray-300"> 
          {/* Added side borders and padding to each data cell */}
          <td className="border border-gray-300 p-2">{localStorage.getItem("name")}</td> 
          <td className="border border-gray-300 p-2">{localStorage.getItem("age")}</td> 
          <td className="border border-gray-300 p-2">{localStorage.getItem("fatherName")}</td> 
          <td className="border border-gray-300 p-2">{localStorage.getItem("gender")}</td> 
          <td className="border border-gray-300 p-2"> 
            <button className="bg-red-600 py-1 px-4 rounded text-lg">Delete</button> 
          </td> 
        </tr> 
        <tr> 
          {/* Added side borders and padding to each data cell */}
          <td className="border border-gray-300 p-2">{localStorage.getItem("name1")}</td> 
          <td className="border border-gray-300 p-2">{localStorage.getItem("age1")}</td> 
          <td className="border border-gray-300 p-2">{localStorage.getItem("fatherName1")}</td> 
          <td className="border border-gray-300 p-2">{localStorage.getItem("gender1")}</td> 
          <td className="border border-gray-300 p-2"> 
            <button className="bg-red-600 py-1 px-4 rounded text-lg"
            >Delete</button>
          </td> 
        </tr> 
      </table> 
    </div> 
  ); 
}; 

export default LocalStorage;