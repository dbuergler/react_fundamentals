// Props
// Short for properties
// Parameters of the a component function that get passed into the component to aid in its reuseability.
// Dynamic data can be assigned to child components. 
// Props are read only 

const NameProp = (props) => { //property returning React element
    return  <h1>Hello, { props.name }</h1>
  
}


export default NameProp;

