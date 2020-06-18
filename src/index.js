require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mailgun = require('mailgun-js')
const bodyParser = require('body-parser')

// initializing the express application
const app = express()

// project wide middleware declarations for Express
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const indexRoute = express.Router()

indexRoute.route('/apis')
	.get((request, response) => {
		return response.json("Hello")
})

.post((request, response) => {
	response.append('Access-Control-Allow-Origin', ['*']);
	console.log(request.body)
	return response.json("Is this thing on?")
})

// quick fix to something stupid @gkephart did

app.use(indexRoute)

app.listen(4200, () => {console.log("The server has started")})