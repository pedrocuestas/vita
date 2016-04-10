//------------------------------------------------------------ Variables

var ta=[];
var interes=[];
var principal=[4,1,7,3,8,5,9,1,10,4,11,2,15,5,16,3,16,5,16,6,20,8,22,3,40,1,45,2,45,3,46,1,55,1,62,2,73,4,77,3];
var totalPrincipal=principal.length;
var andalucia=["Almer\u00eda",37.45,-2.122,"C\u00e1diz",36.255,-5.376,"C\u00f3rdoba",37.968,-4.852,"Granada",37.372,-3.028,"Huelva",37.516,-6.604,"Ja\u00e9n",37.777,-3.605,"M\u00e1laga",36.705,-4.627,"Sevilla",37.258,-5.363];

// Nodos para Etapómetro

var nodo=[];
var sentidoah=[];
for(var n=1;89>n;n++){nodo[n]=[];sentidoah[n]=[]};

//----------------------------------------------------------------------
// NODO : 1
nodo[1][2]=1; sentidoah[1][2]=1;
nodo[1][76]=76; sentidoah[1][0]=0;
//----------------------------------;
// NODO : 2
nodo[2][3]=2; sentidoah[2][3]=1;
nodo[2][1]=1; sentidoah[2][1]=0;
//----------------------------------;
// NODO : 3
nodo[3][4]=3; sentidoah[3][4]=1;
nodo[3][2]=2; sentidoah[3][2]=0;
//----------------------------------;
// NODO : 4
nodo[4][5]=4; sentidoah[4][5]=1;
nodo[4][3]=3; sentidoah[4][3]=0;

sentidoah[4][86]=0;
sentidoah[86][4]=0;
//----------------------------------;
// NODO : 5 Almería
nodo[5][6]=5; sentidoah[5][6]=1;
nodo[5][4]=4; sentidoah[5][4]=0;

nodo[5][86]=86;
nodo[86][5]=86;
sentidoah[5][86]=0;
sentidoah[86][5]=1;

//----------------------------------;
// NODO : 6
nodo[6][7]=6; sentidoah[6][7]=1;
nodo[6][5]=5; sentidoah[6][5]=0;
//----------------------------------;
// NODO : 7
nodo[7][8]=7; sentidoah[7][8]=1;
nodo[7][6]=6; sentidoah[7][6]=0;
//----------------------------------;
// NODO : 8
nodo[8][9]=8; sentidoah[8][9]=1;
nodo[8][7]=7; sentidoah[8][7]=0;
//----------------------------------;
// NODO : 9
nodo[9][10]=9; sentidoah[9][10]=1;
nodo[9][8]=8; sentidoah[9][8]=0;
//----------------------------------;
// NODO : 10
nodo[10][11]=10; sentidoah[10][11]=1;
nodo[10][9]=9; sentidoah[10][9]=0;
//----------------------------------;
// NODO : 11
nodo[11][12]=11; sentidoah[11][12]=1;
nodo[11][10]=10; sentidoah[11][10]=0;
//----------------------------------;
// NODO : 12
nodo[12][13]=12; sentidoah[12][13]=1;
nodo[12][11]=11; sentidoah[12][11]=0;
//----------------------------------;
// NODO : 13
nodo[13][14]=13; sentidoah[13][14]=1;
nodo[13][12]=12; sentidoah[13][12]=0;
//----------------------------------;
// NODO : 14
nodo[14][15]=14; sentidoah[14][15]=1;
nodo[14][13]=13; sentidoah[14][13]=0;
//----------------------------------;
// NODO : 15
nodo[15][16]=15; sentidoah[15][16]=1;
nodo[15][14]=14; sentidoah[15][14]=0;
//----------------------------------;
// NODO : 16
nodo[16][17]=16; sentidoah[16][17]=1;
nodo[16][15]=15; sentidoah[16][15]=0;

sentidoah[16][87]=0;
sentidoah[87][16]=0;
//----------------------------------;

// NODO : 17 PONTONES - MURCIA
nodo[17][18]=17; sentidoah[17][18]=1;
nodo[17][16]=16; sentidoah[17][16]=0;

nodo[17][87]=87;
nodo[87][17]=87; 
sentidoah[17][87]=0;
sentidoah[87][17]=1;
//----------------------------------;
// NODO : 18
nodo[18][19]=18; sentidoah[18][19]=1;
nodo[18][17]=17; sentidoah[18][17]=0;
//----------------------------------;
// NODO : 19
nodo[19][20]=19; sentidoah[19][20]=1;
nodo[19][18]=18; sentidoah[19][18]=0;
//----------------------------------;
// NODO : 20
nodo[20][21]=20; sentidoah[20][21]=1;
nodo[20][19]=19; sentidoah[20][19]=0;
//----------------------------------;
// NODO : 21
nodo[21][22]=21; sentidoah[21][22]=1;
nodo[21][20]=20; sentidoah[21][20]=0;
//----------------------------------;
// NODO : 22
nodo[22][23]=22; sentidoah[22][23]=1;
nodo[22][21]=21; sentidoah[22][21]=0;
//----------------------------------;
// NODO : 23
nodo[23][24]=23; sentidoah[23][24]=1;
nodo[23][22]=22; sentidoah[23][22]=0;
//----------------------------------;
// NODO : 24
nodo[24][25]=24; sentidoah[24][25]=1;
nodo[24][23]=23; sentidoah[24][23]=0;

sentidoah[24][87]=0;
sentidoah[87][24]=0;

//----------------------------------;
// NODO : 25 MARMOLEJO - CÓRDOBA
nodo[25][26]=25; sentidoah[25][26]=1;
nodo[25][24]=24; sentidoah[25][24]=0;

nodo[25][88]=88;
nodo[88][25]=88;
sentidoah[25][88]=0;
sentidoah[88][25]=1;
//----------------------------------;
// NODO : 26
nodo[26][27]=26; sentidoah[26][27]=1;
nodo[26][25]=25; sentidoah[26][25]=0;
//----------------------------------;
// NODO : 27
nodo[27][28]=27; sentidoah[27][28]=1;
nodo[27][26]=26; sentidoah[27][26]=0;
//----------------------------------;
// NODO : 28
nodo[28][29]=28; sentidoah[28][29]=1;
nodo[28][27]=27; sentidoah[28][27]=0;
//----------------------------------;
// NODO : 29
nodo[29][30]=29; sentidoah[29][30]=1;
nodo[29][28]=28; sentidoah[29][28]=0;
//----------------------------------;
// NODO : 30
nodo[30][31]=30; sentidoah[30][31]=1;
nodo[30][29]=29; sentidoah[30][29]=0;
//----------------------------------;
// NODO : 31
nodo[31][32]=31; sentidoah[31][32]=1;
nodo[31][30]=30; sentidoah[31][30]=0;
//----------------------------------;
// NODO : 32
nodo[32][33]=32; sentidoah[32][33]=1;
nodo[32][31]=31; sentidoah[32][31]=0;
//----------------------------------;
// NODO : 33
nodo[33][34]=33; sentidoah[33][34]=1;
nodo[33][32]=32; sentidoah[33][32]=0;
//----------------------------------;
// NODO : 34
nodo[34][35]=34; sentidoah[34][35]=1;
nodo[34][33]=33; sentidoah[34][33]=0;
//----------------------------------;
// NODO : 35
nodo[35][36]=35; sentidoah[35][36]=1;
nodo[35][34]=34; sentidoah[35][34]=0;
//----------------------------------;
// NODO : 36
nodo[36][37]=36; sentidoah[36][37]=1;
nodo[36][35]=35; sentidoah[36][35]=0;
//----------------------------------;
// NODO : 37
nodo[37][38]=37; sentidoah[37][38]=1;
nodo[37][36]=36; sentidoah[37][36]=0;
//----------------------------------;
// NODO : 38
nodo[38][39]=38; sentidoah[38][39]=1;
nodo[38][37]=37; sentidoah[38][37]=0;
//----------------------------------;
// NODO : 39
nodo[39][40]=39; sentidoah[39][40]=1;
nodo[39][38]=38; sentidoah[39][38]=0;
//----------------------------------;
// NODO : 40
nodo[40][41]=40; sentidoah[40][41]=1;
nodo[40][39]=39; sentidoah[40][39]=0;
//----------------------------------;
// NODO : 41
nodo[41][42]=41; sentidoah[41][42]=1;
nodo[41][40]=40; sentidoah[41][40]=0;
//----------------------------------;
// NODO : 42
nodo[42][43]=42; sentidoah[42][43]=1;
nodo[42][41]=41; sentidoah[42][41]=0;
//----------------------------------;
// NODO : 43
nodo[43][44]=43; sentidoah[43][44]=1;
nodo[43][42]=42; sentidoah[43][42]=0;

sentidoah[43][77]=0;
sentidoah[77][43]=0;

//----------------------------------;
// NODO : 44 MOGUER - ALMONTE
nodo[44][45]=44; sentidoah[44][45]=1;
nodo[44][43]=43; sentidoah[44][43]=0;

nodo[44][78]=77;
nodo[78][44]=77;

sentidoah[44][77]=0;
sentidoah[77][44]=0;
//----------------------------------;
// NODO : 45
nodo[45][46]=45; sentidoah[45][46]=1;
nodo[45][44]=44; sentidoah[45][44]=0;

sentidoah[45][80]=0;
sentidoah[80][45]=0;

//----------------------------------;
// NODO : 46
nodo[46][47]=46; sentidoah[46][47]=1;
nodo[46][45]=45; sentidoah[46][45]=0;

nodo[46][80]=80;
nodo[80][46]=80;

sentidoah[46][80]=0;
sentidoah[80][46]=1;

//----------------------------------;
// NODO : 47
nodo[47][48]=47; sentidoah[47][48]=1;
nodo[47][46]=46; sentidoah[47][46]=0;
//----------------------------------;
// NODO : 48
nodo[48][49]=48; sentidoah[48][49]=1;
nodo[48][47]=47; sentidoah[48][47]=0;
//----------------------------------;
// NODO : 49
nodo[49][50]=49; sentidoah[49][50]=1;
nodo[49][48]=48; sentidoah[49][48]=0;
//----------------------------------;
// NODO : 50
nodo[50][51]=50; sentidoah[50][51]=1;
nodo[50][49]=49; sentidoah[50][49]=0;
//----------------------------------;
// NODO : 51
nodo[51][52]=51; sentidoah[51][52]=1;
nodo[51][50]=50; sentidoah[51][50]=0;
//----------------------------------;
// NODO : 52
nodo[52][53]=52; sentidoah[52][53]=1;
nodo[52][51]=51; sentidoah[52][51]=0;
//----------------------------------;
// NODO : 53
nodo[53][54]=53; sentidoah[53][54]=1;
nodo[53][52]=52; sentidoah[53][52]=0;
//----------------------------------;
// NODO : 54
nodo[54][55]=54; sentidoah[54][55]=1;
nodo[54][53]=53; sentidoah[54][53]=0;
//----------------------------------;
// NODO : 55
nodo[55][56]=55; sentidoah[55][56]=1;
nodo[55][54]=54; sentidoah[55][54]=0;
//----------------------------------;
// NODO : 56
nodo[56][57]=56; sentidoah[56][57]=1;
nodo[56][55]=55; sentidoah[56][55]=0;
//----------------------------------;
// NODO : 57
nodo[57][58]=57; sentidoah[57][58]=1;
nodo[57][56]=56; sentidoah[57][56]=0;
//----------------------------------;
// NODO : 58
nodo[58][59]=58; sentidoah[58][59]=1;
nodo[58][57]=57; sentidoah[58][57]=0;
//----------------------------------;
// NODO : 59
nodo[59][60]=59; sentidoah[59][60]=1;
nodo[59][58]=58; sentidoah[59][58]=0;
//----------------------------------;
// NODO : 60
nodo[60][61]=60; sentidoah[60][61]=1;
nodo[60][59]=59; sentidoah[60][59]=0;
//----------------------------------;
// NODO : 61
nodo[61][62]=61; sentidoah[61][62]=1;
nodo[61][60]=60; sentidoah[61][60]=0;
//----------------------------------;
// NODO : 62
nodo[62][63]=62; sentidoah[62][63]=1;
nodo[62][61]=61; sentidoah[62][61]=0;
//----------------------------------;
// NODO : 63
nodo[63][64]=63; sentidoah[63][64]=1;
nodo[63][62]=62; sentidoah[63][62]=0;
//----------------------------------;
// NODO : 64
nodo[64][65]=64; sentidoah[64][65]=1;
nodo[64][63]=63; sentidoah[64][63]=0;

