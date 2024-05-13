// We're passing this component our 'data' state variable, which is our items.
function ItemsDisplay(props) {
    return (
        <div>
            {props.itemsProperty.map( (item) => { 
                return (
                    <div>
                        <p>Id: {item.id}</p>
                        <p>Name: {item.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Type: {item.type}</p>
                        <p>Brand: {item.brand}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemsDisplay;