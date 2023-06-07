require('dotenv').config()
const { connect } = require('mongoose')
const app = require('./src/app.js')

const {
    env: { PORT, MONGO_URL: url },
    argv: [, , port = PORT || 8080]
} = process

;(async () => {
    await connect(url, { useNewUrlParser: true })
    app.listen(port, () => {
        console.log(`Desafío 6 app listening on port ${port}\nhttp://localhost:${port}`)
    })
})()
