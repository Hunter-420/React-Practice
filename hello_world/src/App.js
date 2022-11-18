import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import with any name as you like but you should need to use same imported name as a html tag
import Greet from './components/Greet';
// import MyIntro from './components/Greet';

// -->for name export
// import {Greet} from './components/Greet';

// $for class component
// import Welcome from './components/Welcome';
// import Hello from './components/HelloProps';
import ChildrenProps from './components/ChildrenProps';
import Message from './components/Message';

class App extends Component {
  render()
  {
  return (
    <div className="App">
      {
         <div>
          {/* <Greet /> */}
          {/* <MyIntro/> */}
          {/* <Welcome /> */}
          {/* <Hello firstName="Abhinav" lastName="Gautam"/>
          <Hello firstName="Pitambar" lastName="Gautam"/>
          <Hello firstName="Nikesh" lastName="Khanal"/>
          <Hello firstName="Nischal" lastName="Khanal"/> */}

          {/* for children props */}
          {/* <ChildrenProps firstName="Pitambar" lastName="Gautam">
          <p>this is children props</p>
          </ChildrenProps>
          <ChildrenProps firstName="Abhinav" lastName="Gautam">
            <button>Submit</button>
          </ChildrenProps>
          <ChildrenProps firstName="Nikesh" lastName="Khanal"/>
          <ChildrenProps firstName="Nischal" lastName="Khanal"/> */}

          {/* #Concept of state to change text with respect to time */}
          <Message/>

          </div>
          
      }
    </div>
  );
}
}

export default App;
