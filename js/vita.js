//------------------------------------------------------------ Variables

var ta=[];
var interes=[];
var principal=[4,1,7,3,8,5,9,1,10,4,11,2,15,5,16,3,16,5,16,6,20,8,22,3,40,1,45,2,45,3,46,1,55,1,62,2,73,4,77,3];
var totalPrincipal=principal.length;
var andalucia=["Almer\u00eda",37.45,-2.122,"C\u00e1diz",36.255,-5.376,"C\u00f3rdoba",37.968,-4.852,"Granada",37.372,-3.028,"Huelva",37.516,-6.604,"Ja\u00e9n",37.777,-3.605,"M\u00e1laga",36.705,-4.627,"Sevilla",37.258,-5.363];

var nodo=[];
var sentidoah=[];
var aTA=[];

var tinta="#0EBFFA #0E6AFA #36D236 #FFFF00 #ff8000 #FF0000 #A020F0 #40310B".split(" ");
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

var PlanRuta=[];
var PlanPerfil=[];
var PlanContador=0;
var OWM=[4];OWM[0]=false;OWM[1]=false;OWM[2]=false;OWM[3]=false;
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


var app=angular.module('myApp', ['pascalprecht.translate']);


var AlojamientoKML=campingKML=transporteKML=protegidosKML=false;

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
					DistanciaX+=google.maps.geometry.spherical.computeDistanceBetween(tTA.getAt(p),tTA.getAt(p+1))/1000;
					
					function computarD(b,c){return }
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
	$("#pestana").css("visibility","visible");
	$("#pestana").toggleClass("active");
	
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
								grupo=1,
								i_poblacion+='<li onclick="centrarTramoE('+i+')"><a id="'+img.name+'" class="lugar_encontrado"><img src="'+img.src+'" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + ta[i][nombre] + "</a></li>";
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
	for(i=0;i<totalPrincipal-2;i+=2)tramo=principal[i],pTramo=principal[i+1],iNom=tramo+","+pTramo,ll(interes[tramo][pTramo][y],interes[tramo][pTramo][x]),grupo=2,cambiarHtml(interes[tramo][pTramo][2]),marcadorPrincipal[i/2+1]=gmM(opcionesMarcador(1,pat,icono[interes[tramo][pTramo][3]])),infopint(marcadorPrincipal[i/2+1],tramo,pTramo),imagen(iNom,icono[interes[tramo][pTramo][3]]), // puntero_enlace=i,
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
	listaLateral='<spam class="lugar_encontrado">'+htmlIcono("hill")+aTA[b][0]+" msnm"+cl+'<img src="icon/menu/home-mini.png">'+ta[b][nombre]+cl+'<a style="text-decoration:none;" title="TransAndalus" target="_blank" href= "http://www.transandalus.org/index.php?option=com_content&task=view&id='+ta[b][webta]+'">'+htmlIcono("transandalus")+'</a><a style="text-decoration:none;" title="Turismo Andaluz" target="_blank" href="http://www.andalucia.org/es/destinos/provincias/cordoba/municipios/'+
	ta[b][turismo]+'">'+htmlIcono("turismoandaluz")+'</a><a style="text-decoration:none;" title="Wikipedia" target="_blank" href="http://es.wikipedia.org/wiki/'+ta[b][nombre]+'">'+htmlIcono("wikipedia")+"</a>";
	infoClima(b);
	info=listaLateral+meteoRuta;
	infoLateral=listaLateral+hr+serviciosV+'</spam>'
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

function infoClima(b){b=ta[b][31];meteoRuta='<div id="c_'+b+'" class="mini" style="border-image: initial; width: 50px; height: 67px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: transparent; overflow-x: hidden; overflow-y: hidden; background-position: initial initial; background-repeat: initial initial; "><iframe id="'+("fr_"+b)+'" src="'+("http://www.eltiempo.es/widget/get_widget/"+b)+'?v=11000" frameborder="0" scrolling="no" width="100%" height="100%" allowtransparency="true" style="overflow: hidden;"></iframe></div>'}


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

