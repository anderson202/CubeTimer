var time = document.getElementById('timer');
var ao5 = document.getElementById('ao5');
var bestSolveTime = document.getElementById('best');
var timeTable = document.getElementById('timeTable');

var watch = new timer(time); //timer object for the main timer

var avgQueue = []; //queue for all solve times (up to 10 currently)


var ready = true; //signifies whether timer is ready to start
var bestTime = Infinity;

window.onkeydown = function(event){
    if(event.keyCode == 32 && e.target == document.body){
        event.preventDefault();
        return false;
    }
};

//Begin Solve
document.addEventListener('keyup', function(event){
    if(event.keyCode == 32 && ready){
        if(!watch.isOn) {
            watch.start();
            ready = false;
        }
    } else if (event.keyCode == 32) {
        ready = true;
    }
});

var timePosition = 0;
//End of solve
document.addEventListener('keydown', function(event){
    if(event.keyCode == 32){
        if(watch.isOn) {
            watch.stop();
            //avg of 5 needs a bit of fixing
            /*if (avgQueue.length >= 5){
                var avgOf5 = (avgQueue.slice(0,5).reduce(function(previousValue, currentValue) {
                  return previousValue + currentValue;
                }));
                console.log(avgOf5);
                ao5.textContent = "Avg of 5: " + avgOf5;
            }*/
            if (avgQueue.length >= 10){
                avgQueue.shift();
            }
            avgQueue.push(watch.getTime());
            if(watch.getTime() < bestTime){
                bestTime = watch.getTime();
                bestSolveTime.textContent = "Best Time: "+ watch.getTimeString();
            }
            
            var row = timeTable.insertRow(0);
            var cell = row.insertCell(0);
            cell.innerHTML = (timePosition + 1).toString() + ". " + watch.getTimeString();
            timePosition++;
            
        }
    }
});





