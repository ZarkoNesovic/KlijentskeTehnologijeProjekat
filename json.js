/**************
 PARSIRANJE JSON DOKUMENTA
 */



function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
   
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send();
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
    let st2=data[9];
    let st4=data[10];

    let fname1=(document.getElementById("stud1").innerHTML=st1.ime+ " " +st1.prezime);
    let fname3=(document.getElementById("stud3").innerHTML=st3.ime + " " + st3.prezime);
    let fname5=(document.getElementById("stud5").innerHTML=st5.ime + " " + st5.prezime);
    let fname6=(document.getElementById("stud6").innerHTML=st6.ime + " " + st6.prezime);
    let fname11=(document.getElementById("stud11").innerHTML=st11.ime + " " + st11.prezime);
    let fname10=(document.getElementById("stud10").innerHTML=st10.ime + " " + st10.prezime);
    let fname8=(document.getElementById("stud8").innerHTML=st8.ime + " " + st8.prezime);
    let fname9=(document.getElementById("stud9").innerHTML=st9.ime + " " + st9.prezime);
    let fname7=(document.getElementById("stud7").innerHTML=st7.ime + " " + st7.prezime);
    let fname4=(document.getElementById("stud4").innerHTML=st4.ime + " " + st4.prezime);
    let fname2=(document.getElementById("stud2").innerHTML=st2.ime + " " + st2.prezime);

    let brInd1=(document.getElementById("brInd1").innerHTML = "Broj indeksa: " + st1.br_indeksa);
    let brInd3=(document.getElementById("brInd3").innerHTML = "Broj indeksa: " + st3.br_indeksa);
    let brInd6=(document.getElementById("brInd6").innerHTML = "Broj indeksa: " + st6.br_indeksa);
    let brInd5=(document.getElementById("brInd5").innerHTML = "Broj indeksa: " + st5.br_indeksa);
    let brInd7=(document.getElementById("brInd7").innerHTML = "Broj indeksa: " + st7.br_indeksa);
    let brInd8=(document.getElementById("brInd8").innerHTML = "Broj indeksa: " + st8.br_indeksa);
    let brInd11=(document.getElementById("brInd11").innerHTML = "Broj indeksa: " + st11.br_indeksa);
    let brInd10=(document.getElementById("brInd10").innerHTML = "Broj indeksa: " + st10.br_indeksa);
    let brInd9=(document.getElementById("brInd9").innerHTML = "Broj indeksa: " + st9.br_indeksa);
    let brInd2=(document.getElementById("brInd2").innerHTML = "Broj indeksa: " + st2.br_indeksa);
    let brInd4=(document.getElementById("brInd4").innerHTML = "Broj indeksa: " + st4.br_indeksa);

let b1=(document.getElementById("bio1").innerHTML = "Biografija: " + st1.biografija);
let b3=(document.getElementById("bio3").innerHTML = "Biografija: " + st3.biografija);
let b6=(document.getElementById("bio6").innerHTML = "Biografija: " + st6.biografija);
let b5=(document.getElementById("bio5").innerHTML = "Biografija: " + st5.biografija);
let b7=(document.getElementById("bio7").innerHTML = "Biografija: " + st7.biografija);
let b8=(document.getElementById("bio8").innerHTML = "Biografija: " + st8.biografija);
let b11=(document.getElementById("bio11").innerHTML = "Biografija: " + st11.biografija);
let b10=(document.getElementById("bio10").innerHTML = "Biografija: " + st10.biografija);
let b9=(document.getElementById("bio9").innerHTML = "Biografija: " + st9.biografija);
let b2=(document.getElementById("bio2").innerHTML = "Biografija: " + st2.biografija);
let b4=(document.getElementById("bio4").innerHTML = "Biografija: " + st4.biografija);

let im1=(document.getElementById("img1").src=st1.slika);
let im3=(document.getElementById("img3").src=st3.slika);
let im5=(document.getElementById("img5").src=st5.slika);
let im6=(document.getElementById("img6").src=st6.slika);
let im8=(document.getElementById("img8").src=st8.slika);
let im11=(document.getElementById("img11").src=st11.slika);
let im7=(document.getElementById("img7").src=st7.slika);
let im10=(document.getElementById("img10").src=st10.slika);
let im9=(document.getElementById("img9").src=st9.slika);
let im2=(document.getElementById("img2").src=st2.slika);
let im4=(document.getElementById("img4").src=st4.slika);



});

window.onscroll=function() {myFunction()};

var nav=document.getElementById("myNavbar");

function myFunction(){
  if(window.scrollY > 50){
    nav.classList.add("sticky");
  }else{
    nav.classList.remove("sticky");
  }
}
$('.slide').hiSlide();
/***********************************
 PARSIRANJE XML DOKUMENTA
 */
function displayBlog(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this, i);
      }
    };
    xmlhttp.open("GET", "./blog.xml", true);
    xmlhttp.send();
  }
  
  function myFunction(xml, i) {
    var xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("blog");
    document.getElementById("blog").innerHTML =
      `<div class='blog-naslov'>${
        x[i].getElementsByTagName("naslov")[0].childNodes[0].nodeValue
      }</div>` +
      `<div class='blog-tema'>${
        x[i].getElementsByTagName("tema")[0].childNodes[0].nodeValue
      }</div>` +
      `<div class='blog-tekst'>${
        x[i].getElementsByTagName("tekst")[0].childNodes[0].nodeValue
      }</div>`;
  }