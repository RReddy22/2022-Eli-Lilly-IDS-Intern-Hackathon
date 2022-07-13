import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  //each state (we have 5 down below) is a variable that will be changed and sent to our database
  const[name, setName] = useState(""); 
  const[age, setAge] = useState(0); 
  const[country, setCountry] = useState(""); 
  const[position, setPosition] = useState(""); 
  const[wage, setWage] = useState(0); 

  /*
  const displayInfo = () => { 
    console.log(name + age + country + position + wafge);
  }; 
  */

  //we want to make the axios request (with a POST request) 
  //we are sending an object from the front to backend 
  const addEmployee = () => {
      Axios.post('http://localhost:3001/create', {

        //this is all an object with key-value pairs
        name: name, 
        age: age, 
        country: country, 
        position: position, 
        wage: wage,
      }).then(() => { //this ensures our whole function will stop only when the post request is done
        console.log("success");
      });
  };

   //the onChange event will take a function which will grab whatever we wrote in our input and set the state equal to that
  return (
    <div className="App">
       <div className="information">
        <label>Name:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setName(event.target.value);
          }} 
        />

        <label>Age:</label>
        <input 
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }} 
        />
          
        <label>Country:</label>
        <input 
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }} 
        />

        <label>Position:</label>
        <input 
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }} 
        />

        <label>Wage (year):</label>
        <input 
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }} 
        />

        <button onClick={addEmployee}> Add Employee</button>
      </div>
    </div>
  );
}

export default App;
