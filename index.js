
// let chalk = require("chalk");
// console.log(chalk.blue("Hi my name is Nia"));
var readLineSync=require('readline-sync')
var userName=readLineSync.question("Please Enter your Name to play the MI paltan game - ")
console.log("Hi "+userName)
var choice=readLineSync.question("Press 1 to start the game or press 2 to exit.")

var score=0;
var topScorerName="";
var topScorerScore=0;
var highScorers=[{
    name:"Aman",
    scores:4
  },
  {
    name:"Ayush",
    scores:4
  },{
    name:"Anoop",
    scores:3
  }]
  var questions=[{
    question:"Who is the captain of MI?",
    answer:"Rohit Sharma"
  },
  {
    question:"How many times the MI has been the IPL champs?",
    answer:"5"
  },
  {
    question:"Who is the owner of MI?",
    answer:"Akash Ambani"
  },
  {
    question:"Which education initiative do MI campaign for?",
    answer:"EFA"
  },
  {
    question:"Leading wicket taker for MI?",
    answer:"Jaspreet Bumrah"
  }]


 if(choice==1)
{
  for (i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer)
  }
  for(i=0;i<highScorers.length;i++){
    if(score>highScorers[i].score){
        topScorerScore=score;
        topScorerName=userName;
    }
  }
  if(topScorerName===userName){
    console.log("Congo!! You are the top scorer. Kindly take a screenshot and send to us");
    console.log("Your score is : "+userName+":"+score)
  }
  else{
    console.log("Your score is : "+userName+":"+score);
  }
}else if(choice==2){
  console.log("Thank you")
}else{
  console.log("Sorry you pressed the wrong button.Kindly restart the game");
}
function play(question,answer){
   var ans=readLineSync.question(question);
   if(ans.toLowerCase()===answer.toLowerCase()){
     score+=1;
   }
}


 