function infopint2(b,c){
	info=htmlIcono(icono[50>interes[b][c][3]?interes[b][c][3]:11])+interes[b][c][2];"0"!=interes[b][c][4]&&(info=htmlIcono(icono[interes[b][c][3]])+enl+interes[b][c][4]+'">'+interes[b][c][2]+"</a>");"0"!=interes[b][c][5]&&(info+="<p><src="+interes[b][c][5]+"></p>")
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

function help(){
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
		else {help();
			// $('#lista_etapometro').html('<img src="icon/calcular.svg"> Seleccione primero poblaciones de inicio y final de ruta.')
			};
}

//------------------------------------------------- Resultado Etapómetro

function rutandalus(){
	
	itaMedia=0;
	h=0,k=0;
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
		
		var b=PlanRuta[c];

					tramoRuTAndalus=c;
					tramo=b[1];
					k+=distanciaTramo(tramo);
					h+=ta[tramo][tecnica];
					
					"H"==b[2]?
					(s_H=!0,s1=pob2,s2=pob1,ser=pob1,tah=28):
					(s_H=!1,s1=pob1,s2=pob2,ser=pob2,tah=29);
					
					kmEtapometro+=kmTramo;
					deEtapometro+=ta[tramo][tah];
					tiEtapometro+=timeTramo(tramo);
					w+=kmTramo;
					A+=ta[tramo][tah];
					B+=tiempoTramo;
					itaMedia+=ta[tramo][ita];
					
					if (!variarEtapasOn){
						v =   '<tr><td colspan="7" bgcolor="#008000"></tr>'+
							  '<tr>'+
									'<td colspan="7"><div class="provisional" id="provisional'+c+'"></div></td>'+
							  '</tr>'+
							  '<tr>'+
							  '</tr>'+
							  '<tr>'+
									'<td colspan="7">'+htmlIconoM('poblacion')+ta[ta[tramo][s1]][nombre]+" "+htmlIconoM('poblacion')+ta[ta[tramo][s2]][nombre]+" ("+serviciosHorizontal(ta[tramo][ser])+')'+ hr +
							  '</tr>'+
							  '<tr class="right">'+
									'<td class="right">'+kmTramo+
									'Km<td class="right">'+horas(tiempoTramo)+
									'<td class="right">'+ta[tramo][tah]+
									'm<td class="right">'+ta[tramo][ita]+
									'<small>/76</small><td style="text-align: center;">'+dificultadTecnica()+
									'<td style="text-align: left;"><img src="icon/missta'+ta[tramo][missta]+'.svg">'+
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
	u="";kmEtapometro=deEtapometro=tiEtapometro=0;
	itaMedia=Math.round(itaMedia/tramoRuTAndalus);
	
	if (!variarEtapasOn){
	t+='<tr style="text-align: right;font-size: 12px;font-weight: bold;color: orange;">'+
	   '<td >'+Math.round(w)+' Km</td><td>'+horas(B)+'</td><td>'+A+' m</td><td colspan="2">'+itaMedia+'<small>/76</small></td><td colspan="2">Total: '+
	   tramoRuTAndalus+(idioma=='es'?' tramos':' stages')+'</td></tr></table>';

		desplazarEtapometro(); // $("#lista_etapometro").css("top","0px");
		$("#lista_etapometro").html(t);
		
		var PlanPerfil=[];
	
		activoPE=true;
		var perfilActivoA=perfilActivo;
		PlanRuta.forEach(function(b,c){
			PlanPerfil[1]=[];
			PlanPerfil[1][1]=b[1];
			PlanPerfil[1][2]=b[2];
			SENTIDO=="A"?(s1=pob1,s2=pob2):(s1=pob2,s2=pob1);
			perfil(PlanPerfil, (idioma=='es'?"Tramo: ":"Section: ") + ta[ta[b[1]][s1]][nombre] +' ----> '+ ta[ta[b[1]][s2]][nombre],10,"provisional"+c);
			})
		activoPE=false;
		perfilActivo=perfilActivoA;	
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
	
	/*
	0<ta[tramo][asfalto]&&(terrenoACS+='<img src="icon/carretera-mini.svg" width="'+ta[tramo][asfalto]+'" height="16">');
	0<ta[tramo][camino]&&(terrenoACS+='<img src="icon/camino-mini.svg" width="'+ta[tramo][camino]+'" height="16">');
	0<ta[tramo][sendero]&&(terrenoACS+='<img src="icon/sendero-mini.svg" width="'+ta[tramo][sendero]+'" height="16">');
	*/
	
	return '<span style="color: #7F7F7F">'+ta[tramo][asfalto]+'</span>'+
	'<span style="color: #F9A745">'+ta[tramo][camino]+'</span>'+
	'<span style="color: #00BD00">'+ta[tramo][sendero]+'</span>';
	
	
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


//--------------------------------------------------------- Centrar mapa

function centrarMapa(){map.setOptions({zoom: 8,center: CENTRO})}

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
	$("#buscar"+focusActivo).val(ta[c][nombre]);
	etapometro[focusActivo]=c;
	iniciofinalColocar();
}


function iniciofinalColocar(){
	
	console.log("inicio: "+etapometro[0]+" final: "+etapometro[1]); // borraralerta
	if (etapometro[0] && !etapometro[1]){
	
		if (etapometro[3]){resetMarcador(etapometro[3])};
		
		activarMarcador(etapometro[0],"empezar");
		
		// resetMarcador(etapometro[1]);
		// resetearTrack();
		
		
		etapometro[3]=etapometro[0];
		
		cambiaEIF(0);
		
	}else if (!etapometro[0] && etapometro[1]){
		
		if (etapometro[4]){resetMarcador(etapometro[4])};
		
		activarMarcador(etapometro[1],"finalizar");
		
		// resetMarcador(etapometro[0]);
		// resetearTrack();
		
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
			// iniciofinalColocar();
			}
		// $("#buscar"+b).val(c)
	// return c;	
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
	console.log(iniciofinalPoblacion); // borraralerta
	// return iniciofinalPoblacion;
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
	// return i_buscador='<a id="'+img.name+'" onclick="infopint_lateral'+grupo+'(this);" ><img name="'+img.name+'" src="'+img.src+'" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + b + "</span></a>";
	return i_buscador='<a id="'+img.name+'" onclick="infopint_lateral'+grupo+'(this);" ><img name="'+img.name+'" src="'+img.src+'" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + b + "</span></a>";

}


function nuevalistaBuscador(b){
	// return i_buscador='<a id="'+img.name+'" onclick="infopint_lateral'+grupo+'(this);" ><img name="'+img.name+'" src="'+img.src+'" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + b + "</span></a>";
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

/*
function infopint_lateral1(b){
	puntoPoblacion(b.id);
	infomarcador2(b.id);
	ventana(ventanaPoblacion);
}
*/

function infopintPoblacion(b){
	puntoPoblacion(b);
	infomarcador2(b);
	ventana(ventanaPoblacion);
}

function infopintInteres(b,c){
	// var n=b.id.split(",");
	// tramo=n[0];
	// pTramo=n[1];
	infopint2(b,c);
	map.setCenter(ll(interes[b][c][y],interes[b][c][x]));
	ventana(ventanaPoblacion)
}



/*
function infopint_lateral2(b){
	var n=b.id.split(",");
	tramo=n[0];
	pTramo=n[1];
	infopint2(n[0],n[1]);
	map.setCenter(ll(interes[n[0]][pTramo][y],interes[n[0]][n[1]][x]));
	ventana(ventanaPoblacion)
}
*/

/*
function listadoLateral(b){
	switch(grupo){
		case 1:
			imagen(b,"home-mini");
			puntoPoblacion(b);
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
*/


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
	
	console.log(('#buscar'+b).event); // borraralerta
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


/*
function cambiaIF(b){
	// $('#buscar'+b).keyup(function(event){
		// console.log(event.keyCode); // borraralerta
	//	var e=event.keyCode;
	//	if(($('#buscar'+b).val().length>3) && (e!=8 && e!=46 && e!=37 && e!=39)){
	console.log(('#buscar'+b).event); // borraralerta
	if(($('#buscar'+b).val().length>3)){		
			
			buscarPoblacion(b);
			
			
			
			
			if (iniciofinalPoblacion){
				etapometro[b]=iniciofinalPoblacion;
				$("#buscar"+b).val(ta[iniciofinalPoblacion][nombre])
			}
			
			
			else{
					etapometro[b]=false;
					$("#buscar"+b).val("");
			// iniciofinalColocar();
				}
			// $("#buscar"+b).val(minBuscador2(b))
			
			
			
			
			
		} // else if ()
		
		iniciofinalColocar();
	//})
	// minBuscador(b);
	// iniciofinalColocar();
}
*/


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
							strokeColor:e<=POBLACIONES?"#FF00E2":"#0000E9",
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
				$translate.use() === 'es'? ($translate.use('en')) : ($translate.use('es'));
			gE("iconoIdioma").src="icon/"+ (idioma=$translate.use()) +".svg";
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


// ----------------------------------- Imprimir resultado del Etapómetro

function imprimirEtapometro(){$("#lista_etapometro").print()}

jQuery.fn.print = function(){
    
    if (this.size() > 1){
        this.eq( 0 ).print();
        return;
    } else if (!this.size()){
        return;
    }

    var jFrame = $( "<iframe name='iframePrint'>" );

    jFrame
        .css( "width", "1px" )
        .css( "height", "1px" )
        .css( "position", "absolute" )
        .css( "left", "-9999px" )
        .appendTo( $( "body:first" ) )
    ;

    var objFrame = window.frames[ "iframePrint" ];

    var objDoc = objFrame.document;
    var jStyleDiv = $( "<div>" ).append(
        $( "style" ).clone()
        );
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
    
    setTimeout(
        function(){
            jFrame.remove();
        },
        (60 * 1000)
        );
}


// -----------AUXILIAR

function crearJSON(){	
	$("#lista_etapometro").html(JSON.stringify(icono));	
}


function buscarPoblacion(b){
	var lugar=limpiarBuscador($('#buscar'+b).val());
	if (lugar!=""){
		// pat="";
		var c=new RegExp(lugar,"gi");
		var encontradoAnterior=0;
		var listaLateral="";
		
						for(var i=1;i<=88;i++){
					
							busca=c.exec(ta[i][30]);
							
							
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
											console.log("ultima población elegida"+i);  // borraralerta
										
										}
								
								}			
							}
			
		// if (0==encontradoAnterior){iniciofinalPoblacion=false; listaLateral="No encontrado"};
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
			// total2=;
			
			
			
			
			// patronBuscador(total2)
			for(var i=1,b=interes[ii].length;i<=b;i++){
				// alert (interes[ii][i][2]); // borraralerta
				
				if (interes[ii][i])
							{
							limpiarBuscador(interes[ii][i][2]);	
							busca=c.exec(pat);
							if (busca!=null){
								
								// listadoLateral(i);
								if (interes[ii][i]){
								
									ll(interes[ii][i][y],interes[ii][i][x]),
									ij=50>interes[ii][i][3]?interes[ii][i][3]:11,
									// imagen(ii+","+i,icono[ii]+"-mini"),
									
									// listaBuscador(interes[ii][b][2]),
									i_buscador='<a onclick="infopintInteres('+ii+','+i+')" ><img src="icon/menu/'+icono[ij]+'.png" style="padding-left: 20px;"/><span style="padding-left: 20px;">' + interes[ii][i][2] + "</span></a>";

									interesTramo(ii,i)
								};
								
								
								map.setCenter(punto);
								map.setZoom(9);
								listaLateral+="<p class='lugar_encontrado'>"+i_buscador+'<hr style="margin-left: 40px;">';
								

							}
					}
			
			}
				
	};
		
		// totalEncontrado="<p class='lugar_encontrado'>Lugar/es encontrado/s: "+encontrado+"</p>"+hr+listaLateral;
		// if (0==encontrado){totalEncontrado+=htmlIcono("direccion")};
		$("#lista_buscador").css("visibility","visible");
		$("#lista_buscador").html(listaLateral);
		

	}
	
	return listaLateral;
}











/*	
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
	console.log(iniciofinalPoblacion); // borraralerta
	// return iniciofinalPoblacion;
}	

function patron(){
	pat="";
	var c=new RegExp(lugar,"gi");
	var inicioOfinal=0;
	var encontradoAnterior=0;
	for(var i=1;i<=88;i++){
		
			
		limpiarBuscador(ta[i][30]);
			
			
		
			busca=c.exec(pat);
			
			if (busca!=null){
				
				listadoLateral(i);
			pat="";
				inicioOfinal++;
				nuevoEncontrado[i]=busca.length;
				if (busca.length>encontradoAnterior){encontradoAnterior=busca.length; iniciofinalPoblacion=i}
				
				// if (inicioOfinal==1){iniciofinalPoblacion=i}
				}			
	}
}
*/		