sentidoah[64][85]=0;
sentidoah[85][64]=0;

//----------------------------------;
// NODO : 65 ANTEQUERA - MÁLAGA
nodo[65][66]=65; sentidoah[65][66]=1;
nodo[65][64]=64; sentidoah[65][64]=0;

nodo[65][85]=85;
nodo[85][65]=85;

sentidoah[65][85]=0;
sentidoah[85][65]=1;
//----------------------------------;
// NODO : 66
nodo[66][67]=66; sentidoah[66][67]=1;
nodo[66][65]=65; sentidoah[66][65]=0;
//----------------------------------;
// NODO : 67
nodo[67][68]=67; sentidoah[67][68]=1;
nodo[67][66]=66; sentidoah[67][66]=0;
//----------------------------------;
// NODO : 68
nodo[68][69]=68; sentidoah[68][69]=1;
nodo[68][67]=67; sentidoah[68][67]=0;
//----------------------------------;
// NODO : 69
nodo[69][70]=69; sentidoah[69][70]=1;
nodo[69][68]=68; sentidoah[69][68]=0;
//----------------------------------;
// NODO : 70
nodo[70][71]=70; sentidoah[70][71]=1;
nodo[70][69]=69; sentidoah[70][69]=0;
//----------------------------------;
// NODO : 71
nodo[71][72]=71; sentidoah[71][72]=1;
nodo[71][70]=70; sentidoah[71][70]=0;

sentidoah[71][84]=0;
sentidoah[84][71]=0;

sentidoah[71][81]=1;
sentidoah[81][71]=0;

//----------------------------------;
// NODO : 72 NIGUELAS - GRANADA - LANJARÓN
nodo[72][73]=72; sentidoah[72][73]=1;
nodo[72][71]=71; sentidoah[72][71]=0;

nodo[72][84]=84;
nodo[84][72]=84;

nodo[72][82]=81;
nodo[82][72]=81;

sentidoah[72][84]=0;
sentidoah[84][72]=1;

sentidoah[84][81]=1;
sentidoah[81][84]=0;

//----------------------------------;
// NODO : 73
nodo[73][74]=73; sentidoah[73][74]=1;
nodo[73][72]=72; sentidoah[73][72]=0;

nodo[73][82]=82;
nodo[82][73]=82;

sentidoah[73][82]=0;
sentidoah[82][73]=1;

//----------------------------------;
// NODO : 74
nodo[74][75]=74; sentidoah[74][75]=1;
nodo[74][73]=73; sentidoah[74][73]=0;
//----------------------------------;
// NODO : 75
nodo[75][76]=75; sentidoah[75][76]=1;
nodo[75][74]=74; sentidoah[75][74]=0;
//----------------------------------;
// NODO : 76
nodo[76][1]=76; sentidoah[76][1]=1;
nodo[76][75]=75; sentidoah[76][75]=0;
//----------------------------------;

// NODO : 77
//----------------------------------;

// NODO : 78
nodo[78][79]=78; sentidoah[78][79]=1;
                
//----------------------------------;
// NODO : 79
nodo[79][80]=79; sentidoah[79][80]=1;
nodo[79][78]=78; sentidoah[79][78]=0;
//----------------------------------;
// NODO : 80 VILLAMANRIQUE - SANLÚCAR - SEVILLA

nodo[80][79]=79; sentidoah[80][79]=0;

nodo[80][83]=83; sentidoah[80][83]=0;
nodo[83][80]=83; sentidoah[83][80]=0;

//----------------------------------;

// NODO : 81
sentidoah[81][82]=1;

//----------------------------------;
// NODO : 82

nodo[82][81]=81; sentidoah[82][81]=0;
nodo[82][73]=82; sentidoah[82][73]=1;

//----------------------------------;
// NODO : 83

//----------------------------------;
// NODO : 84

//----------------------------------;
// NODO : 85

//----------------------------------;
// NODO : 86

//----------------------------------;
// NODO : 87

//----------------------------------;
// NODO : 88

//----------------------------------;

var aTA=[];

// Iconos

var icono=[
"home",
"empezar",
"finalizar",
"peatonal",
"lodging-0star",
"ruins",
"information",
"mountainbiking",
"samllcity",
"house",
"chapel",
"road",
"beach",
"hill",
"snowy",
"river",
"bridge_old",
"picnic",
"citywalls",
"cow-export",
"taxiboat",
"levelcrossing",
"train",
"forest",
"tuita",
"lighthouse",
"flecha",
"mapa",
"mapa2",
"desprendimiento",
"dibujarOn",
"puntero",
"peatonal",
"inicio_track",
"final_track",
"final_track",
"final_track",
"final_track",
"final_track",
"road",
"lodging_0star",
"restaurant",
"supermarket",
"bicycle_shop",
"workshop",
"workshop",
"hospital-building",
"drugstore",
"atm",
"police",
"tents",
"wifi",
"bus",
"train",
"airport"
];


var tinta="#0EBFFA #0E6AFA #36D236 #FFFF00 #ff8000 #FF0000 #A020F0 #40310B".split(" ");
// var fisicaTramo="fisica_cian fisica_azul fisica_verde fisica_amarillo fisica_naranja fisica_rojo".split(" ");
var nivel=["bajo","medio","alto"];

var POBLACIONES=76;
var ENLACES=ALTERNATIVAS=6;
var TOTAL_POBLACIONES=POBLACIONES+ENLACES+ALTERNATIVAS;

var CENTRO=ll(37.34395908944491, -4.9053955078125);

WEB="http://www.transandalus.org/";
xhref='<a style="text-decoration:none;" target="_blank" href= "'+WEB+"index.php?option=com_content&task=view&id=";
RUTA="TransAndalus";
INFO="html/"+RUTA+".html";

var ancho=3.8;
var opacidad=.5;

var etapasEtapometro=0;
var meteoRuta="";
pvAnterior=8;
// pv=!1;

var PlanRuta=[];
var PlanPerfil=[];
var PlanContador=0;
var OWM=[4];OWM[0]=OWM[1]=OWM[2]=OWM[3]=false;
var weatherLayer=new google.maps.weather.WeatherLayer({temperatureUnits:google.maps.weather.TemperatureUnit.CELSIUS});
var cloudLayer=new google.maps.weather.CloudLayer;

//----------------------------------- Opciones por defecto de Etapómetro

var variableE=[];
	variableE[0]=70;   // Distancia máxima de cada etapa (Km)
	variableE[1]=1500; // Desnivel acumulado positivo máximo (metros)
	variableE[2]=8;    // Duración máxima de cada etapa (horas)
	variableE[3]=20;      // Velocidad máxima asfalto
	variableE[4]=14;      // Velocidad máxima camino/pista
	variableE[5]=5;       // Velocidad máxima sendero
	variableE[6]=variableE[7]=variableE[8]=!0; // Variables vincular velocidaes


var trackTA=[];
var poligonoProvincia=[];
var marcadorInteres=[];

for(var i=1;i<=TOTAL_POBLACIONES;i++){marcadorInteres[i]=[]};
//--------------------------------------------- Coordenadas y altimetría

var y=0;
var x=1;
var a=2;

//-------------------------------------------------------------Servicios

var nombre=0;
var meteo=1;
var asfalto=2;
var camino=3;
var sendero=enlace=4;
var tecnica=foto=5;
var webta=6;
var ita=7;
var missta=8;
var accesita=9;
var dormir=10;
var comer=11;
var comprar=12;
var tiendabici=13;
var tallerbici=14;
var tallermecanico=15;
var centrosalud=16;
var farmacia=17;
var cajero=18;
var policia=19;
var acampar=20;
var internet=21;
var bus=22;
var tren=23;
var avion=24;
var provNumero=25;
var pob1=26;
var pob2=27;
var acumuladoAH=28;
var acumuladoHO=29;
var turismo=30;

var alterna=false;


var app = angular.module('myApp', ['pascalprecht.translate']);


var AlojamientoKML=campingKML=transporteKML=protegidosKML=false;

var menuPrincipalVisible=false;
var etapometroActivo=false;
var puntero_enlace=0;
var perfilAnterior=perfilActivo=false;
var etapometroActivo = false;
var mapaAnterior=1;
var SENTIDO="A";
var etapometro=[];etapometro[0]=etapometro[1]=etapometro[2]=etapometro[3]=etapometro[4]=false;
var menuvita=true;
var pvTemporal=true;
var climataAnterior=false;
var marcadorElegido=false;
var V=[];
var variarEtapasOn=false;
var lengua=[2];lengua[0]="es";lengua[1]="en";
var idioma='es';
var activoPE=false;
var primeraVuelta=false;
var nodoActual=false;

var ventanaPoblacion = new google.maps.InfoWindow();
var ventanaProvincia = new google.maps.InfoWindow();



var marcadorPoblacion=[];
var marcadorPrincipal=[];
var marcadorPerfil=gmM({icon:jsIcono("mountainbiking")});

var pat="";

var hr="<hr>";
var cl="<br>";

$("#selectorcapa1").css("visibility","hidden");
$("#trigger").css("visibility","visible");
listener(ventanaPoblacion,'closeclick',function(){$("#lista_buscador").html("")});

// ----------------------------------------------- Estilos/capas de mapa

var tam=new google.maps.Size(256,256);

var osmMapnik=new google.maps.ImageMapType({
		getTileUrl:function(b,c){
					return"http://tile.openstreetmap.org/"+c+"/"+b.x+"/"+b.y+".png"
				},
		tileSize:tam,
		isPng:true,
		alt:"Mapnik OSM",
		name:"Mapnik OSM",
		maxZoom:18
});

		
var osmCycleMap=new google.maps.ImageMapType({
		getTileUrl:function(b,c){
					return"http://tile.opencyclemap.org/cycle/"+c+"/"+b.x+"/"+b.y+".png"
				},
		tileSize:tam,
		isPng:!0,
		alt:"CycleMap OSM",
		name:"CycleMap OSM",
		maxZoom:18
});

		
var worldRelief=new google.maps.ImageMapType({
		getTileUrl:
			function(b,c){
				return "http://www.maps-for-free.com//layer/relief/z"+c+"/row"+b.y+"/"+c+"_"+b.x+"-"+b.y+".jpg"
			},
		tileSize:tam,
		isPng:!1,
		alt:"Relief Maps",
		name:"Relief Maps",
		maxZoom:11
});
	
	
var mapaOWM=[4];	
		
mapaOWM[0]=new google.maps.ImageMapType({
		getTileUrl:function(b,c){
					return"http://undefined.tile.openweathermap.org/map/temp/"+c+"/"+b.x+"/"+b.y+".png"
				},
		tileSize:tam,
		isPng:!0,
		opacity:.6,
		alt:"OWM",
		name:"OWM",
		maxZoom:19
});

	
mapaOWM[1]=new google.maps.ImageMapType({
	getTileUrl:function(b,c){return"http://undefined.tile.openweathermap.org/map/snow/"+c+"/"+b.x+"/"+b.y+".png"
				},
		tileSize:tam,
		isPng:true,
		opacity:.7,
		alt:"OWMsnow",
		name:"OWMsnow",
		maxZoom:19
});
	
mapaOWM[2]=new google.maps.ImageMapType({
		getTileUrl:function(b,c){
					return"http://undefined.tile.openweathermap.org/map/precipitation/"+c+"/"+b.x+"/"+b.y+".png"
					},
		tileSize:tam,
		isPng:!0,
		opacity:.5,
		alt:"OWMprecipitation",
		name:"OWMprecipitation",
		maxZoom:19
});
		
mapaOWM[3]=new google.maps.ImageMapType({
		getTileUrl:function(b,c){
					return"http://undefined.tile.openweathermap.org/map/wind/"+c+"/"+b.x+"/"+b.y+".png"
					},
		tileSize:tam,
		isPng:!0,
		opacity:.4,
		alt:"OWMwind",
		name:"OWMwind",
		maxZoom:19
});


