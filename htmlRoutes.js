const router = require ("express").Router();
const path = require ("path");


module.exports = function(router) {
    // GET Requests
  
    router.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "public/notes.html"));
    });
  
    rpouter.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "public/index.html"));
    });

};