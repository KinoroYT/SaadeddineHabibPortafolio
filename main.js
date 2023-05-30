

function validar_formulari_contacte() {
    let lname = document.forms["formulari de contacte"]["lname"].value;
    let num = document.forms["formulari de contacte"]["num"].value;

    if (lname == "" || num == "") {
        alert("heu d'emplenar tots els camps");
        return false;
    } else {
        return true;
    }
}



function generar_numeros_exercicis() {
    document.getElementById("num1").value = Math.floor(Math.random() * 100) + 1;
    document.getElementById("num2").value = Math.floor(Math.random() * 100) + 1;
    document.getElementById("num3").value = Math.floor(Math.random() * 100) + 1;
    document.getElementById("num4").value = Math.floor(Math.random() * 100) + 1;
    document.getElementById("num5").value = Math.floor(Math.random() * 100) + 1;
    document.getElementById("num6").value = Math.floor(Math.random() * 100) + 1;
    document.getElementById("num7").value = Math.floor(Math.random() * 100) + 1;
    document.getElementById("num8").value = Math.floor(Math.random() * 100) + 1;
    document.getElementById("num9").value = Math.floor(Math.random() * 100) + 1;
    document.getElementById("num10").value = Math.floor(Math.random() * 100) + 1;

}


function validar_formulari_exercicis() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultat1 = parseInt(document.getElementById("result1").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var resultat2 = parseInt(document.getElementById("result2").value);
    var num5 = parseInt(document.getElementById("num5").value);
    var num6 = parseInt(document.getElementById("num6").value);
    var resultat3 = parseInt(document.getElementById('result3').value);
    var num7 = parseInt(document.getElementById("num7").value);
    var num8 = parseInt(document.getElementById("num8").value);
    var resultat4 = parseInt(document.getElementById("result4").value);
    var num9 = parseInt(document.getElementById("num9").value);
    var num10 = parseInt(document.getElementById("num10").value);
    var resultat5 = parseInt(document.getElementById("result5").value)

    console.log(resultat1)

    if (num1 + num2 != resultat1) {
        alert("El camp 1 amb el resultat: " + resultat1 + " es incorrecte");
        return false;
    }

    else if (num3 + num4 != resultat2) {
        alert("El camp 2 amb el resultat:  " + resultat2 + " es incorrecte");
        return false;
    }
    else if (num5 + num6 != resultat3) {
        alert("El camp 3 amb el resultat: " + resultat3 + " es incorrecte");
        return false;
    }

    else if (num7 + num8 != resultat4) {
        alert("El camp 4 amb el resultat: " + resultat4 + " es incorrecte");
        return false;
    }
    else if (num9 + num10 != resultat5) {
        alert("El camp 5 amb el resultat:  " + resultat5 + " es incorrecte");
        return false;
    }
    else {
        return false;
    }

}

function check_answer1() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultat1 = parseInt(document.getElementById("result1").value);

    if ((num1 + num2) == resultat1) {
        document.getElementById("ch1").style.visibility = "visible";
        document.getElementById("ch1").innerHTML = "✔";
        document.getElementById("ch1").style.color = "lightgreen";

    }
    else {
        document.getElementById("ch1").style.visibility = "visible";
        document.getElementById("ch1").innerHTML = "✖";
        document.getElementById("ch1").style.color = "Red";
    }
}

function check_answer2() {
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var resultat2 = parseInt(document.getElementById("result2").value);

    if (num3 + num4 == resultat2) {
        document.getElementById("ch2").style.visibility = "visible";
        document.getElementById("ch2").innerHTML = "✔";
        document.getElementById("ch2").style.color = "lightgreen";
    }
    else {
        document.getElementById("ch2").style.visibility = "visible";
        document.getElementById("ch2").innerHTML = "✖";
        document.getElementById("ch2").style.color = "Red";
    }

}

function check_answer3() {
    var num5 = parseInt(document.getElementById("num5").value);
    var num6 = parseInt(document.getElementById("num6").value);
    var resultat3 = parseInt(document.getElementById("result3").value);

    if (num5 + num6 == resultat3) {
        document.getElementById("ch3").style.visibility = "visible";
        document.getElementById("ch3").innerHTML = "✔";
        document.getElementById("ch3").style.color = "lightgreen";
    }
    else {
        document.getElementById("ch3").style.visibility = "visible";
        document.getElementById("ch3").innerHTML = "✖";
        document.getElementById("ch3").style.color = "Red";
    }

}

function check_answer4() {
    var num7 = parseInt(document.getElementById("num7").value);
    var num8 = parseInt(document.getElementById("num8").value);
    var resultat4 = parseInt(document.getElementById("result4").value);

    if (num7 + num8 == resultat4) {
        document.getElementById("ch4").style.visibility = "visible";
        document.getElementById("ch4").innerHTML = "✔";
        document.getElementById("ch4").style.color = "lightgreen";
    }

    else {
        document.getElementById("ch4").style.visibility = "visible";
        document.getElementById("ch4").innerHTML = "✖";
        document.getElementById("ch4").style.color = "Red";
    }


}

function check_answer5() {
    var num9 = parseInt(document.getElementById("num9").value);
    var num10 = parseInt(document.getElementById("num10").value);
    var resultat5 = parseInt(document.getElementById("result5").value);
    if (num9 + num10 == resultat5) {
        document.getElementById("ch5").style.visibility = "visible";
        document.getElementById("ch5").innerHTML = "✔";
        document.getElementById("ch5").style.color = "lightgreen";
    }
    else {
        document.getElementById("ch5").style.visibility = "visible";
        document.getElementById("ch5").innerHTML = "✖";
        document.getElementById("ch5").style.color = "Red";

    }

}