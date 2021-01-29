import './App.css';
import NameProp from './components/NameProp';
import Contacts from './components/Contacts';
import State from './components/State'

function App() { 

  return (
    <div className= "App">
     <Contacts name="Daniel" age="22" school= "University of Indianapolis" graduationYear= "2017"/>
     <p>------------------------------</p>
      <State/>
    </div>
  );
};


export default App;
