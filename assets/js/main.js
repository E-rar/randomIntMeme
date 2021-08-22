let counterMax=0;
let counter=0;
let round=0;
let guess=0;
let round1=0
function getRandomInt(max) { // eine kleine Funktion die eine Zufallszahl von 0-max auswirft;
    return Math.floor(Math.random() * max);
  }
const randomNum=getRandomInt(100)+1;//Konstante da sie sich nach dem aufruf der seite nicht mehr ändern soll 
//die +1, um zum einen die null auszuschließen und die 100 einzuschließen in das Spektrum ansosntewn wäre es 0-99 und nicht 1-100
function getCounterMax(){ //Hier wird das countermaximum je nachdem was der user gecheckt hat gesetzt
    if(document.getElementById("3").checked){
        document.getElementById("guessround").style.display="none";//sorgt dafür dass das custom textfeld wieder verschwindet wenn custom nicht gecheckt ist
        counterMax=3;
    }
    else if(document.getElementById("4").checked){
        document.getElementById("guessround").style.display="none";
        counterMax=4;
    }
    else if(document.getElementById("5").checked){
        document.getElementById("guessround").style.display="none";
        counterMax=5;
    }
    else if(document.getElementById("custom").checked){
        document.getElementById("guessround").style.display="block";
        counterMax=document.getElementById("guessround").value;
    }
    console.log(counterMax) ;
}
function getMeme(){
    
    if(round1==counterMax||round1>counterMax){
        let x=getRandomInt(4)+1;
        document.getElementById("meme").src="assets/img/loser/"+x+"_loser.jfif"
        if( x>3){
            document.getElementById("meme").src="assets/img/loser/"+x+"_loser.jpeg"
        }
    }
    else if(guess<randomNum){
        let x=getRandomInt(4)+1;
        document.getElementById("meme").src="assets/img/high/"+x+"_high.jpg"
        if( x>2){
            document.getElementById("meme").src="assets/img/high/"+x+"_high.jfif"
        }
    }
    else if(guess>randomNum){
        let x=getRandomInt(8)+1;
        document.getElementById("meme").src="assets/img/low/"+x+"_low.jpg"
        if( x>5){
            document.getElementById("meme").src="assets/img/low/"+x+"_low.jfif"
        }
        
    }
    else if(guess=randomNum){
        let x=getRandomInt(4)+1;
        document.getElementById("meme").src="assets/img/success/"+x+"_success.jfif"
    }
    
}
function check(){
    if(counterMax!=0){ //Bedingung damit der user vorher etwas ausgewählt hat danach verschwindet das Feld und der counter erscheint
    document.getElementById("roundSelect").style.display="none";
    document.getElementById("counter").style.display="block";
    guess=document.getElementById("guessfield").value;
    }

    if(round1==counterMax||round1>counterMax){
        document.getElementById("print").innerHTML+='Oh you just ran out of turns ! <a href="#" onclick="window.location.reload(true);">Play Again!</a><br>'
        getMeme();
        return 0;
    }
    if(guess<randomNum){
        round1++;
        document.getElementById("print").innerHTML+="<p>"+round1+"-You need to guess higher than "+guess+ " try again ...</p><br>"
        getMeme();
        
    }
    else if(guess>randomNum){
        round1++;
        document.getElementById("print").innerHTML+="<p>"+round1+"-You need to guess lower than "+guess+ " try again ...</p><br>"
        getMeme();
        
    }
    else if(guess=randomNum){
        round1++;
        document.getElementById("print").innerHTML+='Yes you won ! <a href="#" onclick="window.location.reload(true);">Play Again!</a>'
        getMeme();
        
    }
    document.getElementById("counter").innerHTML=round1+"/"+counterMax;
   
    console.log(randomNum);
}
//ab hier die Hintergrundanimation
 