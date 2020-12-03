function click1(){
    var i;
    for( i=1;i<=5;i++){
        var elem = document.getElementById(i).classList.remove("active");
    }
    var elem = document.getElementById("1").classList.add("active");
    var elem1 = document.getElementById("topNav").style.opacity = 1;
    var elem2 = document.getElementById("change").innerHTML = "HELLO GREEKS";
}

function click2(){
    var i;
    for( i=1;i<=5;i++){
        var elem = document.getElementById(i).classList.remove("active");
    }
    var elem = document.getElementById("2").classList.add("active");
    var elem1 = document.getElementById("topNav").style.opacity = 0;
    document.getElementById("change").innerHTML = "Welcome to Reels";
}

function click3(){
    var i;
    for( i=1;i<=5;i++){
        var elem = document.getElementById(i).classList.remove("active");
    }
    var elem = document.getElementById("3").classList.add("active");
    var elem1 = document.getElementById("topNav").style.opacity = 0;
    document.getElementById("change").innerHTML = "Select Picture to upload";
}

function click4(){
    var i;
    for( i=1;i<=5;i++){
        var elem = document.getElementById(i).classList.remove("active");
    }
    var elem = document.getElementById("4").classList.add("active");
    var elem1 = document.getElementById("topNav").style.opacity = 0;
    document.getElementById("change").innerHTML = "Your recent activities"
}

function click5(){
    var i;
    for( i=1;i<=5;i++){
        var elem = document.getElementById(i).classList.remove("active");
    }
    var elem = document.getElementById("5").classList.add("active");
    var elem1 = document.getElementById("topNav").style.opacity = 0;
    document.getElementById("change").innerHTML = "Your Profile details"
}

function clickcam(){
    alert("Instagram-clone is asking permision to use Camera,\nThis is just a dummy alert message");
}

function videoclick(){
    alert("Instagram-Clone is asking permission to use camera for Video Call.\n This is a dummy alert message");
}