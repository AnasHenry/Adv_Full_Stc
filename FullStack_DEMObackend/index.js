var express = require("express");
var app = express();
const PORT = 3001;
app.get('/',(req,res) => {
    res.send("Welcome to BackEnd Server");
})
app.get('/json',(req,res) => {
    res.json({server:"Welcome to backend",url:"localhost",port:PORT})
})
app.listen(PORT, () => {
  console.log(`BackEnd Server Started\nURL: http://localhost:${PORT}`);
});
