module.exports = app => {

  let multer = require("multer");
  let upload = multer({dest:"public/"});
    const details = require("../controllers/controller.js");
  
    let router = require("express").Router();

  
    // Create a new Tutorial
    router.post("/",upload.single("profile_pic"), details.create);
  
    // Retrieve all Tutorials
    router.get("/", details.findAll);
  
    // Retrieve all published Tutorials
    //router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", details.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", details.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", details.delete);
  
    // Create a new Tutorial
    router.delete("/", details.deleteAll);
  
    app.use('/api/details', router);
  };