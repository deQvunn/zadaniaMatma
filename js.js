function losujdod(){
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a+b>100);
    document.getElementById("l1").innerHTML = a;
    document.getElementById("l2").innerHTML = b;

    
}
function sprawdzdod(){
    var p;
    d = document.getElementById("liczba").value;
    if(d==a+b){
        p = true;
        if(p == true){
            losujdod();
        }
        document.getElementById("odpdod").innerHTML = "Odpowiedź poprawna"
        document.getElementById("inp").innerHTML = "<input type='number' id='liczba'></input>"+"<button onclick='sprawdzdod()'>Sprawdź wynik</button><br>";
    }
    else if(d==" "){
        document.getElementById("poddo").innerHTML = "Wpisz odpowiedź :<";
    }
    else{
        p = false;
        if(p==false){
            document.getElementById("poddo").innerHTML = "Poprawna odpowiedź: "+(a+b);
        }
        document.getElementById("odpdod").innerHTML = "Odpowiedź niepoprawna"
    }
}
function losujod(){
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a-b<0 || a<b);
    document.getElementById("l1").innerHTML = a;
    document.getElementById("l2").innerHTML = b;

    
}
function sprawdzod(){
    var p;
    d = document.getElementById("liczba").value;
    if(d==a-b){
        p = true;
        if(p == true){
            losujod();
        }
        document.getElementById("odp").innerHTML = "Odpowiedź poprawna"
        document.getElementById("inp").innerHTML = "<input type='number' id='liczba'></input>"+"<button onclick='sprawdzod()'>Sprawdź wynik</button><br>";
    }
    else if(d==" "){
        document.getElementById("poddo").innerHTML = "Wpisz odpowiedź :<";
    }
    else{
        p = false;
        if(p==false){
            document.getElementById("poddo").innerHTML = "Poprawna odpowiedź: "+(a-b);
        }
        document.getElementById("odp").innerHTML = "Odpowiedź niepoprawna"
    }
}
function losujmn(){
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a*b>100);
    document.getElementById("l1").innerHTML = a;
    document.getElementById("l2").innerHTML = b;

    
}
function sprawdzmn(){
    var p;
    d = document.getElementById("liczba").value;
    if(d==a*b){
        p = true;
        if(p == true){
            losujmn();
        }
        document.getElementById("odp").innerHTML = "Odpowiedź poprawna"
        document.getElementById("inp").innerHTML = "<input type='number' id='liczba'></input>"+"<button onclick='sprawdzmn()'>Sprawdź wynik</button><br>";
    }
    else if(d==" "){
        document.getElementById("poddo").innerHTML = "Wpisz odpowiedź :<";
    }
    else{
        p = false;
        if(p==false){
            document.getElementById("poddo").innerHTML = "Poprawna odpowiedź: "+(a*b);
        }
        document.getElementById("odp").innerHTML = "Odpowiedź niepoprawna"
    }
}
function losujdz(){
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a/b>100 || a%b!=0 || b==0 );
    document.getElementById("l1").innerHTML = a;
    document.getElementById("l2").innerHTML = b;

    
}
function sprawdzdz(){
    var p;
    d = document.getElementById("liczba").value;
    if(d==a/b){
        p = true;
        if(p == true){
            losujdz();
        }
        document.getElementById("odp").innerHTML = "Odpowiedź poprawna"
        document.getElementById("inp").innerHTML = "<input type='number' id='liczba'></input>"+"<button onclick='sprawdzdz()'>Sprawdź wynik</button><br>";
    }
    else if(d==" "){
        document.getElementById("poddo").innerHTML = "Wpisz odpowiedź :<";
    }
    else{
        p = false;
        if(p==false){
            document.getElementById("poddo").innerHTML = "Poprawna odpowiedź: "+(a/b);
        }
        document.getElementById("odp").innerHTML = "Odpowiedź niepoprawna"
        
    }
}
function losujpo(){
    do{
        a=Math.floor(Math.random()*1000);
    }
    while(a*a>1000 || a<0);
    document.getElementById("l1").innerHTML = a;

    
}
function sprawdzpo(){
    var p;
    d = document.getElementById("liczba").value;
    if(d== a*a ){
        p = true;
        if(p == true){
            losujpo();
        }
        document.getElementById("odp").innerHTML = "Odpowiedź poprawna"
        document.getElementById("inp").innerHTML = "<input type='number' id='liczba'></input>"+"<button onclick='sprawdzpo()'>Sprawdź wynik</button><br>";
       //<button onclick='sprawdzpo()'>Sprawdź wynik</button><br>
    }
    else if(d==" "){
        document.getElementById("poddo").innerHTML = "Wpisz odpowiedź :<";
    }
    else{
        p=false;
        if(p==false){
            document.getElementById("poddo").innerHTML = "Poprawna odpowiedź: "+(a*a);
        }
        document.getElementById("odp").innerHTML = "Odpowiedź niepoprawna"
    }

}
function liczenie() {

    var dzisiaj = new Date();
    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    if (godzina < 10) {
        godzina = "0" + godzina;
    }

    var minuta = dzisiaj.getMinutes();
    if (minuta < 10) {
        minuta = "0" + minuta;
    }
    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) {
        sekunda = "0" + sekunda;
    }
    document.getElementById('timer').innerHTML = "Data: " + dzien + " / " + miesiac + " / " + rok + "<br> Czas: " + godzina + ":" + minuta + ":" + sekunda;


    setTimeout("liczenie()", 1000);
}