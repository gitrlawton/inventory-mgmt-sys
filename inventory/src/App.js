import './App.css';
import SearchBar from "./SearchBar";
import ItemsDisplay from "./ItemsDisplay";
import AddItem from "./AddItem";
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

      // Write our request.
      const requestOptions = {
        method: "POST",
        headers: {  // Headers define the format of our data.
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),  // The payload/data we're sending, as a JSON object.
      }
      // Send the request to the server's url and tell it to store the 
      // item in the db.
      fetch("http://localhost:3000/items", requestOptions)
      // Fetch returns a response.  That response and parse it from json to JS.
      .then( (response) => response.json() )
      // Take that parsed response (call it data now) and...
      .then( (data) => {
        // Add the data (the item-to-add) to the items array.
        listOfItems.push(data);
        // Set the data state variable to a Javascript object containing the key
        // 'items', with it's value being the up-to-date list of items.
        setData( {items: listOfItems} );
      })
    }

    // Function that filters the items stored in data.  Used for the search 
    // button's functionality.
    const filterData = (data) => {
      // Create an empty list that will hold the items that match the filter's
      // criteria (ie. price is under $2 or type is drink.)
      const filteredData = [];
      
      // This is an edge case to account for when the data list is empty.
      if (!filters.name) {
        return data;
      }

      // Loop through all of the items in data and check if they pass the 
      // filter criteria.
      for (const item of data) {
        // Check if the filters are not the default value.
        if (filters.name !== "" && item.name !== filters.name) {
            continue;
        }
        if (filters.price !== 0 && item.price > filters.price) {
          continue;
        }
        if (filters.type !== "" && item.type !== filters.type) {
            continue;
        }
        if (filters.brand !== "" && item.brand !== filters.brand) {
          continue;
        }

        // At this point, the item has passed all the filter criteria.  Add it
        // to the list of filtered items.
        filteredData.push(item);
      }

      // Return the list of filtered items.
      return filteredData;
    }

  // Bootstrap classNames.  To use 'row' and 'column', they need to be inside
  // an outer element with the className 'container'.
  return (
    <div className="container">
      <div className="row mt-3">
        {/** Pass the list of items in data to filterData.*/}
        <ItemsDisplay itemsProperty={ filterData(data["items"]) } />
      </div>
      <div className="row mt-3">
        {/** Take the function updateFilters and pass it as a callback function 
         * to the SearchBar component, so that now inside of SearchBar we can
         * call that function from inside it.  That function will then update
         * the filters by calling setFilters, thereby changing the state of the 
         * parent component.
        */}
        <SearchBar updateSearchParamsCallback={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItemCallback={addItemToData} />
      </div>
    </div>
  );
}




export default App;