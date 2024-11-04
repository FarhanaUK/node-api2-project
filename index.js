// require your server and launch it here
const server = require('./api/server')

const PORT = 5000



server.listen(PORT, () => {
    console.log('server starts on', PORT)
})