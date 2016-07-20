//------------------------------------------------------------ Variables

var ta=[];
var interes=[];
var principal=[];
var totalPrincipal=principal.length;
var andalucia=["Almer\u00eda",37.45,-2.122,"C\u00e1diz",36.255,-5.376,"C\u00f3rdoba",37.968,-4.852,"Granada",37.372,-3.028,"Huelva",37.516,-6.604,"Ja\u00e9n",37.777,-3.605,"M\u00e1laga",36.705,-4.627,"Sevilla",37.258,-5.363];

var nodo=[];
var sentidoah=[];
var aTA=[];

var tinta="#75B628 #0080C9 #F7A600 #E30713 #221D45 #A020F0 #FFFF00 #8B6914".split(" ");
var nivel=["bajo","medio","alto"];

var POBLACIONES=76;
var ENLACES=ALTERNATIVAS=6;
var TOTAL_POBLACIONES=POBLACIONES+ENLACES+ALTERNATIVAS;

var CENTRO=ll(37.34395908944491, -4.9053955078125);

WEB="http://www.transandalus.org/";
RUTA="TransAndalus";
INFO="html/"+RUTA+".html";

var ancho=3.8;
var opacidad=.5;

var etapasEtapometro=0;
var meteoRuta="";
var pvAnterior=false;// pvAnterior=8;

var PlanRuta=[];
var PlanPerfil=[];
var PlanContador=0;
var OWM=[4];OWM[0]=false;OWM[1]=false;OWM[2]=false;OWM[3]=false;

var servicio=[];
var servicioOk=[];
var marcadorOk=[];
for (var i=0; i<2; i++){marcadorOk[i]=false}
for (var i=0; i<9; i++){servicioOk[i]=false}

//----------------------------------- Opciones por defecto de Etapómetro

var variableE=[];
	variableE[0]=70;   // Distancia máxima de cada etapa (Km)
	variableE[1]=1500; // Desnivel acumulado positivo máximo (metros)
	variableE[2]=8;    // Duración máxima de cada etapa (horas)
	variableE[3]=20;      // Velocidad máxima asfalto
	variableE[4]=14;      // Velocidad máxima camino/pista
	variableE[5]=5;       // Velocidad máxima sendero
	variableE[6]=variableE[7]=variableE[8]=!0; // Variables vincular velocidades


var trackTAA=[];
var trackTA=[];
var poligonoProvincia=[];
var marcadorInteres=[];
var marcadorServicios=[];for(var i=0;i<9;i++){marcadorServicios[i]=[]};
var listaAlternativas=[21,22,23,24,52,53,83,84,85,86,87,88];
for(var i=1;i<=TOTAL_POBLACIONES;i++){marcadorInteres[i]=[]};
var iconoServicio=["lodging-2","restaurant","supermarket","drugstore","bicycle_shop","information","police","train","information"];

//--------------------------------------------- Coordenadas y altimetría

var y=3;
var x=2;
var a=2;

//-------------------------------------------------------------Servicios

var ibp=[,27,13,9,37,32,120,5,32,43,26,63,47,49,65,34,28,10,2,23,10,22,11,12,30,19,6,16,23,15,2,35,93,67,60,22,132,116,96,72,37,93,77,79,46,99,26,32,68,76,48,187,87,159,126,60,91,64,111,72,150,60,5,40,49,93,35,63,107,47,25,18,51,121,87,132,31,91,87,24,37,2,64,155,3,2,170,103,27]

var nombre=0,
    provNumero=1,
    asfalto=2,
    camino=3,
    sendero=4,
    tecnica=5,
    ita=6,
    missta=7,
    pob1=8,
    pob2=9,
    acumuladoAH=10,
    acumuladoHO=11,
    turismo=12;
    meteo=13;
    
var alterna=false;
var vienedeEtapometro=false;

//-----------------------------------------------------Angular Translate

var app=angular.module('myApp', ['pascalprecht.translate']);

app.config(function($translateProvider){

	$translateProvider.useStaticFilesLoader({
		prefix: './language/',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('es');

});  


app.controller('ctrl', ['$translate', '$scope', function ($translate, $scope) {
			$scope.changeLanguage = function () {
				$translate.use() === 'es'? ($translate.use('en')) : ($translate.use('es'));
			gE("iconoIdioma").src="icon/"+ (idioma=$translate.use()) +".svg";
			};
}]);


var menuPrincipalVisible=false;
var etapometroActivo=false;
var perfilAnterior=perfilActivo=false;
var etapometroActivo=false;
var mapaAnterior=1;
var SENTIDO="A";
var etapometro=[];etapometro[0]=etapometro[1]=etapometro[2]=etapometro[3]=etapometro[4]=false;
var menuvita=true;
var pvTemporal=true;
var climataAnterior=false;
var marcadorElegido=false;
var V=[];
var variarEtapasOn=false;
var idioma='es';
var activoPE=false;
var primeraVuelta=false;
var nodoActual=false;
var focusActivo=false;
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
		
mapaOWM[1]=new google.maps.ImageMapType({
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
	getTileUrl:function(b,c){return"http://undefined.tile.openweathermap.org/map/snow/"+c+"/"+b.x+"/"+b.y+".png"
				},
		tileSize:tam,
		isPng:true,
		opacity:.7,
		alt:"OWMsnow",
		name:"OWMsnow",
		maxZoom:19
});
	
		
mapaOWM[4]=new google.maps.ImageMapType({
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
			disableDoubleClickZoom:true

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
					trackTAA=data;
						$.getJSON( "json/altitud.json", function( data ) {
							aTA=data;
								$.getJSON( "json/marcador.json", function( data ) {
									interes=data;
									$.getJSON( "json/servicio.json", function( data ) {
											servicio=data;
										$.getJSON( "json/nodo.json", function( data ) {
											  nodo=data;
												$.getJSON( "json/sentido.json", function( data ) {
													sentidoah=data;
														$.getJSON( "json/icono.json", function( data ) {
															icono=data;
																$.getJSON( "json/provincia.json", function( data ) {
																	poligonoProvincia=data;
																	
																	verProvincias();
																	colocarPoblaciones();
																	incluirMenu();
																	setTimeout("borrarInicio()",3000);
																	
																});
														
														});
												});	
										});
										
									});	
								});
						
						});	
				});
		});
}


//--------------------------------- Perfil de Etapómetro (Planificación)

function perfilEtapometro(){
	if (PlanContador>0){
		// perfil(PlanRuta, (idioma=='es'?"Etapometro: ":"Stagemeter: ")+ta[etapometro[0]][nombre] + ' ===> ' + ta[etapometro[1]][nombre],PlanRuta.length,"chart_perfil")
		perfil(PlanRuta, ta[etapometro[0]][nombre] + ' ===> ' + ta[etapometro[1]][nombre],2,"chart_perfil")
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
			colorGrafico=tinta[ta[e[1]][ita]];
			data.addRow([DistanciaX,aTA[e[1]][p]]);	
			tTAtotal.push(tTA.getAt(p));
			ppp=0;	
			
			while ( ((e[2]=="A")&&(p<t-1)) || ((e[2]=="H")&&(p>0)) )	
							
				{
					ppp++;
					DistanciaX+=google.maps.geometry.spherical.computeDistanceBetween(tTA.getAt(p),tTA.getAt(p+1))/1000;
					
					DistanciaX=parseFloat(redondeo(DistanciaX,2));
					if (ppp==r){
						tTAtotal.push(tTA.getAt(p+1));	
						data.addRow([DistanciaX,aTA[e[1]][p+1]]);
						ppp=0;
					}
					if (e[2]=="A"){p+=1}else{p-=1};
				}	
		}
	});

