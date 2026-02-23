const express = require("express");
const app = express();

//middleware
app.use(express.json());

//create a route and and send a response to the client
app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  res.send("Hello -- post request");
});

//we can send html,test,css and js files via get method
app.get("/kavindu", (req, res) => {
  res.send("<h1 style='color: blue;'>Hello Kavindu</h1>");
});

//create a post route and send a response to the client
app.post("/about", (req, res) => {
  res.send("This is the post request about page");
});

//array eka get eka athule create karannath puluwan

// app.get("/student",(req,res)=>{
//     const student = [
//         {
//             name:"Kavindu",
//             age:25
//         },

//         {
//             name:"Dilshan",
//             age:15
//         }
//     ]
//     res.json(student);
// })

const student = [
  {
    id: 1,
    name: "Kavindu",
    age: 25,
  },

  { id: 2, name: "Dilshan", age: 15 },
];

app.get("/student", (req, res) => {
  res.json(student);
});

//check the post request and add a new student to the array
app.post("/student", (req, res) => {
  const { name, age } = req.body;
  const id=student.length >0 ? student[student.length - 1].id + 1 : 1;
  student.push({ id, name, age });
  res.json("Student added successfully");
});

//delete a student from the array
app.delete("/student/:id", (req, res) => {
  const id = req.params.id;
  student.splice(id, 1);
  res.json("Student deleted successfully");
});

//update a student in the array
app.put("/student/:id", (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;
  student[id] = { name, age };
  res.json("Student updated successfully");
});

//print the message in the console
app.listen(3000, () => {
  console.log("Server us running on port 3000");
});
