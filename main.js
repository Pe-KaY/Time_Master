import "./style.css"

// import functions
import clock from "./clock"

// invoke functions
window.onload = () => {
  clock()
  document.querySelector("i").classList.add("anim")
}
