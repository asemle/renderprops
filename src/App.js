import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Button.css';
import propTypes from 'prop-types';
import ListDemo from './List';
import ListDemo2 from './List2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
         </div>

        <div>
            <Button type="primary" icon="search"></Button>
            <Button type="primary" icon="search">Search</Button>
            
            <Button icon="search"></Button>
            <Button icon="search">Default</Button>

            <Button type="dashed" icon="search"></Button>
            <Button type="dashed" icon="search">Dashed</Button>
        </div>
        </header>
       
       <ListDemo/>

       <ListDemo2/>
      </div>
    );
  }
}

export default App;

// function Button(props) {
//   const type = props.type;
//   let buttonBGColor = "white"
//   let buttonColor = "#5F5F5F"

//   const style = {
//     backgroundColor: props.type ? buttonBackgrounds[props.type]: 'white',
//     color: props.type ? buttonColors[props.type] : '#5F5F5F',
//   }
//   return <button className="btn" style={ style }>Click Me Component</button>
// }

// const buttonBackgrounds = {
//   primary: '#1890ff',
//   dashed: 'white',
//   danger: '#ccc',
//   info: '#336699'
// }

// const buttonColors = {
//   primary: 'white',
//   dashed: '#5F5F5F',
//   danger: 'red',
//   info: '',
// }

// Button.propTypes = {
//   type: propTypes.string.isRequired 
// }

function Button(props) {

const style = props.type 
  ? styleLookup[props.type] : 'defaultStyle'


const icon = props.icon === "search" ? <i className="fas fa-search"/>: '';

const round = !props.children ? "roundBtn" : ''

  return <button className="btn" className={'btn ' + style + ' ' + round}>{icon}   {props.children}</button>
}



const styleLookup = {
  primary: 'primaryStyle',
  dashed: 'dashedStyle',
  danger: 'dangerStyle'
}