var randList=[];
var pattern=[];
var buttonList=["red","yellow","green","blue"];
var flag=true;
var count =1;
$(document).keydown(function (e) { 
    if (flag===true){
        flag=false;
        randList.push(Math.floor(Math.random()*4));
        $("h1").text("Level "+count);
        $("."+buttonList[randList[randList.length-1]]).fadeOut();
        $("."+buttonList[randList[randList.length-1]]).fadeIn();
    }
});
// console.log(randList);
var k=1;
var sound;
$("button").click(function (e) { 
    $("h1").text("Level "+count);
    e.preventDefault();
    userinput=e.target.getAttribute("class"); //input taken
    sound=new Audio("./sounds/"+userinput+".mp3");
    sound.play();
    pattern.push(userinput);//push in pattern
    if (checkpattern(pattern)==false) startover();
    else {
        if (k>=count){
            count++;
            $("h1").text("Level "+count);
            randList.push(Math.floor(Math.random()*4));
            $("."+buttonList[randList[randList.length-1]]).fadeOut();
            $("."+buttonList[randList[randList.length-1]]).fadeIn();
            pattern=[];
            k=1;
        }
        else
            k++;
    }
});
function checkpattern(pattern){
    for (var i=0; i<pattern.length ; i++)
        if (buttonList[randList[i]]!==pattern[i])
            return false;
    return true;
}
function startover(){
    randList=[];
    pattern=[];
    randList.push(Math.floor(Math.random()*4));
    count=1;
    sound=new Audio("./sounds/wrong.mp3");
    sound.play();
    $("body").addClass("wrong");
    setTimeout(function(){
        $("body").removeClass("wrong");
    },
    100);
    setTimeout(function(){
        $("h1").text("Level "+count);
        $("."+buttonList[randList[randList.length-1]]).fadeOut();
        $("."+buttonList[randList[randList.length-1]]).fadeIn();
    },
    700);
}
