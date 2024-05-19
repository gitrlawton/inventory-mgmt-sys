/** This file is just for showing examples of state. */
// File is not used.  This is just for explanation of concepts.

import './App.css';
import { PropTypes } from "prop-types";
import { useState } from "react";



function App() {
  return (
    <div className="App">
      <ButtonState></ButtonState>
    </div>
  );
}

function ButtonState() {
    // title is the state variable.  It's initial value is set in the parenthesis,
    // which will be an empty string to start.  We'll use the setTitle function 
    // whenever we want to set a new value for title.  Always use 'const' for state.
    const [title, setTitle] = useState("");
    const [count, setCount] = useState(0);

    // Functions to handle button click.  You always want to have a separate
    // function that calls the set state method, as opposed to calling it 
    // from the button directly.
    const updateTitleClicked = () => {
      setTitle("We now have a title.");
    }

    const updateCountClicked = () => {
      setCount(count + 1);
    }

    return (
        <div>
            {/** Showing current state through use of the state variables. 
             * <p>Title: {title}</p>
             * <p>Count: {count}</p>
             * is equivalent to
             * <Data title={title} count={count} />
             * because the Data component displays exactly the same thing, it
             * just receives the information via props, instead of being
             * directly displayed in the Button component.  Pretty easy to
             * comprehend.
            */}
            <Data title={title} count={count} />
            {/** Attaching functions to be called to onClick event.  Just put
             * function names, without (). 
             */}
            <button onClick={updateTitleClicked}>Update Title</button>
            <button onClick={updateCountClicked}>Update Counter</button>
        </div>
    )
}

// Keep in mind, props are read only values.  This means their values cannot be 
// changed or updated from child components (a component the props are passed to.)
// To update them, you'd need to use a callback function contained in the 
// parent component (the component from which the props were passed down from.)
function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  )
}


export default App;