// var ccount=Math.round(DistanciaX/10)+1
// if (DistanciaX<20){ccount=5}else if (DistanciaX=>20 && DistanciaX<40){ccount=6}else{ccount=8}

//ccount=(DistanciaX/5) + 
var rejillaPerfil="#BFBFBF"; // "#FFFFFF"
var textoPerfil="#0000FF"; // "#FFFFFF"
var tticks=[];
var ccount=(DistanciaX/5);
for (var i=0; i<=5;i++){tticks[i]=i*ccount}

	
		
		var tt=idioma=='es'; 
		var options = {
				title: c,
				titleTextStyle: {color: '#008000',fontSize: "25px", bold: true,italic: true}, // color: "#0000FF"
				backgroundColor: "null",
				// opacity: 0.8,
				hAxis: {title: (tt?'Distancia (Km)':'Distance (Km)'),
						titleTextStyle: {color: textoPerfil},
						textStyle: {color: textoPerfil},
						// minValue: 0,
						//maxValue: DistanciaX,
		// showTextEvery: 1,				
    // gridlines: {count: 11},
    //showTextEvery: 1,
    // viewWindowMode:  'pretty',
    format: '##'
						,ticks: tticks// [0, 5, 10,15, 20,25, 30,35,40,47]
						},
				vAxis: {title: (tt?'Altitud (msnm)':'Elevation (masl)'),
						titleTextStyle: {color: textoPerfil},
						textStyle: {color: textoPerfil},
						minValue: 0},
				colors: [(r==1 || r==3)?colorGrafico:'#FF0000', '#90EE90'],// [d=='chart_perfil'?rejillaPerfil:colorGrafico,'#90EE90'], // d=='chart_perfil'?'#FF0000':colorGrafico, '#90EE90'
				crosshair: {color: '#000',trigger: 'selection'},
				curveType: 'function',
				legend: 'none'
				
				,chartArea:{left:'12%',top:'10%',width:'85%',height:'70%'}
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
		$('#chart_perfil').css("visibility","visible").css("background-color","transparent");
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
			$("#selectorcapa"+ii).css("transform",menuPrincipalVisible?"translate(+325px, 0%)":"translate(0%, 0%)")
						         .css("transition",menuPrincipalVisible?"all 0.60s ease-in-out":"all 0.60s ease-in-out");
		}
		
}

