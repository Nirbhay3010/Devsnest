import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Forms from "./components/Forms";
import Card from "./components/Card";

// import {useState,useEffect} from "react";
function App() {
//   const [location, setlocation] = useState("");
//   const[Data, setData] = useState("");

//   const updateData = () =>{
//     fetch(`https://api.weatherapi.com/v1/current.json?key=f60918e3372a41658ee132151211208&q=${location}`)
//     .then(res=>res.json())
//     .then((data)=>{
//       setData(data)
//     });
//   }
 
  return (
    <div className="App">
      
      <h3>Weather App</h3>
      <Forms />
      <Card />
    </div>
  );
}

export default App;
