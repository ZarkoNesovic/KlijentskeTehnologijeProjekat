function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("main.json", function(text){
    var data = JSON.parse(text);
    console.log(data);


    let st1=data[0];
    let st3=data[1];
    let st6=data[2];
    let st5=data[3];
    let st11=data[4];
    let st10=data[5];
    let st8=data[6];
    let st7=data[7];
    let st9=data[8];

    let fname1=document.getElementById('stud1').innerHTML=st1.ime+ " " +st1.prezime;
    let fname3=document.getElementById('stud3').innerHTML=st3.ime + " " + st3.prezime;
    let fname5=document.getElementById('stud5').innerHTML=st5.ime + " " + st5.prezime;
    let fname6=document.getElementById('stud6').innerHTML=st6.ime + " " + st6.prezime;
    let fname11=document.getElementById('stud11').innerHTML=st11.ime + " " + st11.prezime;
    let fname10=document.getElementById('stud10').innerHTML=st10.ime + " " + st10.prezime;
    let fname8=document.getElementById('stud8').innerHTML=st8.ime + " " + st8.prezime;
    let fname9=document.getElementById('stud9').innerHTML=st9.ime + " " + st9.prezime;


    let brInd1=document.getElementById('brInd1').innerHTML = "Broj indeksa: " + st1.br_indeksa
    let brInd3=document.getElementById('brInd3').innerHTML = "Broj indeksa: " + st3.br_indeksa
    let brInd6=document.getElementById('brInd6').innerHTML = "Broj indeksa: " + st6.br_indeksa
    let brInd5=document.getElementById('brInd5').innerHTML = "Broj indeksa: " + st5.br_indeksa
    let brInd7=document.getElementById('brInd7').innerHTML = "Broj indeksa: " + st7.br_indeksa
    let brInd8=document.getElementById('brInd8').innerHTML = "Broj indeksa: " + st8.br_indeksa
    let brInd11=document.getElementById('brInd11').innerHTML = "Broj indeksa: " + st11.br_indeksa
    let brInd10=document.getElementById('brInd10').innerHTML = "Broj indeksa: " + st10.br_indeksa
    let brInd9=document.getElementById('brInd9').innerHTML = "Broj indeksa: " + st9.br_indeksa


let b1=document.getElementById('bio1').innerHTML = "Biografija: " + st1.biografija
let b3=document.getElementById('bio3').innerHTML = "Biografija: " + st3.biografija
let b6=document.getElementById('bio6').innerHTML = "Biografija: " + st6.biografija
let b5=document.getElementById('bio5').innerHTML = "Biografija: " + st5.biografija
let b7=document.getElementById('bio7').innerHTML = "Biografija: " + st7.biografija
let b8=document.getElementById('bio8').innerHTML = "Biografija: " + st8.biografija
let b11=document.getElementById('bio11').innerHTML = "Biografija: " + st11.biografija
let b10=document.getElementById('bio10').innerHTML = "Biografija: " + st10.biografija
let b9=document.getElementById('bio9').innerHTML = "Biografija: " + st9.biografija



let im1=document.getElementById('img1').src=st1.slika;
let im3=document.getElementById('img3').src=st3.slika;
let im5=document.getElementById('img5').src=st5.slika;
let im6=document.getElementById('img6').src=st6.slika;
let im8=document.getElementById('img8').src=st8.slika;
let im11=document.getElementById('img11').src=st11.slika;
let im7=document.getElementById('img7').src=st7.slika
let im10=document.getElementById('img10').src=st10.slika;
let im9=document.getElementById('img9').src=st9.slika;


let sl1=document.getElementById('sl1').src=st1.slika;
let sl3=document.getElementById('sl3').src=st3.slika;
let sl5=document.getElementById('sl5').src=st5.slika;
let sl6=document.getElementById('sl6').src=st6.slika;
let sl8=document.getElementById('sl8').src=st8.slika;
let sl11=document.getElementById('sl11').src=st11.slika;
let sl7=document.getElementById('sl7').src=st7.slika
let sl10=document.getElementById('sl10').src=st10.slika;
let sl9=document.getElementById('sl9').src=st9.slika;

});

