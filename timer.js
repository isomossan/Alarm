const H = document.getElementById('h');
const M = document.getElementById('m');


function timer(){
var nowTime = new Date(); //  現在日時を得る
var nowHour = nowTime.getHours(); // 時を抜き出す
var nowMin  = nowTime.getMinutes(); // 分を抜き出す
var nowSec = nowTime.getSeconds(); // 秒を抜き出す
  
var msg = nowHour + ":" + nowMin + "." + nowSec;　//表示する時間(時間+分)
document.getElementById("time-display").innerHTML = msg; //時間を表示させる

var time = nowHour + ":" + nowMin + "," + nowSec;　//裏で使う時間(時間+分+秒)


    const Hours = H.value; //inputから時値を抜き出す
    const Minures = M.value; //inputから分値を抜き出す

if ( Hours + ':' + Minures + ',0' == time) {  
    confirm('時間だよ');
    };


    console.log(Hours + ':' + Minures);
};

setInterval(timer,100)


