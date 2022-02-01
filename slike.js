function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send();
}

//usage:
readTextFile("main.json", function (text) {
  var data = JSON.parse(text);
  console.log(data);

  let st1 = data[0];
  let st3 = data[1];
  let st6 = data[2];
  let st5 = data[3];
  let st11 = data[4];
  let st10 = data[5];
  let st8 = data[6];
  let st7 = data[7];
  let st9 = data[8];
  let st2 = data[9];
  let st4 = data[10];

  let sl1 = (document.getElementById("sl1").src = st1.slika);
  let sl2 = (document.getElementById("sl2").src = st2.slika);
  let sl3 = (document.getElementById("sl3").src = st3.slika);
  let sl4 = (document.getElementById("sl4").src = st4.slika);
  let sl5 = (document.getElementById("sl5").src = st5.slika);
  let sl6 = (document.getElementById("sl6").src = st6.slika);
  let sl7 = (document.getElementById("sl7").src = st7.slika);
  let sl8 = (document.getElementById("sl8").src = st8.slika);
  let sl9 = (document.getElementById("sl9").src = st9.slika);
  let sl10 = (document.getElementById("sl10").src = st10.slika);

});
