import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting></UserGreeting>
        <NameList></NameList>
        {/*<ParentComponent />
        <EventBind /> */}
        {/*<Counter /> */}
        {/*<Message />*/}
        {/*<Hello></Hello>
        < Greet name="Harsh" sname="Acchpal">
          <p>Children props example</p>
        </Greet> 
        < Greet name="Samir" sname="Shenoy">
        <button> This is cool</button> 
        </Greet> */}
        {/*< Greet name="Akul" sname="Pai" />
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        < Welcome name="Vedant" sname="Valia" /> */}
      </div>
    )
  }
}

export default App;
