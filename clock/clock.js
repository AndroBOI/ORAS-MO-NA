const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
   const now = new Date()
   const second = now.getSeconds()
   const secondsDegrees = ((second / 60) * 360) + 90;

   const minute = now.getMinutes()
   const minDegrees = ((minute / 60) * 360) + 90


   const hour = now.getHours()
   const hourDegrees = ((hour / 12) * 360) + 90

   minHand.style.transform = `rotate(${minDegrees}deg)`
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`
   hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000)