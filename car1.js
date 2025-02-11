var http = require("http")
var url = require('url')
var fs = require('fs')
var server = http.createServer((req,res)=>{
    fs.readFile('./car.json','utf-8',(err,data)=>{
        res.write(data)
        res.end()
    })

})
server.listen(3002,()=>{
    console.log('Server is running')
})