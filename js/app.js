var filterRange = [0, Infinity];
var data = {};
var districts;
var chartsActive = false;
var lineColor = ["step", ["get", 'width']]

for (var i=0; i<GROUPS.length; i++) {
  if (i==0) lineColor.push(GROUPS[0].color)
  else lineColor.push(GROUPS[i].value, GROUPS[i].color)
}


function enterMap() {
  updateChart(0)
  var x = document.getElementById('infoWindow')
  x.style.display = "none";
  x.classList.remove("landing");
  x.classList.add("menu")
  var y = document.getElementById('enter')
  y.style.display = "none";
  var z = document.getElementById('landingClose')
  z.style.display = "block";
}


function toggleWindow(id) {
  var x = document.getElementById(id);
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    var windows = document.querySelectorAll('.window');
    Array.prototype.forEach.call(windows, function(element, index) {
      if (element.id != id) {
        element.style.display = 'none';
      }
    });
  }
  if (chartsActive == true) {
    map.setLayoutProperty(DISTRICTS_LAYER, 'visibility', 'none')
    chartsActive = false
  } else if (id == 'chartsWindow') {
    map.setLayoutProperty(DISTRICTS_LAYER, 'visibility', 'visible');
    chartsActive = true
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  document.getElementById("chartDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
  container: 'map',
  style: MAPBOX_STYLE,
  center: [-46.63, -23.55],
  zoom: 14,
  maxZoom: 22,
  minZoom: 12,
 // maxBounds: [
  //[-46.31, -23.99], // Southwest coordinates
  //[-46.89, -23.31] // Northeast coordinates
 // ],
  hash: true
});

map.addControl(new mapboxgl.NavigationControl());
map.on('load', function() {

  map.addSource('sidewalks', {
     type: 'vector',
     url: SIDEWALKS_TILESET
  });

map.addLayer({
    'id': 'largura-do-passeio',
    'type': 'line',
    'source': 'sidewalks',
    'source-layer': "Largura_do_Passeio_SP-9fe0o1",
    'layout': {
    'line-cap': 'round',
    },
    'paint': {
      'line-width': [
        'interpolate',
        ['linear'],
        ['zoom'],
        14, 1,
        19, 10,
      ],
      'line-color': lineColor,
      'line-opacity': 1,
    },
  },
  'road-label-simple'
  );

  map.addLayer(
    {
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
        'paint': {
        'fill-extrusion-color': '#141c26',
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15, 0,
          15.05, ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15, 0,
          15.05, ['get', 'min_height']
        ],
        'fill-extrusion-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15, 0,
          16, 0.95
        ]
      }
    },
    'road-label-simple'
  );

  //loadSummaryData(data, loadDistrictData);

  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  function addPopup(e) {

    map.getCanvas().style.cursor = 'pointer';

    var lineWidth = e.features[0].properties.cc_lg_med
    var lineColor = e.features[0].layer.paint['line-color']
    var coordinates = e.lngLat;
    var stopIndex;

    if (lineWidth <= 1.8) {groupIndex = 0}; 
    if (lineWidth <= 2.7 && lineWidth > 1.8) {groupIndex = 1};
    if (lineWidth <= 3.5 && lineWidth > 2.7) {groupIndex = 2};
    if (lineWidth <= 4.5 && lineWidth > 3.5) {groupIndex = 3};
    if (lineWidth <= 5.5 && lineWidth > 4.5) {groupIndex = 4};
    if (lineWidth <= 6.5 && lineWidth > 5.5) {groupIndex = 5};
    if (lineWidth > 6.5) {groupIndex = 6};
  
    lineColor = GROUPS[groupIndex].color;

    var description =
      '<div class="name">Largura do passeio:</div>' +
      '<div class="width">' + (Math.round(lineWidth * 10) / 10) + ' ' + UNITS + '</div>' +
      '<div class="message">O distanciamneto social é ' + GROUPS[groupIndex].rating + ' nesta calçada</div>'

    popup.setLngLat(coordinates)
    popup.setHTML(description)
    popup.addTo(map)

    popup._content.style.color = lineColor
    popup._content.style.borderColor = lineColor

    if (popup._tip.offsetParent.className.includes('mapboxgl-popup-anchor-bottom')) {
      popup._tip.style.borderTopColor = lineColor
    }
    if (popup._tip.offsetParent.className.includes('mapboxgl-popup-anchor-top')) {
      popup._tip.style.borderBottomColor = lineColor
    }
    if (popup._tip.offsetParent.className.includes('mapboxgl-popup-anchor-right')) {
      popup._tip.style.borderLeftColor = lineColor
    }
    if (popup._tip.offsetParent.className.includes('mapboxgl-popup-anchor-left')) {
      popup._tip.style.borderRightColor = lineColor
    }

    popup.addTo(map)
  }

  map.on('touchstart', 'largura-do-passeio', function(e) {
    addPopup(e);
  })

  map.on('mousemove', 'largura-do-passeio', function(e) {
    addPopup(e);
  });

  map.on('mouseleave', 'largura-do-passeio', function() {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
});


function getLowHigh(index) {

  var low, high;

  if (GROUPS[index - 1] == null) {
    low = item.value
    high = Infinity
  }

  else {
    if (item.value == 0)
      low = 0
    else
      low = item.value

    high = GROUPS[index - 1].value - PRECISION
  }

  return [low, high]
}

// add a legend item
function addLegendItem(item, index) {

  if (GROUPS[index - 1] == null) {
    var low = item.value
    var high = Infinity
    var string = low + UNITS + '+'
  }

  else {
    if (item.value == 0)
      var low = 0
    else
      var low = item.value

    var high = GROUPS[index - 1].value - PRECISION
    var string = low + ' - ' + high + UNITS
  }

  var row = document.createElement("LI");
  var rowContent = document.createElement("DIV");
  var rowLeft = document.createElement("DIV");
  var color = document.createElement("DIV");
  var rowRight = document.createElement("DIV");

  rowLeft.innerHTML = "<p>" + item.rating + "</p>"
  rowLeft.classList.add("row-left");
  color.classList.add("color");
  color.setAttribute("style", "background:" + item.color + ";");
  rowLeft.appendChild(color)
  row.appendChild(rowLeft)
  rowRight.classList.add("row-right");
  rowRight.innerHTML = "<p>" + string + "</p>";
  row.appendChild(rowRight);
  document.getElementById("legend-main").appendChild(row);
}

GROUPS.reverse().forEach(addLegendItem);
GROUPS.reverse()

