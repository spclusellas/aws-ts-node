import express from 'express'

const app = express()
app.use(express.json())

const PORT = 8080

app.get('/ping', (_req, res) => {
    console.log('Sending response')
    res.json('Server working!')
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`))