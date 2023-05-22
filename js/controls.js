export default function Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet,
}) {
    function play(){
      buttonPlay.classList.add("hide")
      buttonStop.classList.remove("hide")
      buttonPause.classList.remove("hide")
      buttonSet.classList.add("hide")
    }
    function pause(){
      buttonPlay.classList.remove("hide")
      buttonPause.classList.add("hide")
    }

    function reset (){
      buttonPlay.classList.remove("hide")
      buttonPause.classList.add("hide")
      buttonStop.classList.add("hide")
      buttonSet.classList.remove("hide")
    }

  function getMinutes(){
    let newMinutes = prompt("Quantos minutos?")

    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
    getMinutes,
    play,
    pause,
    reset
  }
}