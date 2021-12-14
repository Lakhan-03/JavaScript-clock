let a ; 
let time;
let date;
setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    date = a.toDateString();
    document.getElementById('time').innerHTML = time + " :: <br> "+ date;
}, 1000);