var escalaSigPac="MTNSIGPAC@3785 MTNSIGPAC@3785 MTNSIGPAC@3785 MTNSIGPAC@3785 MTNSIGPAC@3785 MTNSIGPAC@3785 MTN2000@3785 MTN2000@3785 MTN2000@3785 MTN2000@3785 MTN2000@3785 MTN200@3785 MTN200@3785 MTN200@3785 MTN25@3785 MTN25@3785 ORTOFOTOS@3785 ORTOFOTOS@3785".split(" ");
		
var mapaSigPac=new google.maps.ImageMapType({
		getTileUrl:function(b,c){
			return "http://tilesserver.magrama.es/sdg/raster/"+escalaSigPac[c]+"/"+c+"."+b.x+"."+(Math.pow(2,c)-b.y-1)+".img";
		},
		tileSize:tam,
		isPng:false,
		alt:"SigPac",
		name:"SigPac",
		maxZoom:18,
		minZoom:5
});

//----------------------------------- Mapa principal Google Maps TERRAIN

var map = new google.maps.Map(gE("map_canvas"),{	
			zoom:8,
			center:CENTRO,
			mapTypeId:google.maps.MapTypeId.TERRAIN,
			mapTypeControl:false,
			scaleControl:true,
			scaleControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM},
			zoomControl:true,
			zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM},
			rotateControl:true,
			panControl:true,
			panControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM},
			disableDoubleClickZoom:true,
		});

map.mapTypes.set("SigPac",mapaSigPac);
map.mapTypes.set("Mapnik OSM",osmMapnik);
map.mapTypes.set("Cyclemap OSM",osmCycleMap);
map.mapTypes.set("Relief Maps",	worldRelief);

listener(map,"mouseover",function(){$("#lista_buscador").css("visibility","hidden")});
			
var marcadorRuta=gmM({map:map,icon:jsIcono("parcial")});
var marcadorFantasma=gmM({map:map,icon:jsIcono("fantasma")});

//------ Función principal (Obtener datos de poblaciones, tracks, altimetría y puntos de interés)

function transandalus(){
		
		$.getJSON( "json/poblacion.json", function( data ) {
			ta=data;
				$.getJSON( "json/track.json", function( data ) {
					trackTA=data;
						$.getJSON( "json/altimetria.json", function( data ) {
							aTA=data;
								$.getJSON( "json/poi.json", function( data ) {
									interes=data;
										$.getJSON( "json/provincia.json", function( data ) {
											poligonoProvincia=data;
											
											verProvincias();
											colocarPoblaciones();
											incluirMenu();
											setTimeout("borrarInicio()",4000);
											
										});
								});
						
						});	
				});
		});
}


//--------------------------------- Perfil de Etapómetro (Planificación)

function perfilEtapometro(){
	if (PlanContador>0){
		perfil(PlanRuta, (idioma=='es'?"Etapometro: ":"Stagemeter: ")+ta[etapometro[0]][nombre] + ' -----> ' + ta[etapometro[1]][nombre],PlanRuta.length,"chart_perfil")
		}
}


function perfil(b,c,r,d){
	
	perfilActivo=true;
	var data = new google.visualization.DataTable([]);
    
	data.addColumn('number', 'Km'); 
	data.addColumn('number', 'm');
		
	var DistanciaX = 0;
	var tTAtotal=new google.maps.MVCArray;

	b.forEach(function(e){
		
		if (e){
			var tTA = trackTA[e[1]].getPath();
			var t=tTA.getLength()-1;
			var p=e[2]=="A"?1:t-1;
			colorGrafico=tinta[colorPerfil(e[1])];	
			data.addRow([DistanciaX,aTA[e[1]][p]]);	
			tTAtotal.push(tTA.getAt(p));
			ppp=0;	
			
			while ( ((e[2]=="A")&&(p<t-1)) || ((e[2]=="H")&&(p>0)) )	
							
				{
					ppp++;
					DistanciaX+=computarD(tTA.getAt(p),tTA.getAt(p+1))/1000;
					
					DistanciaX=parseFloat(redondeo(DistanciaX,2));
					// var AltitudY=aTA[e[1]][p+1];
					if (ppp==r){
						tTAtotal.push(tTA.getAt(p+1));	
						data.addRow([DistanciaX,aTA[e[1]][p+1]]);
						ppp=0;
					}
					if (e[2]=="A"){p+=1}else{p-=1};
				}	
		}
	});


		var tt=idioma=='es'; 
		var options = {
				title: c,
				titleTextStyle: {color: "#0000FF",fontName: "Arial",fontSize: "14px",bold: true,italic: true},
				backgroundColor: "null",
				opacity: 0.2,
				hAxis: {title: (tt?'Distancia (Km)':'Distance (Km)'),
						titleTextStyle: {color: '#0000FF'},minValue: 0},
				vAxis: {title: (tt?'Altitud (msnm)':'Elevation (masl)'),
						titleTextStyle: {color: '#0000FF'},minValue: 0},
				colors: [d=='chart_perfil'?'#FF0000':colorGrafico, '#90EE90'],
				crosshair: {
				  color: '#000',
				  trigger: 'selection'
				},
				curveType: 'function',
				// legend: { position: 'bottom' },
				legend: 'none'
		}
      

		var chart = new google.visualization.AreaChart(document.getElementById(d));  // chart_perfil 
		
        google.visualization.events.addListener(chart, 'onmouseover', function (e){
			marcadorPerfil.setOptions({
				visible:!0,
				position: tTAtotal.getAt(e.row)
				});
			marcadorPerfil.setMap(map)
			
		});
		
		google.visualization.events.addListener(chart, 'click', function (e){
			
			/*
			if (perfilAnterior){
			swne(perfilAnterior);
			map.fitBounds(new google.maps.LatLngBounds(sw,ne));
			}
			*/
		});  

	if (!activoPE){
		$('#chart_perfil').css("visibility","visible");
		$('#chart_perfil').css("background-color","transparent");
		$("#cerrarperfil").css("visibility","visible");
		}
		
	chart.draw(data, options);
		
}

//-------------------------------------MENU PRINCIPAL (Desplegar/Plegar)

function desplegarMenu(){
	
		menuPrincipalVisible=!menuPrincipalVisible;
		$("#menu").toggleClass("active");
		$("#cabecera_menu").toggleClass("active");
		
		for (var ii=1;ii<7;ii++){
			$("#selectorcapa"+ii).css("transform",menuPrincipalVisible?"translate(+325px, 0%)":"translate(0%, 0%)");
			$("#selectorcapa"+ii).css("transition",menuPrincipalVisible?"all 0.60s ease-in-out":"all 0.60s ease-in-out");
		}
}

// ------------------------------------- Menú desplegable de poblaciones

function menuPoblaciones(){if (menuvita=!menuvita){cerrarProvincias()}}

//------------------------------------------- Lista Buscador (replegar)

function esconderListaBuscador(){$("#lista_buscador").css("visibility","hidden")}


//--------------------- Lista Buscador (visible sólo si tiene contenido)

function contenidoListaBuscador(){if ($("#lista_buscador").html()!=""){$("#lista_buscador").css("visibility","visible")}}


//------------------------------------------ Menú ETAPÓMETRO (desplegar)

function desplegarEtapometro(){
	
	if (menuPrincipalVisible){desplegarMenu()}
	
	$("#trigger").css("visibility","hidden");
	$("#lista_buscador").css("visibility","hidden"); 
	$("#menu_etapometro").toggleClass("active");
	$("#lista_etapometro").toggleClass("active");
	$("#pestana").css("visibility","visible");
	$("#pestana").toggleClass("active");
	
	if(etapometroActivo=!etapometroActivo){$("#pestana").css("background-image","url(icon/replegar.svg)")}
		else{$("#pestana").css("background-image","url(icon/desplegar.svg)")}
}

//----------------------------------------- Pestaña ETAPÓMETRO (ocultar)

function esconderPestana(){
	
	if (menuPrincipalVisible){desplegarMenu();menuPrincipalVisible=false}
		else {
				$("#trigger").css("visibility","visible");
				
				if ($("#lista_buscador").html()!=""){$("#lista_buscador").css("visibility","visible")}; 
				
				$("#pestana").toggleClass("active");
				$("#menu_etapometro").toggleClass("active");
				$("#lista_etapometro").toggleClass("active");
				$("#pestana").css("visibility","hidden");
				$("#pestana").css("background-image","url(icon/replegar.svg)");
				etapometroActivo=false;	
			}
}


//---------------------------------------------- Selector TIPO/CAPA MAPA

function seleccionarTipoMapa(t){
	
		switch(t){
					
			case 1: // Terrain
					map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
			break;
					
			case 2: // Satellite
					map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
			break;
					
			case 3: // SigPac
					map.setMapTypeId("SigPac");
					b="Mapas de <a target='_blank' href='http://sigpac.mapa.es/fega/visor/'>SigPac</a> sobre Google Maps";
			break;
					
			case 4: // Mapink OSM
					map.setMapTypeId("Mapnik OSM");
					b="<a target='_blank' href='http://www.openstreetmap.org/copyright'><b>\u00a9OpenStreetMap Contributors</b></a> sobre Google Maps";
			break;
					
			case 5: // Cyclemap OSM
					map.setMapTypeId("Cyclemap OSM");
					b="<a target='_blank' href='http://www.openstreetmap.org/copyright'><b>\u00a9OpenStreetMap Contributors</b></a> sobre Google Maps";
			break;
					
			case 6: // Relief Maps
					if (map.getZoom()>11){map.setZoom(11)};
					map.setMapTypeId("Relief Maps");
					b="Relief Map <a target='_blank' href='http://www.maps-for-free.com/html/about.html'> Copyright and License</a> sobre Google Maps";				
			break;
			default:
		}
			if (t<3){$("#licencia").css("visibility","hidden")}
			else{
					$("#licencia").css("visibility","visible");
					$("#licencia").html(b);
				}
			$("#selectorcapa"+mapaAnterior).css("visibility","visible");
			$("#selectorcapa"+t).css("visibility","hidden");
			mapaAnterior=t;			
}


// ------------------------------------------------ Límite de PROVINCIAS

function verProvincias(){
		
				$.each( poligonoProvincia, function(b, val) {
					poligonoProvincia[b]=new google.maps.Polygon({
						map:map,
						path: new google.maps.MVCArray(google.maps.geometry.encoding.decodePath(unescape(val))),
						strokeColor:tinta[b],
						strokeWeight:1,
						strokeOpacity:.1,
						fillOpacity:.4,
						fillColor:tinta[b],
						clickable:!0,
						draggable:!1,
						visible:!0,
						editable:!1,
						zIndex:1,
						title:andalucia[3*b]
					});
				
				cerrarProvincia(b);
				infoProvincia(b);	
				})
}

function cerrarProvincias(){
	for(var pv=0;pv<=7;pv++){
		poligonoProvincia[pv].setOptions({visible: false});
		}
}

function cerrarProvinciasInicio(){
	for(var pv=0;pv<=7;pv++){
		
		poligonoProvincia[pv].setOptions({visible: !poligonoProvincia[pv].getVisible()});
		}
}

function limiteProvincias(){for(var pv=0;pv<=7;pv++){limite(pv)}}

function limite(b){

	//if(!pvTemporal){
		
		if (!poligonoProvincia[b].getVisible()){
			poligonoProvincia[b].setOptions({visible: true});
			if (pvAnterior!=8 && (pvAnterior!=b)){// 
				poligonoProvincia[pvAnterior].setOptions({visible: false});
				ventanaProvincia.setMap(null);
				ventanaPoblacion.setMap(null);
				};
			map.setCenter(ll(andalucia[(3*b)+1],andalucia[(3*b)+2]));
		}
		else{
			poligonoProvincia[b].setOptions({visible: false});
			ventanaProvincia.close();
			}
		pvAnterior=b;
	//}
}


//---------------------------------- Simular click para cerrar Provincia

