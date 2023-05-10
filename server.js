let express = require("express")
let api_routes = require('./routes/api')

//Create the web App
let app = express()

//handle tje JSON requests => to JavaScript
app.use(express.json())

app.use("/api",  api_routes)

//Start server 
let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express Server is running on port ', server.address().port );
})

