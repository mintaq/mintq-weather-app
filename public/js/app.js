console.log('Client side js file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message_1 = document.querySelector('#message-1')
const message_2 = document.querySelector('#message-2')

message_1.textContent = 'Loading...'
message_2.textContent = ''

weatherForm.addEventListener('submit', e => {
  e.preventDefault()

  const location = search.value

  fetch('http://localhost:3000/weather?address=' + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        message_1.textContent = data.error
      } else {
        message_1.textContent = 'Location: ' + data.location
        message_2.textContent =  'Forecast: ' + data.forecastData
      }
    })
  })
})