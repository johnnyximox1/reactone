// import react , { Component } from 'react';

let Person = (props) => {
  console.log(props);
    return(
        <div>
          <h1> name : {props.name} , Age : {props.age}, Years </h1>
          <h4>Extra Info : {props.children}</h4>
         
        </div>
      )
}
// class Person extends Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     // console.log(this.props);
//         return(
//         <div>
//           <h1> name : {this.props.name} , Age : {this.props.age}, Years </h1>
//           <h4>Extra Info : {this.props.children}</h4>
         
//         </div>
//       )
//   }
// }


// function Person() {
  
//   }
  export default  Person; 