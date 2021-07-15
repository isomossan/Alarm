const setTime = document.getElementById('setting');

function timer() {
    var nowTime = new Date(); //  現在日時を得る
    var nowH = "00" + nowTime.getHours(); // 時を抜き出す
    var nowM = "00" + nowTime.getMinutes(); // 分を抜き出す
    var nowS = "00" + nowTime.getSeconds(); //秒を抜き出す

    var Sec = nowTime.getSeconds();

    var nowHour = nowH.slice(-2);
    var nowMin = nowM.slice(-2);
    var nowSec = nowS.slice(-2);

    var msg = nowHour + ":" + nowMin + ":" + nowSec;　//表示する時間(時間+分)
    document.getElementById("time-display").innerHTML = msg; //時間を表示させる

    var time = nowHour + ":" + nowMin + ":" + Sec;　//裏で使う時間(時間+分+秒)



    const setting = setTime.value;

    var settingTime = "⚙️" + setting;
    document.getElementById("setTimeDisplay").innerHTML = settingTime;

    var alarm = new Audio('Alarm.mp3');
    if (setting + ":" + 0 == time) {
        alarm.play();
        setTimeout("confirm('時間です')", 100)

    };
};

setInterval(timer, 1000);