function cerrarProvincia(b){
	
	listener(poligonoProvincia[b],"click",function(){
		
		//  var element=$("#prov"+b);
		
			// c.removeClass('open');
			// c.find('li').removeClass('open');
			// c.find('ul').slideUp();
		
		
		
		
		var element = $("#prov"+b);
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();

			}
			
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//$("#prov"+b).trigger('click');
		// document.getElementById("prov"+b).click();
		poligonoProvincia[b].setOptions({visible:!1});
		ventanaProvincia.close()	
		})
}

//------------------------------ Información básica sobre cada provincia

function infoProvincia(b){
	
	listener(poligonoProvincia[b],"mouseover",function(){
		var p=3*b;
		ll(andalucia[p+1],andalucia[p+2]);
		info='<p align="center"><font  color="blue" size="3"><b>'+htmlIcono("bandera")+andalucia[p]+"</b></font></p>"+hr+(idioma=='es'?'Clic: cerrar Provincia':'Click: close Province');
		ventana(ventanaProvincia);
	})
}


//------------------ Borrar muestra inicial de provincias y alternativas

function borrarInicio(){
	cerrarProvinciasInicio();
	ventanaProvincia.close();
	pvTemporal=false;
	verAlternativas();
}


//---------------------------------------- Colocar iconos de poblaciones


function colocarPoblaciones(){

		for (var b=1;b<=TOTAL_POBLACIONES;b++){
			trackTA[b]=new google.maps.Polyline({
					path: new google.maps.MVCArray(google.maps.geometry.encoding.decodePath(unescape(trackTA[b]))), // new google.maps.MVCArray(google.maps.geometry.encoding.decodePath(unescape(track[b]))),
					map:map,
					strokeColor:b<=POBLACIONES?"#FF00E2":"#0000E9",
					strokeWeight: ancho,
					strokeOpacity: opacidad,
					clickable:true,
					zIndex:b
					});
	
			if ((b!=77) && (b!=81)){colocarPoblaciones2(b)}
			swne(b);
			perfilTramo(trackTA[b],b,maximoY,maximoX);		

			}
}


function colocarPoblaciones2(b){

	puntoPoblacion(b);
	marcadorPoblacion[b]=gmM(opcionesMarcador(b,ta[b][0],tipoPoblacion(b)));
	listener(marcadorPoblacion[b],"mouseover",function(){infomarcador(b)});
}

/*
function poblacion(){
	limiteProvincias();
	i_poblacion=htmlIcono("bandera")+"Inicio/Final de tramos:"+cl+hr;
	for(var i=1;i<=POBLACIONES;i++){
		puntoPoblacion(i);
		imagen(i,"poblacion");
		puntero_enlace=i;
		grupo=1;
		i_poblacion+=listaBuscador(ta[i][nombre]+'<span style="padding-left: 20px;"><hr></span>')
	}
	i_poblacion+=htmlIcono("bandera");
	ventanaLateral(i_poblacion)
}
*/

//-------------------------------------- Listar poblacions por provincia

function poblacionesProvincia(c){
	
	i_poblacion="";	 
	if (c!=2){for (var b=0;b<=7;b++){provinciaListar(b,0)}}
		else {provinciaListar(3,1);provinciaListar(4,1);provinciaListar(7,1)}
		
	return i_poblacion;
}


function provinciaListar(b,c){
	
		i_poblacion+='<div style="background-image: url(img/provincia/'+b+'.svg); background-repeat: no-repeat;background-position: center; width:auto; height:auto;">';
			i_poblacion+=hr+htmlIcono('bandera')+"  "+andalucia[3*(b)]+hr;

			for(var i=1;i<=TOTAL_POBLACIONES;i++)
			{
					if ((c==0 && (i!=77 && i!=81)) || (c==1 && (i>77 && i!=81 && i!=83 && i!=84 && i!=86)))
					{
						if (b==ta[i][provNumero])
						{
								puntoPoblacion(i),
								imagen(i,"home-mini"),
								puntero_enlace=i,
								grupo=1,
								i_poblacion+='<li onclick="centrarTramoE('+i+') class="lugar_encontrado""><img src="'+img.src+'" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + ta[i][nombre] + "</li>";	 //  i_poblacion+='<li onclick="centrarTramoE('+i+')"><a id="'+img.name+'" class="lugar_encontrado"><img src="'+img.src+'" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + ta[i][nombre] + "</a></li>";
						}
					}
			}
		i_poblacion+='</div>';		
}


// ---------------------------Colocar iconos de poblaciones alternativas


function poblacionesAlternativasOn(){
	
	if (alterna=!alterna){$('#cuadro_etapometro').append($("#buscarAlternativas").html())}
			else{$("#cuadro_etapometro tr:last").remove()}
	verAlternativas();	
}


function verAlternativas(){
	
		for(var i=POBLACIONES+1;i<=TOTAL_POBLACIONES;i++){
				if (PlanContador>0){
						
							if (tramoAlterna[i]){trackTA[i].setOptions({visible:true})}
								else{trackTA[i].setOptions({visible:alterna})}
													
				} else if (PlanContador==0){trackTA[i].setOptions({visible:alterna})}
				
				if (77!=i&&81!=i){
					
					if (PlanContador>0){

						if (marcadorAlterna[i]){marcadorPoblacion[i].setOptions({visible:true})}
							else{marcadorPoblacion[i].setOptions({visible:alterna})}
						
					}else{
						
						marcadorPoblacion[i].setOptions({visible:alterna})
						
						}
				}
		}
}


//----------------------------- Puntos de interés principales de la ruta

function puntos_principalesOn(){(principales=!principales)?(Fon(gE("interes")),puntos_principales()):(Foff(gE("interes")),borrarPrincipales(),ventanaPoblacion.close())}

function puntos_principales(){
	i_puntos="<p>"+htmlIcono("importante")+rojo3+"Inter&eacute;s  e  incidencias:"+"</p>"+hr;
	for(i=0;i<totalPrincipal-2;i+=2)tramo=principal[i],pTramo=principal[i+1],iNom=tramo+","+pTramo,ll(interes[tramo][pTramo][y],interes[tramo][pTramo][x]),grupo=2,cambiarHtml(interes[tramo][pTramo][2]),marcadorPrincipal[i/2+1]=gmM(opcionesMarcador(1,pat,icono[interes[tramo][pTramo][3]])),infopint(marcadorPrincipal[i/2+1],tramo,pTramo),imagen(iNom,icono[interes[tramo][pTramo][3]]),puntero_enlace=i,
	i_puntos+=listaBuscador(verde2+"Tramo: "+ta[ta[tramo][pob1]][nombre]+hacia+ta[ta[tramo][pob2]][nombre]+cl+azul2+interes[tramo][pTramo][2]+hr);i_puntos+=htmlIcono("importante")+hr;ventanaLateral(i_puntos)
}

function borrarPrincipales(){marcadorPrincipal.forEach(function(b){b&&b.setMap(null)})}

function infomarcador(b){
		listener(marcadorPoblacion[b],"click",function(){
			infomarcador2(b);
			puntoPoblacion(b);
			ventana(ventanaPoblacion);
			$("#lista_buscador").html(infoLateral);
		})
}

function infomarcador2(b){
	serviciosVertical(b);
	listaLateral='<spam class="lugar_encontrado">'+htmlIcono("hill")+aTA[b][0]+" msnm"+cl+htmlIconoMini("home")+ta[b][nombre]+cl+'<a style="text-decoration:none;" title="TransAndalus" target="_blank" href= "http://www.transandalus.org/index.php?option=com_content&task=view&id='+ta[b][webta]+'">'+htmlIcono("transandalus")+'</a><a style="text-decoration:none;" title="Turismo Andaluz" target="_blank" href="http://www.andalucia.org/es/destinos/provincias/cordoba/municipios/'+
	ta[b][turismo]+'">'+htmlIcono("turismoandaluz")+'</a><a style="text-decoration:none;" title="Wikipedia" target="_blank" href="http://es.wikipedia.org/wiki/'+ta[b][nombre]+'">'+htmlIcono("wikipedia")+"</a>";
	infoClima(b);
	info=listaLateral+meteoRuta;
	infoLateral=listaLateral+hr+serviciosV+'</spam>'
}

//------------------------------------ Opciones: variar número de etapas

function variableEtapometro(){
	$( "#lista_etapometro" ).html($("#variables").html());
	cargarValores();
	if (PlanContador>0){$("#etapas").text(etapasEtapometro)}
}

function variarEtapas(b){
	
	if (b==1){
		variableE[0]+=10; if (variableE[0]>150){variableE[0]=150}
		variableE[1]+=250; if (variableE[1]>2500){variableE[1]=2500};
		variableE[2]+=2; if (variableE[2]>12){variableE[2]=12};
		
	}else if (b==0){
		variableE[0]-=10; if (variableE[0]<15){variableE[0]=15}
		variableE[1]-=250; if (variableE[1]<250){variableE[1]=250};
		variableE[2]-=2; if (variableE[2]<2){variableE[2]=2};
	}

	for (var i=0;i<3;i++){
		$("#variableE"+i).val(variableE[i]);
		$("#c_variableE"+i).val(variableE[i]);
		}
	
	if (PlanContador>0){
		variarEtapasOn=true;
		rutandalus();
		variarEtapasOn=false;
		}
}

function variarE(b){$("#c_variableE"+b).val($("#variableE"+b).val());variableE[b]=$("#variableE"+b).val()}

function vincularVelocidades(b){$("#velocidades_medias").css("background-color",((variableE[8]=b)==true?"#FFFFFF":"#E5E5E5"))}

function cargarValores(){
	for (var i in variableE){$("#variableE"+i).val(variableE[i]);$("#c_variableE"+i).val(variableE[i])}
	for (var i=6;i<9;i++){variableE[i]=$("#checked"+(i-6)+":checked").val()}
}



function infoClima(b){b=ta[b][31];meteoRuta='<div id="c_'+b+'" class="mini" style="border-image: initial; width: 50px; height: 67px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: transparent; overflow-x: hidden; overflow-y: hidden; background-position: initial initial; background-repeat: initial initial; "><iframe id="'+("fr_"+b)+'" src="'+("http://www.eltiempo.es/widget/get_widget/"+b)+'?v=11000" frameborder="0" scrolling="no" width="100%" height="100%" allowtransparency="true" style="overflow: hidden;"></iframe></div>'}


function serviciosHorizontal(b){
	serviciosH="";
	for(ii=dormir;ii<avion+1;ii++)0!=ta[b][ii]&&(serviciosH+=htmlIconoMicro(icono[40+(ii-dormir)]));
	return serviciosH
	}

function serviciosVertical(b){
	serviciosV="";
	for (var ii=dormir;ii<=avion;ii++){
	if (0!=ta[b][ii]){
		serviciosV+=htmlIcono(icono[40+(ii-dormir)]);
		serviciosV+=hr	
		}
	}
}

//--------------------------------------------------- Capas Climatología 

function climaTA(b){
	
	if (OWM[b]=!OWM[b]){
		$("#clima"+b).css("background-color","#26CA26");// a.style.backgroundColor="#26CA26";
		map.overlayMapTypes.setAt(b,mapaOWM[b]);
		
			/*
			if (climataAnterior){
				$("#clima"+climataAnterior).css("background-color","initial");
				
				OWM[climataAnterior]=false;
				// map.overlayMapTypes.removeAt(climataAnterior);	
				
			};
			*/
		// climataAnterior=b;
		// for (var i=0;i<=3;i++){if (i!=b){map.overlayMapTypes.removeAt(i);$("#clima"+i).css("background-color","initial");OWM[i]=false}}
		}
		else {
			$("#clima"+b).css("background-color","initial");
			// climataAnterior=false;
			map.overlayMapTypes.removeAt(b);
			}
			
		$("#licencia2").css("visibility","visible");
		$("#licencia2").html('Capa superpuesta de <a target="_blank" href="http://openweathermap.org/">OpenWeatherMap</a>');
}


function interesRuta(b){
	for(var j=1,jx=interes[b].length;j<=jx;j++)interes[b][j]&&interesTramo(b,j)
}


function interesTramo(b,c){
		punto=ll(interes[b][c][y],interes[b][c][x]);
		marcadorInteres[b][c]=gmM(opcionesMarcador(1,cambiarHtml(interes[b][c][2]),icono[50>interes[b][c][3]?interes[b][c][3]:11]));
		infopint(marcadorInteres[b][c],b,c);
}

