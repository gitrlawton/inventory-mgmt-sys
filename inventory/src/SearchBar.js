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
        // updateFilters, and the param it is expecting is "searchParams".  So
        // what we are passing here are the search params (ie. the current values
        // of our state variables) as a JS object.
        props.updateSearchParamsCallback({ name: name, price: price, type: type, brand: brand });
    }

    // Bootstrap classNames.  To use 'row' and 'column', they need to be inside
    // an outer element with the className 'container'.
    return (
        <div className="container">
            <div className="row">
                <h1>Search for an Item</h1>
            </div>
            {/** Put all the input elements into one row. Then, put each one in
             * its own separate column. */}
            <div className="row">
                <div className="col">
                    <label htmlFor="name-field">Name:</label>
                    {/** Because we are using a value property, the input value will be endlessly 
                     * set and reset to that.  In order for the input box to take our new text as 
                     * we type it, we need to assign an onChange property.  This property takes
                     * the event (e) and calls the setName function, setting the name to the value
                     * being typed.
                     */}
                    <input id="name-field" className="form-control" type="text" value={name} onChange={ (e) => setName(e.target.value) }/>
                </div>
                <div className="col">
                    <label htmlFor="price-field">Max Price:</label>
                    <input id="price-field" className="form-control" type="number" value={price} onChange={ (e) => setPrice(e.target.value) }/>
                </div>
                <div className="col">
                    <label htmlFor="type-field">Type:</label>
                    <input id="type-field" className="form-control" type="text" value={type} onChange={ (e) => setType(e.target.value) }/>
                </div>
                <div className="col">
                    <label htmlFor="brand-field">Brand:</label>
                    <input id="brand-field" className="form-control" type="text" value={brand} onChange={ (e) => setBrand(e.target.value) }/>
                </div>
            </div>
            {/** Button is in it's own row, taking up the four middle columns. */}    
            <div className="row mt-3">
                <div className="col-4" />
                <button type="button" className="col-4 btn btn-primary" onClick={searchButtonPressed}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;