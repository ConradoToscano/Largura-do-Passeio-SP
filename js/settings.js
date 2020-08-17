var MAPBOX_TOKEN = 'pk.eyJ1IjoiY29ucmFkb3Rvc2Nhbm8iLCJhIjoiY2tjbWFyOHRqMWs2ajJycnBuNzA0azJ5ZyJ9.EJ7--NILC4ffhVqLUovtGA'
var MAPBOX_STYLE = 'mapbox://styles/conradotoscano/ckd952ca00ii31inzzydpmvqi'
var SIDEWALKS_TILESET = 'mapbox://conradotoscano.91c6n2r6'
var SIDEWALKS_LAYER = 'largura-do-passeio-sp-9fe0o1'
var DISTRICTS_TILESET = 'mapbox://conradotoscano.cm5fsg8n'
var DISTRICTS_LAYER = 'distritos-0uwj70'
var UNITS = 'm' // change to 'm' for meters
var PRECISION = 0.1 // the number of decimal places
var GROUPS = [
  {
    "value": 0.0,
    "rating": "impossível",
    "color": "#FF0049"
  },
  {
    "value": 1.8,
    "rating": "muito difícil",
    "color": "#FF461E"
  },
  {
    "value": 2.7,
    "rating": "difícil",
    "color": "#FF9300"
  },
  {
    "value": 3.5,
    "rating": "relativamente difícil",
    "color": "#e4da27"
  },
  {
    "value": 4.5,
    "rating": "relativamente fácil",
    "color": "#1ce262"
  },
  {
    "value": 5.5,
    "rating": "fácil",
    "color": "#00FFC4"
  },
  {
    "value": 6.5,
    "rating": "muito fácil",
    "color": "#00D2FF"
  },
]