function infopint(b,c,d){listener(b,"click",function(b){punto=this.getPosition();infopint2(c,d);ventanaPoblacion.setOptions({disableAutoPan:!1});ventana(ventanaPoblacion)})}

function infopint2(b,c){info=htmlIcono(icono[50>interes[b][c][3]?interes[b][c][3]:11])+interes[b][c][2];"0"!=interes[b][c][4]&&(info=htmlIcono(icono[interes[b][c][3]])+enl+interes[b][c][4]+'">'+interes[b][c][2]+"</a>");"0"!=interes[b][c][5]&&(info+="<p><src="+interes[b][c][5]+"></p>")}


function imagen(b,c){
	img=new Image;
	img.name=b;
	img.src=jsIconoMenu(c); // REVISAR
	return img
	}

//----------------------------------------------------- Perfil del tramo

function perfilTramo(b,c,d,h){
	listener(b,"click",function(){
		
		if (perfilAnterior&&perfilAnterior!=c){
			marcadorInteres[perfilAnterior].forEach(function(e){e.setMap(null)});
			if (verSiEsta(perfilAnterior)){ab='#FF0000';ac=8}else{ac=ancho;ab=(perfilAnterior<=POBLACIONES)?"#FF00E2":"#0000E9"};
			// perfilAnterior<=POBLACIONES?"#FF00E2":"#0000E9"
			trackTA[perfilAnterior].setOptions({strokeColor:ab,strokeWeight:ac})
			};
			
		b.setOptions({strokeColor:"#FFA500",strokeWeight:8});
	
		swne(perfilAnterior=c);
		map.fitBounds(new google.maps.LatLngBounds(sw,ne));
		interesRuta(c);
		var PlanPerfil=[];
		PlanPerfil[1]=[];
		PlanPerfil[1][1]=c;
		PlanPerfil[1][2]=SENTIDO;
		SENTIDO=="A"?(s1=pob1,s2=pob2):(s1=pob2,s2=pob1);
		perfil(PlanPerfil,[(idioma=='es'?"Tramo: ":"Section: ") + ta[ta[c][s1]][nombre] +' ----> '+ ta[ta[c][s2]][nombre]],1,"chart_perfil");
		
	})
}


function cerrarPerfil(){
		
		if (perfilAnterior){
				marcadorInteres[perfilAnterior].forEach(function(e){e.setMap(null)});
				if (verSiEsta(perfilAnterior)){ab='#FF0000';ac=8}else{ac=ancho;ab=(perfilAnterior<=POBLACIONES)?"#FF00E2":"#0000E9"};

				trackTA[perfilAnterior].setOptions({strokeColor:ab,strokeWeight:ac});
				perfilAnterior=false;
			}
			perfilActivo=false;
			marcadorPerfil.setOptions({visible:false});
			$("#chart_perfil").css("visibility","hidden");
			$("#cerrarperfil").css("visibility","hidden");
	
}


function tramoPlan(c){ // ¿b=track? c=número de tramo
		
		PlanContador++;
		PlanRuta[PlanContador]=[]; 										 // Declarar tramoRuta

		PlanRuta[PlanContador][1]=c; 									// Seleccionar tramoRuta
		
		PlanRuta[PlanContador][2]=sentidoah[nodoActual][nodoSiguiente]==0?"H":"A";
		
										// Seleccionar sentido
		
		if(c>76 ){
				tramoAlterna[c]=true;
				trackTA[c].setOptions({visible:true});
			
		}
		
		trackTA[c].setOptions({strokeColor:tinta[5],strokeWeight:8}); 
}



// function listadoTramos(){listaEnlaces="";planKm=0;if(0<PlanContador)for(ii=0;ii<=PlanContador;ii++)PlanRuta[ii][3]&&0!=PlanRuta[ii][3]&&(0==ii?(ff="empezar",iii=0):(ff=ii==PlanContador?"finalizar":"poblacion",iii=distanciaTramo(PlanRuta[ii][1]),planKm+=iii),listaEnlaces+=htmlIcono(ff)+ta[PlanRuta[ii][3]][nombre]+"("+redondeo(planKm,0)+"Km)"+cl);gE("enlaces").style.display="initial";gE("enlaces").innerHTML=listaEnlaces}



//-------------------------------- Arrastrar población de inicio o final

function cambiaEIF(c){

	var b=marcadorPoblacion[etapometro[c]];
	var tlng=0.08;
	var tlat=0.08;
	e=b.getZIndex();
	
	listener(b,'drag',function(){
		marcadorFantasma.setOptions({
				position: puntoPoblacion(etapometro[c]),
				visible: true
				});	
	
	});
	
	listener(b,'dragend',function(){
		
		marcadorFantasma.setOptions({visible:false});
		
		var d=b.getPosition();
		marcadorPoblacion.forEach(function(m,i){
				
				var f=m.getPosition();
				
				if (
					(etapometro[c]!=i)
					&& ((d.lng()<(f.lng()+tlng)) && (d.lng()>(f.lng()-tlng))
					&& (d.lat()<(f.lat()+tlat))	&& (d.lat()>(f.lat()-tlat)))
					)
					{marcadorElegido=i}
			});
		
		var z=(etapometro[c]==etapometro[0])?0:1;
		
		if(marcadorElegido==false){
			
						
			b.setOptions({
				position: puntoPoblacion(etapometro[z]),
				}); 
		}
			
		else {
			
					b.setOptions({									
						position:  puntoPoblacion(etapometro[z]), 
						icon: jsIcono(tipoPoblacion(etapometro[z]))
						});
					
					google.maps.event.clearListeners(b,'dragend');
					google.maps.event.clearListeners(b,'drag');
					
					etapometro[z]=marcadorElegido;
					$("#buscar"+z).val(ta[etapometro[z]][nombre]);
				
			marcadorElegido=false;	
			iniciofinalColocar();
			
			}
	})
}		


/*
//----------------------------------------------- Deshacer Planificación

function deshacerPlan(){
	resetearRutandalus();
	PlanContador=0;
	PlanRuta=[];
	for(var i=1;i<=TOTAL_POBLACIONES;i++)trackTA[i].setOptions({strokeColor:i<=POBLACIONES?"#FF00E2":"#0000E9",strokeWeight:ancho,strokeOpacity:opacidad}),i<=POBLACIONES&&marcadorPoblacion[i].setOptions({icon:"icon/poblacion.png"});listadoTramos();gE("enlaces").style.display="none"
}
*/

function verSiEsta(b){
	esta=false;
	for(var f=1, fx=PlanRuta.length;f<fx;f++){
		if(PlanRuta[f][1]&&PlanRuta[f][1]==b){esta=true;break}
		}
	return esta
}

function distanciaTramo(b){return kmTramo=ta[b][asfalto]+ta[b][camino]+ta[b][sendero]}

function ventana(b){
	b.setPosition(punto);
	b.setContent(info);
	b.open(map)
}

function ventanaLateral(b){$("#lista_etapometro").html(b)}

function ayuda(){
	$.ajax({
		url: 'html/etapometro.html',
		dataType: 'html',
		success: function(html) {
								$("#lista_etapometro").html(html);
								}
	})
}


// GRAFICO PERFIL
	
function calcularPendiente(){return pendiente=Math.round(DVertical/DPuntos*100)}

function rutaTA(){
	
	if (0<PlanContador)
	{
		$('#lista_etapometro').html('<img src="icon/relojarena.svg"> Espere unos segundos mientras finaliza el c&aacute;lculo.');
		$('#calcular').attr( "src","icon/relojarena.svg" );
		setTimeout('rutandalus()',600);
		
	}
		else {$('#lista_etapometro').html('<img src="icon/calcular.svg"> Seleccione primero poblaciones de inicio y final de ruta.')};
}

//------------------------------------------------- Resultado Etapómetro

function rutandalus(){
	
	resetearRutandalus();
	h=0,k=0,r=0;
	var v="",u="";
	etapasEtapometro=1;
	var w=tiEtapometro=deEtapometro=kmEtapometro=A=B=0;
	map.setOptions({center: CENTRO, zoom: 8});
	
	for (var i=0;i<3;i++){V[i]=variableE[i]};
		
	if (!$("#checked0:checked")){V[0]=150};
	if (!$("#checked1:checked")){V[1]=2500};
	if (!$("#checked2:checked")){V[2]=12};	
		
	if (!variarEtapasOn){
	var tt=idioma=='es';
	var t=
			'<table id="resultado_etapometro" border="0px">'
			+'<tr><td bgcolor="#008000" colspan="7"></td></tr>'
			+'<tr><td colspan="7">'+htmlIconoM('calcular')+'<img title="'+(tt?'Imprimir resultado':'Print the result')+'" src="icon/imprimir.svg" style="float: right" onclick="imprimirEtapometro()"></td></tr>'
			+'<tr><td bgcolor="#008000" colspan="7"></td></tr>'
			+'<tr><td colspan="7">'+'<img title="'+(tt?'Opciones de etapa':'Stage options')+'" src="icon/variables.svg">'+htmlIconoM("resultado")+' <img title="'+(tt?'Distancia m&aacute;xima por etapa':'Stage maximun distance')+'" src="icon/distancia.svg"> '+V[0]+' Km | <img title="'+(tt?'Duraci&oacute;n m&aacute;xima por etapa':'Stage maximun duration')+'" src="icon/reloj.svg"> '+V[2]+' h | <img title="'+(tt?'Desnivel acumulado m&aacute;ximo por etapa':'Stage maximun accumulated drop')+'" src="icon/desnivel.svg"> '+V[1]+' m</td></tr>'
			+'<tr><td bgcolor="#008000" colspan="7"></td></tr>'
			+'<tr><td bgcolor="#BFBFBF" colspan="7">'+htmlIconoM('empezar')+ta[etapometro[0]][nombre]+'</td></tr>'
			+'<tr><td bgcolor="#BFBFBF" colspan="7">'+htmlIconoM('finalizar')+ta[etapometro[1]][nombre]+'</td></tr>'
			
			+'<tr><td id="kilometraje" bgcolor="#90EE90" colspan="7">Km</td></tr>'
			
			+'<tr><td bgcolor="#008000" colspan="7"></td></tr>'
			
			+'<tr class="tableE"><td style="width: 15%;  text-align: center;">'
			+'<img title="'+(tt?'Distancia':'Distance')+'" src="icon/distancia-mini.svg"></td><td style="width: 16%;  text-align: center;">'
			+'<img title="'+(tt?'Tiempo estimado':'Estimated duration')+'" src="icon/reloj-mini.svg"></td><td style="width: 16%;  text-align: center;">'
			+'<img title="'+(tt?'Desnivel acumulado':'Accumulated drop')+'" src="icon/desnivel-mini.svg"></td><td style="width: 9%;  text-align: center;">'
			+'<img title="'+(tt?'Indice dificultad f&iacute;sica':'Physical difficulty level (max: 1 / min: 76)')+'" src="icon/ita-mini.svg"></td><td style="width:8%;  text-align: center;">'
			+'<img title="'+(tt?'Dificultad t&eacute;cnica':'Technical difficulty')+'" src="icon/tecnica-mini.svg"></td><td style="width: 12%;  text-align: center;">'
			+'<img title="'+(tt?'Valoraci&oacute;n':'Valoration')+'" src="icon/missta-mini.svg"></td><td style="width: 24%;  text-align: center;">'
			+'<img title="'+(tt?'Tipo de terreno':'Ground type')+'" src="icon/terreno-mini.svg"></td></tr>'
			;
				
		}
	
	
	for (var cc=PlanRuta.length-1, c=1;c<=cc;c++){
		
		b=PlanRuta[c];

					tramoRuTAndalus=c;
					tramo=PlanRuta[c][1];

					k+=distanciaTramo(tramo);
					h+=ta[tramo][tecnica];
					
					"H"==PlanRuta[c][2]?
					(s_H=!0,s1=pob2,s2=pob1,ser=pob2,tah=28):
					(s_H=!1,s1=pob1,s2=pob2,ser=pob1,tah=29);
				
					distancia=0;
					
					kmEtapometro+=kmTramo;
					deEtapometro+=ta[tramo][tah];
					tiEtapometro+=timeTramo(tramo);
					w+=kmTramo;
					A+=ta[tramo][tah];
					B+=tiempoTramo;
					r+=ta[tramo][ita];
					
					if (!variarEtapasOn){
						v =   '<tr><td colspan="7" bgcolor="#008000"></tr>'+
							  '<tr>'+
									'<td colspan="7"><div class="provisional" id="provisional'+c+'"></div>'+
							  '</tr>'+
							  '<tr>'+
							  '</tr>'+
							  '<tr>'+
									'<td colspan="7">'+htmlIconoM('poblacion')+ta[ta[tramo][s1]][nombre]+" "+htmlIconoM('poblacion')+ta[ta[tramo][s2]][nombre]+" ("+serviciosHorizontal(ta[tramo][ser])+')'+ hr +
							  '</tr>'+
							  '<tr style="font-size: 12px, color: blue">'+
									'<td style="text-align: right;">'+kmTramo+
									'Km<td style="text-align: right;">'+horas(tiempoTramo)+
									'<td style="text-align: right;">'+ta[tramo][tah]+
									'm<td style="text-align: right;">'+ta[tramo][ita]+
									'<small>/76</small><td style="text-align: center;">'+dificultadTecnica()+
									'<td style="text-align: left;">'+missTApometro(ta[tramo][missta])+
									'<td style="text-align: center;">'+terreno()+
							  '</tr>';	
						}else{v=""}
					
					if (kmEtapometro>V[0]||deEtapometro>V[1]||tiEtapometro>V[2])
						{  
							if (1!=c){
								if (!variarEtapasOn){t+=u+subTotal(1)};
								etapasEtapometro++;
								}
							u=v;
							kmEtapometro=kmTramo;
							deEtapometro=ta[tramo][tah];
							tiEtapometro=tiempoTramo;
							}
							else {u+=v}
	}

	(!variarEtapasOn)&&(t+=u+subTotal(0));
	u="";
	kmEtapometro=deEtapometro=tiEtapometro=0;
	colorT=Math.round(r/tramoRuTAndalus);
	// colorTrack=26>colorT?2:50<colorT?0:1;
	
	if (!variarEtapasOn){
	t+='<tr style="text-align: right;font-size: 12px;font-weight: bold;color: orange;">'+
	   '<td >'+Math.round(w)+' Km</td><td>'+horas(B)+'</td><td>'+A+' m</td><td colspan="2">'+colorT+'<small>/76</small></td><td colspan="2">Total: '+
	   tramoRuTAndalus+' tramos</td></tr></table>'; // </body></html>';

		$("#lista_etapometro").html(t);
		
		var PlanPerfil=[];
	
		activoPE=true;
		PlanRuta.forEach(function(b,c){
			PlanPerfil[1]=[];
			PlanPerfil[1][1]=b[1];
			PlanPerfil[1][2]=b[2];
			SENTIDO=="A"?(s1=pob1,s2=pob2):(s1=pob2,s2=pob1);
			perfil(PlanPerfil, (idioma=='es'?"Tramo: ":"Section: ") + ta[ta[b[1]][s1]][nombre] +' a '+ ta[ta[b[1]][s2]][nombre],10,"provisional"+c);
			})
		activoPE=false;
		
		}else{$("#etapas").text(etapasEtapometro)};
	
	$("#kilometraje").html(htmlIconoM('bici')+Math.round(w)+" Km");
	$('#calcular').attr("src","icon/calcular.svg");	
					
}


