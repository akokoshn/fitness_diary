class Statistic
{
    constructor(exersise, duration, HR, workload, repeats)
    {
        this.exersise = exersise;
        this.duration = duration;
        this.HR = HR;
        this.workload = workload;
        this.repeats = repeats;
    }
}

class Exersise
{
    constructor(name, duration, HR, workload, repeats)
    {
        this.name = name;
        this.duration = duration;
        this.targetHR = HR;
        this.workload = workload;
        this.repeats = repeats;

        this.time = 0;
        this.avgHR = 0;

        this.tickTimer = 0;
    }

    run(index)
    {
        var img = document.getElementById('station_' + index);
        img.setAttribute('src', 'images/station_active_' + (index + 1) + '.png');

        var t = this.duration;
        var timerDiv = document.getElementById('timer_' + index);
        this.tickTimer = setInterval(function() {
            t -= 1;
            var min = Math.floor(t / 60);
            var sec = Math.floor(t % 60);
            timerDiv.innerHTML = min + ' : ' + sec;
            if (t <= 0) {
                this.stop(index);
            }
        }, 1000);
    }

    stop(index)
    {
        var img = document.getElementById('station_' + index);
        img.setAttribute('src', 'images/station_' + (index + 1) + '.png');

        var timerDiv = document.getElementById('timer_' + index);
        var t = parseInt(timerDiv.innerHTML.split(' : ')[0]) * 60 + parseInt(timerDiv.innerHTML.split(' : ')[1]);
        this.time = this.duration - t;
        clearInterval(this.tickTimer);
        var stat = new Statistic(this.name, this.time, this.avgHR, this.workload, this.repeats);
        return stat;
    }
}

class Workout
{
    constructor()
    {
        this.exersises = [];
        this.statistics = [];
        this.idx = 0;
    }

    add(exersise)
    {
        this.exersises.push(exersise);
    }
}


function onLoad(name) {
    var load_img = document.getElementById('st-preloader');
    load_img.style.display = 'none';

    var title = document.getElementById("title");
    title.innerHTML = localStorage["workout_name"];

    stations = document.getElementById("stations_div");
    var progressBar = document.getElementById("progress-bar");
    var html = '';

    workout = new Workout();
    workout.add(new Exersise("running", 600, 120, 12, 1));
    workout.add(new Exersise("push", 60, 90, 50, 12));

    for (i = 0; i < workout.exersises.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "exersise";

        var timerDiv = document.createElement("div");
        timerDiv.setAttribute('id','timer_' + i);
        timerDiv.style = "margin-left: 100px";
        var min = workout.exersises[i].duration / 60;
        var sec = workout.exersises[i].duration % 60;
        timerDiv.innerHTML = min + ' : ' + sec;

        var start_button = document.createElement("button");
        start_button.innerHTML = "RUN";
        start_button.style = "margin-left: 10px";
        start_button.setAttribute('onclick','workout.exersises[' + i + '].run(' + i + ')');

        var stop_button = document.createElement("button");
        stop_button.innerHTML = "STOP";
        stop_button.style = "margin-left: 10px";
        stop_button.setAttribute('onclick','workout.exersises[' + i + '].stop(' + i + ')');

        newDiv.appendChild(document.createTextNode(workout.exersises[i].name));
        newDiv.appendChild(timerDiv);
        newDiv.appendChild(start_button);
        newDiv.appendChild(stop_button);

        var img = document.createElement("img");
        img.setAttribute('id', 'station_' + i);
        img.setAttribute('src', 'images/station_' + (i + 1) + '.png');
        img.setAttribute('width', 50);
        img.setAttribute('height', 50);

        stations.appendChild(newDiv);

        progressBar.appendChild(img);
    }

    console.log(html);
}