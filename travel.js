var ourLoc;
var view;
var map;
var taipei;
var taichung;
var nantou;
var singapore;
var beijing;
var tianjing;
var tokyo;
var seoul;
var barcelona;
var paris;
var florence;
var vatican;
var rome;
var seattle;
var sf;
var boston;
var ny;
var miami;
var orlando;
var vegas;
var bahamas;
var maui;
var juneau;
var banff;
var victoria;


function init() {
	// Initalize things here
	ourLoc = ol.proj.fromLonLat([-118.243683,34.052235]);
  taipei = ol.proj.fromLonLat([121.564468,25.033964]);
  taichung = ol.proj.fromLonLat([120.673645,24.147736]);
  nantou = ol.proj.fromLonLat([120.690453,23.902121]);
  singapore = ol.proj.fromLonLat([103.837799,1.301800]);
  beijing = ol.proj.fromLonLat([116.407394,39.904202]);
  tianjing = ol.proj.fromLonLat([117.198070,39.131970]);
  tokyo = ol.proj.fromLonLat([139.691711,35.689487]);
  seoul = ol.proj.fromLonLat([126.977966,37.566536]);
  barcelona = ol.proj.fromLonLat([2.173404,41.385063]);
  paris = ol.proj.fromLonLat([2.352222,48.856613]);
  florence = ol.proj.fromLonLat([11.255814,43.769562]);
  vatican = ol.proj.fromLonLat([12.453389,41.902916]);
  rome = ol.proj.fromLonLat([12.496365,41.902782]);
  seattle = ol.proj.fromLonLat([-122.332069,47.606209]);
  sf = ol.proj.fromLonLat([-122.419418,37.774929]);
  boston = ol.proj.fromLonLat([-71.058884,42.360081]);
  ny = ol.proj.fromLonLat([-74.005974,40.712776]);
  miami = ol.proj.fromLonLat([-80.191788,25.761681]);
  orlando = ol.proj.fromLonLat([-81.379234,28.538336]);
  vegas = ol.proj.fromLonLat([-115.139832,36.169941]);
  bahamas = ol.proj.fromLonLat([-77.396278,25.034281]);
  maui = ol.proj.fromLonLat([-156.331924,20.798363]);
  juneau = ol.proj.fromLonLat([-134.419724,58.301945]);
  banff = ol.proj.fromLonLat([-2.523360,57.662651]);
  victoria = ol.proj.fromLonLat([-109.957397,70.919197]);



	view = new ol.View({
		center: ourLoc,
		zoom: 2.5
	});

	map = new ol.Map({
		target: 'map',
		layers: [
		  new ol.layer.Tile({
		    source: new ol.source.OSM()
		  })
		],
		// Note from the View Animation website:
		// Improve user experience by loading tiles while animating. Will make
		// animations stutter on mobile or slow devices.
		loadTilesWhileAnimating: true,
		view: view
	});
}

// Step 2: Let's make our button do something!
// We use "animate" on the view to animate it.
// To pan the view, we simply need to tell the view
// where to go and how long to take to get there.
function pantp() {
	view.animate({
		center: taipei,
		duration: 3000,
    zoom: 10
	});
}
function pantc() {
	view.animate({
		center: taichung,
		duration: 3000,
    zoom: 10
	});
}
function pannan() {
	view.animate({
		center: nantou,
		duration: 3000,
    zoom: 10
	});
}
function pansin() {
	view.animate({
		center: singapore,
		duration: 3000,
    zoom: 10
	});
}
function panbei() {
	view.animate({
		center: beijing,
		duration: 3000,
    zoom: 10
	});
}
function pantian() {
	view.animate({
		center: tianjing,
		duration: 3000,
    zoom: 10
	});
}
function pantok() {
	view.animate({
		center: tokyo,
		duration: 3000,
    zoom: 10
	});
}
function panseoul() {
	view.animate({
		center: seoul,
		duration: 3000,
    zoom: 10
	});
}
function panbar() {
	view.animate({
		center: barcelona,
		duration: 3000,
    zoom: 10
	});
}
function panpar() {
	view.animate({
		center: paris,
		duration: 3000,
    zoom: 10
	});
}
function panflo() {
	view.animate({
		center: florence,
		duration: 3000,
    zoom: 10
	});
}
function panvat() {
	view.animate({
		center: vatican,
		duration: 3000,
    zoom: 10
	});
}
function panrome() {
	view.animate({
		center: rome,
		duration: 3000,
    zoom: 10
	});
}
function pansea() {
	view.animate({
		center: seattle,
		duration: 3000,
    zoom: 10
	});
}
function pansf() {
	view.animate({
		center: sf,
		duration: 3000,
    zoom: 10
	});
}
function panbos() {
	view.animate({
		center: boston,
		duration: 3000,
    zoom: 10
	});
}
function panny() {
	view.animate({
		center: ny,
		duration: 3000,
    zoom: 10
	});
}
function panmia() {
	view.animate({
		center: miami,
		duration: 3000,
    zoom: 10
	});
}
function panorl() {
	view.animate({
		center: orlando,
		duration: 3000,
    zoom: 10
	});
}
function panveg() {
	view.animate({
		center: vegas,
		duration: 3000,
    zoom: 10
	});
}
function panbah() {
	view.animate({
		center: bahamas,
		duration: 3000,
    zoom: 10
	});
}
function panmaui() {
	view.animate({
		center: maui,
		duration: 3000,
    zoom: 10
	});
}
function panjun() {
	view.animate({
		center: juneau,
		duration: 3000,
    zoom: 10
	});
}
function panban() {
	view.animate({
		center: banff,
		duration: 3000,
    zoom: 10
	});
}
function panvic() {
	view.animate({
		center: victoria,
		duration: 3000,
    zoom: 10
	});
}
window.onload = init;
