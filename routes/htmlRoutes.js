
const path = require ("path");



    // GET Requests
    module.exports = function(app) {
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });
  
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    });
  };
