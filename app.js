ques2 = "<h3>At What point of projectile both Velocity of Y-axis and Acceleration are perpendiculalr to each other or it never happen?<h3>"
ques3 = "<h3>what is the velocity of projectile when its height is 1/2 of its max height</h3>"
ques4 = "<h3>During a projectile motion what is the value of y component of velocity at max height?</h3>"
optb = '<div class="opt11"> <input type="radio" name="opt1" id="opt21"> at maximum Height</div> <br><div class="opt12"> <input type="radio" name="opt22" id="opt1">When projectile is launching </div><br><div class="opt12"> <input type="radio" name="opt1" id="opt23"> When projectile strikes the ground</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt24"> nowhere</input></div><br>'
optc = '<div class="opt11"> <input type="radio" name="opt1" id="opt31"> 1/2 of Vo</div> <br><div class="opt12"> <input type="radio" name="opt1" id="opt32"> 3/6 of Vo</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt33">  3/4 of Vo</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt34"> 1/6 of Vo</input></div><br>'
optd = '<div class="opt11"> <input type="radio" name="opt1" id="opt41"> 1/4 of initial</div> <br><div class="opt12"> <input type="radio" name="opt1" id="opt42"> zero</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt43"> 3/4 Vo</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt44"> Vo</input></div><br>'

function next() {
    var question2 = document.getElementById('questionID')
    question2.innerHTML = ques2;
    var option2 = document.getElementById('optionID')
    option2.innerHTML = optb;
    var btn = document.getElementById("btnext")
    btn.innerHTML = '<button class="buttonNext" id="btnnext" onclick="check2(),next2()" >Next</button>';
}


function next2() {
    var question3 = document.getElementById('questionID')
    question3.innerHTML = ques3;
    var option3 = document.getElementById('optionID')
    option3.innerHTML = optc;
    var btn = document.getElementById("btnext")
    btn.innerHTML = '<button class="buttonNext" id="btnnext" onclick="check3(),next3()" >Next</button>';
}


function next3() {
    var question4 = document.getElementById('questionID')
    question4.innerHTML = ques4;
    var option4 = document.getElementById('optionID')
    option4.innerHTML = optd;
    var btn = document.getElementById("btnext")
    btn.innerHTML = '<button class="buttonNext" id="btnnext" onclick="check4(),result()" >Next</button>';
}


var score = 0

function check() {
    // var score = 0
    var rightAns1 = document.getElementById('opt1a')
    var rightAns2 = document.getElementById('opt1b')
    var rightAns3 = document.getElementById('opt1c')
    var rightAns4 = document.getElementById('opt1d')
    if (rightAns2.checked == true) {
        score++
        alert("Q1 is correct")
    } else {
        alert("wrong")
    }
    console.log(score)
}


function check2() {
    // var score = 0
    var rightAns21 = document.getElementById('opt21')
    var rightAns22 = document.getElementById('opt22')
    var rightAns23 = document.getElementById('opt23')
    var rightAns24 = document.getElementById('opt24')
    if (rightAns21.checked == true) {
        score++
        alert("Q2 is correct")
    } else {
        alert("wrong")
    }
    console.log(score)
}

function check3() {
    // var score;
    var rightAns31 = document.getElementById('opt31')
    var rightAns32 = document.getElementById('opt32')
    var rightAns33 = document.getElementById('opt33')
    var rightAns34 = document.getElementById('opt34')
    if (rightAns33.checked == true) {
        score++
        alert("Q3 is correct")
    } else {
        alert("wrong")
    }
    console.log(score)
}

function check4() {
    // var score = 0
    var rightAns41 = document.getElementById('opt41')
    var rightAns42 = document.getElementById('opt42')
    var rightAns43 = document.getElementById('opt43')
    var rightAns44 = document.getElementById('opt44')
    if (rightAns42.checked == true) {
        score++
        alert("Correct")
    } else {
        alert("Wrong")
    }
}



function result() {
    var question5 = document.getElementById('questionID')
    question5.innerHTML = "<h1>Congrats your result is " + score + "</h1>";
    var option5 = document.getElementById('optionID')
    option5.innerHTML = "<h2>Well done</h2>";
    var btn = document.getElementById("btnext")
    btn.innerHTML = "";
}