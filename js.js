const stud1= '{"ime":"Lepomir","prezime":"Petkovic","br_indeksa":"ITS 01/20","biografija":"MCP, MCSA, MCSE, CCNA","slika":"img/sysadm.jpg"}';
const stud5='{"ime":"Zarko","prezime": "Nesovic","br_indeksa": "ITS 05/21","biografija": " Junior full stack programmer.Vest sam u koriscenju tehnologija baziranih na JavaScript-u kao sto su NodeJS i React kao i relacionih i neralacionih baza podataka. Takodje dobro poznajem Windows operativni sistem i administraciju istog.  Pored ovih tehnologija bavim se  razvijanjem Sistema na Arduino platformi. U slobodno vreme volim da citam i igram basket.", "slika": "img/Zarko.jpg"}';
const stud11='{"ime": "Andrija","prezime": "Todorovic","br_indeksa": "ITS 11/21","biografija": "Rođen u Nišu 9. maja 1999. godine. 2018. godine sam upisao osnovne studije na Viskokoj tehničkoj školi u Nišu na smeru savremne računarske tehnologije. Trenutno na istoj školi pohađam master strukovne studije. Od početka studija sam član tima koji se bavi istraživenjem bespilotnih letelica. Moja interesovanja su vezana za web razvoj i SEO optimizaciju.","slika": "img/Andrija.jpg"}';
const stud8='{"ime": "Bojana","prezime": "Popovic","br_indeksa": "ITS 08/21","biografija": "Bojana Popovic rodjena u Nisu 30.11.1989. godine,odrasla,zivi i udala se u Naselju 9 Maj kod Nisa,tu i zavrsila osnovnu skolu, zatim srednju Prehrambeno-hemijsku u Nisu, kao i osnovne strukovne studije na Akademiji tehnicko-vaspitackih strukovnih studija.2021 godine na pomenutoj Akademiji upisala master studije na studijskom programu-Informacione tehnologije i sistemi.Nakon zavrsetka studija, radila sam na poslovima komercijale,kao i na poslovima sefa servica. Trenutno imam najlepsi posao a to je cuvanje jedne devojcice koju sam rodila decembra 2020. I sada sam na porodiljskom odsustvu.ja i suprug imamo i kafanu u kojoj i sada radim kada ima bas puno posla.","slika": "img/Bojana.jpg"}';
const stud6='{"ime": "Aleksandar","prezime": "Borisavljević","br_indeksa": "ITS 06/21",    "biografija": "Rođen krajem prošlog milenijuma, davne 1990. godine. Završio osnovnu muzičku skolu, odsek klavira i harmonike, uporedo sa regularnom osnovnom školom. Ušao u svet programiranja sa 9 godina, kroz QBasic, kasnije C, C++, Java i C#. Stekao zvanje strukovnog inženjera elektrotehnike i računarstva 2015. godine. Oduvek se zanimao izučavanjem hardvera i softvera, kako bi 2021. godine upisao master studije na Akademiji tehničko-vaspitačkih strukovnih studija - Odsek Niš. Trenutno u procesu pronalaženja sebe i posla koji bi ispunjavao lično nametnute ambicije.","slika": "img/Aleksandar.JPG"}';
const stud3='{"ime": "Mladen","prezime": "Tujkić","br_indeksa": "ITS 03/21","biografija":"Rodjen u Negotinu 03.07.1992. godine, stekao zvanje strukovni inženjer Elektrotehnike i računarstva. Radim kao procesni inženjer u hemiskoj industriji. Velika strast su mi frontend tehnologije.","slika": "img/Mladen.jpg"}';
const stud7='{    "ime": "Miloš",    "prezime": "Nasković",    "br_indeksa": "ITS 07/21",   "biografija": "Rođen u Gnjilanu 17. februara 1999. godine. Osnovnu i srednju školu sam završio u Nišu a 2018, godine sam upisao Visoku tehničku školu u Nišu na smeru savremene računarske tehnologije. Trenutno na istoj školi pohađam i master strukovne studije. Moja interesovanja su usmerena ka web razvoju i trenutno radim kao praktikant za frontend developera.",    "slika": "img/Milos.jpg"}';
const stud10='{    "ime": "Dušan",    "prezime": "Panić",    "br_indeksa": "ITS 10/21",    "biografija": "QA Engineer sa iskustvom u manualnom testiranju softvera. Takođe poseduje iskustvo u automatizaciji testiranja softvera koristeći Selenium(Java)",    "slika": "img/dusan.jpg"}';
const stud9='{    "ime":"Nikola",    "prezime":"Nesic",    "br_indeksa":"ITS 09/21",    "biografija":"Software engineer", "slika": "img/nikola.jpg"} ';







