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
