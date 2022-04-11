import React from "react"; 
import ReactDOM from "react-dom"; 
import { useEffect } from "react";

 
function Welcome(props) { 
    useEffect(() => {
    setInterval(() => {
      fetch('http://localhost:5000/api/studentinfo', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
      })
      .then(res => res.json())
      .then(response => {
          const element = <Table list={response} />; 
          ReactDOM.render(element, document.getElementById("index"))
          console.log(response);
          
      
          
        });                   

    }, 3000);

  }, []);

  return <h1>Hello, {props.name}</h1>; 
} 
 
const element = <Welcome name="YOUR NAME" />; 
 
ReactDOM.render(element, document.getElementById("index")); 




function Table(props) {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Student id</th>
          <th>Student name</th>
          <th>Course name</th>
          <th>Registration time</th>
        </tr>
        {props.list.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.student_id}</td>
              <td>{val.student_name}</td>
              <td>{val.course_name}</td>
              <td>{val.registration_time}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

fetch('http://localhost:5000/api/studentinfo', {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json'
  },
  
})
.then(res => res.json())
.then(response => {
    const element = <Table list={response} />; 
    ReactDOM.render(element, document.getElementById("index"))
    console.log(response);
    

    
  });                   