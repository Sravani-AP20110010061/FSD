const server =  require("express");
const bodyParser = require("body-parser");

const app=server()
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res)
{
    res.sendFile( __dirname + "/bmi.html");
});

app.post('/', function(req,res)
{
    var h=Number(req.body.height);
    var w=Number(req.body.weight);
    res.send(`answer is ${w/h*h}`);
});

app.listen(9000, function()
{
    console.log("server is running on port 9000");
});