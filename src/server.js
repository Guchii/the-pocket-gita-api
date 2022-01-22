import express from 'express'
import chaptersData from '../gita/data/chapters.json'
import versesData from '../gita/data/verse.json'
import { filterChapters, filterVerses } from './utils'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send(`<h1>The Bhagwad Gita API</h1><br /><ul>
        <li><a href="/chapters">Chapters</a></li>
        <li><a href="/verses">Verses</a></li>
    </ul>`)
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

app.listen(3000, () => console.log('server is up and running'))

export default app
