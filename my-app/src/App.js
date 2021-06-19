import logo from './logo.svg';
import './App.css';
import {Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { TextField } from '@material-ui/core';
import React from 'react';

var currentID = "";
//credits: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function postData(url = '', data = {}) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
function postTask(){
    var titlevar = document.getElementById("title").value;
    var assigneevar = document.getElementById("assignee").value;
    var descvar = document.getElementById("description").value;
    postData('http://localhost:9000/v1/tasks', {type: currentID, assignee: assigneevar, title: titlevar, description: descvar});
    closeTask();
    isLoaded = false;
    getTasks();
}

function putTask(id){
  document.getElementById("overlayback").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  currentID = id;
}
function closeTask(){
  document.getElementById("overlayback").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}


var isLoaded = false;
async function getData(url = '') {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
      if(!isLoaded){
        document.getElementById("TODO").innerHTML = "";
        document.getElementById("INPROGRESS").innerHTML = "";
        document.getElementById("COMPLETE").innerHTML = "";
        document.getElementById("INREVIEW").innerHTML = "";
        var tasks = data['tasks'];
        for(var i = 0; i < tasks.length; i++){
          var type = tasks[i]['type'].replace(' ', '');
          var title = tasks[i]['title'];
          var assignee = tasks[i]['assignee'];
          var description = tasks[i]['description'];
          document.getElementById(type).innerHTML += "<div class='card'><h3>"+title+"</h3><p style='font-size: 14px'>assigned to: "+assignee+"</p><p>"+description+"</p><a style='color: red; font-size: 14px; float: right' href='#' class=title:"+title.replaceAll(' ', '_')+">delete</a></div>";
        }
        isLoaded = true;
      }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

async function deleteData(url = '', data = {}) {
  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

document.addEventListener('click', function (event) {
  var titlevar = event.target.className;
  if(typeof(titlevar) == "string" &&  titlevar.substring(0, 6) == 'title:'){
    titlevar = titlevar.replaceAll('_', ' ').substring(6)
    console.log(titlevar)
    deleteData('http://localhost:9000/v1/tasks', {title: titlevar});
    isLoaded = false;
    getTasks();
  }
});

function getTasks(){
  setTimeout(getData('http://localhost:9000/v1/tasks'), 3000);
}

function App() {
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <p>Josh Li</p>
      <div onLoad={getTasks()}>
        <div className="column" style={{backgroundColor: "#f7ccd0"}}>
          <p className="columnTitle">To-Do</p>
          <div><IconButton aria-label="add" className="addbutton" onClick={()=>putTask("TO DO")}>
            <AddIcon />
          </IconButton></div>
          <div id="TODO"></div>
          </div>
        
        <div className="column"  style={{backgroundColor: "#fbeecc"}}>
        <p className="columnTitle">In Progress</p>
          <IconButton aria-label="add" className="addbutton" onClick={()=>putTask("IN PROGRESS")}>
            <AddIcon />
          </IconButton>
          <div id="INPROGRESS"></div>
          </div>

        <div className="column" style={{backgroundColor: "#cce7e1"}}>
        <p className="columnTitle">Complete</p>
          <IconButton aria-label="add" className="addbutton" onClick={()=>putTask("COMPLETE")}>
            <AddIcon />
          </IconButton>
          <div id="COMPLETE"></div>
          </div>

          <div className="column" style={{backgroundColor: "#EAECEC"}}>
        <p className="columnTitle">In Review</p>
          <IconButton aria-label="add" className="addbutton" onClick={()=>putTask("IN REVIEW")}>
            <AddIcon />
          </IconButton>
          <div id="INREVIEW"></div>
          </div>
        <div id="overlayback" style={{display: "none"}}>
        </div>
      </div>

      <div id="overlay" style={{display: "none"}}>
          <p style={{float: "left", clear: "left", fontWeight: "bold"}}>New Task:</p>
          <IconButton aria-label="add" className="addbutton" onClick={()=>closeTask()} style={{float: "right"}}>
          <ClearIcon />
        </IconButton>
          <TextField id="title" label="Title" style={{marginLeft: "25%", marginTop: "3%", float: "left", clear: "left"}} />
          <TextField id="assignee" label="Assignee" style={{marginLeft: "25%", marginTop: "3%", float: "left", clear: "left"}} />
          <TextField id="description" label="Description" multiline rows={3} style={{marginLeft: "25%", marginTop: "3%", float: "left", clear: "left"}}/>
          <Button variant="contained" style={{marginLeft: "25%", marginTop: "7%", float: "left", clear: "left"}} onClick={()=>postTask()}>Submit</Button>
      </div>
    </div>
  );
}

export default App;
