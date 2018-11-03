

const http = require('http')
const port = 3000
const location_data = require ('./Locations.json')

const requestHandler = (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Methods', 'GET');
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    response.end(JSON.stringify(location_data));
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})