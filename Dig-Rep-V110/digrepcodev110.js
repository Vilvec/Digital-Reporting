/* scripted & developed by Ludwig Wilding*/

/*Colors: #1BCCD9 und #DA291C*, official A1: #6295ac
	#ad2116 darker red #16a2ad complement dark turquoise
	#801810 very dark red #107880 very dark turquoise
*/

/*Changes in Version 1.10
	> No more parenthesis around %-values on Export as Excel interprets those as negative numbers (resulting in "-100%", like. WTF.).
*/

var clCal = 0;
var clAng = 0; var AngRate = 80; var AngSwitch;
var sa1 = 0; var sa2 = 0; var sa3 = 0;
var sale = 0; var ConRate = 5.0; var ConSwitch;
var clNPS = 0; var NPSRate = 100;
var Transfer = 0; var TransRate = 15;

var date = (new Date()).toString().split(' ').splice(1,3).join(' ');
var expexcel = 'string';
var expmail = 'string';
var enfinity = 'string';

function UpdaRate() {
	AngRate = (clAng / clCal) * 100;
	AngRate = Math.round(AngRate).toFixed(0);
	ConRate = (sale / clCal) *100;
	ConRate = (Math.round( ConRate * 10 ) / 10).toFixed(1);
	NPSRate = (clNPS / clCal) * 100;
	NPSRate = Math.round(NPSRate).toFixed(0);
	TransRate = (Transfer / clCal) * 100;
	TransRate = Math.round(TransRate).toFixed(0);
	document.getElementById("clCal").innerHTML = clCal;
	document.getElementById("clAng").innerHTML = clAng;
	document.getElementById("AngRate").innerHTML = AngRate;
	document.getElementById('sale').innerHTML = sale;
	document.getElementById('ConRate').innerHTML = ConRate;
	document.getElementById("clNPS").innerHTML = clNPS;
	document.getElementById("NPSRate").innerHTML = NPSRate;
	document.getElementById("sa1").innerHTML = sa1;
	document.getElementById("sa2").innerHTML = sa2;
	document.getElementById("Transfer").innerHTML = Transfer;
	document.getElementById("TransRate").innerHTML = TransRate;
	document.getElementById("clAngMir").innerHTML = clAng;
	if (clCal < 0) {
		onClickCal();
	}
	else if (clCal == 0) {
		onClickCal();
	}
	if (clAng < 0) {
		clAng = 0; AngRate = 0;
		document.getElementById("clAng").innerHTML = clAng;
		document.getElementById("AngRate").innerHTML = AngRate;
	}
	if (sale < 0) {
		sale = 0.0; ConRate = 0;
		document.getElementById('sale').innerHTML = sale;
		document.getElementById('ConRate').innerHTML = ConRate;
	}
	if (clNPS < 0) {
		clNPS = 0; NPSRate = 0;
		document.getElementById("clNPS").innerHTML = clNPS;
		document.getElementById("NPSRate").innerHTML = NPSRate;
	}
	if (Transfer < 0) {
		Transfer = 0; TransRate = 0;
		document.getElementById("Transfer").innerHTML = Transfer;
		document.getElementById("TransRate").innerHTML = TransRate;
	}
	if (sa1 < 0) {
		sa1 = 0;
		document.getElementById("sa1").innerHTML = sa1;
	}
	if (sa2 < 0) {
		sa2 = 0;
		document.getElementById("sa2").innerHTML = sa2;
	}
	ExpMail();
	ChkClrAng();/*checks Angebotsrate & rewards target value*/
	ChkClrCon();/*checks Conversion Rate & rewards target value*/
};

/*Color Check for Conversion Rate: ChkClrCon
Aendert Farbe bei Erreichung Zielwert 6%
Relevant in Sales, Calls & Fokus Sales*/
function ChkClrCon() {
	if (ConRate >= 6) {
		document.getElementById('ConSwitch').style.backgroundColor = '#1ccdda';
	}
	else if (ConRate < 6) {
		document.getElementById('ConSwitch').style.backgroundColor = '#FFF';
	}
};

/*wenn Angebotsrate ueber 80%, dann blau
AngRate Colorcheck relevant in Calls & Angebote & Fokusangebot*/
function ChkClrAng() {
	if (AngRate >= 80) {
		document.getElementById('AngSwitch').style.backgroundColor = '#1ccdda';
		}
		else if (AngRate < 80) {
			document.getElementById('AngSwitch').style.backgroundColor = '#FFF';
		}
};

/*Die Idee ist, dass ein Pop-up, bzw. eine Notification erscheint, wenn ein Zielwert erreicht wird.*/
function Goalcheck() {
	if (sale == 7) {
		/*alert('Very well done!');*/
		/*window.open("https://www.youtube.com/watch?v=jCrIt1koGao", "_blank", "width=1000, height=600, resizable");*/
		/*öffnet ein Fenster mit dem Jubel für den 5ten Verkauf (und nur dann, wird auch nur beim Aufwärtszählen im Verkauf gecheckt)*/
		/*document.getElementById('nothide').style.display = 'grid';*/
		/*bringt ein Element obendrauf, das eine Zeile ist (baut auf das alte "Contact auf) Find ich nicht so gut, weil
		entweder müsste ich Fenster anpassen (damit User Einstellungen upset), oder Verschieben von Buttons und damit
		intrusive*/
	}
};

