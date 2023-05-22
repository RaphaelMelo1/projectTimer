import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
} from "./elements.js"

export default function ({controls, timer, sound}) {
  buttonPlay.addEventListener("click", function () {
    timer.countdown()
    controls.play()
    sound.pressButon()
  })

  buttonPause.addEventListener("click", function () {
    timer.hold()
    controls.pause()
    sound.pressButon()
  })

  buttonStop.addEventListener("click", function () {
    controls.reset()
    timer.reset()
    sound.pressButon()
  })

  buttonSoundOn.addEventListener("click", function () {
    buttonSoundOff.classList.remove("hide")
    buttonSoundOn.classList.add("hide")
    sound.bara.pause()
  })

  buttonSoundOff.addEventListener("click", function () {
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
    sound.bara.loop = true
    sound.bara.play()
  })

  buttonSet.addEventListener("click", function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      //caso o newMinutes que está pegando o prompt não captar nada, faça o reset.
      timer.reset()
      return
    }
    timer.refreshTimerDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
}