function desplazarEtapometro(){
	if ($("#lista_etapometro").css("top")=="160px"){
				$("#lista_etapometro").css("top","0px");
				$("#subaj").attr("src","icon/bajar.svg");
			}
			else{
					$("#lista_etapometro").css("top","160px");
					$("#subaj").attr("src","icon/subir.svg");
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
	$("#pestana").css("visibility","visible").toggleClass("active");
	
	if(etapometroActivo=!etapometroActivo){$("#pestana").css("background-image","url(icon/replegar.svg)")}
		else{$("#pestana").css("background-image","url(icon/desplegar.svg)")}
		
	if ($("#lista_etapometro").html()==''){$("#lista_etapometro").html(poblacionesProvincia(1))}
	
}

//------------------------------------- Pestaña ETAPÓMETRO (ver/ocultar)

function esconderPestana(){
	
	if (menuPrincipalVisible){desplegarMenu();menuPrincipalVisible=false}
		else {
				$("#trigger").css("visibility","visible");
				
				if ($("#lista_buscador").html()!=""){$("#lista_buscador").css("visibility","visible")}; 
				
				$("#pestana").toggleClass("active");
				$("#menu_etapometro").toggleClass("active");
				$("#lista_etapometro").toggleClass("active");
				$("#pestana").css("visibility","hidden").css("background-image","url(icon/replegar.svg)");
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

function limiteProvincias(){for(var pv=0;pv<8;pv++){limite(pv)}}

function limite(b){

	// if(!pvTemporal){
		
		if (!poligonoProvincia[b].getVisible()){
			poligonoProvincia[b].setOptions({visible: true});
			if (pvAnterior && (pvAnterior!=b)){// if (pvAnterior!=8 && (pvAnterior!=b)){
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
	// }
}


//---------------------------------- Simular click para cerrar Provincia

function cerrarProvincia(b){
	
	listener(poligonoProvincia[b],"click",function(){
		
		var element = $("#prov"+b);
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();

			}
			
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

		for (var b=1;b<=TOTAL_POBLACIONES;b++){ // Total Poblaciones = 88
			 
			trackTA[b]=new google.maps.Polyline({
					path: extraerTrack(b),
					map:map,
					strokeColor: colorTrack(b), 
					strokeWeight: ancho,
					strokeOpacity: opacidad,
					clickable:true,
					zIndex:b
					});
	
			if ((b!=21) && (b!=52)){colocarPoblaciones2(b)} // Omitir poblaciones alternativas con elmismo nodo (Moguer = 21) // (Nigüelas = 52) 
			
			swne(b);
			perfilTramo(trackTA[b],b,maximoY,maximoX);
			
			}
}


function extraerTrack(b){
	nuevotrack=new google.maps.MVCArray;
	for (bb=0;bb<(trackTAA[b].length/2);bb++){

		nuevotrack.push(ll(trackTAA[b][bb*2],trackTAA[b][(bb*2)+1]));
		
		}
	return nuevotrack;
	}



function colocarPoblaciones2(b){

	puntoPoblacion(b);
	marcadorPoblacion[b]=gmM(opcionesMarcador(b,ta[b][0],tipoPoblacion(b)));
	listener(marcadorPoblacion[b],"mouseover",function(){infomarcador(b)});
}


//-------------------------------------- Listar poblacions por provincia

function poblacionesProvincia(c){
	
	i_poblacion="";	 
	if (c!=2){for (var b=0;b<=7;b++){provinciaListar(b,0)}}
		else {provinciaListar(2,1);provinciaListar(3,1);provinciaListar(4,1);provinciaListar(5,1);provinciaListar(6,1);provinciaListar(7,1)}
		
	return i_poblacion;
}


function provinciaListar(b,c){
	
		i_poblacion+='<div style="background-image: url(img/provincia/'+b+'.svg); background-repeat: no-repeat;background-position: center; width:auto; height:auto;">';
			i_poblacion+=hr+htmlIcono('bandera')+"  "+andalucia[3*(b)]+hr;

			for(var i=1;i<=TOTAL_POBLACIONES;i++)
			{
					if ((c==0 && (i!=21 && i!=52)) || (c==1 && (i>21 && i<25) || i==53 || i>82))
					{
						if (b==ta[i][provNumero])
						{
								puntoPoblacion(i),
								imagen(i,"home-mini"),
								grupo=1,
								i_poblacion+='<li onclick="centrarTramoE('+i+')"><a id="'+img.name+'" class="lugar_encontrado"><img src="'+img.src+'" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + ta[i][nombre] + "</a></li>";
						}
					}
			}
		i_poblacion+='</div>';		
}


// ---------------------------Colocar iconos de poblaciones alternativas


function poblacionesAlternativasOn(){
	
	if (!(alterna && !($("#alternativas").hasClass('open'))) || vienedeEtapometro){
		alterna=!alterna;
		if (alterna){$('#cuadro_etapometro').append($("#buscarAlternativas").html())}
			else{$("#cuadro_etapometro tbody:last").remove()}
			vienedeEtapometro=false;
		}
	
	// if (vienedeEtapometro){
	
	//}		
	verAlternativas();	
}


function verAlternativas(){
	
		for(var ii=0; ii<listaAlternativas.length;ii++){
			
			i=listaAlternativas[ii];
				if (PlanContador>0){
						
							if (tramoAlterna[i]){trackTA[i].setOptions({visible:true})}
								else{trackTA[i].setOptions({visible:alterna})}
													
				} else if (PlanContador==0){trackTA[i].setOptions({visible:alterna})}
				
				if (21!=i&&52!=i){ // 21 Moguer // 52 Nigüelas
					
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

// function puntos_principalesOn(){(principales=!principales)?(Fon(gE("interes")),puntos_principales()):(Foff(gE("interes")),borrarPrincipales(),ventanaPoblacion.close())}
/*
function puntos_principales(){
	i_puntos="<p>"+htmlIcono("importante")+rojo3+"Inter&eacute;s  e  incidencias:"+"</p>"+hr;
	for(i=0;i<totalPrincipal-2;i+=2)
	{tramo=principal[i],pTramo=principal[i+1],
		iNom=tramo+","+pTramo,
		ll(interes[tramo][pTramo][y],
		interes[tramo][pTramo][x]),
		grupo=2,
		cambiarHtml(interes[tramo][pTramo][nombre]),
		marcadorPrincipal[i/2+1]=gmM(opcionesMarcador(1,pat,interes[tramo][pTramo][1]))
		,infopint(marcadorPrincipal[i/2+1],
		tramo,pTramo),
		imagen(iNom,interes[tramo][pTramo][1]),
	i_puntos+=listaBuscador(verde2+"Tramo: "+ta[ta[tramo][pob1]][nombre]+hacia+ta[ta[tramo][pob2]][nombre]+cl+azul2+interes[tramo][pTramo][nombre]+hr);
	}
	i_puntos+=htmlIcono("importante")+hr;$("#lista_etapometro").html(i_puntos);
}

function borrarPrincipales(){marcadorPrincipal.forEach(function(b){b&&b.setMap(null)})}
*/

function infomarcador(b){
		listener(marcadorPoblacion[b],"click",function(){
			infomarcador2(b);
			puntoPoblacion(b);
			ventana(ventanaPoblacion);
			$("#lista_buscador").html(infoLateral);
		})
}

function infomarcador2(b){
	listaLateral='<spam class="lugar_encontrado">'+htmlIcono("hill")+aTA[b][0]+" msnm"+cl+'<img src="icon/menu/home-mini.png">'+ta[b][nombre]+cl+'<a style="text-decoration:none;" title="TransAndalus" target="_blank" href= "http://nueva.transandalus.org/#/stage/'+b+'">'+htmlIcono("transandalus")+'</a><a style="text-decoration:none;" title="Turismo Andaluz" target="_blank" href="http://www.andalucia.org/es/destinos/provincias/cordoba/municipios/'+
	ta[b][turismo]+'">'+htmlIcono("turismoandaluz")+'</a><a style="text-decoration:none;" title="Wikipedia" target="_blank" href="http://es.wikipedia.org/wiki/'+ta[b][nombre]+'">'+htmlIcono("wikipedia")+"</a>";
	infoClima(b);
	info=listaLateral+meteoRuta;
	infoLateral=listaLateral+hr+'</spam>'
}

//------------------------------------ Opciones: variar número de etapas

function variableEtapometro(){
	$("#lista_etapometro").html($("#variables").html());
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

function infoClima(b){b=ta[b][meteo];meteoRuta='<div id="c_'+b+'" class="mini" style="border-image: initial; width: 50px; height: 67px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: transparent; overflow-x: hidden; overflow-y: hidden; background-position: initial initial; background-repeat: initial initial; "><iframe id="'+("fr_"+b)+'" src="'+("http://www.eltiempo.es/widget/get_widget/"+b)+'?v=11000" frameborder="0" scrolling="no" width="100%" height="100%" allowtransparency="true" style="overflow: hidden;"></iframe></div>'}


function climaTA(b){

	if (OWM[b]=!OWM[b]){
		
		map.overlayMapTypes.clear();
		map.overlayMapTypes.setAt(0,mapaOWM[b]);
		$("#clima"+b).css("background-color","#26CA26");
		for (var i=1;i<5;i++){
			if(i!=b){$("#clima"+i).css("background-color","initial");OWM[i]=false;}
			}
		
	}
	else {
			$("#clima"+b).css("background-color","initial");
			map.overlayMapTypes.clear();
			}
			
	$("#licencia2").css("visibility","visible").html('Capa superpuesta de <a target="_blank" href="http://openweathermap.org/">OpenWeatherMap</a>');
}


function interesRuta(b){
	for(var j=0,jx=interes[b].length;j<jx;j++)interes[b][j]&&interesTramo(b,j)
}


function interesTramo(b,c){
		punto=ll(interes[b][c][y],interes[b][c][x]);
		marcadorInteres[b][c]=gmM(opcionesMarcador(1,cambiarHtml(interes[b][c][nombre]),interes[b][c][1]));
		infopint(marcadorInteres[b][c],b,c);
}

function infopint(b,c,d){listener(b,"click",function(b){punto=this.getPosition();infopint2(c,d);ventanaPoblacion.setOptions({disableAutoPan:!1});ventana(ventanaPoblacion)})}

function infopint2(b,c){
	info=htmlIcono(interes[b][c][1])+interes[b][c][nombre];
	// "0"!=interes[b][c][4]&&(info=htmlIcono(icono[interes[b][c][3]])+enl+interes[b][c][4]+'">'+interes[b][c][2]+"</a>");
	// "0"!=interes[b][c][5]&&(info+="<p><src="+interes[b][c][5]+"></p>")
	}


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
			if (verSiEsta(perfilAnterior)){ab='#FF0000';ac=8}else{ac=ancho; ab= colorTrack(perfilAnterior)}; 
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
		perfil(PlanPerfil,[ta[ta[c][s1]][nombre] +' --- '+ ta[ta[c][s2]][nombre]],1,"chart_perfil");
		
	})

}


function cerrarPerfil(){
		
		if (perfilAnterior){
				marcadorInteres[perfilAnterior].forEach(function(e){e.setMap(null)});
				if (verSiEsta(perfilAnterior)){ab='#FF0000';ac=8}
				else{ac=ancho;ab=colorTrack(perfilAnterior)}
				 
				trackTA[perfilAnterior].setOptions({strokeColor:ab,strokeWeight:ac});
				perfilAnterior=false;
			}
			perfilActivo=false;
			marcadorPerfil.setOptions({visible:false});
			$("#chart_perfil").css("visibility","hidden");
			$("#cerrarperfil").css("visibility","hidden");
}


function tramoPlan(c){ 
		
		PlanContador++;
		PlanRuta[PlanContador]=[]; 										 

		PlanRuta[PlanContador][1]=c; 				
		
		PlanRuta[PlanContador][2]=sentidoah[nodoActual][nodoSiguiente]==0?"H":"A";

		if((c>21 && c<25) || (c==53) || (c>82)){
				tramoAlterna[c]=true;
				trackTA[c].setOptions({visible:true});
		}
		// console.log(c);
		trackTA[c].setOptions({strokeColor:tinta[3],strokeWeight:8}); 
}


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

function help(){
	$.ajax({
		url: 'html/etapometro.html',
		dataType: 'html',
		success: function(html) {$("#lista_etapometro").html(html)}
	})
}

	
function calcularPendiente(){return pendiente=Math.round(DVertical/DPuntos*100)}

function rutaTA(){
	
	if (0<PlanContador)
	{
		$('#lista_etapometro').html('<img src="icon/relojarena.svg"> Espere unos segundos mientras finaliza el c&aacute;lculo.');
		$('#calcular').attr( "src","icon/relojarena.svg" );
		setTimeout('rutandalus()',600);
		
	}
		else {help()};
}

//------------------------------------------------- Resultado Etapómetro

function rutandalus(){
	conta=0;
	itaMedia=0;
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
			+'<tr><td colspan="7">'+htmlIconoM('calcular')+'<img id="subaj" src="icon/bajar.svg" title="'+(tt?'Mover ventana':'***')+'"style="float: right" onclick="desplazarEtapometro()">'+'<img title="'+(tt?'Imprimir resultado':'Print the result')+'" src="icon/imprimir.svg" style="float: right" onclick="imprimirEtapometro()"></td></tr>'
			+'<tr><td bgcolor="#008000" colspan="7"></td></tr>'
			+'<tr><td colspan="7">'+'<img title="'+(tt?'Opciones de etapa':'Stage options')+'" src="icon/variables.svg">'+htmlIconoM("resultado")+' <img title="'+(tt?'Distancia m&aacute;xima por etapa':'Stage maximun distance')+'" src="icon/distancia.svg"> '+V[0]+' Km | <img title="'+(tt?'Duraci&oacute;n m&aacute;xima por etapa':'Stage maximun duration')+'" src="icon/reloj.svg"> '+V[2]+' h | <img title="'+(tt?'Desnivel acumulado m&aacute;ximo por etapa':'Stage maximun accumulated drop')+'" src="icon/desnivel.svg"> '+V[1]+' m</td></tr>'
			+'<tr><td bgcolor="#008000" colspan="7"></td></tr>'
			+'<tr><td bgcolor="#90EE90" colspan="7">'+htmlIconoM('empezar')+ta[etapometro[0]][nombre]+'</td></tr>'
			+'<tr><td bgcolor="#90EE90" colspan="7">'+htmlIconoM('finalizar')+ta[etapometro[1]][nombre]+'</td></tr>'
			
			+'<tr><td id="kilometraje" bgcolor="#90EE90" colspan="7">Km</td></tr>'
			
			+'<tr><td bgcolor="#008000" colspan="7"></td></tr>'
			
			+'<tr class="tableE"><td style="width: 17%;  text-align: center;">'
			+'<img title="'+(tt?'Distancia':'Distance')+'" src="icon/distancia-mini.svg"></td><td style="width: 17%;  text-align: center;">'
			+'<img title="'+(tt?'Tiempo estimado':'Estimated duration')+'" src="icon/reloj-mini.svg"></td><td style="width: 17%;  text-align: center;">'
			+'<img title="'+(tt?'Desnivel acumulado':'Accumulated drop')+'" src="icon/desnivel-mini.svg"></td><td style="width: 7%;  text-align: center;">'
			+'<img title="'+(tt?'Indice dificultad f&iacute;sica':'Physical difficulty level (max: 1 / min: 76)')+'" src="icon/ita-mini.svg"></td><td style="width:7%;  text-align: center;">'
			+'<img title="'+(tt?'Dificultad t&eacute;cnica':'Technical difficulty')+'" src="icon/tecnica-mini.svg"></td><td style="width: 23%;  text-align: center;">'
			
			+'<img title="'+(tt?'Tipo de terreno':'Ground type')+'" src="icon/terreno-mini.svg"></td><td style="width: 12%;  text-align: center;">'
			
			+'<img title="'+(tt?'Valoraci&oacute;n':'Valoration')+'" src="icon/missta-mini.svg"></td></tr>'
			
			;	
		}
	
	
	for (var cc=PlanRuta.length-1, c=1;c<=cc;c++){
		
		var b=PlanRuta[c];

					tramoRuTAndalus=c;
					tramo=b[1];
					
					"H"==b[2]?
					(s1=pob2,s2=pob1,ser=pob1,tah=acumuladoHO):
					(s1=pob1,s2=pob2,ser=pob2,tah=acumuladoAH);
					
					kmEtapometro+=distanciaTramo(tramo);
					deEtapometro+=ta[tramo][tah];
					tiEtapometro+=timeTramo(tramo);
					w+=kmTramo;
					A+=ta[tramo][tah];
					B+=tiempoTramo;
					itaMedia+=ta[tramo][ita];
					
					if (!variarEtapasOn){
						v =   '<tr><td colspan="7" bgcolor="#008000"></tr><tr><td colspan="7"><div class="provisional" id="provisional'
								+c+'"></div></td></tr>'
								// + '<tr></tr><tr><td colspan="7" style="font: Arial; text-weight: 12px; color: #A52A2A">'
								// +htmlIconoM('poblacion')+ta[ta[tramo][s1]][nombre]+" "+htmlIconoM('poblacion')+ta[ta[tramo][s2]][nombre]
								// + hr +

								// '</tr>
								+ '<tr class="right"><td class="right">'+kmTramo+
									' Km<td class="right">'+horas(tiempoTramo)+
									'<td class="right">'+ta[tramo][tah]+
									' m<td class="right" style="text-align: center"><span style="color:'+tinta[ta[tramo][ita]]+'">'+ta[tramo][ita]+	// 'm<td class="right">'+ta[tramo][ita]+
									'</span><td class="right" style="text-align: center"><span style="color:'+tinta[ta[tramo][tecnica]]+'">'+ta[tramo][tecnica]+
									// '</span><td style="text-align: center;">'+dificultadTecnica()+
								
									'</span><td class="right" style="text-align: center">'+terreno()+
									
									'<td class="right" style="text-align: center"><img src="icon/missta'+ta[tramo][missta]+'.svg"' +
								
									
							  
							  '</tr>';	
						}else{v=""}
					
					if (kmEtapometro>V[0]||deEtapometro>V[1]||tiEtapometro>V[2])
						{  
							if (1!=c){
								if (!variarEtapasOn){
									t+=u+subTotal(1)};
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
	u="";kmEtapometro=deEtapometro=tiEtapometro=0;
	
	if (!variarEtapasOn){
		var im=Math.round(itaMedia/tramoRuTAndalus);	
		t+='<tr style="text-align: right;font-size: 14px;font-weight: bold;color: green;"><td style="width: 15%;">'
		+Math.round(w)+' Km</td><td style="width: 16%">'
		+horas(B)+'</td><td style="width: 16%">'
		+A+' m</td ><td style="text-align: center; width: 9%; color:'+tinta[im]+'">'+im + '</td><td colspan="3">'
		+tramoRuTAndalus+(idioma=='es'?' tramos':' stages')+'</td></tr></table>';

			desplazarEtapometro();
			$("#lista_etapometro").html(t);
			
			var PlanPerfil=[];
		
			activoPE=true;
			var perfilActivoA=perfilActivo;
			PlanRuta.forEach(function(b,c){
				PlanPerfil[1]=[];
				PlanPerfil[1][1]=b[1];
				PlanPerfil[1][2]=b[2];
				SENTIDO=="A"?(s1=pob1,s2=pob2):(s1=pob2,s2=pob1);
				
				perfil(PlanPerfil, ta[ta[b[1]][s1]][nombre] +' --- '+ ta[ta[b[1]][s2]][nombre],1,"provisional"+c);

				})
			activoPE=false;
			perfilActivo=perfilActivoA;	
	}else{$("#etapas").text(etapasEtapometro)};
	
	$("#kilometraje").html(htmlIconoM('bici')+Math.round(w)+" Km | "+tramoRuTAndalus+(idioma=='es'?' tramos':' section') + " | " +etapasEtapometro+(idioma=='es'?' etapas':' stages'));
	$('#calcular').attr("src","icon/calcular.svg");	
					
}


function subTotal(b){
	
	return	'<tr><td bgcolor="#008000" colspan="7"></td></tr><tr style="text-align: center; font-size: 12px; font-weight: bold; color: blue; background-color: #BFBFBF"><td style="text-align: right">'
			// +htmlIconoM("distancia-mini")+'</td><td>'
			// +htmlIconoM("reloj-mini")+'</td><td>'
			// +htmlIconoM("desnivel-mini")+'</td><td colspan="4"></td></tr><tr style="background-color: #BFBFBF;text-align: right; font-size: 12px; font-weight: bold; color: blue;"><td>'
			+Math.round(kmEtapometro-kmTramo*b)+' Km</td><td style="text-align: right">'+horas(tiEtapometro-tiempoTramo*b)+'</td><td style="text-align: right">'
			+(deEtapometro-ta[tramo][tah]*b)+' m</td><td colspan="4" style="text-align: center;">'+(idioma=='es'?'Etapa (d&iacute;a): ':'Stage (day): ')+etapasEtapometro+'</td></tr>';

}


function terreno(){

	return '<span style="color: #7F7F7F">'+ta[tramo][asfalto]+'</span> | <span style="color: #F9A745">'+ta[tramo][camino]+'</span> | <span style="color: #00BD00">'+ta[tramo][sendero]+'</span>';
}
	
function dificultadTecnica(){
	return htmlIconoM("tecnica-mini-"+nivel[ta[tramo][tecnica]-1]);
}

function timeTramo(b){
	
	return tiempoTramo=ta[b][asfalto]/variableE[3]+ta[b][camino]/variableE[4]+ta[b][sendero]/variableE[5]
	
}
	
function horas(b){horasT=Math.floor(b);minutosT=Math.floor(Math.round(60*(b-horasT)));return horasT+"h "+minutosT+"'"}


// ------------------------------------------------ Funciones auxiliares

function htmlIcono(b){return'<img src="icon/menu/'+b+'.png">'}

function htmlIconoM(b){return'<img src="icon/'+b+'.svg">'}

function htmlIconoMicro(b){return'<img width="10px" height="10px" src="icon/menu/'+b+'-mini.png">'}

function jsIcono(b){return"icon/mapa/"+b+".png"}

function jsIconoMenu(b){return"icon/menu/"+b+".png"}

function redondeo(b,c){return parseFloat(b).toFixed(c)}

function puntoPoblacion(b){return punto=trackTA[b].getPath().getAt(0)}

function ll(b,c){return punto=new google.maps.LatLng(b,c)}

function opcionesMarcador(b,c,d){return{map:map,position:punto,zIndex:b,title:c,icon:jsIcono(d)}}
	
function listener(b,c,d){return google.maps.event.addListener(b,c,d)}

function gE(b){return document.getElementById(b)}

function gmM(s){return new google.maps.Marker(s)}

function tipoPoblacion(b){
	return (b<21 || (b>24 && b<52) || (b>53 && b<83))?"home":(((b>20 && b<25) || (b>51 && b<54))?"home2":"home3")
}

function colorTrack(b){
	return (b<21 || (b>24 && b<52) || (b>53 && b<83))?"#FF00E2":(((b>20 && b<25) || (b>51 && b<54))?"#0000E9":"#008000")
}


function centrarMapa(){map.setOptions({zoom: 8,center: CENTRO})}


function limpiarMapa(){
	resetearEtapometro();
	// borrarInicio();
	
	for (var b=0; b<9; b++){
		if (servicioOk[b]){
			servicioOk[b]=false;
			$("#servicio"+b).css("background-color","initial");
			marcadorServicios[b].forEach(function(e){e.setMap(null)});
		}
	}
		
	for (var b=0; b<2; b++){$("#marcador"+b).css("background-color","initial")};
	marcadorInteres.forEach(function(e){
		e.forEach(function(f){f.setMap(null)})
		});
		
	principal.forEach(function(e){e.setMap(null)})
	
}



// ------------------------------------------------------- Centrar tramo

function centrarTramo(b){
	// swne(b);
	// map.fitBounds(new google.maps.LatLngBounds(sw,ne));
	infomarcador2(b);
	map.setCenter(puntoPoblacion(b));
	ventana(ventanaPoblacion);
	$("#lista_buscador").html(infoLateral);	
}


function centrarTramoE(c){		
	if (!focusActivo){focusActivo=0}
	$("#buscar"+focusActivo).focus().val(ta[c][nombre]);
	etapometro[focusActivo]=c;
	map.setCenter(puntoPoblacion(c));
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
		else if (!etapometro[0] && !etapometro[1]){
			resetMarcador(etapometro[0]);
			resetMarcador(etapometro[1]);
			resetearTrack();
			}
		
	
	if(etapometro[0]&&etapometro[1]){calcularTramos()}
}

//-------------------------------- Marcadores Inicio/Final de Etapómetro

function resetMarcador(b){
	if(marcadorPoblacion[b]){
		marcadorPoblacion[b].setOptions({visible: true, icon: jsIcono(tipoPoblacion(b)),draggable: false});
		google.maps.event.clearListeners(marcadorPoblacion[b],'drag');
		google.maps.event.clearListeners(marcadorPoblacion[b],'dragend');
		};
	
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
	buscarPoblacion(b);
	if (iniciofinalPoblacion){
		etapometro[b]=iniciofinalPoblacion;
		if (b<3){$("#buscar"+b).val(ta[iniciofinalPoblacion][nombre])}
		}
		else{
			etapometro[b]=false;
			$("#buscar"+b).val("");
			}
}

function buscador(b){
	listaLateral="";
	encontrado=0;
	lugar=limpiarBuscador($('#buscar'+b).val());
	if (lugar!=""){
		if (b==3){
				marcadorInteres.forEach(function(b,d){b&&b.forEach(function(b,c){b&&(b.setMap(null),marcadorInteres[d][c]=null)})});
				ventanaPoblacion.close();
				buscarGrupos();
				if (0==encontrado){totalEncontrado+=htmlIcono("direccion")};
				$("#lista_buscador").css("visibility","visible");
				$("#lista_buscador").html(totalEncontrado);
		}
		else if (b<2){
			grupo=1;
			inicioOfinal=0;
			patronBuscador(TOTAL_POBLACIONES);
			if (0==encontrado){iniciofinalPoblacion=false; listaLateral="No encontrado"};
			$("#lista_etapometro").html(listaLateral);
			
			}
	}
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




function listaBuscador(b){
	return i_buscador='<a id="'+img.name+'" onclick="infopint_lateral'+grupo+'(this);" ><img name="'+img.name+'" src="'+img.src+'" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + b + "</span></a>";

}


function nuevalistaBuscador(b){
	return i_buscador='<a onclick="infopintPoblacion('+b+')" ><img src="icon/menu/home-mini.png" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + ta[b][nombre] + "</span></a>";

}

// á\u00e1  é\u00e9  í\u00ed  ó\u00f3  ú\u00fa ü\00fc ñ\u00f1

function limpiarBuscador(b){
	b.replace(/[á]/gi,"a");
	b.replace(/[é]/gi,"e");
	b.replace(/[í]/gi,"i");
	b.replace(/[ó]/gi,"o");
	b.replace(/[ú]/gi,"u");
	b.replace(/[ü]/gi,"u");
	b.replace(/[ñ]/gi,"n");
	b.replace(/ /gi,"-");
	return pat=b
}

function cambiarHtml(b){
	return pat=b.replace(/<br>/gi,"\n")
}

function infopintPoblacion(b){
	puntoPoblacion(b);
	infomarcador2(b);
	ventana(ventanaPoblacion);
}

function infopintInteres(b,c){
	infopint2(b,c);
	map.setCenter(ll(interes[b][c][y],interes[b][c][x]));
	ventana(ventanaPoblacion)
}

$('#buscar0').keyup(function(event){
	cambiaIF(0,event);
});

$('#buscar1').keyup(function(event){
	cambiaIF(1,event);
});

$('#buscar2').keyup(function(event){
	cambiaIF(2,event);
});

$('#buscar3').keyup(function(event){
	var e=event.keyCode;
	if(($('#buscar3').val().length>3) && (e!=8 && e!=46 && e!=37 && e!=39)){
	auxbuscador();
	}
});

function auxbuscador(){
	$("#lista_buscador").html(buscarPoblacion(3)+buscarInteres());
}

function cambiaIF(b,event){
	
	var e=event.keyCode;
	if(($('#buscar'+b).val().length>3) && (e!=8 && e!=46 && e!=37 && e!=39)){	
			
			buscarPoblacion(b);			
			if (iniciofinalPoblacion){
				etapometro[b]=iniciofinalPoblacion;
				$("#buscar"+b).val(ta[iniciofinalPoblacion][nombre])
			}
	
		}

			else if(!iniciofinalPoblacion){
					resetMarcador(etapometro[b]);
					etapometro[b]=false;
					
					resetearTrack();
					$("#buscar"+b).val("");
				}

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
		
		if ((nodoActual>21 && nodoActual<25) || (nodoActual==53) || (nodoActual>82)){marcadorAlterna[nodoActual]=true}; // (nodoActual>21 && nodoActual<25) || (nodoActual==53) || (nodoActual>82)
		
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
					
					case 83: nodoSiguiente=82; break; // 83 Córdoba
					
					case 84: nodoSiguiente=24; break; // 84 Sevilla
					
					case 85: nodoSiguiente=19; break; // 85 Huelva
					
					case 86: nodoSiguiente=44; break; // 86 Antequera
					
					case 87: nodoSiguiente=51; break; // 87 Granada
					
					case 88: nodoSiguiente=81; break; // 88 Jaén
					
					case 81: vueltaE(88); break; // 81 Andújar
					
					case 82: vueltaE(83); break; // 82 Marmolejo
					
					case 44: vueltaE(86); break; // 44 Antequera
					
					case 20: 
					
					if (SENTIDO=="A"){nodoSiguiente=25}else{nodoSiguiente=19}; 
					
					break;
					
					
					
					case 19: // 19 Moguer

						if
						(
						(((etapometro[1]>21) && (etapometro[1]<25)) || etapometro[1]==84)
						)
							{
							nodoSiguiente=22	
							}
						
						else if 
						(
						(etapometro[0]==etapometro[1]) && (((etapometro[1]>21) && (etapometro[1]<25)) || etapometro[1]==84) && (primeraVuelta==false)
						)
							{
							nodoSiguiente=22				
							}
						
						else if 
						(
						(etapometro[0]==etapometro[1]) && (((etapometro[1]>21) && (etapometro[1]<25)) || etapometro[1]==84) && (primeraVuelta==true)
						) 
							{
								primeraVuelta=false;
								findelMundo(nodoActual);
							} 
						else if
						(
						((etapometro[2]>21) && (etapometro[2]<25))
						)
							{
								if (nodoDesvio=25 && SENTIDO=="H"){nodoSiguiente=18}else{nodoSiguiente=22}	
							}
						else
												
							{
							findelMundo(nodoActual);
							}
						
					nodoDesvio=19;
					
					break;
					
					
					case 25: // 25 Sanlúcar de Barrameda
				
						if 
						(
						(etapometro[0]==etapometro[1]) && (((etapometro[1]>21) && (etapometro[1]<25)) || etapometro[1]==84) && (primeraVuelta==true)
						) 
							{
								primeraVuelta=false;
								findelMundo(nodoActual);
							} 
						else if 
						(
						(etapometro[0]==etapometro[1]) && (((etapometro[1]>21) && (etapometro[1]<25)) || etapometro[1]==84) && (primeraVuelta==false)
						)
							{
							nodoSiguiente=24				
							}
						else if
						(
						((etapometro[2]>21) && (etapometro[2]<25))
						)
							{
								if (nodoDesvio=19 && SENTIDO=="A"){nodoSiguiente=26}else{nodoSiguiente=24}	
							}
						else
												
						{
						findelMundo(nodoActual);
						}
						
						nodoDesvio=25;

					break;
					

					case 51: // 51 Nigüelas
					
						
							if (((etapometro[1]==87) || (etapometro[1]==53) && primeraVuelta==false)){nodoSiguiente=etapometro[1]}
							else if 
							(etapometro[1]!=87 && etapometro[2]==53 && SENTIDO=="A"){nodoSiguiente=53}
							else 
								{
								if (SENTIDO=="A"){nodoSiguiente=54}else{nodoSiguiente=50}
								}

							primeraVuelta=false;
							nodoDesvio=72;

					break;
					
					
					case 54: // 54 Pampaneira
					
						if (SENTIDO=="H" && etapometro[1]==53 && (primeraVuelta==false)){nodoSiguiente=53}
							else if (SENTIDO=="H" && (etapometro[2]==53)){nodoSiguiente=53}
								else {findelMundo(nodoActual)}
						
						primeraVuelta=false;	
						nodoDesvio=54;
					
					break;
					
					case 22: // 22 Almonte
											
						if (nodoDesvio==19){nodoSiguiente++}
							else if (nodoDesvio==25){nodoSiguiente=19}
								else if (SENTIDO=="A"){nodoSiguiente=23}
									else if (SENTIDO=="H"){nodoSiguiente=19}
					break;
					
					case 23: // 23 Villamanrique de la Condesa
					
						if (nodoDesvio==19){nodoSiguiente++}
							else if (nodoDesvio==25){nodoSiguiente--}
								else if (SENTIDO=="A"){nodoSiguiente=24}
									else if (SENTIDO=="H"){nodoSiguiente=22}
					
					break;
					
					case 24: // 24 Coria del Río
					
						if (etapometro[1]==84 && (primeraVuelta==false)){nodoSiguiente=84}
							else
								{
									if (nodoDesvio==19 || (SENTIDO=="A")){nodoSiguiente=25}else if (nodoDesvio==25 || (SENTIDO=="H")){nodoSiguiente=23}	
								}
					break;
					
					case 53: // 53 Lanjarón
					
						if (nodoDesvio==51){nodoSiguiente=54}
							else if (nodoDesvio==54){nodoSiguiente=51}
								else if (SENTIDO=="A"){nodoSiguiente=54}
									else if (SENTIDO=="H"){nodoSiguiente=51}
						
					break;
				
					default:
					
					findelMundo(nodoActual);
				}
				
				
				if((nodoSiguiente>21 && nodoSiguiente<25) || (nodoSiguiente==53) || (nodoSiguiente>82)){ // revisar
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
					
					case 83: nodoSiguiente=82;	break; // Córdoba
					
					case 84: nodoSiguiente=24;	break; // Sevilla
					
					case 85: nodoSiguiente=19;	break; // Huelva
					
					case 86: nodoSiguiente=44;	break; // Málaga
					
					case 87: nodoSiguiente=51;	break; // Granada
					
					case 88: nodoSiguiente=81;	break; // Jaén
										
					case 22: // Almonte
											
						if ((SENTIDO=="A")){nodoSiguiente=23}else{nodoSiguiente=19}

					break;
					
					case 23: // Villamanrrique
						
						if ((SENTIDO=="A")){nodoSiguiente=24}else{nodoSiguiente=22}

					break;
					
					case 24: // Coria del Río
					
						if (nodoDesvio==19 || (SENTIDO=="A")){nodoSiguiente=25} else if (nodoDesvio==25 || (SENTIDO=="H")){nodoSiguiente=23}

					break;
					
					case 53: // Lanjarón
					
						if (SENTIDO=="A"){nodoSiguiente=54}else{nodoSiguiente=51}
					
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
				
	if (SENTIDO=="A"){
		if (nodoActual==20){nodoSiguiente=25}
			else if (nodoActual==51){nodoSiguiente=54}
				else {nodoSiguiente=nodoActual+1;if(nodoSiguiente>82){nodoSiguiente=1}}
		}	
		else
			{
			if (nodoActual==25){nodoSiguiente=20}
			else if (nodoActual==54){nodoSiguiente=51}
				else {nodoSiguiente=nodoActual-1;if(nodoSiguiente<1){nodoSiguiente=82}}
			}			
}



//-------------------------------------------------- Resetear etapómetro

function resetearEtapometro(){
	resetearPlanRuta();
	etapometro=[];
	$("#buscar0").val("");
	$("#buscar1").val("");
	$("#buscar2").val("");
	$("#lista_etapometro").html(poblacionesProvincia(1));
}


//----------------------------------------------- Resetear Planificación

function resetearPlanRuta(){
	
		resetearTrack();
		
		if (etapometro[3] && etapometro[3]!=etapometro[0]){resetMarcador(etapometro[3])};
		
		if (etapometro[4] && etapometro[4]!=etapometro[1]){resetMarcador(etapometro[4])};
		
		resetMarcador(etapometro[0]);
		resetMarcador(etapometro[1]);
						
}

function resetearTrack(){
	if(PlanContador>0){												
			
			for (var e=1;e<=TOTAL_POBLACIONES;e++){
				trackTA[e].setOptions({
							strokeColor: colorTrack(e),
							strokeWeight: ancho
							})			
				}
		}
	
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



//------------------------------------------------------------ Servicios

function serviciosOn(b){

	if (servicioOk[b]=!servicioOk[b]){
		
		$("#servicio"+b).css("background-color","#26CA26");
		var iii=0;
		for (var i=1; i<89; i++){
			
			for (var ii=0,xj=servicio[i].length; ii<xj; ii++){
				if (servicio[i][ii][1]==iconoServicio[b]){
					
						punto=ll(servicio[i][ii][y],servicio[i][ii][x]);
						marcadorServicios[b][iii]=gmM(opcionesMarcador(100+iii,cambiarHtml(servicio[i][ii][nombre]),servicio[i][ii][1]));
						auxServicio(marcadorServicios[b][iii],i,ii);
						iii++;

				}
			}
		}
	
	}
		else {
			$("#servicio"+b).css("background-color","initial");
			marcadorServicios[b].forEach(function(e){e.setMap(null)});
			}
}



//----------------------------------------------------------- Marcadores

function marcadoresOn(b){

	if (marcadorOk[b]=!marcadorOk[b]){
		
		$("#marcador"+b).css("background-color","#26CA26");
		var iii=0;
		for (var i=1; i<89; i++){

				if (!b){
					
					interesRuta(i)

					}
				else {
					
						for (var ii=0,xj=interes[i].length; ii<xj; ii++){
						
							if (interes[i][ii][1]=="information"){
								punto=ll(interes[i][ii][y],interes[i][ii][x]);
								principal[iii]=gmM(opcionesMarcador(1,cambiarHtml(interes[i][ii][nombre]),interes[i][ii][1]));
								infopint(principal[iii],i,ii);
								iii++;
								}
						}	
					}
			}
	}
		else {
				$("#marcador"+b).css("background-color","initial");
				if(!b){
					marcadorInteres.forEach(function(b,d){b&&b.forEach(function(b,c){b&&(b.setMap(null),marcadorInteres[d][c]=null)})});
				}
				else{
					principal.forEach(function(e){e.setMap(null)})
					}
			}
}

function auxServicio(b,c,d){
	listener(b,"click",function(b){
								punto=this.getPosition();
								info=htmlIcono(servicio[c][d][1])+servicio[c][d][nombre];
								ventanaPoblacion.setOptions({disableAutoPan:!1});
								ventana(ventanaPoblacion)
								}						
			)
}

function masAlterna(){
	vienedeEtapometro=true;
	$("#alternativas2").click();	
}

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
		
		if(
				marcadorElegido!=false 
				&& 
				(
				(marcadorElegido!=etapometro[0] && b==0) 
				||
				(marcadorElegido!=etapometro[1] && b==1)
				)
				||
				(!etapometro[0] && !etapometro[1])
			
			){
				
			marcadorPoblacion[marcadorElegido].setOptions({										
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


// --------------------------------------- Menú principal de poblaciones

function incluirMenu(){
	for (var p=0;p<8;p++){
		$("#prov"+p).append('<ul></ul>');
		$("#alterna"+p).append('<ul></ul>');
		
		for (var pp=1;pp<=TOTAL_POBLACIONES;pp++){
			
			if ((pp<21) || (pp>24 && pp<52) || (pp>53 && pp<83)){sel="#prov"}else{sel="#alterna"}
				
				if (p==ta[pp][provNumero] && ta[pp][nombre]!=""){
					$(sel+p+" ul").append(
						'<li><a href="#" onclick="centrarTramo('+pp+')"><img src="icon/menu/home-mini.png"><span> '+ta[pp][nombre]+'</span></a></li>'
					)
				}	
		}
		$("#prov"+p+"ul:last").addClass('last')
		$("#alterna"+p+"ul:last").addClass('last')
	}
}


// ----------------------------------- Imprimir resultado del Etapómetro
/*
function imprimirEtapometro(){
	var printMap = function(map) {
  map.setOptions({
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false,
    panControl: false
  });

  var popUpAndPrint = function() {
    dataUrl = [];

    $('#map_canvas canvas').filter(function() {
      dataUrl.push(this.toDataURL("image/png"));
    })

    var container = document.getElementById('map_canvas');
    var clone = $(container).clone();

    var width = container.clientWidth
    var height = container.clientHeight

    $(clone).find('canvas').each(function(i, item) {
      $(item).replaceWith(
        $('<img>')
          .attr('src', dataUrl[i]))
          .css('position', 'absolute')
          .css('left', '0')
          .css('top', '0')
          .css('width', width + 'px')
          .css('height', height + 'px');
    });

    var printWindow = window.open('', 'PrintMap',
      'width=' + width + ',height=' + height);
    printWindow.document.writeln($(clone).html());
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();

    map.setOptions({
      mapTypeControl: true,
      zoomControl: true,
      streetViewControl: true,
      panControl: true
    });
  };

  setTimeout(popUpAndPrint, 500);
};
	// $("#map_canvas").print()
	
	}

*/


function imprimirEtapometro(){
	$("#lista_etapometro").print()
}


jQuery.fn.print = function(){
    
    if (this.size()>1){
        this.eq(0).print();
        return;
    } else if (!this.size()){
        return;
    }

    var jFrame = $( "<iframe name='iframePrint'>" )
        .css( "width", "1px" )
        .css( "height", "1px" )
        .css( "position", "absolute" )
        .css( "left", "-9999px" )
        .appendTo( $( "body:first" ) )
    ;

    var objFrame = window.frames[ "iframePrint" ];

    var objDoc = objFrame.document;
    var jStyleDiv = $( "<div>" ).append($( "style" ).clone());
    objDoc.open();
    objDoc.write( "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">" );
    objDoc.write( "<html><body><head><title>ViTA-Visor de TransAndalus</title>" );
    objDoc.write( jStyleDiv.html() );
    objDoc.write( "</head>" );
    objDoc.write( this.html() );
    objDoc.write( "</body></html>" );
    objDoc.close();
    objFrame.focus();
    objFrame.print();
    
    setTimeout(function(){jFrame.remove()},(60 * 1000));
}


// -----------AUXILIAR

function crearJSON(){	
	$("#lista_etapometro").html(JSON.stringify(n));	
}


function buscarPoblacion(b){
	var lugar=limpiarBuscador($('#buscar'+b).val());
	if (lugar!=""){
		var c=new RegExp(lugar,"gi");
		var encontradoAnterior=0;
		var listaLateral="";
		
						for(var i=1;i<=TOTAL_POBLACIONES;i++){
					
							busca=c.exec(ta[i][turismo]);
							
								if (busca!=null){
								
									puntoPoblacion(i);
									nuevalistaBuscador(i);
									b>POBLACIONES&&colocarPoblaciones2(i);

									map.setCenter(punto);
									map.setZoom(9);
									listaLateral+="<p class='lugar_encontrado'>"+i_buscador+'<hr style="margin-left: 40px;">';
									
										if (busca.length>encontradoAnterior){
										
											encontradoAnterior=busca.length; 
											iniciofinalPoblacion=i; 
										
										}
								}			
							}

		$("#lista_etapometro").html(listaLateral);
	}
	
	return listaLateral;
}


function buscarInteres(b){
	var lugar=limpiarBuscador($('#buscar3').val());
	if (lugar!=""){
		var c=new RegExp(lugar,"gi");
		var listaLateral="";
		
		marcadorInteres.forEach(function(b,d){b&&b.forEach(function(b,c){b&&(b.setMap(null),marcadorInteres[d][c]=null)})});
		ventanaPoblacion.close();
		
		
		for(var ii=1;ii<=TOTAL_POBLACIONES;ii++){

			for(var i=1,b=interes[ii].length;i<=b;i++){
				

				if (interes[ii][i])
							{
							limpiarBuscador(interes[ii][i][nombre]);	
							busca=c.exec(pat);
							if (busca!=null){

								if (interes[ii][i]){
								
									ll(interes[ii][i][y],interes[ii][i][x]),
									ij=interes[ii][i][1],
									i_buscador='<a onclick="infopintInteres('+ii+','+i+')" ><img src="icon/menu/'+ij+'.png" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + interes[ii][i][nombre] + "</span></a>";

									interesTramo(ii,i)
								};

								map.setCenter(punto);
								map.setZoom(9);
								listaLateral+="<p class='lugar_encontrado'>"+i_buscador+'<hr style="margin-left: 40px;">';
							}
					}
			}			
	};
		
		$("#lista_buscador").css("visibility","visible").html(listaLateral);
	
	}
	
	return listaLateral;
}


function calcularIbp(){
	var ibps=""
	for (var i=1; i<89; i++){
		ibps+=ta[i][nombre]+ cl;
	}
	$("#lista_etapometro").html(ibps);
}
