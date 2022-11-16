const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const currYear = new Date().getFullYear()
let employees = [
  {
    id: 1,
    FullName: "John doe",
    department: "IT",
    position: "FrontEnd Enjineer",
    gender: "Male",
    birthDate: "1997-10-04",
    age: currYear - 1997,
  },
  {
    id: 2,
    FullName: "George Micheal",
    department: "Marketing",
    position: "Marketing Manager",
    gender: "Male",
    birthDate: "1999-25-01",
    age: currYear - 1999,
  },
  {
    id: 3,
    FullName: "Alissa Olivia",
    department: "Accounting",
    position: "Accounter",
    gender: "Female",
    birthDate: "1992-15-05",
    age: currYear - 1992,
  },
  {
    id: 4,
    FullName: "Emma Sophia",
    department: "IT",
    position: "Grpahic Designer",
    gender: "Female",
    birthDate: "2000-29-09",
    age: currYear - 2000,
  },
  {
    id: 5,
    FullName: "Jack Anderson",
    department: "Marketing",
    position: "Marketologist",
    gender: "Male",
    birthDate: "2001-03-12",
    age: currYear - 2001,
  },
  {
    id: 6,
    FullName: "John doe",
    department: "IT",
    position: "FrontEnd Enjineer",
    gender: "Male",
    birthDate: "1997-10-04",
    age: currYear - 1997,
  },
  {
    id: 7,
    FullName: "Alissa Olivia",
    department: "Accounting",
    position: "Accounter",
    gender: "Female",
    birthDate: "1992-15-05",
    age: currYear - 1992,
  },
  {
    id: 8,
    FullName: "George Micheal",
    department: "Marketing",
    position: "Marketing Manager",
    gender: "Male",
    birthDate: "1999-25-01",
    age: currYear - 1999,
  },
  {
    id: 9,
    FullName: "Emma Sophia",
    department: "IT",
    position: "Grpahic Designer",
    gender: "Female",
    birthDate: "2000-29-09",
    age: currYear - 2000,
  },
  {
    id: 10,
    FullName: "Jack Anderson",
    department: "Marketing",
    position: "Marketologist",
    gender: "Male",
    birthDate: "2001-03-12",
    age: currYear - 2001,
  },
]

app.get("/get", cors(), async (req, res) => {
  res.send(employees)
})

app.put("/delete", cors(), async (req, res) => {
  const deletedEmployee = req.body
  const deleteEmpIndex = employees.findIndex((emp) => {
    return emp.id === deletedEmployee.id
  })
  employees.splice(deleteEmpIndex, 1)
})

app.put("/put", (req, res) => {
  const editedEmployee = req.body
  const arrayIndex = employees.findIndex((emp) => {
    return emp.id === editedEmployee.id
  })

  employees[arrayIndex] = editedEmployee
})

app.post("/post", (req, res) => {
  const employee = req.body
  employees.push(employee)
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
