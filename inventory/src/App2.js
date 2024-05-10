

import './App.css';
import { PropTypes } from "prop-types";

// Note about props: Props are passed by adding key/value pairs to the
// component at the point it is rendered.  That means below.
// The props will then be passed to the definition of the component, as
// a single props parameter.  Inside the definition, you can access the 
// key/value pairs through dot notation of the props object.  Example:
// the AddItem component gets passed the key/value pair text="Enter a value".
// Inside the AddItem component's definition, the value can be accessed through
// props.text (the key).  
// You can also access the props passed to the definition another way, by
// destructuring the props object: see Info component definition.  As parameters,
// you list the keys inside curly braces.  These can now be used by name instead
// of props.text and props.name, etc.
// Props is preferred, as listing out 3 or more keys gets to be more work than
// its worth.
function App() {
  return (
    <div className="App">
      <Info text="This is the info component" name="Tim" />
      <AddItem text="Enter a value"/>
    </div>
  );
}/** This file is just for showing examples of component creation and props. */

// Info component.
function Info({ text, name }) {
  const title = "This is my title";
  const showTitle = true;

  return (
    <div>
      <h1>{showTitle ? title : {text}}</h1>
      <p>Manage your stuff, {name}</p>
    </div>
  )
}

// AddItem component.
function AddItem(props) {
  const value = props.text;

  return (
    <form>
      <label for ="text-form">Type something: </label>
      <input type="text" value={value} id="text-form" />
    </form>
  )
}

// How to assign default values for the props.
AddItem.defaultProps = {
  text: "This is the default text",
};

// How to restrict types for the different key/value pairs. For example, the
// value for the text key needs to be a string. Requires import PropTypes.
AddItem.propTypes = {
  text: PropTypes.string,
};

export default App;
