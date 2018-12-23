const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 3000

var app = express();
app.use(express.static(__dirname + '/public'));
app.use((req, res, next)=>{
    var date = new Date().toString();
    fs.appendFile('./server/server.log', 'Last changes on: '+date+'\n',(err)=>{
        console.log(err);
    });
    next();
});
app.get('/',(req, res)=>{
    res.send({
        name:'tamizh',
        like: [
            'Indian Constitutional law and Human rights'
        ]
    });
});
app.get('/about',(req, res)=>{
    res.send('About u to modify');
});
app.listen(port,()=>{
    console.log('The server start up on port: '+port);
});