document.getElementById('stud1').innerHTML = name1.ime+ " "+name1.prezime;
document.getElementById('stud3').innerHTML = name3.ime+ " "+name3.prezime;
document.getElementById('stud6').innerHTML = name6.ime+ " "+name6.prezime;
document.getElementById('stud5').innerHTML = name5.ime+ " "+name5.prezime;
document.getElementById('stud11').innerHTML = name11.ime+ " "+name11.prezime;
document.getElementById('stud8').innerHTML = name8.ime+ " "+name8.prezime;
document.getElementById('stud7').innerHTML = name7.ime+ " "+name7.prezime;
document.getElementById('stud10').innerHTML = name10.ime+ " "+name10.prezime;
document.getElementById('stud9').innerHTML = name10.ime+ " "+name9.prezime;


document.getElementById('brInd1').innerHTML = "Broj indeksa: " + name1.br_indeksa
document.getElementById('brInd3').innerHTML = "Broj indeksa: " + name3.br_indeksa
document.getElementById('brInd6').innerHTML = "Broj indeksa: " + name6.br_indeksa
document.getElementById('brInd5').innerHTML = "Broj indeksa: " + name5.br_indeksa
document.getElementById('brInd7').innerHTML = "Broj indeksa: " + name7.br_indeksa
document.getElementById('brInd8').innerHTML = "Broj indeksa: " + name8.br_indeksa
document.getElementById('brInd11').innerHTML = "Broj indeksa: " + name11.br_indeksa
document.getElementById('brInd10').innerHTML = "Broj indeksa: " + name10.br_indeksa
document.getElementById('brInd9').innerHTML = "Broj indeksa: " + name9.br_indeksa




document.getElementById('bio1').innerHTML = "Biografija: " + name1.biografija
document.getElementById('bio3').innerHTML = "Biografija: " + name3.biografija
document.getElementById('bio6').innerHTML = "Biografija: " + name6.biografija
document.getElementById('bio5').innerHTML = "Biografija: " + name5.biografija
document.getElementById('bio7').innerHTML = "Biografija: " + name7.biografija
document.getElementById('bio8').innerHTML = "Biografija: " + name8.biografija
document.getElementById('bio11').innerHTML = "Biografija: " + name11.biografija
document.getElementById('bio10').innerHTML = "Biografija: " + name10.biografija
document.getElementById('bio9').innerHTML = "Biografija: " + name9.biografija



document.getElementById('img1').src=name1.slika;
document.getElementById('img3').src=name3.slika;
document.getElementById('img5').src=name5.slika;
document.getElementById('img6').src=name6.slika;
document.getElementById('img8').src=name8.slika;
document.getElementById('img11').src=name11.slika;
document.getElementById('img7').src=name7.slika
document.getElementById('img10').src=name10.slika;
document.getElementById('img9').src=name9.slika;


document.getElementById('sl1').src=name1.slika;
document.getElementById('sl3').src=name3.slika;
document.getElementById('sl5').src=name5.slika;
document.getElementById('sl6').src=name6.slika;
document.getElementById('sl8').src=name8.slika;
document.getElementById('sl11').src=name11.slika;
document.getElementById('sl7').src=name7.slika
document.getElementById('sl10').src=name10.slika;
document.getElementById('sl9').src=name9.slika;