function subTotal(b){
	
	return	'<tr><td bgcolor="#008000" colspan="7"></td></tr>'+
			'<tr style="text-align: center; font-size: 12px; font-weight: bold; color: blue;"><td>'
			+htmlIconoM("distancia-mini")+'</td><td>'
			+htmlIconoM("reloj-mini")+'</td><td>'+
			htmlIconoM("desnivel-mini")+'</td><td colspan="4"></td></tr>'+
			'<tr style="background-color: #BFBFBF;text-align: right; font-size: 12px; font-weight: bold; color: blue;"><td>'+Math.round(kmEtapometro-kmTramo*b)+' Km</td><td>'+horas(tiEtapometro-tiempoTramo*b)+'</td><td>'+
 			(deEtapometro-ta[tramo][tah]*b)+'m</td><td colspan="4" style="text-align: center;">'+(idioma=='es'?'Etapa (d&iacute;a): ':'Stage (day): ')+etapasEtapometro+'</td></tr>';

}


function terreno(){
	var terrenoACS="";
	0<ta[tramo][asfalto]&&(terrenoACS+=htmlIconoMicro("carretera")+ta[tramo][asfalto]);0<ta[tramo][camino]&&(terrenoACS+=htmlIconoMicro("camino")+ta[tramo][camino]);0<ta[tramo][sendero]&&(terrenoACS+=htmlIconoMicro("sendero")+ta[tramo][sendero]);
	return terrenoACS
}
	
function dificultadTecnica(){
	return htmlIconoM("tecnica-mini-"+nivel[ta[tramo][tecnica]-1]);
}

function timeTramo(b){
	return tiempoTramo=ta[b][asfalto]/variableE[3]+ta[b][camino]/variableE[4]+ta[b][sendero]/variableE[5]
	}
	
function horas(b){horasT=Math.floor(b);minutosT=Math.floor(Math.round(60*(b-horasT)));return horasT+"h "+minutosT+"'"}

function missTApometro(b){
	
		
	return missTAValoracion='<img src="icon/missta'+b+'.svg">';
	}

// RESETEAR ruTAndalus
/*
function resetearRutandalus(){	
	resetear();
}
*/
function htmlIcono(b){return'<img src="icon/menu/'+b+'.png">'}

function htmlIconoM(b){return'<img src="icon/'+b+'.svg">'}

function htmlIconoMini(b){return'<img src="icon/menu/'+b+'-mini.png">'}

function htmlIconoMicro(b){return'<img width="10px" height="10px" src="icon/menu/'+b+'-mini.png">'}

function htmlIconoMedio(b){return'<img width="20" height="20" src="icon/menu/'+b+'.png">'}

function jsIcono(b){return"icon/mapa/"+b+".png"}

function jsIconoMenu(b){return"icon/menu/"+b+".png"}

// function rectangulos(b){swne(b);esquinas=new google.maps.LatLngBounds(sw,ne);rectangulo[b]=new google.maps.Rectangle({map:map,bounds:esquinas,strokeColor:tinta[colorTrack],strokeOpacity:.3,fillColor:tinta[colorTrack],fillOpacity:.3,clicable:!1});listener(rectangulo[b],"mouseover",function(){audios(b)})}

function resetearRutandalus(){
	itaMedia=itaTotal=pendiente=pendienteMedia=pendienteAnterior=totalPendiente=acumulado=acumulado_total=distancia=distanciaAproximada=tecnicaTotal=distanciaTotal=0;
	iEtapometro=aEtapometro=aRutandalus="";
	etapasEtapometro=1
}

function redondeo(b,c){return parseFloat(b).toFixed(c)}

// function ventanaNavegador(b,c){window.open("","","height=500px,width="+c).document.write(b)}

function puntoPoblacion(b){return punto=trackTA[b].getPath().getAt(0)}

function ll(b,c){return punto=new google.maps.LatLng(b,c)}

function opcionesMarcador(b,c,d){
	
	return{
		map:map,
		position:punto,
		zIndex:b,
		title:c,
		icon:jsIcono(d)
		}
}
	
function listener(b,c,d){return google.maps.event.addListener(b,c,d)}

function gE(b){return document.getElementById(b)}

function gmM(s){return new google.maps.Marker(s)}

function colorPerfil(b){return Math.round((POBLACIONES-ta[b][ita])/(POBLACIONES/5))}

function tipoPoblacion(b){return b<=POBLACIONES?"home":"home2"}

function computarD(b,c){return google.maps.geometry.spherical.computeDistanceBetween(b,c)}

//
// FUNCIONES BÁSICAS NUEVA VERSIÓN -----------------------------------------------------------------------------------
// 

//--------------------------------------------------------- Centrar mapa

function centrarMapa(){map.setOptions({zoom: 8,center: CENTRO})}

// ------------------------------------------------------- Centrar tramo

function centrarTramo(b){
	// swne(b);
	// map.fitBounds(new google.maps.LatLngBounds(sw,ne));
	infomarcador2(b);
	puntoPoblacion(b);
	map.setCenter(punto);
	ventana(ventanaPoblacion);
	$("#lista_buscador").html(infoLateral);	
}


function centrarTramoE(c){		
	$("#buscar"+focusActivo).val(ta[c][nombre]);
	etapometro[focusActivo]=c;
	iniciofinalColocar();
}



function iniciofinalColocar(){
	
	if (etapometro[0] && !etapometro[1]){
	
		if (etapometro[3]){resetMarcador(etapometro[3])};
		
		activarMarcador(etapometro[0],"empezar");
		
		etapometro[3]=etapometro[0];
		
		cambiaEIF(0);
		
		
	
	}else if (!etapometro[0] && etapometro[1]){
		
		if (etapometro[4]){resetMarcador(etapometro[4])};
		
		activarMarcador(etapometro[1],"finalizar");
		
		etapometro[4]=etapometro[1];
		
		cambiaEIF(1);
																		
		}
	
	if(etapometro[0]&&etapometro[1]){calcularTramos()}
}



function resetMarcador(b){
	if(marcadorPoblacion[b]){marcadorPoblacion[b].setOptions({visible: true, icon: jsIcono(tipoPoblacion(b)),draggable: false})};
	
	google.maps.event.clearListeners(marcadorPoblacion[b],'drag');
	google.maps.event.clearListeners(marcadorPoblacion[b],'dragend');// b.clearListeners('dragend');// new google.maps.MapsEventListener.clearListeners(b,'dragend');
}

function activarMarcador(b,c){
	marcadorPoblacion[b].setOptions({visible: true, icon: jsIcono(c),draggable: true})
}

//------------------------------------------------------ Bounds de track

function swne(b){
	var tTA=trackTA[b].getPath();
	var ltTA=tTA.getLength()-1;
	var t0=tTA.getAt(0);
	var t1=tTA.getAt(ltTA);
	
	minimoY=Math.min(t0.lat(),t1.lat());
	maximoY=Math.max(t0.lat(),t1.lat());
	minimoX=Math.min(t0.lng(),t1.lng());
	maximoX=Math.max(t0.lng(),t1.lng());
	
	for(ii=0;ii<ltTA+1;ii++){
		var xTrack=tTA.getAt(ii).lng();
			if (xTrack<=minimoX){minimoX=xTrack} else if (xTrack>maximoX){maximoX=xTrack};
		var yTrack=tTA.getAt(ii).lat();
			if (yTrack<=minimoY){minimoY=yTrack} else if (yTrack>maximoY){maximoY=yTrack};
	}
	sw=ll(minimoY,minimoX);
	ne=ll(maximoY,maximoX);
}


//------------------------------------------------------------- Buscador

function minBuscador(b){	
	if($('#buscar'+b).val().length>3){
		minBuscador2(b);
		}
}

function minBuscador2(b){
	// $("#buscar"+b).val(ta[etapometro[b]=iniciofinalPoblacion][nombre]);
	buscador(b);
	etapometro[b]=iniciofinalPoblacion;
	if (b<3){c=ta[iniciofinalPoblacion][nombre];$("#buscar"+b).val(c)}		
}

function buscador(b){
	listaLateral="";
	encontrado=0;
	lugar=limpiarBuscador($('#buscar'+b).val());
	if (lugar!=""){
		if (b==3){
				// for(var c in circuloSombreado)circuloSombreado[c]&&circuloSombreado[c].setMap(null);
				marcadorInteres.forEach(function(b,d){b&&b.forEach(function(b,c){b&&(b.setMap(null),marcadorInteres[d][c]=null)})});
				ventanaPoblacion.close();
				buscarGrupos();
				if (0==encontrado){totalEncontrado+=htmlIcono("direccion")};
					// totalEncontrado="<!DOCTYPE html><html><head><title></title></head><body>"+totalEncontrado+"</body></html>";
				$("#lista_buscador").css("visibility","visible");
				$("#lista_buscador").html(totalEncontrado); // ventanaLateral(totalEncontrado)
		}
		else if (b==0 || b==1){
			grupo=1;
			// for(var c in circuloSombreado)circuloSombreado[c]&&circuloSombreado[c].setMap(null);
			inicioOfinal=0;
			patronBuscador(TOTAL_POBLACIONES);
			if (0==encontrado){listaLateral="No encontrado"};
			$("#lista_etapometro").html(listaLateral);
			
			}
	}
	return iniciofinalPoblacion;
}


