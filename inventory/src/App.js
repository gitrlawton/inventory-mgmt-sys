import './App.css';
import SearchBar from "./SearchBar"
import AddItem from "./AddItem"
import {useState } from "react";

function App() {
    // {} is an empty Javascript object.  Therefore 'filters' is a Javascript 
    // object.
    const [filters, setFilters] = useState({});
    // data will store our inventory items, initially set to a javascript 
    // object containing a key, 'items', whose value is an empty list.
    const [data, setData] = useState( {items: []} );

    // This function's purpose is to be used as a callback function for the
    // SearchBar component. Calling this function will update the state in 
    // the App component (ie. its parent component).
    // searchParams is a Javascript object. Remember, 'filters' is also a 
    // Javascript object, initially set to an empty JS object.  Each time we 
    // update 'filters', we will be updating 'filters' to a new JS object.
    const updateFilters = (searchParams) => {
        setFilters(searchParams);
    }
    
    // This function is to be used as a callback function for the AddItem
    // component.
    const addItemToData = (item) => {
      // Grab the items being stored in the data state variable (ie. the 
      // items array).
      let listOfItems = data["items"];
      // Add the item-to-add to the items array.
      listOfItems.push(item)
      // Set the data state variable to a Javascript object containing the key
      // 'items', with it's value being the up-to-date list of items.
      setData( {items: listOfItems} );
      console.log(data);
    }


  return (
    <div className="App">
        {/** Take the function updateFilters and pass it as a callback function 
         * to the SearchBar component, so that now inside of SearchBar we can
         * call that function from inside it.  That function will then update
         * the filters by calling setFilters, thereby changing the state of the 
         * parent component.
        */}
        <SearchBar updateSearchParamsCallback={updateFilters} />
        <AddItem addItemCallback={addItemToData} />

    </div>
  );
}




export default App;