function onClickTra() {
	Transfer += 1;
	UpdaRate();
/*Anregung kam von Silvia Moser. Hab's anfangs fuer recht unnoetig gehalten, ist ein okay feature.
Es kamen dann Anregungen von mehreren Seiten, das doch bitte dazuzunehmen, daher ist es mal da. Nicht super happy, aber Rueckmeldung war bisher positiv*/
};

function onClickTraNeg() {
	Transfer -= 1;
	UpdaRate();
};

function onClickCal() {
	clCal += 1;
	UpdaRate();
};

function onClickCalNeg() {
	clCal -= 1;
	UpdaRate();
};

//Angebot, das auch gleichzeitig Satzsumme ist
function onClickAng() {
  clAng += 1;
  ChkClrAng();
  UpdaRate();
};

function onClickAngNeg() {
  clAng -= 1;
  UpdaRate();
};

//Satz 1 aktuell für Angebot für Fire Up!
function onClickSa1() {
  sa1 += 1; clAng += 1;
  UpdaRate();
};

function onClickSa1Neg() {
	sa1 -= 1; clAng -= 1;
	UpdaRate();
};

//Satz 2: aktuell für Fire Up! Sales
function onClickSa2() {
	sa2 += 1; sale += 1;
	UpdaRate();
	Goalcheck()
};

function onClickSa2Neg() {
	sa2 -= 1; sale -= 1;
	UpdaRate();
};

function onSale() {
	sale += 1;
	UpdaRate();
	Goalcheck();
};

function onSaleNeg() {
	sale -= 1;
	UpdaRate();
};


function onClickNPS() {
	clNPS += 1;
	UpdaRate();
};

function onClickNPSNeg() {
	clNPS -= 1;
	UpdaRate();
};

function onExport() {
	document.getElementById('rephide').style.display = 'grid';
	
	expexcel = `<table class="sml" style="width:100%;"><tr><th>${date}</th><th>Anrufe:</th><th>${clCal}</th><th>Angebote:</th><th>${clAng}</th><th>${AngRate}%</th><th>Verkäufe:</th><th>${sale}</th><th>${ConRate}%</th><th>NPS:</th><th>${clNPS}</th><th>${NPSRate}%</th><th>Transfers:</th><th>${Transfer}</th><th>${TransRate}%</th></tr></table>`;
	document.getElementById("expexcel").innerHTML = expexcel;
  
	console.log(date, '; Anrufe:', clCal, '; Angebote:', clAng, '(', AngRate, '%)', '; Verkäufe:', sale, '(', ConRate, '%)', '; NPS:', clNPS, '(', NPSRate, '%); Transfers: ', Transfer, ' (', TransRate, '%)');
};

/*Idea: What if we do a function, that executes ExpMail? Probably can do a button then.*/
function ExpMail() {
	expmail = `<a href='mailto:&subject=Daily%20Reporting&body=Meine%20heutigen%20Zahlen:%0AConversion%20Rate:%20${ConRate}%25%0AAngebotsquote:%20${AngRate}%25%0ATNPS-Hinweise:%20${clNPS}%0ATransfers:%20${Transfer}%0AAnrufe%20gesamt:%20${clCal}%20Calls%0A%0ALiebe%20Grüße'><label class="unsel">Mail</label></a>`;
	document.getElementById("expmail").innerHTML = expmail;
	/*Leerzeichen=%20, Zeilenumbruch %0A und %0D, Prozentzeichen ist %25, Details siehe https://www.eso.org/~ndelmott/url_encode.html*/
	/*Idee: Mail erstellen, die schon Daten hat auf Anfrage von Marlies Pollak*/
  };

function Enfinity() {
	window.open("https://backoffice-shop.a1.net/is-bin/INTERSHOP.enfinity/BOF/Mobilkom-Site/de_AT/-/EUR/ViewApplication-DisplayWelcomePage", "_blank", "width=1000, height=600, resizable");
	/*Enfinity hat sich Michi Nyikos gewuenscht - er hat sich spaeter auch sehr darueber gefreut - happiness :D*/
};

function Partnerweb() {
	window.open("https://www.partnerweb.a1.net/pwu/login.sp?", "_blank", "width=1050, height=900, resizable");
	/*Button ins Partnerweb eingangs gewuenscht von Danijel Janosevic. Hab das mal kurz probiert, dann verworfen.*/
	/*Wurde aber im Teammeeting von allen als ein gutes Feature gesehen und mit grosser Mehrheit gewuenscht*/
};