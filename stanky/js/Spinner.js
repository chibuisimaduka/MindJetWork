$(document).ready(function() {
  var spinner = Spinners.create('#spinner', {
  radius: 20,
  height: 20,
  width: 1.5,
  dashes: 18,
  opacity: 0.62,
  padding: 20,
  rotation: 500,
  color: '#000000'
}).play();


        update();
});