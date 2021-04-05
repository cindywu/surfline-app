const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
app.use(cors())
// const waveData = require('./example.json')


app.get('/wave', (req, res) => {
  console.log('i am in wave')
  axios.get("https://services.surfline.com/kbyg/spots/forecasts/wave", {
    params: {
      spotId: "5842041f4e65fad6a7708b35",
      days: 1,
      intervalHours: 24,
    }
  }).then(({ data }) => {
    res.json(parseData(data))
  }).catch(e => {
    console.log(e)
    res.sendStatus(500)
  })
})

function parseData({ data }) {
  const { wave } = data
  const { surf } = wave[0]
  const { min, max } = surf)

  return {
    min: Math.round(min),
    max: Math.round(max)
  }
}

app.listen(3001)