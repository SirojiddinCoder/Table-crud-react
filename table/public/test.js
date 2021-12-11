// import React,{Component} from "react";
// import {data} from "./Backend";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: data,
//       name: "",
//       age: "",
//       status:"",
//       selected: null,
//       newName: "",
//       newAge: "",
//       newStatus:"",
//     };
//   }
//   render() {
//     const onChange = (e) => {
//       this.setState({
//         [e.target.name]: e.target.value,
//       });
//     };
//     const onEdit = (e) => {
//       this.setState({
//         name: e.name,
//         age: e.age,
//         status:e.status,
//         selected: e.id,
//       });
//     };
//     const onSave = () => {
//       let newData = this.state.data.map((value) =>
//         value.id === this.state.selected
//           ? { ...value,
//              name: this.state.name,
//              age: this.state.age,
//              status: this.state.status }
//           : value
//       );
//       this.setState({
//         data: newData,
//         selected: null,
//       });
//     };
//     const onDelete = (e) => {
//       let map = this.state.data.filter((value) => value.id !== e.id);
//       this.setState({
//         data: map,
//       });
//     };

//     const onAdd = () => {
//       let newBaze = {
//         id: this.state.data[this.state.data.length - 1].id + 1,
//         name: this.state.newName,
//         age: this.state.newAge,
//         status: this.state.newStatus,
//       };
//       let data2 = this.state.data;
//       data2.push(newBaze);
//       this.setState({
//         data: data2,
//       });
//     };

//     return (
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>
//                 <input
//                   onChange={onChange}
//                   name="newName"
//                   value={this.state.newName}
//                 />
//               </th>
//               <th>
//                 <input
//                   onChange={onChange}
//                   age="newAge"
//                   value={this.state.newAge}
//                 />
//               </th>
//               <th>
//                 <input
//                   onChange={onChange}
//                   status="newStatus"
//                   value={this.state.newStatus}
//                 />
//               </th>
//               <th>
//                 <button onClick={onAdd}>Add</button>
//               </th>
//             </tr>
//           </thead>
//         </table>
//         <table
//           border="1"
//           style={{ borderCollapse: "collapse", width: "70%", margin: "auto" }}
//         >
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Status</th>
//               <th>Action {this.state.data.length}</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.data.map((value) => (
//               <tr key={value.id}>
//                 <td>{value.id}</td>
//                 <td>
//                   {this.state.selected === value.id ? (
//                     <input
//                       name="name"
//                       onChange={onChange}
//                       value={this.state.name}
//                     />
//                   ) : (
//                     value.name
//                   )}
//                 </td>
//                 <td>
//                   {this.state.selected === value.id ? (
//                     <input
//                       age="age"
//                       onChange={onChange}
//                       value={this.state.age}
//                     />
//                   ) : (
//                     value.age
//                   )}
//                 </td>
//                 <td>
//                   {this.state.selected === value.id ? (
//                     <input
//                       status="status"
//                       onChange={onChange}
//                       value={this.state.status}
//                     />
//                   ) : (
//                     value.status
//                   )}
//                 </td>
//                 <td>
//                   {this.state.selected === value.id ? (
//                     <button onClick={onSave}>Save</button>
//                   ) : (
//                     <button onClick={() => onEdit(value)}>Edit</button>
//                   )}
//                   <button onClick={() => onDelete(value)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }