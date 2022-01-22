import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('very nice bhai')
})

app.listen(3000, () => console.log('server is up and running'))

export default app
