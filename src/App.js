// import ReactDOM from 'react-dom/client';
//import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';
// import Person from './components/Person';
import Book from './components/Book.js';


// JSX

// function App() {
//   return (
//     <div className="App">
//     <h1>Hello world</h1>
//     <Person />
//     </div>
//   );
  
// }
// return React.createElement('div',{className:"App"}, React.createElement('h1',null,'Hello World'),<Person/>);

// class components
class App extends Component{
  state = {
    books : [
      {bookName : "Johnny" , writer : "abc"},
      {bookName : "456" , writer : "def"},
      {bookName : "789" , writer : "ghi"}
      
    ],
    otherProp: "I am some other Prop"
  }
  // constructor(){
  //   super();
  //   this.state = {} ;
  // }

  changeBookState = () => {
    
  }

  render(){

    return(
      <div className='App'>
      <h1>Book List</h1>
      <button onClick={this.changeBookState}>Change State</button>
      <Book 
      bookName={this.state.books[0].bookName} 
      writer={this.state.books[0].writer} />
      <Book 
      bookName={this.state.books[1].bookName} 
      writer={this.state.books[1].writer} />
      <Book 
      bookName={this.state.books[2].bookName} 
      writer={this.state.books[2].writer} />
      </div>
    );
  }

}


export default App;
