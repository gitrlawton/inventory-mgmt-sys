import { useState } from "react";

function SearchBar(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    // Handler for Search Button.
    const searchButtonPressed = () => {
        // Pass a Javascript object as a parameter to the props' callback 
        // function.  We can see that in App.js, the callback function is 
        // updateData, and the param it is expecting is "searchParams".  So
        // what we are passing here are the search params (our state variables)
        // as a JS object.
        props.callback({ name: name, price: price, type: type, brand: brand });
    }


    return (
        <div>
            <h1>Search for an Item</h1>
            <form>
                <label htmlFor="name-field">Name:</label>
                {/**Because we are using a value property, the input value will be endlessly 
                 * set and reset to that.  In order for the input box to take our new text as 
                 * we type it, we need to assign an onChange property.  This property takes
                 * the event (e) and calls the setName function, setting the name to the value
                 * being typed.
                 */}
                <input id="name-field" type="text" value={name} onChange={ (e) => setName(e.target.value) }/>
                <label htmlFor="price-field">Max Price:</label>
                <input id="price-field" type="number" value={price} onChange={ (e) => setPrice(e.target.value) }/>
                <label htmlFor="type-field">Type:</label>
                <input id="type-field" type="text" value={type} onChange={ (e) => setType(e.target.value) }/>
                <label htmlFor="brand-field">Brand:</label>
                <input id="brand-field" type="text" value={brand} onChange={ (e) => setBrand(e.target.value) }/>
                <button type="button" onClick={searchButtonPressed}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;