//const db = require("../models");
const multer = require("multer");
const employee = require("../employee_data");

exports.create = (req, res) => {
  
};

exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };

exports.create = (req, res) => {
    // Validate request
    if (!req.body.emp_name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

//console.warn(req.file.originalname);
    const data = {
      id: employee.length+1,
      emp_name: req.body.emp_name,
      emp_dept: req.body.emp_dept,
      email: req.body.email,
      mobile:req.body.mobile,
      role: req.body.role,
      emp_profile:req.file.originalname
      };
  
    // Save Tutorial in the database
    let result=employee.push(data);
    if(result)
    {
      res.json("Data has been inserted");
    }
    else{
      res.json("Something went wrong");
    }
    
  };
  exports.findAll = (req, res) => {
  res.json(employee);
  };
  
  exports.findOne = (req, res) => {
    const id = req.params.id;
    
  
  var index = employee.findIndex((employee)=>{
         return(employee.emp_dept == id);
    })
    if(index<0)
    {
      var index = employee.findIndex((employee)=>{
        return(employee.role == id);
   })
    }
    //console.log(index);
    if(employee[index])
    {
      res.json(employee[index])
    }
    else{
      res.json({ message: "Error retrieving data with id=" + id });
    }

  };
  exports.update = (req, res) => {
    const id = req.params.id;
    if (!req.body) {
      return res.status(400).json({   
        message: "Data to update can not be empty!"
      });
    }
    const index = employee.findIndex((employee)=>{
      return(employee.id == id);
    })
    if(index>=0)
    {
        const emp = employee[index];
        emp.emp_name = req.body.emp_name,
        emp.emp_dept =req.body.emp_dept,
        emp.email= req.body.email,
        emp.mobile=req.body.mobile,
        emp.role= req.body.role,
        //res.json(emp);
        employee.push(emp);
        res.json("updated successfully");
        
    }
    else{
      return res.status(400).json({   
        message: "Data not found!"
      });
    }
  

    
   // const id = req.params.id;
  

  };
  exports.delete = (req, res) => {
    const id = req.params.id;
    const index = employee.findIndex((employee)=>{
         return(employee.id == id);
    })
    if(index>=0)
    {
        const emp = employee[index];
        employee.splice(index,1);
        //res.json(std);
        res.json("Deleted successfully")
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all data."
          });
        });
        
    }



  };
 /* exports.findAllPublished = (req, res) => {
    Tutorial.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };*/
  