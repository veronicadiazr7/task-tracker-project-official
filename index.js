//dependencies required for the app
const express = require("express");

//using body-parser is necessary for accessing req.body from within routes and use that data
const bodyParser = require("body-parser");

const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: true }));

//Used so that express loads the template engine module internally
app.set("view engine", "ejs");

//is used to render css files
app.use(express.static("public"));

//placeholders for added task
var task = [
  "Cry About Node Project",
  "Think About The Node Project",
  "Cry Some More About The Project",
];

var complete = ["Try To Make The Project"];

//post route for adding a new task
app.post("/addtask", function (req, res) {
  var newTask = req.body.newtask;
  //add the new task from the post route
  task.push(newTask);
  //JS validation: if the user does not enter a task it will send the user to the /addtask rout and display an error message "Please enter a task."
  if (!newTask) {
    return res
      .status(404)
      .send(
        '<h2 style="font-family: Sans-serif; color: darkred; text-transform:uppercase; text-align:center; margin-top:50px">Please enter a task.</h2>'
      );
  }
  res.redirect("/");
});
//post route for removing an added task
app.post("/removetask", function (req, res) {
  var completeTask = req.body.check;
  //check for the "typeof" the different completed task, then add into the complete task
  if (typeof completeTask === "string") {
    complete.push(completeTask);
    //check if the completed task already exits in the task when checked, then remove it
    task.splice(task.indexOf(completeTask), 1);
  } else if (typeof completeTask === "object") {
    for (var i = 0; i < completeTask.length; i++) {
      complete.push(completeTask[i]);
      //used for removing a single task from the clients side
      task.splice(task.indexOf(completeTask[i]), 1);
    }
  }
  //after updating the list, it redirects the user to the root route
  res.redirect("/");
});

//used to render the ejs and display any added task or completed task in the specified route ('/')
app.get("/", function (req, res) {
  res.render("index", { task: task, complete: complete });
});

//setting the server to be hosted on port 7000 in our local host
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}`);
});
