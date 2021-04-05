import axios from 'axios'

navigator.geolocation.getCurrentPosition(positionSuccess, positionError)

function positionSuccess() {
  getWave()
}

function positionError() {
  alert(
    "Something went wrong."
  )
}

function getWave() {
  axios
    .get("http://localhost:3001/wave")
    .then(res => {
      renderWave(res.data)
    }).catch(e => {
      console.log(e)
      alert('Error getting wave.')
    })
}

function renderWave({ min, max }) {
  document.body.classList.remove("blurred")
  renderCurrentWave(min, max)
}

function renderCurrentWave(min, max) {
  document.querySelector('[data-wave-min').textContent = min
  document.querySelector('[data-wave-max').textContent = max
}
