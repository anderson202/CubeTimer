var ready = true;
document.addEventListener('keyup', function(event){
    if(event.keyCode == 32 && ready){
        if(!watch.isOn) {
            watch.start();
            ready = false;
        }
    }
});

document.addEventListener('keydown', function(event){
    if(event.keyCode == 32){
        if(watch.isOn) {
           watch.stop();
        }
    }
});




var time = document.getElementById('timer');
var toggleBtn = document.getElementById('start');
var resetBtn = document.getElementById('reset');
var watch = new timer(time);

toggleBtn.addEventListener('click', function(){
   
});

resetBtn.addEventListener('click', function(){
   watch.reset(); 
});


