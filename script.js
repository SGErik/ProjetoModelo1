function startGame(){
    location.assign("./escolhaPersonagem/choiceChar.html");
}
function darChoice(){
    location.assign("../darwin/Fase1/darFase1.html")
}
function gumChoice(){
    location.assign("../gumball/Fase1/gumFase1.html")
}
function anaChoice(){
    location.assign("../anais/Fase1/anaFase1.html")
}
function backChoice(){
    location.assign('../escolhaPersonagem/choiceChar.html')
}
function restartGame(){
    location.assign('../index.html')
}
function fase(correta, wrong, alert1, alert2, next, lose, alert3){
    while(true) {
    var resposta = (prompt('Digite a letra A ou B').toLowerCase());
    if (resposta == correta){
        alert(alert3);
        location.assign(next)
        break;
    }else if (resposta == wrong){
        alert(alert1);
        location.assign(lose)
        break;        
        }else {
            alert(alert2);
            
        }
    }
}
