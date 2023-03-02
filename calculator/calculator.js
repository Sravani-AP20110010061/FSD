const server = require('express');
const bodyparser=require('body-parser');

const app=server();
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', function(req,res)
{
    res.sendFile( __dirname + "/calculator.html");
});
app.post('/', function(req,res)
{
    var num3=Number(req.body.num1)+Number(req.body.num2);
    res.send(`${num3}`);
});
app.listen(2500, function()
{
    console.log('Server with port 2500 is running');
});