

var date = new Date();
var hours = date.getHours();

if(hours >= 6 && hours < 12) {
    alert("Good morning Hüseyn hocam");
}

else if(hours >=12 && hours<15 ){
    alert("Good afternoon Hüseyn hocam");
    document.body.style.backgroundColor="green";
}

else if(hours >=15 && hours <20 ){
    alert("Good evening Hüseyn hocam");
    document.body.style.backgroundColor="yellow";
}

else if(hours >=20 && hours <24 ){
    alert("Good night Hüseyn hocam");
    document.body.style.backgroundColor="red";
}

else if(hours >=0 && hours <6){
    alert("sweet dreams Hüseyn hocam");
    document.body.style.backgroundColor="black";
}

