// variables

var butterflyScore = 0;
var eyeScore = 0;
var bookScore = 0;
var treeScore = 0;
var catScore = 0;


var questNum = 0;


var result = document.getElementById("result");
var restart = document.getElementById("restart");

var image = document.getElementById("image");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");
var q6a5 = document.getElementById("q6a5");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");
var q7a5 = document.getElementById("q7a5");



//.
q1a1.addEventListener("click", butterfly);
q1a2.addEventListener("click", eye);
q1a3.addEventListener("click", book);
q1a4.addEventListener("click", tree);
q1a5.addEventListener("click", cat);

q2a1.addEventListener("click", butterfly);
q2a2.addEventListener("click", eye);
q2a3.addEventListener("click", book);
q2a4.addEventListener("click", tree);
q2a5.addEventListener("click", cat);

q3a1.addEventListener("click", butterfly);
q3a2.addEventListener("click", eye);
q3a3.addEventListener("click", book);
q3a4.addEventListener("click", tree);
q3a5.addEventListener("click", cat);

q4a1.addEventListener("click", butterfly);
q4a2.addEventListener("click", eye);
q4a3.addEventListener("click", book);
q4a4.addEventListener("click", tree);
q4a5.addEventListener("click", cat);

q5a1.addEventListener("click", butterfly);
q5a2.addEventListener("click", eye);
q5a3.addEventListener("click", book);
q5a4.addEventListener("click", tree);
q5a5.addEventListener("click", cat);

q6a1.addEventListener("click", butterfly);
q6a2.addEventListener("click", eye);
q6a3.addEventListener("click", book);
q6a4.addEventListener("click", tree);
q6a5.addEventListener("click", cat);

q7a1.addEventListener("click", butterfly);
q7a2.addEventListener("click", eye);
q7a3.addEventListener("click", book);
q7a4.addEventListener("click", tree);
q7a5.addEventListener("click", cat);

restart.addEventListener("click", restartClick);

//functions



function getResult() {
    if ((butterflyScore > eyeScore) && (butterflyScore > bookScore) && (butterflyScore > treeScore) && (butterflyScore > catScore)) {
      result.innerHTML = "i am the butterfly";
      image.innerHTML = "<img src='assets/butterfly.gif'>";
      console.log("you are the butterfly");
    } else if ((eyeScore > butterflyScore) && (eyeScore > bookScore) && (eyeScore > treeScore) && (eyeScore > catScore)) {
      result.innerHTML = "i am the eye";
      image.innerHTML = "<img src='assets/eye.gif'>";
      console.log("you are the eye");
    } else if ((bookScore > eyeScore) && (bookScore > butterflyScore) && (bookScore > treeScore) && (bookScore > catScore)) {
      result.innerHTML = "i am the book";
      image.innerHTML = "<img src='assets/book.gif'>"; 
      console.log("you are the book");
    } else if ((treeScore > eyeScore) && (treeScore > bookScore) && (treeScore > butterflyScore) && (treeScore > catScore)) {
      result.innerHTML = "i am the tree";
      image.innerHTML = "<img src='assets/tree.gif'>";
      console.log("you are the tree");
    } else {
      result.innerHTML = "i am the cat";
      image.innerHTML = "<img src='assets/cat.gif'>";
      console.log("you are the cat");
    }
}



function butterfly(){
  butterflyScore += 1;
  questNum += 1;

  console.log("questnum= " + questNum + " butterflyScore= " + butterflyScore)

  if (questNum == 7) {
    console.log("The quiz is done!")
    getResult();
  }
}

function eye(){
  eyeScore += 1;
  questNum += 1;

  console.log("questnum= " + questNum + " eyeScore= " + eyeScore)

  if (questNum == 7) {
    console.log("The quiz is done!")
    getResult();
  }
}

function book(){
  bookScore += 1;
  questNum += 1;

  console.log("questnum= " + questNum + " bookScore= " + bookScore)

  if (questNum == 7) {
    console.log("The quiz is done!")
    getResult();
  }
}

function tree(){
  treeScore += 1;
  questNum += 1;

  console.log("questnum= " + questNum + " treeScore= " + treeScore)

  if (questNum == 7) {
    console.log("The quiz is done!")
    getResult();
  }
}

function cat(){
  catScore += 1;
  questNum += 1;

  console.log("questnum= " + questNum + " catScore= " + catScore)

  if (questNum == 7) {
    console.log("The quiz is done!")
    getResult();
  }
}

function restartClick() {
  butterflyScore = 0;
  eyeScore = 0;
  bookScore = 0;
  treeScore = 0;
  catScore = 0;
  questNum = 0;
  result.innerHTML = "i am the...";
  image.innerHTML = "";
}


