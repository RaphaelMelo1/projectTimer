import Sounds from './sounds.js'
export default function Timer({
  secondsDisplay,
  minutesDisplay,
  resetControls,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function refreshTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds //se seconds for igual undefined, coloque 0, caso tenha valor e não seja um undefined, coloque os seconds mesmo.
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    refreshTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    //Lógica com setTimeout
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
      refreshTimerDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        refreshTimerDisplay()
        Sounds().timerEnd()
        return
      }
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      refreshTimerDisplay(minutes, String(seconds - 1))
      countdown() //Aqui rola algo muito legal, é uma sequência.
      //Sempre que eu clicar no play, ele vai rodar essa função, que consequentemente tá rodando ela mesma dentro dela e vai ficar assim infinitamente até eu fazer algo que pare esse loop
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    refreshTimerDisplay,
    updateMinutes,
    hold,
  }
}
