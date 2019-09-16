function insertTeams(){
    document.getElementById('team1').innerHTML = document.getElementById("team_one").value;
    document.getElementById('team2').innerHTML = document.getElementById("team_two").value;
    document.getElementById('team3').innerHTML = document.getElementById("team_three").value;
    document.getElementById('team4').innerHTML = document.getElementById("team_four").value;
    document.getElementById('team5').innerHTML = document.getElementById("team_five").value;
    document.getElementById('team6').innerHTML = document.getElementById("team_six").value;
    document.getElementById('team7').innerHTML = document.getElementById("team_seven").value;
    document.getElementById('team8').innerHTML = document.getElementById("team_eight").value;

    document.getElementById('team1_1').innerHTML = document.getElementById("team_one").value;
    document.getElementById('team2_2').innerHTML = document.getElementById("team_two").value;
    document.getElementById('team3_3').innerHTML = document.getElementById("team_three").value;
    document.getElementById('team4_4').innerHTML = document.getElementById("team_four").value;
    document.getElementById('team5_5').innerHTML = document.getElementById("team_five").value;
    document.getElementById('team6_6').innerHTML = document.getElementById("team_six").value;
    document.getElementById('team7_7').innerHTML = document.getElementById("team_seven").value;
    document.getElementById('team8_8').innerHTML = document.getElementById("team_eight").value;
}

function resultQ1(){
    var homeQ1 = document.getElementById("homeScore1").value;
    var awayQ1 = document.getElementById("awayScore1").value;
    var text1;

    if (homeQ1 > awayQ1){
        text1 = document.getElementById("team1_1").innerHTML;
    } 
    else if (homeQ1 < awayQ1){
        text1 = document.getElementById("team2_2").innerHTML;
    }
    else{
        alert("It's a draw!");
    }

    document.getElementById("insertWinner1b").innerHTML = text1;
    document.getElementById("insertWinner1t").innerHTML = text1;
    document.getElementById("scoreHomeQ1").innerHTML = homeQ1;
    document.getElementById("scoreAwayQ1").innerHTML = awayQ1;
}

function resultQ2(){
    var homeQ2 = document.getElementById("homeScore2").value;
    var awayQ2 = document.getElementById("awayScore2").value;
    var text2;

    if (homeQ2 > awayQ2){
        text2 = document.getElementById("team3_3").innerHTML;
    } 
    else if (homeQ2 < awayQ2){
        text2 = document.getElementById("team4_4").innerHTML;
    }
    else{
        alert("It's a draw!");
    }
    
    document.getElementById("insertWinner2b").innerHTML = text2;
    document.getElementById("insertWinner2t").innerHTML = text2;
    document.getElementById("scoreHomeQ2").innerHTML = homeQ2;
    document.getElementById("scoreAwayQ2").innerHTML = awayQ2;
}

function resultQ3(){
    var homeQ3 = document.getElementById("homeScore3").value;
    var awayQ3 = document.getElementById("awayScore3").value;
    var text3;

    if (homeQ3 > awayQ3){
        text3 = document.getElementById("team5_5").innerHTML;
    } 
    else if (homeQ3 < awayQ3){
        text3 = document.getElementById("team6_6").innerHTML;
    }
    else{
        alert("It's a draw!");
    }
    
    document.getElementById("insertWinner3b").innerHTML = text3;
    document.getElementById("insertWinner3t").innerHTML = text3;
    document.getElementById("scoreHomeQ3").innerHTML = homeQ3;
    document.getElementById("scoreAwayQ3").innerHTML = awayQ3;
}

function resultQ4(){
    var homeQ4 = document.getElementById("homeScore4").value;
    var awayQ4 = document.getElementById("awayScore4").value;
    var text4;

    if (homeQ4 > awayQ4){
        text4 = document.getElementById("team7_7").innerHTML;
    } 
    else if (homeQ4 < awayQ4){
        text4 = document.getElementById("team8_8").innerHTML;
    }
    else{
        alert("It's a draw!");
    }
    
    document.getElementById("insertWinner4b").innerHTML = text4;
    document.getElementById("insertWinner4t").innerHTML = text4;
    document.getElementById("scoreHomeQ4").innerHTML = homeQ4;
    document.getElementById("scoreAwayQ4").innerHTML = awayQ4;
}

function resultS1(){
    var homeS1 = document.getElementById("homeScore5").value;
    var awayS1 = document.getElementById("awayScore5").value;
    var text5;
    var loser;

    if(homeS1 > awayS1){
        text5 = document.getElementById("insertWinner1t").innerHTML;
        loser = document.getElementById("insertWinner2t").innerHTML;
    }
    else if(homeS1 < awayS1){
        text5 = document.getElementById("insertWinner2t").innerHTML;
        loser = document.getElementById("insertWinner1t").innerHTML;
    }
    else{
        alert("It's a draw!");
    }

    document.getElementById("insertWinner5b").innerHTML = text5;
    document.getElementById("insertWinner5t").innerHTML = text5;
    document.getElementById("insertLoserXt").innerHTML = loser;
    document.getElementById("scoreHomeS1").innerHTML = homeS1;
    document.getElementById("scoreAwayS1").innerHTML = awayS1;
}

function resultS2(){
    var homeS2 = document.getElementById("homeScore6").value;
    var awayS2 = document.getElementById("awayScore6").value;
    var text6;
    var loser2;

    if(homeS2 > awayS2){
        text6 = document.getElementById("insertWinner3t").innerHTML;
        loser2 = document.getElementById("insertWinner4t").innerHTML;
    }
    else if(homeS2 < awayS2){
        text6 = document.getElementById("insertWinner4t").innerHTML;
        loser2 = document.getElementById("insertWinner3t").innerHTML;
    }
    else{
        alert("It's a draw!");
    }

    document.getElementById("insertWinner6b").innerHTML = text6;
    document.getElementById("insertWinner6t").innerHTML = text6;
    document.getElementById("insertLoserYt").innerHTML = loser2;
    document.getElementById("scoreHomeS2").innerHTML = homeS2;
    document.getElementById("scoreAwayS2").innerHTML = awayS2;
}

function thirdPlace(){
    var homeThird = document.getElementById("homeScoreZ").value;
    var awayThird = document.getElementById("awayScoreZ").value;
    var textZ;

    if(homeThird > awayThird){
        textZ = document.getElementById("insertLoserXt").innerHTML;
    }
    else if (homeThird < awayThird){
        textZ = document.getElementById("insertLoserYt").innerHTML;
    }
    else{
        alert("It's a draw");
    }

    alert("Well Done " + textZ + "! You've won the third place match!");
}

function final(){
    var homeFinal = document.getElementById("homeScore7").value;
    var awayFinal = document.getElementById("awayScore7").value;
    var text7;

    if(homeFinal > awayFinal){
        text7 = document.getElementById("insertWinner5t").innerHTML;
    }
    else if (homeFinal < awayFinal){
        text7 = document.getElementById("insertWinner6t").innerHTML;
    }
    else{
        alert("It's a draw");
    }

    alert("Congrats " + text7 + "! You are the champion!");
    document.getElementById("scoreHomeFinal").innerHTML = homeFinal;
    document.getElementById("scoreAwayFinal").innerHTML = awayFinal;
}