//----------------------------------------------------------Buscar lugar 

function buscarIF(b){
	if ($("#buscar"+b).val()==""){poblacionesProvincia(b)}else{minBuscador2()}
}


function buscarGrupos(){
	grupo=1;
	patronBuscador(TOTAL_POBLACIONES);
	grupo=2;
	for(ii=1;ii<=TOTAL_POBLACIONES;ii++){total2=interes[ii].length,patronBuscador(total2)};
	totalEncontrado="<p class='lugar_encontrado'>Lugar/es encontrado/s: "+encontrado+"</p>"+hr+listaLateral;
	}

function patronBuscador(b){
	pat="";
	var c=new RegExp(lugar,"gi");
	inicioOfinal=0;
	for(i=1;i<=b;i++){
		switch(grupo){
			case 1:
				limpiarBuscador(ta[i][30]);
			break;
			case 2:
				interes[ii][i]&&limpiarBuscador(interes[ii][i][2]);
			break;
			
		}
			busca=c.exec(pat);
			if (busca!=null){
				listadoLateral(i);
				pat="";
				inicioOfinal++;
				if (inicioOfinal==1){iniciofinalPoblacion=i} //alert (i)
				}			
	}
}

function listaBuscador(b){
	return i_buscador='<a id="'+img.name+'" onclick="infopint_lateral'+grupo+'(this);" ><img name="'+img.name+'" src="'+img.src+'" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + b + "</span></a>";
}


// á\u00e1  é\u00e9  í\u00ed  ó\u00f3  ú\u00fa ü\00fc ñ\u00f1

function limpiarBuscador(b){
	// return pat=b.replace(/[\u00e1,a,\u00e9,e,\u00ed,i,\u00f3,o,\u00fa,\u00fc,u,\u00f1,\u00E1,\u00E9,\u00ED,\u00F3,\u00FA,\u00FC,\u00F1]/gi,"-")
	
	// console.log ("Entra BUSCADOR: "+b); // borraralerta
	
	b.replace(/[á]/gi,"a");
	b.replace(/[é]/gi,"e");
	b.replace(/[í]/gi,"i");
	b.replace(/[ó]/gi,"o");
	b.replace(/[ú]/gi,"u");
	b.replace(/[ü]/gi,"u");
	b.replace(/[ñ]/gi,"n");
	b.replace(/ /gi,"-");
	// console.log ("Salida BUSCADOR: "+b); // borraralerta
	return pat=b
}

function cambiarHtml(b){
	return pat=b.replace(/<br>/gi,"\n")
}

function infopint_lateral1(b){
	puntop=b.id; 
	puntoPoblacion(puntop);
	infomarcador2(puntop);
	ventana(ventanaPoblacion);
}


function infopint_lateral2(b){
	n=b.id.split(",");
	tramo=n[0];
	pTramo=n[1];
	infopint2(n[0],n[1]);
	map.setCenter(ll(interes[n[0]][pTramo][y],interes[n[0]][n[1]][x]));
	ventana(ventanaPoblacion)
}



function listadoLateral(b){
	switch(grupo){
		case 1:
			imagen(b,"home-mini");
			punto=puntoPoblacion(b); // trackTA[b].getPath().getAt(0);
			listaBuscador(ta[b][nombre]);
			b>POBLACIONES&&colocarPoblaciones2(b);
		break;
		
		case 2:
			interes[ii][b]&&(ll(interes[ii][b][y],interes[ii][b][x]),
			ij=50>interes[ii][b][3]?interes[ii][b][3]:11,
			imagen(ii+","+b,icono[ij]+"-mini"),
			listaBuscador(interes[ii][b][2]),
			interesTramo(ii,b));
		break;
	}
		encontrado++;
		map.setCenter(punto);
		map.setZoom(9);
		listaLateral+="<p class='lugar_encontrado'>"+i_buscador+'<hr style="margin-left: 40px;">';
}


function cambiaIF(b){
	minBuscador(b);
	iniciofinalColocar();
}


function focusIFA(b){
	focusActivo=b;
	if ($("#buscar"+b).val()==""){
		$("#lista_etapometro").html(poblacionesProvincia(b));
		}
	
	$("#lupa_"+b).attr("src","icon/buscar.svg");
	$("#buscar"+b).css("background-color","orange");
	for (var c=0;c<3;c++){
		if (b!=c){
			$("#buscar"+c).css("background-color","initial");
			$("#lupa_"+c).attr("src","icon/buscar_sombra.svg");
			}
		}
}


function focusNo(b){
	$("#lupa_"+b).attr("src","icon/buscar_sombra.svg");
	
}

//------------------------------------------------------ Calcular etapas
	
function calcularEtapas(){
	calcularTramos();
	rutaTA()	
}
	
	
//-------------------- Cambiar sentido	de la ruta (Antihorario/Horario)
	
function cambiarSentido(){	
	
	if (SENTIDO=="A"){SENTIDO="H"}else{SENTIDO="A"}
	$("#sentido").attr({src: "icon/sentido"+SENTIDO+".svg"});
	google.maps.event.clearListeners(marcadorPoblacion[etapometro[0]],'dragend');
	google.maps.event.clearListeners(marcadorPoblacion[etapometro[1]],'dragend');											
	
	if(etapometro[0]&&etapometro[1]){
			
			var ii=etapometro[0];
			etapometro[0]=etapometro[1];
			etapometro[1]=ii;	
				
			$("#buscar0").val(ta[etapometro[0]][nombre]);
								
			$("#buscar1").val(ta[etapometro[1]][nombre]);
												
			calcularTramos();
			
			if (perfilActivo){perfilEtapometro()}
	}

}


//------------------------------------------------------ Calcular tramos


function calcularTramos(){
													
	if (etapometro[0]&&etapometro[1]){	
		
		resetearPlanRuta();

		nodoActual=etapometro[0];
		
		if (nodoActual>77){marcadorAlterna[nodoActual]=true};
		
		nodoSiguiente=0;
		var nodoDesvio=false;
		var igualIF=false;
		var iconoFinal="finalizar";
			
		if (etapometro[0]==etapometro[1]) {igualIF=true;iconoFinal="mixto"}
		
		while(igualIF || (nodoActual!=etapometro[1])){					
			
				if (nodoSiguiente==0 && igualIF==true){
				
					igualIF=false;
					nodoSiguienteIgual(nodoActual)
				}
			
			
				switch(nodoActual){
					
					case 83: nodoSiguiente=80; break;
					
					case 84: nodoSiguiente=72; break;
					
					case 85: nodoSiguiente=65; break;
					
					case 86: nodoSiguiente=5; break;
					
					case 87: nodoSiguiente=17; break;
					
					case 88: nodoSiguiente=25; break;
										
					case 5: vueltaE(86); break;
					
					case 17: vueltaE(87); break;
					
					case 25: vueltaE(88); break;
					
					case 44: 

						if
						(
						(((etapometro[1]>77) && (etapometro[1]<81)) || etapometro[1]==83)
						)
						{
						nodoSiguiente=78	
						}
						else if 
						(
						(etapometro[0]==etapometro[1]) && (((etapometro[1]>77) && (etapometro[1]<81)) || etapometro[1]==83) && (primeraVuelta==false)
						)
						{
						nodoSiguiente=78				
						}
						
						else if 
						(
						(etapometro[0]==etapometro[1]) && (((etapometro[1]>77) && (etapometro[1]<81)) || etapometro[1]==83) && (primeraVuelta==true)
						) 
						
						{
							primeraVuelta=false;
							findelMundo(nodoActual);
						} 
						else if
						(
						((etapometro[2]>77) && (etapometro[2]<81))
						)
						{
							if (nodoDesvio=46 && SENTIDO=="H"){nodoSiguiente=43}else{nodoSiguiente=78}	
						}
						else
												
						{
						findelMundo(nodoActual);
						}
						
					nodoDesvio=44;
					
					break;
					
					case 46:
				
						if 
						(
						(etapometro[0]==etapometro[1]) && (((etapometro[1]>77) && (etapometro[1]<81)) || etapometro[1]==83) && (primeraVuelta==true)
						) 
						
						{
							primeraVuelta=false;
							findelMundo(nodoActual);
						} 
						else if 
						(
						(etapometro[0]==etapometro[1]) && (((etapometro[1]>77) && (etapometro[1]<81)) || etapometro[1]==83) && (primeraVuelta==false)
						)
						{
						nodoSiguiente=80				
						}
						else if
						(
						((etapometro[2]>77) && (etapometro[2]<81))
						)
						{
							if (nodoDesvio=44 && SENTIDO=="A"){nodoSiguiente=47}else{nodoSiguiente=80}	
						}
						else
												
						{
						findelMundo(nodoActual);
						}
						
						nodoDesvio=46;

					break;
					
					case 65: vueltaE(85); break;
					
					
					case 72: // Nodo Nigüelas
					
						
							if (((etapometro[1]==84) || (etapometro[1]==82) && primeraVuelta==false)){nodoSiguiente=etapometro[1]}
							else if 
							(etapometro[1]!=84 && etapometro[2]==82 && SENTIDO=="A"){nodoSiguiente=82}
							else 
							{
								if (SENTIDO=="A"){nodoSiguiente=73}else{nodoSiguiente=71}
								
								}

							primeraVuelta=false;
							nodoDesvio=72;

					break;
					
					
					case 73:
					
						if (SENTIDO=="H" && etapometro[1]==82 && (primeraVuelta==false)){nodoSiguiente=82}
							else if (SENTIDO=="H" && (etapometro[2]==82)){nodoSiguiente=82}
								else {findelMundo(nodoActual)}
						
						primeraVuelta=false;	
						nodoDesvio=73;
					
					break;
					
					case 78:
											
						if (nodoDesvio==44){nodoSiguiente++}
							else if (nodoDesvio==46){nodoSiguiente=44}
								else if (SENTIDO=="A"){nodoSiguiente=79}
									else if (SENTIDO=="H"){nodoSiguiente=44}
					break;
					
					case 79:
					
						if (nodoDesvio==44){nodoSiguiente++}
							else if (nodoDesvio==46){nodoSiguiente--}
								else if (SENTIDO=="A"){nodoSiguiente=80}
									else if (SENTIDO=="H"){nodoSiguiente=78}
					
					break;
					
					case 80:
					
						if (etapometro[1]==83 && (primeraVuelta==false)){nodoSiguiente=83}
							else
								{
									if (nodoDesvio==44 || (SENTIDO=="A")){nodoSiguiente=46}else if (nodoDesvio==46 || (SENTIDO=="H")){nodoSiguiente=79}	
								}
					break;
					
					case 82:
					
						if (nodoDesvio==72){nodoSiguiente=73}
							else if (nodoDesvio==73){nodoSiguiente=72}
								else if (SENTIDO=="A"){nodoSiguiente=73}
									else if (SENTIDO=="H"){nodoSiguiente=72}
						
					break;
				
					default:
					
					findelMundo(nodoActual);
				}
				
				
				if(nodoSiguiente>77){
					marcadorAlterna[nodoSiguiente]=true;
					marcadorPoblacion[nodoSiguiente].setOptions({visible:true});
				}
				

				tramoPlan(nodo[nodoActual][nodoSiguiente]);			
				nodoActual=nodoSiguiente;

				}


	} else {
		$("#lista_etapometro").html('<img src="icon/calcular.svg"></img>Seleccione poblaciones de inicio y final para calcular su ruta.')
		}
															
		activarMarcador(etapometro[0],'empezar');
						
		activarMarcador(etapometro[1],iconoFinal);										
									
		etapometro[3]=etapometro[0];
		etapometro[4]=etapometro[1];
		
		cambiaEIF(0);
		cambiaEIF(1);

}


