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
          ReactDOM.render(element, document.getElementById("index"));
          
      
          
        });                   

    }, 60000);

  }, []);

  return <h1>Hello, {props.name}</h1>; 
} 

function stud_id_sort(list){
 
  list.sort((a, b) => a.student_id - b.student_id);
  const element = <Table list={list} />; 
  ReactDOM.render(element, document.getElementById("index"));
  
}

function stud_name_sort(list){
  list.sort((a, b) => (a.student_name > b.student_name) ? 1 : -1)
  const element = <Table list={list} />; 
  ReactDOM.render(element, document.getElementById("index"));

}

function course_name_sort(list){
  list.sort((a, b) => a.course_name !== b.course_name ? a.course_name < b.course_name ? -1 : 1 : 0);
  const element = <Table list={list} />; 
  ReactDOM.render(element, document.getElementById("index"));
}

function registration_time_sort(list){
  list.sort((a, b) => (a.registration_time > b.registration_time) ? 1 : -1)
  const element = <Table list={list} />; 
  ReactDOM.render(element, document.getElementById("index"));

}
 
const element = <Welcome name="YOUR NAME" />; 
 
ReactDOM.render(element, document.getElementById("index")); 




function Table(props) {
  return (
    <div className="App">
      <table>
        <tr>
          <th><button id="studentid" onClick={() => stud_id_sort(props.list)}>Student id</button></th>
          <th><button id="studentname" onClick={() => stud_name_sort(props.list)}>Student name</button></th>
          <th><button id="coursename" onClick={() => course_name_sort(props.list)}>Course name</button></th>
          <th><button id="regtime" onClick={() => registration_time_sort(props.list)}>Registration time</button></th>
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
    

    
  });                   