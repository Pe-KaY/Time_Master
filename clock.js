const clock = () => {
  // get element
  const displayTime = document.getElementById("time")
  const amPm = document.getElementById("ampm")
  const switchBtn = document.getElementById("switchBtn")
  const timeFormatName = document.querySelector("p")
  const color = document.getElementById("ink")

  // will be used to toggle between 12 and 24 hour format
  let istwelveHour = true

  //   time formatter function
  const formatTime = (time) => time.toString().padStart(2, "0")

  setInterval(() => {
    //   initialize date objects
    let date = new Date()

    let hours = date.getHours()

    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    // ampm
    const amOrpm = hours >= 12 ? "pm" : "am"

    //   24 hour format function
    const twentyFourHourFormat = () => {
      amPm.style.display = "none"
      displayTime.textContent = `${formatTime(hours)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`
    }

    // twelve hour time format function
    const twelveHourFormat = () => {
      // format hour for 12 hours
      const hour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
      // show am or pm
      amPm.style.display = "inline"
      amPm.textContent = amOrpm
      // display time
      displayTime.textContent = `${formatTime(hour)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`
    }

    // if istwelveHour is false then display 24hour clock format
    if (!istwelveHour) {
      timeFormatName.textContent = "24Hours Format"
      twentyFourHourFormat()
    } else {
      timeFormatName.textContent = "12Hours Format"
      twelveHourFormat()
    }
  }, 1000)

  // add event to switch format btn
  switchBtn.addEventListener("click", () => {
    istwelveHour = !istwelveHour
  })

  // color
  color.addEventListener("change", () => {
    displayTime.style.color = `${color.value}`
    amPm.style.color = `${color.value}`
  })
}

export default clock
