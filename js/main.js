
$(document).ready(function() {
  $('.circle').knob({
    'min':0,
    'max':100,
    'width':100,
    'height':100,
    'displayInput':true,
    'fgColor':"#4B088A",
    'release':function(v) {$("p").text(v);},
    'readOnly':true
  });
});
  