

$( "#save-btn" ).click(function() {
    var myStorage = document.getElementById("textarea").value;
    localStorage.setItem("storage", myStorage);


 });

function Load() {
    var myStorage = localStorage.getItem("storage");
    document.getElementById("textarea").value = myStorage;
}

$( "#save-btn1" ).click(function() {
    var myStorage = document.getElementById("textarea1").value;
    localStorage.setItem("storage1", myStorage);


 });

 function Load1() {
    var myStorage = localStorage.getItem("storage1");
    document.getElementById("textarea1").value = myStorage;
}


  $( "#save-btn2" ).click(function() {
    var myStorage = document.getElementById("textarea2").value;
    localStorage.setItem("storage2", myStorage);


 });

 function Load2() {
    var myStorage = localStorage.getItem("storage2");
    document.getElementById("textarea2").value = myStorage;
}

$( "#save-btn3" ).click(function() {
    var myStorage = document.getElementById("textarea3").value;
    localStorage.setItem("storage3", myStorage);


 });

function Load3() {
    var myStorage = localStorage.getItem("storage3");
    document.getElementById("textarea3").value = myStorage;
}

$( "#save-btn4" ).click(function() {
    var myStorage = document.getElementById("textarea4").value;
    localStorage.setItem("storage4", myStorage);


 });

 function Load4() {
    var myStorage = localStorage.getItem("storage4");
    document.getElementById("textarea4").value = myStorage;
}


$( "#save-btn5" ).click(function() {
    var myStorage = document.getElementById("textarea5").value;
    localStorage.setItem("storage5", myStorage);


 });

 function Load5() {
    var myStorage = localStorage.getItem("storage5");
    document.getElementById("textarea5").value = myStorage;
}

$( "#save-btn6" ).click(function() {
    var myStorage = document.getElementById("textarea6").value;
    localStorage.setItem("storage6", myStorage);


 });

 function Load6() {
    var myStorage = localStorage.getItem("storage6");
    document.getElementById("textarea6").value = myStorage;
}

$( "#save-btn7" ).click(function() {
    var myStorage = document.getElementById("textarea7").value;
    localStorage.setItem("storage7", myStorage);


 });

 function Load7() {
    var myStorage = localStorage.getItem("storage7");
    document.getElementById("textarea7").value = myStorage;
}

$( "#save-btn8" ).click(function() {
    var myStorage = document.getElementById("textarea8").value;
    localStorage.setItem("storage8", myStorage);


 });

 function Load8() {
    var myStorage = localStorage.getItem("storage8");
    document.getElementById("textarea8").value = myStorage;
}



// On input instead of Buttons:
// $('.form-control').on('input propertychange paste', function() {
//     var myStorage = document.getElementById("textarea").value;
//     localStorage.setItem("storage", myStorage);
// });

// function Load() {
//     var myStorage = localStorage.getItem("storage");
//     document.getElementById("textarea").value = myStorage;
// }

currentTime = document.getElementById('currentDay')
var m = moment().format('MMMM Do YYYY, h:mm:ss a')
currentTime.innerHTML = "The Current Date and Time is " + m

function Time() {

    var hour = $(".hour").text();
    var timelist = hour.toString();

    timearray = timelist.match(/.{1,5}/g);
    console.log(timearray);
    m = (moment().format("HH"))



    for (let i = 0; i < timearray.length; i++) {
        classname = ".text" + i;
        new_time = timearray[i].substring(0,2)
        if (new_time >= 1 && new_time <= 5) {
            new_time = parseInt(new_time) + 12
        }
        classname = classname.toString()

        $(classname).removeClass("past present future");
        if (m > new_time) {
            $(classname).addClass("past");
        } else if (m < new_time) {
            $(classname).addClass("future");
        } else {
            $(classname).addClass("present");
        }
    }
}

Time();

Load();
Load1();
Load2();
Load3();
Load4();
Load5();
Load6();
Load7();
Load8();

