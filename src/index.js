const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// initializing the express application
const app = express()

// project wide middleware declarations for Express
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const indexRoute = express.Router()

indexRoute.route('/apis')


// quick fix to something stupid @gkephart did
.get((request, response) => {
	return response.json("Is this thing on?")
})

app.use(indexRoute)

app.listen(4200, () => {console.log("The server has started")})