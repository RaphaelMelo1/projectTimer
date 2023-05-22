export default function(){

  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  )

  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  )
  const bara = new Audio("./js/bara.mp3")


  function pressButon(){
    buttonPressAudio.play()
  }
  function timerEnd(){
    kitchenTimer.play()
  }
  return {
    pressButon,
    timerEnd,
    bara
  }

}