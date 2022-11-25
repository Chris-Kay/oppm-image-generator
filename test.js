const handler = require('./src/handlers')
const bolton = require('./bolton.json')
const la = require('./mls.json')

const run = async () => {
 await handler.handler(bolton)
 await handler.handler(la)
}

run()
