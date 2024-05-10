import './App.css';
import SearchBar from "./SearchBar"
import {useState } from "react";

function App() {
    // {} is an empty Javascript object.  Therefore data is a Javascript object.
    const [data, setData] = useState({});

    // callback function will update the state in this component, and will
    // be called by the child component that wants to update the state.
    // searchParams is a Javascript object. Remember, data is also Javascript 
    // object, initially set to an empty JS object.  Each time we update data, we
    // will updating data to a new JS object.
    const updateData = (searchParams) => {
        setData(searchParams);
    }


  return (
    <div className="App">
        {/** Take the function updateData and pass it as a callback function 
         * to the SearchBar component, so that now inside of SearchBar we can
         * call that function from inside it.  That function will then update
         * the data by calling setData, thereby changing the state of the parent
         * component.
        */}
        <SearchBar callback={updateData} />
        <p>Name: { "name" in data ? data["name"] : "No data to display" }</p>
        <p>Max price: { "price" in data ? data["price"] : "No data to display" }</p>
        <p>Type: { "type" in data ? data["type"] : "No data to display" }</p>
        <p>Brand: { "brand" in data ? data["brand"] : "No data to display" }</p>
    </div>
  );
}




export default App;