"use strict";

$(document).ready(function() {
      var tasks = []; // array that will hold the tasks
  
      var displayTaskList = function() {
      tasks.sort();
$("#task_list").val( tasks.join( "\n" ) );
$("#task").focus();
}; // end displayTaskList()
$("#add_task").click(function() {
       var textbox = $("#task");
       var task = textbox.val().split(',');
       var i = 0;
    if (task === "") {
       alert("Please enter a task.");
$("#task").focus();
} else {
       for (i = 0; i < task.length; i++) {
tasks.push( task[i] );
}
  
textbox.val( "" );
displayTaskList();
}
}); // end click()
  
$("#clear_tasks").click(function() {
tasks = [];
$("#task_list").val( "" );
$("#task").focus();
}); // end click()
// set focus on initial load
$("#task").focus();
  
}); // end ready

 