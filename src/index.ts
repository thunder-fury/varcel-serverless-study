import express from 'express'
const app = express()
const port = process.env.PORT || 3090
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: express.Request, res: express.Response) => {
  try {
    res.send({ name: "hoge" })
  } catch (error) {
    res.sendStatus(500)
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

export default app