//-------------- Decide nodo siguiente cuando inicio y final son iguales

function nodoSiguienteIgual(nodoActual){
	primeraVuelta=true;
	switch(nodoActual){
					
					case 83: nodoSiguiente=80;	break;
					
					case 84: nodoSiguiente=72;	break;
					
					case 85: nodoSiguiente=65;	break;
					
					case 86: nodoSiguiente=5; 	break;
					
					case 87: nodoSiguiente=17;	break;
					
					case 88: nodoSiguiente=25;	break;
										
					case 78:
											
						if ((SENTIDO=="A")){nodoSiguiente=79}else{nodoSiguiente=44}

					break;
					
					case 79:
						
						if ((SENTIDO=="A")){nodoSiguiente=80}else{nodoSiguiente=78}

					break;
					
					case 80:
					
						if (nodoDesvio==44 || (SENTIDO=="A")){nodoSiguiente=46}else if (nodoDesvio==46 || (SENTIDO=="H")){nodoSiguiente=79}

					break;
					
					case 82:
					
						if (SENTIDO=="A"){nodoSiguiente=73}else{nodoSiguiente=72}
					
					break;
					
					default:
						primeraVuelta=false;
						findelMundo(nodoActual)
					}			
}


//------------------------------------ Completa vuelta a la TransAndalus

function vueltaE(b){
	if (etapometro[1]==b && (primeraVuelta==false)){nodoSiguiente=b}
					else
					{
						if ((etapometro[0]==etapometro[1]) && (etapometro[1]==b) && (primeraVuelta==true)){primeraVuelta=false}
						findelMundo(nodoActual)		
					}							
}

//---------------------------------------------- Sigue ruta CONVENCIONAL

function findelMundo(nodoActual){
	if(SENTIDO=="A"){nodoSiguiente=nodoActual+1;if(nodoSiguiente>76){nodoSiguiente=1}}
				else{nodoSiguiente=nodoActual-1;if(nodoSiguiente<1){nodoSiguiente=76}}	
}



//-------------------------------------------------- Resetear etapómetro

function resetearEtapometro(){
	resetearPlanRuta();
	etapometro=[];
	$("#buscar0").val("");
	$("#buscar1").val("");
	$("#buscar2").val("");
	$("#lista_etapometro").html("");
}


//----------------------------------------------- Resetear Planificación

function resetearPlanRuta(){
	
		if(PlanContador>0){												
			
			for (var e=1;e<=TOTAL_POBLACIONES;e++){
				trackTA[e].setOptions({
							strokeColor:e<=POBLACIONES?"#FF00E2":"#0000E9",
							strokeWeight: ancho
							})			
				}
		}
		
		if (etapometro[3] && etapometro[3]!=etapometro[0]){resetMarcador(etapometro[3])};
		
		if (etapometro[4] && etapometro[4]!=etapometro[1]){resetMarcador(etapometro[4])};
		
		resetMarcador(etapometro[0]);
		resetMarcador(etapometro[1]);
		PlanRuta=[];
		tramoAlterna=[];
		marcadorAlterna=[];														
		PlanContador=0;				
	
}

//----------------------------------------------------- Menú desplegable

( function( $ ) {
	$( document ).ready(function() {
		$('#menu li.has-sub>a').on('click', function(){
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});
	$('#menu>ul>li.has-sub>a').append('<span class="holder"></span>');
	});
} )(jQuery);


//------------------------------------------------------------ Capas KML


// Capa alojamiento KML

function alojamientoOn(){
	if (!AlojamientoKML){
		AlojamientoKML=new google.maps.KmlLayer("http://www.vita.comuv.com/alojamientos.kml",{map:map})
		}
		else{if(AlojamientoKML!=undefined){AlojamientoKML.setMap(null)}}
}

// Capa transporte KML

function transporteOn(){
	transporteKML?(transporteKML.setMap(null),transporteKML=!1):(transporteKML=new google.maps.KmlLayer("http://www.vita.comuv.com/estaciones.kmz",{map:map}))
}

// Capa camping KML

function campingOn(){
	campingKML?(campingKML.setMap(null),campingKML=!1):(campingKML=new google.maps.KmlLayer("http://www.vita.comuv.com/camping.kml",{map:map}))
}


//------------------------------------------------------------ Traductor

app.config(function($translateProvider){
	  $translateProvider
	  .translations('en', {
		volver_principal: 'Main page',
		menu: 'Main menu',
		ayuda: 'Help',
		idioma: 'Languaje (ES/EN)',
		cerrar: 'Close tab',
		plegar: 'Fold over',
		desplegar: 'Unfold',
		plegardesplegar: 'Fold over or Unfold Stagemeter',
		buscar_transandalus: 'Search in TransAndalus',
		buscar: 'Search',
		etapometro: 'Stagemeter',
		poblaciones: 'Towns',
		alternativas: 'Alternatives | Links',
		alternativa: 'Alternative stage',
		sentido: 'Route direction',
		servicios: 'Services',
		alojamiento: 'Lodgings',
		talleres: 'Bicycle workshops',
		camping: 'Campings',
		estacionestren: 'Train stations',
		climatologia: 'Weather',
		temperatura: 'Temperature',
		lluvia: 'Rain',
		nieve: 'Snow',
		viento: 'Wind',
		otros: 'Others',
		centrar: 'Map center',
		inicio: 'Starting route',
		final: 'Ending route',
		variables: 'Stagemeter Options',
		calcular: 'Work out planned route',
		borrar: 'Deleting planned route',
		perfil: 'Profile of planned route',
		opciones: 'Maximum stage values',
		maxetapas: 'Stages'
	  })
	  
	  .translations('es',{
		volver_principal: 'Volver a principal',
		menu: 'Men\u00fa principal',
		ayuda: 'Ayuda',
		idioma: 'Idioma (ES/EN)',
		cerrar: 'Cerrar ventana',
		plegar: 'Ocultar ventana',
		desplegar: 'Desplegar',
		plegardesplegar: 'Plegar o desplegar Etap\u00f3metro',
		buscar_transandalus: 'Buscar en TransAndalus',
		buscar: 'Buscar',
		etapometro: 'Etap\u00f3metro',
		poblaciones: 'Poblaciones',
		alternativas: 'Alternativas | Enlaces',
		alternativa: 'Tramo alternativo',
		sentido: 'Sentido de la ruta',
		servicios: 'Servicios',
		alojamiento: 'Alojamiento',
		talleres: 'Talleres/tiendas de bici',
		camping: 'Camping',
		estacionestren: 'Estaciones de tren', 
		climatologia: 'Capas climatol\u00f3gicas',
		temperatura: 'Temperatura',
		lluvia: 'Lluvia',
		nieve: 'Nieve',
		viento: 'Viento',
		otros: 'Otros',
		centrar: 'Centrar mapa',
		inicio: 'Inicio de ruta',
		final: 'Final de ruta',
		variables: 'Opciones de etapa',
		calcular: 'Calcular ruta planificada',
		borrar: 'Borrar ruta planificada',
		perfil: 'Perfil de la ruta planificada',
		opciones: 'Valores m\u00e1ximos por etapa',
		maxetapas: 'Etapas'
	  });
	$translateProvider.preferredLanguage('es');
});  


app.controller('ctrl', ['$translate', '$scope', function ($translate, $scope) {
    $scope.changeLanguage = function () {
		// alert ($translate.use()); // borraralerta
        $translate.use() === 'es'? ($translate.use('en'),idioma='en') : ($translate.use('es'),idioma='es');
        gE("iconoIdioma").src="icon/"+ $translate.use()+".svg";
    };
}]);


function masAlterna(){$("#alternativas").click()}


function drag(b){
	
	$("#buscar"+b).focus();
	
	new google.maps.event.addListenerOnce(map, "mouseover", function(c){

	var tol=0.2;
	var d=c.latLng; 
	
		marcadorPoblacion.forEach(function(m,i){
				
				var f=m.getPosition();
				
				if (
					((d.lng()<(f.lng()+tol)) && (d.lng()>(f.lng()-tol))&&(d.lat()<(f.lat()+tol))
					&& (d.lat()>(f.lat()-tol)))
					){marcadorElegido=i}
		});
		
		if(marcadorElegido!=false 
		
				&& 
				(
				(marcadorElegido!=etapometro[0] && b==0) 
				||
				(marcadorElegido!=etapometro[1] && b==1)
				)
				||
				(!etapometro[0] && !etapometro[1])
			
			){
				
				
			marcadorPoblacion[marcadorElegido].setOptions({										// Restaurar anterior marcador
						draggable: true,
						icon: jsIcono(b==0?"empezar":"finalizar")
						});
			
			
			if (etapometro[3]!=0){resetMarcador(etapometro[3])}
		
			if (etapometro[4]!=0){resetMarcador(etapometro[4])}
			
			etapometro[b]=marcadorElegido;
			
			etapometro[b+3]=etapometro[b];
			
			$("#buscar"+b).val(ta[etapometro[b]][nombre]);	
			
			marcadorElegido=false;
			
			iniciofinalColocar();
			
			}			
		});
}


function activoOn(b){b.src="icon/"+b.name+"1.svg"}

function activoOff(b){b.src="icon/"+b.name+".svg"}

function imprimirEtapometro(){$("#lista_etapometro").print()}



function incluirMenu(){
	for (var p=0;p<8;p++){
		$("#prov"+p).append('<ul></ul>');
		for (var ppp,pp=2;pp<=77;pp++){
			if (pp>76){ppp=1}else{ppp=pp}
			if (p==ta[ppp][provNumero]){
				$("#prov"+p+" ul").append(
					'<li><a href="#" onclick="centrarTramo('+ppp+')"><img src="icon/menu/home-mini.png"><span> '+ta[ppp][nombre]+'</span></a></li>'
				)
			}
		}
		$("#prov"+p+"ul:last").addClass('last')
	}
}


// Create a jquery plugin that prints the given element.
jQuery.fn.print = function(){
    // NOTE: We are trimming the jQuery collection down to the
    // first element in the collection.
    if (this.size() > 1){
        this.eq( 0 ).print();
        return;
    } else if (!this.size()){
        return;
    }

    // ASSERT: At this point, we know that the current jQuery
    // collection (as defined by THIS), contains only one
    // printable element.

    // Create a random name for the print frame.
    var strFrameName = ("printer-" + (new Date()).getTime());

    // Create an iFrame with the new name.
    var jFrame = $( "<iframe name='" + strFrameName + "'>" );

    // Hide the frame (sort of) and attach to the body.
    jFrame
        .css( "width", "1px" )
        .css( "height", "1px" )
        .css( "position", "absolute" )
        .css( "left", "-9999px" )
        .appendTo( $( "body:first" ) )
    ;

    // Get a FRAMES reference to the new frame.
    var objFrame = window.frames[ strFrameName ];

    // Get a reference to the DOM in the new frame.
    var objDoc = objFrame.document;

    // Grab all the style tags and copy to the new
    // document so that we capture look and feel of
    // the current document.

    // Create a temp document DIV to hold the style tags.
    // This is the only way I could find to get the style
    // tags into IE.
    var jStyleDiv = $( "<div>" ).append(
        $( "style" ).clone()
        );

    // Write the HTML for the document. In this, we will
    // write out the HTML of the current element.
    objDoc.open();
    objDoc.write( "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">" );
    objDoc.write( "<html><body><head><title>ViTA-Visor de TransAndalus</title>" );
    // objDoc.write( "" );
    // objDoc.write( "" );
    // objDoc.write( "" );
    // objDoc.write( document.title );
    // objDoc.write( "" );
    objDoc.write( jStyleDiv.html() );
    objDoc.write( "</head>" );
    objDoc.write( this.html() );
    objDoc.write( "</body></html>" );
    // objDoc.write( "" );
    objDoc.close();

    // Print the document.
    objFrame.focus();
    objFrame.print();

    // Have the frame remove itself in about a minute so that
    // we don't build up too many of these frames.
    setTimeout(
        function(){
            jFrame.remove();
        },
        (60 * 1000)
        );
}


// -----------AUXILIAR

function crearJSON(){	
	$("#lista_etapometro").html(JSON.stringify(aTA));	
}
