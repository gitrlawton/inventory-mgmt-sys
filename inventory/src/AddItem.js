import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    // Handler for Add Item Button.
    const addItemButtonPressed = () => {
        // Pass a Javascript object as a parameter to the props' callback 
        // function.  We can see that in App.js, the callback function is 
        // addItemToData, and the param it is expecting is "item".  An item
        // is an object.  It has a name, a price, a type, and a brand.  So
        // what we are passing here is an item, which is a JS object.
        props.addItemCallback({ name: name, price: price, type: type, brand: brand });
        // Reset the values in the input fields back to their default/empty
        // state.
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    }

    // Bootstrap classNames.  To use 'row' and 'column', they need to be inside
    // an outer element with the className 'container'.
    return (
        <div className="container">
            <div className="row">
                <h1>Add an Item</h1>
            </div>
            <div className="row">
                <label htmlFor="name-field">Name:</label>
                {/** Because we are using a value property, the input value will be endlessly 
                 * set and reset to that.  In order for the input box to take our new text as 
                 * we type it, we need to assign an onChange property.  This property takes
                 * the event (e) and calls the setName function, setting the name to the value
                 * being typed.
                 */}
                <input id="name-field" className="form-control" type="text" value={name} onChange={ (e) => setName(e.target.value) }/>
                <label htmlFor="price-field">Price:</label>
                <input id="price-field" className="form-control" type="number" value={price} onChange={ (e) => setPrice(e.target.value) }/>
                <label htmlFor="type-field">Type:</label>
                <input id="type-field" className="form-control" type="text" value={type} onChange={ (e) => setType(e.target.value) }/>
                <label htmlFor="brand-field">Brand:</label>
                <input id="brand-field" className="form-control" type="text" value={brand} onChange={ (e) => setBrand(e.target.value) }/>
            </div>
            <div className="row mt-3">    
                <button type="button" className="btn btn-primary" onClick={addItemButtonPressed}>Add Item</button>
            </div>
        </div>
    )
}

export default AddItem;