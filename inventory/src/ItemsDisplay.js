// We're passing this component our 'data' state variable, which is our items,
// as well as the function to delete an item.  
// We're deconstructing 'props' so we can directly use the props by name.
// Prop names are the attributes (properties), ie. what is before the '='.
function ItemsDisplay({ itemsProperty, deleteItemFunction }) {
    const showItem = (item) => {
        return (
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td>{item.brand}</td>
                <td>
                    <button className="btn btn-danger" onClick={ () => deleteItemFunction(item) }>Delete</button>
                </td>
            </tr>
        )
    }
    
    return (
        <div className="container">
            <div className="row">
                <h2>Items</h2>
            </div>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>{ itemsProperty.map(showItem) }</tbody>
                </table>
            </div>
        </div>
    )
}

export default ItemsDisplay;