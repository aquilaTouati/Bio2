// import React, { Component } from "react";

// export default class Bio extends Component {
//   state = {
//     person: {
//       fullName: "Aquila",
//       bio: "Hi",
//       imgSrc: "./logo192.png",
//       profession: "Student",
//     },
//     show: true,
//     counter: 0,
//     timer: 0,
//   };
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         timer: this.state.timer + 1,
//       });
//     }, 1000);
//   }
//   render() {
//     return (
//       <div>
//         <p> {this.state.person.fullName} </p>
//         <p> {this.state.person.bio} </p>
//         <p> {this.state.person.profession} </p>

//         {this.state.show && <img src={this.state.person.imgSrc} />}

//         <button
//           onClick={() => {
//             this.setState({ show: !this.state.show });
//           }}
//         >
//           {this.state.show ? "Hide" : "Show"}
//         </button>
//         <span>{this.state.timer}</span>
//       </div>
//     );
//   }
// }
