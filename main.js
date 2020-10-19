/* INTRODUÇÃO:
var name = " Lucas Ferreira ";
var idade = 16;
var idade2 = 14;
var frase = "Um arco-íris duplo é um fenômeno de ótica "
var céu = "Eu to sempre em paz"
var nu1 = 800;
var nu2 = 4;
alert(name + "tem " + idade + " anos ");
alert(idade + idade2)
console.log(name);
console.log(idade + idade2);
console.log(nu1 * nu2);
console.log(frase.replace("arco-íris", "céu azul"));
console.log(frase.toUpperCase());
console.log(céu);
alert(frase.replace("arco-íris", "céu azul"));
*/
/*
ARRAYS:
var lista = ["maçã", "morango", "laranja"];
var fruta = [{nome:"caqui", cor:"vermelho"}, {nome:"uva", cor:"roxa"}];
lista.push("uva")
lista.push("abacaxi");
lista.pop
console.log(lista);
console.log(lista.reverse());
console.log(lista[3]);
console.log(lista.toString()[3]);
console.log(lista.join(" & "));
console.log(fruta[0].nome);
alert(fruta[0].cor);
console.log(fruta[1].nome);
alert(fruta[1].cor);
*/

/* CONDIÇÃO:
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade")
}
else{alert("Menor de idade")
}
*/

/* ESTRUTURA DE REPETIÇÃO:
var count = 0;
while(count <= 10){
    console.log(count);
    alert(count);
    count = count + 1; //ou count++
}

var count;
for(count=1; count <= 5; count++){
    alert(count);
};
*/
/* DATA
var d = new Date();
alert(d.getMonth() + 1);
alert(d.getHours() + " horas");
alert(d.getMinutes() + " minutos");
*/


/*
var var1 = "3";
var var2 = "5";
console.log(var1 + var2 + 1425 + "-" + 1502);
*/
/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(9, 10));
*/

/* VARIÁVEL LOCAL E GLOBAL :
function validaidade(idade){
    var validar;
    if(idade >= 18){
        validar = true;

    }else{
        validar = false;
        
 
    }
    return validar;
   
}   

var idade = prompt("Qual sua idade?");
console.log(validaidade(idade));
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<em>Obrigado</em>";
    console.log(document.getElementById("agradecimento"));
    //alert("Clicou porque quis")
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=xT-sPvilZ0k/");
    console.log(redirecionar);
}

function trocar(element){
    //document.getElementById("mousemove").innerHTML = "Fala rapaziada,fiz um video tutorial de como fazer o ''chinese insec'' e o ''ghost chinese insec''"
    element.innerHTML =  "Fala rapaziada,fiz um video";
}

function voltar(element){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse em cima"
    element.innerHTML = "Passe o mouse em cima"
}

function load(){
    alert("Bem vindo!")
}

function funcaoChange(element){
    console.log(element.value);
}