
//match 1

const startTime1 = new Date(2021, 5, 14, 14).getTime();

let ticker1 = setInterval(countdown1, 1000);

function countdown1() {
   
    let now = new Date().getTime();
    let t = startTime1 - now;

    if(t > 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if(days < 10) {days = `0${days}`};
       
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(hours < 10) {hours = `0${hours}`};

        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if(mins < 10) {mins = `0${mins}`};

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if(secs < 10) {secs = `0${secs}`};

        let match1Countdown = `${days} : ${hours} : ${mins} : ${secs}`;

        document.querySelector('#countdown-1').innerText = match1Countdown;

    }
}


//match 2

const startTime2 = new Date(2021, 5, 18, 20).getTime();

let ticker2 = setInterval(countdown2, 1000);

function countdown2() {
   
    let now = new Date().getTime();
    let t = startTime2 - now;

    if(t > 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if(days < 10) {days = `0${days}`};
       
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(hours < 10) {hours = `0${hours}`};

        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if(mins < 10) {mins = `0${mins}`};

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if(secs < 10) {secs = `0${secs}`};

        let match2Countdown = `${days} : ${hours} : ${mins} : ${secs}`;

        document.querySelector('#countdown-2').innerText = match2Countdown;

    }

}


//match 3

const startTime3 = new Date(2021, 5, 22, 20).getTime();

let ticker3 = setInterval(countdown3, 1000);

function countdown3() {
   
    let now = new Date().getTime();
    let t = startTime3 - now;

    if(t > 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if(days < 10) {days = `0${days}`};
       
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(hours < 10) {hours = `0${hours}`};

        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if(mins < 10) {mins = `0${mins}`};

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if(secs < 10) {secs = `0${secs}`};

        let match3Countdown = `${days} : ${hours} : ${mins} : ${secs}`;

        document.querySelector('#countdown-3').innerText = match3Countdown;

    }
}