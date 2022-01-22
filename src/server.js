const express = require('express')
const chaptersData = require('../gita/data/chapters.json')
const versesData = require('../gita/data/verse.json')
const { filterChapters, filterVerses } = require('./utils')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send(`
    <body style="margin: 0; background: #fafafa;">
        <div style="font-size: 2rem; display: flex; height: 100vh; width: 100vw; justify-content: center; align-items: center; flex-direction: column;margin: 0; font-weight: bold; font-family: sans-serif; padding: 0; margin: 0;">
            <h1 style="margin: 0; text-decoration: underline">The Bhagwad Gita API</h1>
            <ul style="display:flex; justify-content:center; gap:15px;padding:0; list-style-type:none;">
                <li><a href="/chapters" style="text-decoration:none; color:royalblue;">chapters</a></li>
                <li><a href="/verses" style="text-decoration:none; color:royalblue;">verses</a></li>
            </ul>
        </div>
    </body>
    `)
})

app.get('/chapters', (req, res) => {
    res.status(200).json(chaptersData)
})

app.get('/verses', (req, res) => {
    res.status(200).json(versesData)
})

app.get('/chapters/:chap', (req, res) => {
    const { chap } = req.params
    if (chap) res.status(200).json(filterChapters(chaptersData, chap))
})

app.get('/chapters/:chap/verses', (req, res) => {
    const { chap, verse } = req.params
    if (chap) res.status(200).json(filterVerses(versesData, chap))
})

app.get('/chapters/:chap/verses/:verse', (req, res) => {
    const { chap, verse } = req.params
    if (chap) res.status(200).json(filterVerses(versesData, chap, verse))
})

app.listen(PORT, () => console.log('server is up and running'))

module.exports = app
