function getContext(id) {
  let myCanvas = document.getElementById(id)
  let context = ''
  if(myCanvas.getContext) {
    context = myCanvas.getContext("2d");
  }
  return context
}