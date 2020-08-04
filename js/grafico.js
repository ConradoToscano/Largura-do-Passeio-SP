 
//Lista de Distritos

var names = ['Água Rasa'
, 'Alto de Pinheiros'
, 'Anhanguera'
, 'Aricanduva'
, 'Artur Alvim'
, 'Barra Funda'
, 'Bela Vista'
, 'Belém'
, 'Bom Retiro'
, 'Brás'
, 'Brasilândia'
, 'Butantã'
, 'Cachoeirinha'
, 'Cambuci'
, 'Campo Belo'
, 'Campo Grande'
, 'Campo Limpo'
, 'Cangaíba'
, 'Capão Redondo'
, 'Carrão'
, 'Casa Verde'
, 'Cidade Ademar'
, 'Cidade Dutra'
, 'Cidade Líder'
, 'Cidade Tiradentes'
, 'Consolação'
, 'Cursino'
, 'Ermelino Matarazzo'
, 'Freguesia do Ó'
, 'Grajaú'
, 'Guaianases'
, 'Iguatemi'
, 'Ipiranga'
, 'Itaim Bibi'
, 'Itaim Paulista'
, 'Itaquera'
, 'Jabaquara'
, 'Jaçanã'
, 'Jaguara'
, 'Jaguaré'
, 'Jaraguá'
, 'Jardim Ângela'
, 'Jardim Helena'
, 'Jardim Paulista'
, 'Jardim São Luís'
, 'José Bonifácio'
, 'Lajeado'
, 'Lapa'
, 'Liberdade'
, 'Limão'
, 'Mandaqui'
, 'Marsilac'
, 'Moema'
, 'Moóca'
, 'Morumbi'
, 'Parelheiros'
, 'Pari'
, 'Parque do Carmo'
, 'Pedreira'
, 'Penha'
, 'Perdizes'
, 'Perus'
, 'Pinheiros'
, 'Pirituba'
, 'Ponte Rasa'
, 'Raposo Tavares'
, 'República'
, 'Rio Pequeno'
, 'Sacomã'
, 'Santa Cecília'
, 'Santana'
, 'Santo Amaro'
, 'São Domingos'
, 'São Lucas'
, 'São Mateus'
, 'São Miguel'
, 'São Rafael'
, 'Sapopemba'
, 'Saúde'
, 'Sé'
, 'Socorro'
, 'Tatuapé'
, 'Tremembé'
, 'Tucuruvi'
, 'Vila Andrade'
, 'Vila Curuçá'
, 'Vila Formosa'
, 'Vila Guilherme'
, 'Vila Jacuí'
, 'Vila Leopoldina'
, 'Vila Maria'
, 'Vila Mariana'
, 'Vila Matilde'
, 'Vila Medeiros'
, 'Vila Prudente'
, 'Vila Sônia'] 

var type = ["Cidade", "Distritos"]


for (var i=0; i<names.length; i++) {

if (document.getElementById("list" + type) != null) {

var dropdown = document.getElementById("chartDropdown");
var list = document.getElementById("list" + type);
var row = document.createElement("LI");

row.innerHTML = names[i]
row.classList.add('dropdown-item')
row.setAttribute("onclick","selectArea('" + type + "','" + names[i] + "');")
list.appendChild(row)

} else {

var dropdown = document.getElementById("chartDropdown");
var list = document.createElement("UL");
var header = document.createElement("LI");
var row = document.createElement("LI");

list.id = "list" + type

header.classList.add('dropdown-header')
header.innerHTML = type[1]
list.appendChild(header)
row.innerHTML = names[i]
row.classList.add('dropdown-item')
row.setAttribute("onclick","selectArea('" + type + "','" + names[i] + "');")
list.appendChild(row)
dropdown.appendChild(list)
}
}


//DESENHANDO O GRÁFICO


var dados = [ [ 9362.7	, 9358.3	, 4921.5	, 1663.5	, 366.1	, 171.5	, 155.0],
[ 83.9	, 64.4	, 87.2	, 10.8	, 0.8	, 0.5	, 0.4],
[ 20.4	, 49.2	, 72.0	, 19.5	, 1.5	, 0.3	, 0.1],
[ 73.8	, 43.8	, 13.4	, 4.2	, 3.7	, 0.8	, 0.4],
[ 110.3	, 89.6	, 31.6	, 12.8	, 3.3	, 1.4	, 0.3],
[ 65.7	, 87.1	, 34.3	, 5.1	, 1.8	, 0.4	, 2.8],
[ 8.9	, 11.6	, 26.8	, 20.5	, 3.9	, 0.2	, 0.5],
[ 4.2	, 12.6	, 29.5	, 15.8	, 0.7	, 0.3	, 2.1],
[ 18.6	, 20.4	, 53.4	, 19.4	, 1.0	, 1.5	, 0.5],
[ 8.0	, 21.1	, 35.8	, 12.3	, 2.5	, 1.6	, 1.3],
[ 9.0	, 15.9	, 30.9	, 24.0	, 4.5	, 0.8	, 0.6],
[ 203.2	, 113.9	, 26.0	, 7.7	, 3.0	, 1.0	, 3.1],
[ 22.7	, 94.4	, 53.9	, 22.1	, 2.9	, 1.7	, 0.2],
[ 109.3	, 104.9	, 26.0	, 8.1	, 3.6	, 0.5	, 1.2],
[ 10.0	, 15.7	, 39.2	, 22.0	, 2.5	, 0.0	, 0.0],
[ 28.7	, 118.7	, 63.3	, 9.5	, 0.7	, 0.3	, 1.1],
[ 87.4	, 110.2	, 39.5	, 10.4	, 1.9	, 1.8	, 3.6],
[ 130.0	, 176.4	, 48.0	, 14.0	, 3.9	, 1.0	, 0.6],
[ 122.7	, 110.2	, 34.9	, 7.0	, 1.5	, 0.8	, 1.1],
[ 187.0	, 167.4	, 53.1	, 14.1	, 4.7	, 1.3	, 1.9],
[ 68.0	, 65.7	, 79.3	, 16.0	, 1.3	, 2.2	, 0.9],
[ 178.7	, 135.4	, 77.7	, 14.0	, 2.8	, 1.9	, 1.8],
[ 194.7	, 189.9	, 33.3	, 13.0	, 4.2	, 0.9	, 1.7],
[ 157.8	, 205.9	, 85.6	, 21.1	, 7.8	, 2.8	, 2.9],
[ 90.2	, 145.6	, 45.6	, 14.0	, 3.1	, 0.8	, 1.3],
[ 154.9	, 77.0	, 25.7	, 10.0	, 3.6	, 4.5	, 1.9],
[ 2.4	, 19.3	, 27.9	, 34.4	, 1.2	, 0.3	, 0.5],
[ 98.1	, 87.6	, 43.7	, 9.0	, 1.3	, 0.2	, 0.7],
[ 74.0	, 89.0	, 35.0	, 11.2	, 4.4	, 0.9	, 1.8],
[ 201.2	, 107.6	, 22.7	, 13.3	, 4.5	, 1.1	, 1.8],
[ 340.1	, 355.9	, 98.7	, 45.0	, 13.6	, 4.5	, 4.4],
[ 119.9	, 75.9	, 16.8	, 6.2	, 1.4	, 1.2	, 1.4],
[ 142.3	, 86.2	, 25.3	, 6.0	, 3.1	, 0.9	, 0.7],
[ 33.4	, 47.7	, 140.5	, 51.2	, 3.7	, 0.5	, 2.1],
[ 74.7	, 122.8	, 49.9	, 15.0	, 2.9	, 1.1	, 0.2],
[ 155.0	, 166.6	, 60.8	, 19.5	, 3.4	, 1.2	, 0.9],
[ 143.7	, 173.3	, 81.7	, 23.6	, 3.5	, 2.0	, 4.0],
[ 193.5	, 176.1	, 57.1	, 14.4	, 1.9	, 0.2	, 1.9],
[ 114.1	, 80.2	, 19.2	, 5.4	, 2.0	, 0.8	, 0.8],
[ 39.7	, 38.6	, 10.4	, 3.2	, 2.5	, 0.1	, 0.3],
[ 39.6	, 32.5	, 26.6	, 14.9	, 3.7	, 1.4	, 1.6],
[ 114.4	, 131.7	, 36.6	, 9.6	, 7.5	, 5.1	, 2.3],
[ 192.4	, 238.3	, 72.0	, 30.2	, 19.0	, 5.3	, 2.9],
[ 84.8	, 94.2	, 37.9	, 19.2	, 8.1	, 1.8	, 0.8],
[ 8.6	, 13.4	, 84.0	, 49.4	, 3.0	, 1.0	, 5.8],
[ 191.4	, 209.1	, 55.7	, 17.5	, 6.5	, 2.7	, 4.1],
[ 110.4	, 81.8	, 20.2	, 12.0	, 2.8	, 3.6	, 4.5],
[ 151.6	, 118.5	, 24.4	, 7.2	, 2.9	, 0.3	, 2.2],
[ 27.5	, 52.3	, 98.4	, 49.3	, 7.4	, 3.1	, 2.2],
[ 8.7	, 22.6	, 47.0	, 13.5	, 3.8	, 0.4	, 0.0],
[ 126.7	, 68.5	, 19.0	, 6.9	, 5.3	, 0.7	, 1.3],
[ 122.3	, 87.0	, 18.3	, 4.4	, 3.0	, 0.1	, 0.8],
[ 222.2	, 34.0	, 9.5	, 3.5	, 3.6	, 0.0	, 0.4],
[ 18.4	, 45.6	, 106.8	, 25.7	, 3.3	, 1.4	, 0.7],
[ 30.0	, 38.7	, 99.5	, 16.1	, 1.4	, 0.3	, 0.3],
[ 35.9	, 116.6	, 65.6	, 33.5	, 5.3	, 3.4	, 1.4],
[ 311.6	, 336.3	, 139.1	, 52.5	, 17.9	, 18.7	, 6.0],
[ 7.0	, 5.2	, 40.5	, 17.7	, 1.2	, 3.2	, 0.3],
[ 63.1	, 86.9	, 36.5	, 12.2	, 1.6	, 1.7	, 1.2],
[ 79.6	, 111.0	, 55.6	, 17.0	, 8.2	, 1.2	, 3.9],
[ 124.8	, 104.9	, 85.9	, 11.8	, 3.6	, 0.5	, 1.3],
[ 30.1	, 48.5	, 91.9	, 30.8	, 3.5	, 0.6	, 0.9],
[ 87.6	, 61.2	, 11.8	, 7.4	, 0.8	, 0.8	, 0.4],
[ 30.4	, 57.3	, 96.2	, 43.8	, 5.2	, 1.3	, 2.7],
[ 176.1	, 160.7	, 39.3	, 11.2	, 2.5	, 3.7	, 1.4],
[ 118.8	, 101.8	, 28.0	, 4.4	, 0.8	, 0.3	, 0.2],
[ 78.9	, 97.7	, 19.9	, 11.5	, 4.0	, 2.7	, 1.9],
[ 6.0	, 16.9	, 19.7	, 10.1	, 3.3	, 3.9	, 3.7],
[ 101.3	, 134.8	, 42.6	, 20.3	, 8.0	, 1.2	, 1.4],
[ 162.9	, 170.1	, 49.3	, 10.5	, 2.0	, 1.4	, 1.2],
[ 5.6	, 10.4	, 46.7	, 44.2	, 3.4	, 0.4	, 0.4],
[ 94.5	, 95.3	, 75.4	, 15.7	, 6.2	, 3.3	, 4.4],
[ 112.7	, 152.2	, 77.6	, 26.5	, 4.0	, 2.2	, 0.9],
[ 66.3	, 103.3	, 46.7	, 11.2	, 2.6	, 4.5	, 1.2],
[ 187.3	, 105.5	, 21.1	, 7.9	, 1.4	, 1.5	, 0.8],
[ 135.0	, 151.2	, 65.0	, 22.1	, 6.7	, 6.3	, 1.2],
[ 146.4	, 82.2	, 25.8	, 6.4	, 1.3	, 0.5	, 1.8],
[ 111.2	, 101.4	, 41.6	, 10.9	, 4.0	, 2.0	, 2.2],
[ 221.1	, 166.6	, 53.6	, 21.5	, 4.7	, 4.7	, 2.2],
[ 55.4	, 82.4	, 122.2	, 26.1	, 4.5	, 0.2	, 0.2],
[ 7.0	, 12.9	, 18.2	, 7.6	, 1.5	, 1.7	, 1.5],
[ 63.6	, 84.3	, 45.2	, 18.3	, 3.1	, 2.9	, 3.8],
[ 44.1	, 60.2	, 106.3	, 23.3	, 1.5	, 1.1	, 0.4],
[ 275.1	, 173.2	, 37.4	, 13.6	, 1.8	, 0.9	, 2.5],
[ 158.5	, 91.7	, 29.7	, 13.4	, 1.4	, 0.3	, 0.8],
[ 45.5	, 87.8	, 37.0	, 9.8	, 4.9	, 2.9	, 0.9],
[ 115.0	, 137.4	, 56.2	, 17.7	, 3.7	, 0.8	, 1.4],
[ 100.7	, 88.6	, 51.4	, 12.8	, 1.7	, 2.0	, 0.3],
[ 71.7	, 56.5	, 33.6	, 9.4	, 3.4	, 3.7	, 1.5],
[ 127.9	, 111.2	, 34.5	, 18.7	, 4.3	, 0.5	, 1.8],
[ 17.0	, 28.7	, 43.5	, 20.4	, 5.2	, 2.9	, 1.0],
[ 39.4	, 100.7	, 97.0	, 32.0	, 4.8	, 1.0	, 3.7],
[ 31.9	, 70.3	, 114.2	, 46.1	, 7.6	, 2.9	, 2.2],
[ 71.5	, 116.5	, 85.5	, 16.3	, 2.4	, 1.0	, 1.5],
[ 135.3	, 96.7	, 38.8	, 12.8	, 1.4	, 2.3	, 3.5],
[ 92.1	, 115.7	, 54.8	, 10.3	, 5.8	, 1.7	, 0.8],
[ 87.7	, 122.8	, 49.4	, 9.5	, 3.4	, 1.3	, 0.6],]

var legendas = [[ '9.3k'	, '9.3k'	, '4.9k'	, '1.6k'	, 366	, 171	, 155],
[ 83	, 64	, 87	, 10	, 0.8	, 0.5	, 0.4],
[ 20	, 49	, 72	, 19	, 1.5	, 0.3	, 0.1],
[ 73	, 43	, 13	, 4.2	, 3.7	, 0.8	, 0.4],
[ 110	, 89	, 31	, 12	, 3.3	, 1.4	, 0.3],
[ 65	, 87	, 34	, 5.1	, 1.8	, 0.4	, 2.8],
[ 8.9	, 11	, 26	, 20	, 3.9	, 0.2	, 0.5],
[ 4.2	, 12	, 29	, 15	, 0.7	, 0.3	, 2.1],
[ 18	, 20	, 53	, 19	, 1.0	, 1.5	, 0.5],
[ 8.0	, 21	, 35	, 12	, 2.5	, 1.6	, 1.3],
[ 9.0	, 15	, 30	, 24	, 4.5	, 0.8	, 0.6],
[ 203	, 113	, 26	, 7.7	, 3.0	, 1.0	, 3.1],
[ 22	, 94	, 53	, 22	, 2.9	, 1.7	, 0.2],
[ 109	, 104	, 26	, 8.1	, 3.6	, 0.5	, 1.2],
[ 10	, 15	, 39	, 22	, 2.5	, 0.0	, 0.0],
[ 28	, 118	, 63	, 9.5	, 0.7	, 0.3	, 1.1],
[ 87	, 110	, 39	, 10	, 1.9	, 1.8	, 3.6],
[ 130	, 176	, 48	, 14	, 3.9	, 1.0	, 0.6],
[ 122	, 110	, 34	, 7.0	, 1.5	, 0.8	, 1.1],
[ 187	, 167	, 53	, 14	, 4.7	, 1.3	, 1.9],
[ 68	, 65	, 79	, 16	, 1.3	, 2.2	, 0.9],
[ 178	, 135	, 77	, 14	, 2.8	, 1.9	, 1.8],
[ 194	, 189	, 33	, 13	, 4.2	, 0.9	, 1.7],
[ 157	, 205	, 85	, 21	, 7.8	, 2.8	, 2.9],
[ 90	, 145	, 45	, 14	, 3.1	, 0.8	, 1.3],
[ 154	, 77	, 25	, 10.	, 3.6	, 4.5	, 1.9],
[ 2.4	, 19	, 27	, 34	, 1.2	, 0.3	, 0.5],
[ 98	, 87	, 43	, 9.0	, 1.3	, 0.2	, 0.7],
[ 74	, 89	, 35	, 11	, 4.4	, 0.9	, 1.8],
[ 201	, 107	, 22	, 13	, 4.5	, 1.1	, 1.8],
[ 340	, 355	, 98	, 45	, 13	, 4.5	, 4.4],
[ 119	, 75	, 16	, 6.2	, 1.4	, 1.2	, 1.4],
[ 142	, 86	, 25	, 6.0	, 3.1	, 0.9	, 0.7],
[ 33	, 47	, 140	, 51	, 3.7	, 0.5	, 2.1],
[ 74	, 122	, 49	, 15	, 2.9	, 1.1	, 0.2],
[ 155	, 166	, 60	, 19	, 3.4	, 1.2	, 0.9],
[ 143	, 173	, 81	, 23	, 3.5	, 2.0	, 4.0],
[ 193	, 176	, 57	, 14	, 1.9	, 0.2	, 1.9],
[ 114	, 80	, 19	, 5.4	, 2.0	, 0.8	, 0.8],
[ 39	, 38	, 10	, 3.2	, 2.5	, 0.1	, 0.3],
[ 39	, 32	, 26	, 14	, 3.7	, 1.4	, 1.6],
[ 114	, 131	, 36	, 9.6	, 7.5	, 5.1	, 2.3],
[ 192	, 238	, 72	, 30	, 19	, 5.3	, 2.9],
[ 84	, 94	, 37	, 19	, 8.1	, 1.8	, 0.8],
[ 8.6	, 13	, 84	, 49	, 3.0	, 1.0	, 5.8],
[ 191	, 209	, 55	, 17	, 6.5	, 2.7	, 4.1],
[ 110	, 81	, 20	, 12	, 2.8	, 3.6	, 4.5],
[ 151	, 118	, 24	, 7.2	, 2.9	, 0.3	, 2.2],
[ 27	, 52	, 98	, 49	, 7.4	, 3.1	, 2.2],
[ 8.7	, 22	, 47	, 13	, 3.8	, 0.4	, 0.0],
[ 126	, 68	, 19	, 6.9	, 5.3	, 0.7	, 1.3],
[ 122	, 87	, 18	, 4.4	, 3.0	, 0.1	, 0.8],
[ 222	, 34	, 9.5	, 3.5	, 3.6	, 0.0	, 0.4],
[ 18	, 45	, 106	, 25	, 3.3	, 1.4	, 0.7],
[ 30	, 38	, 99	, 16	, 1.4	, 0.3	, 0.3],
[ 35	, 116	, 65	, 33	, 5.3	, 3.4	, 1.4],
[ 311	, 336	, 139	, 52	, 17	, 18	, 6.0],
[ 7.0	, 5.2	, 40	, 17	, 1.2	, 3.2	, 0.3],
[ 63	, 86	, 36	, 12	, 1.6	, 1.7	, 1.2],
[ 79	, 111	, 55	, 17	, 8.2	, 1.2	, 3.9],
[ 124	, 104	, 85	, 11	, 3.6	, 0.5	, 1.3],
[ 30	, 48	, 91	, 30	, 3.5	, 0.6	, 0.9],
[ 87	, 61	, 11	, 7.4	, 0.8	, 0.8	, 0.4],
[ 30	, 57	, 96	, 43	, 5.2	, 1.3	, 2.7],
[ 176	, 160	, 39	, 11	, 2.5	, 3.7	, 1.4],
[ 118	, 101	, 28	, 4.4	, 0.8	, 0.3	, 0.2],
[ 78	, 97	, 19	, 11	, 4.0	, 2.7	, 1.9],
[ 6.0	, 16	, 19	, 10	, 3.3	, 3.9	, 3.7],
[ 101	, 134	, 42	, 20	, 8.0	, 1.2	, 1.4],
[ 162	, 170	, 49	, 10	, 2.0	, 1.4	, 1.2],
[ 5.6	, 10	, 46	, 44	, 3.4	, 0.4	, 0.4],
[ 94	, 95	, 75	, 15	, 6.2	, 3.3	, 4.4],
[ 112	, 152	, 77	, 26	, 4.0	, 2.2	, 0.9],
[ 66	, 103	, 46	, 11	, 2.6	, 4.5	, 1.2],
[ 187	, 105	, 21	, 7.9	, 1.4	, 1.5	, 0.8],
[ 135	, 151	, 65	, 22	, 6.7	, 6.3	, 1.2],
[ 146	, 82	, 25	, 6.4	, 1.3	, 0.5	, 1.8],
[ 111	, 101	, 41	, 10	, 4.0	, 2.0	, 2.2],
[ 221	, 166	, 53	, 21	, 4.7	, 4.7	, 2.2],
[ 55	, 82	, 122	, 26	, 4.5	, 0.2	, 0.2],
[ 7.0	, 12	, 18	, 7.6	, 1.5	, 1.7	, 1.5],
[ 63	, 84	, 45	, 18	, 3.1	, 2.9	, 3.8],
[ 44	, 60	, 106	, 23	, 1.5	, 1.1	, 0.4],
[ 275	, 173	, 37	, 13	, 1.8	, 0.9	, 2.5],
[ 158	, 91	, 29	, 13	, 1.4	, 0.3	, 0.8],
[ 45	, 87	, 37	, 9.8	, 4.9	, 2.9	, 0.9],
[ 115	, 137	, 56	, 17	, 3.7	, 0.8	, 1.4],
[ 100	, 88	, 51	, 12	, 1.7	, 2.0	, 0.3],
[ 71	, 56	, 33	, 9.4	, 3.4	, 3.7	, 1.5],
[ 127	, 111	, 34	, 18	, 4.3	, 0.5	, 1.8],
[ 17	, 28	, 43	, 20	, 5.2	, 2.9	, 1.0],
[ 39	, 100	, 97	, 32	, 4.8	, 1.0	, 3.7],
[ 31	, 70	, 114	, 46	, 7.6	, 2.9	, 2.2],
[ 71	, 116	, 85	, 16	, 2.4	, 1.0	, 1.5],
[ 135	, 96	, 38	, 12	, 1.4	, 2.3	, 3.5],
[ 92	, 115	, 54	, 10	, 5.8	, 1.7	, 0.8],
[ 87	, 122	, 49	, 9.5	, 3.4	, 1.3	, 0.6],]

var colorscale = [ '#FF0049', '#FF461E', '#FF9300','#e4da27','#1ce262', '#00FFC4', '#00D2FF']



function drawchart (a) {


  var margin = {top: 10, right: 5, bottom: 50, left: 5};
  var width = 300 - margin.left - margin.right;
  var height = 240 - margin.top - margin.bottom;

  var svg = d3.select("#chartContainer").append("svg")
      .attr("id", "chart")
      .attr("width", width)
      .attr("height", 250);

  var context = svg.append("g")
    .attr("class", "context")
    .attr("width", width)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
  //escala y
  var yscale = d3.scaleLinear()
    .domain([0,d3.max(dados[a])])
    .range([0,height-30]); 



  var nbars = dados[a].length
  var margembarras = 3
  var larguraBarra = (width - (margembarras*nbars))/nbars;


  //barras
  var bars = context.selectAll(".bar")
    .data(dados[a])
    .enter()
    .append('rect')
    .classed('bar',true)
    .attr('height', function(d) {return yscale(d);} )
    .attr('width', larguraBarra)
    .attr('x', function(d,i) {return i * (larguraBarra+margembarras)})
    .attr('y', function(d) {return height - yscale(d);})
    .attr('fill', function(d,i) {return colorscale[i];})
    .attr("transform", "translate(" + margembarras + ",0)");;

  var formatSuffix = d3.format('.2s');
  var formatPercent = d3.format(",.1%");


  var rotulo = context.selectAll("text")
    .data(dados[a])
    .enter()
    .append('text')
    .attr("class", "text")
    .text(function(d,i) {return legendas[a][i];})
    .style("text-anchor", "middle")
    .style("font-size", "11px")
    .style("font-weight", "bold")
    .attr("transform", "translate(" + margembarras + ",0)")
    .attr('x', function(d,i) {return i * (larguraBarra+margembarras)+larguraBarra/2})
    .attr('y', function(d) {return height - yscale(d)-30;});
    

  var rotulo1 = context.append("g")
    .attr("class", "rotulo");
    
  rotulo1.selectAll("text")
    .data(dados[a])
    .enter()
    .append('text')
    .attr("class", "text")
    .text("km")
    .style("text-anchor", "middle")
    .style("font-size", "11px")
    .style("font-weight", "bold")
    .attr("transform", "translate(" + margembarras + ",0)")
    .attr('x', function(d,i) {return i * (larguraBarra+margembarras)+larguraBarra/2})
    .attr('y', function(d) {return height - yscale(d)-20;});
    
  var porcentagens = context.append("g")
    .attr("class", "porcentagens")
    .attr("transform", "translate(" + margembarras + ",0)");

  var rotulo2 = porcentagens.selectAll("text")  
    .data(dados[a])  
    .enter()
    .append('text')
    .attr("class", "text")
    .attr('x', function(d,i) {return i * (larguraBarra+margembarras)+larguraBarra/2})
    .attr('y', function(d) {return height - yscale(d)-5;})
    .text(function(d) {return  formatPercent(d / d3.sum(dados[a]));})
    .style("text-anchor", "middle")
    .style("font-size", "11px")
    .style("font-weight", "normal");
  
  svg.append("text")
    .attr("transform","translate(" + (width/2) + " ," +(height + 55) + ")")
    .style("text-anchor", "middle")
    .style("font-size", "12px")
    .text("largura do passeio (m)");

  var eixox = context.append("g")
    .attr("class", "eixox")
    .attr("transform", "translate(0," + height + ")");

  var dadoslegenda = ['0m','1.8m','2.7m','3.5m','4.5m','5.5m','6.5m']

  var legeixox = eixox.selectAll("text")
    .data(dadoslegenda)
    .enter()
    .append('text')
    .attr('x', function(d,i) {return i * (larguraBarra+margembarras)})
    .attr('y', 15 )
    .text(function(d){ return d;})
    .style("text-anchor", "left")
    .style("font-size", "9px")
    .style("font-weight", "normal")
    .attr("transform", "translate("+margembarras+","+4+")");

  var tracos = eixox.selectAll("line")
    .data(dados[a])
    .enter()
    .append("line")
    .style("stroke", "#a6c1d2")
      .style("stroke-width", 1)
      .attr('x1', function(d,i) {return i * (larguraBarra+margembarras) + margembarras/2})
      .attr('y1', 0)
      .attr("x2", function(d,i) {return i * (larguraBarra+margembarras) + margembarras/2})
      .attr("y2", 8);

 



  // Add the brush feature using the d3.brush function

  svg.append("g")
  .attr("id", "brush")
  .attr("class", "brush")
  .attr("transform", "translate("+2*margembarras+",0)")
  .call(d3.brushX()
  .extent([[0, 0], [width-3, height+10]])
  .on("start brush", updateChart));

  function updateChart() {
      
    extent = d3.event.selection   // looks like [ [12,11]]
    bars.classed("selected",function(d,i){ return isBrushed(extent, i * (larguraBarra+margembarras),i * (larguraBarra+margembarras)+larguraBarra) } ) 
    bars.classed("notselected",function(d,i){ return notBrushed(extent, i * (larguraBarra+margembarras),i * (larguraBarra+margembarras)+larguraBarra) } )

    function isBrushed(brush_coords, x0, x1) {
      var e0 = brush_coords[0],
          e1 = brush_coords[1];
    return e0 <= x1 && x1 <= e1 && e0 <= x0 && x0 <= e1;    // This return TRUE or FALSE depending on if the points is in the selected area
  }   
  function notBrushed(brush_coords, x0, x1) {
    var e0 = brush_coords[0],
        e1 = brush_coords[1];
  return x0 <= e0 && x1 <= e0 || x0 >= e1 && x1 >= e1;    // This return TRUE or FALSE depending on if the points is in the selected area
  }
  filterSidewalks()
  }
}  



var cordenadas =[['Água Rasa'	,'-46.572'	,'-23.567'],
[ 'Alto de Pinheiros'	,'-46.712'	,'-23.548'],
[ 'Anhanguera'	,'-46.793'	,'-23.431'],
[ 'Aricanduva'	,'-46.516'	,'-23.574'],
[ 'Artur Alvim'	,'-46.486'	,'-23.54'],
[ 'Barra Funda'	,'-46.674'	,'-23.521'],
[ 'Bela Vista'	,'-46.648'	,'-23.561'],
[ 'Belém'	,'-46.595'	,'-23.538'],
[ 'Bom Retiro'	,'-46.637'	,'-23.526'],
[ 'Brás'	,'-46.617'	,'-23.544'],
[ 'Brasilândia'	,'-46.688'	,'-23.449'],
[ 'Butantã'	,'-46.726'	,'-23.57'],
[ 'Cachoeirinha'	,'-46.662'	,'-23.454'],
[ 'Cambuci'	,'-46.617'	,'-23.564'],
[ 'Campo Belo'	,'-46.668'	,'-23.628'],
[ 'Campo Grande'	,'-46.688'	,'-23.675'],
[ 'Campo Limpo'	,'-46.764'	,'-23.636'],
[ 'Cangaíba'	,'-46.52'	,'-23.497'],
[ 'Capão Redondo'	,'-46.781'	,'-23.669'],
[ 'Carrão'	,'-46.538'	,'-23.551'],
[ 'Casa Verde'	,'-46.657'	,'-23.501'],
[ 'Cidade Ademar'	,'-46.657'	,'-23.674'],
[ 'Cidade Dutra'	,'-46.702'	,'-23.726'],
[ 'Cidade Líder'	,'-46.491'	,'-23.562'],
[ 'Cidade Tiradentes'	,'-46.401'	,'-23.585'],
[ 'Consolação'	,'-46.66'	,'-23.549'],
[ 'Cursino'	,'-46.621'	,'-23.631'],
[ 'Ermelino Matarazzo'	,'-46.485'	,'-23.491'],
[ 'Freguesia do Ó'	,'-46.697'	,'-23.486'],
[ 'Grajaú'	,'-46.669'	,'-23.79'],
[ 'Guaianases'	,'-46.407'	,'-23.556'],
[ 'Iguatemi'	,'-46.427'	,'-23.613'],
[ 'Ipiranga'	,'-46.603'	,'-23.592'],
[ 'Itaim Bibi'	,'-46.685'	,'-23.602'],
[ 'Itaim Paulista'	,'-46.386'	,'-23.503'],
[ 'Itaquera'	,'-46.456'	,'-23.534'],
[ 'Jabaquara'	,'-46.646'	,'-23.651'],
[ 'Jaçanã'	,'-46.575'	,'-23.46'],
[ 'Jaguara'	,'-46.747'	,'-23.511'],
[ 'Jaguaré'	,'-46.749'	,'-23.544'],
[ 'Jaraguá'	,'-46.74'	,'-23.446'],
[ 'Jardim Ângela'	,'-46.769'	,'-23.716'],
[ 'Jardim Helena'	,'-46.413'	,'-23.484'],
[ 'Jardim Paulista'	,'-46.667'	,'-23.567'],
[ 'Jardim São Luís'	,'-46.739'	,'-23.681'],
[ 'José Bonifácio'	,'-46.433'	,'-23.567'],
[ 'Lajeado'	,'-46.409'	,'-23.534'],
[ 'Lapa'	,'-46.706'	,'-23.523'],
[ 'Liberdade'	,'-46.632'	,'-23.567'],
[ 'Limão'	,'-46.676'	,'-23.498'],
[ 'Mandaqui'	,'-46.641'	,'-23.459'],
[ 'Marsilac'	,'-46.708'	,'-23.935'],
[ 'Moema'	,'-46.661'	,'-23.596'],
[ 'Moóca'	,'-46.596'	,'-23.561'],
[ 'Morumbi'	,'-46.708'	,'-23.596'],
[ 'Parelheiros'	,'-46.717'	,'-23.83'],
[ 'Pari'	,'-46.618'	,'-23.527'],
[ 'Parque do Carmo'	,'-46.463'	,'-23.576'],
[ 'Pedreira'	,'-46.65'	,'-23.707'],
[ 'Penha'	,'-46.529'	,'-23.523'],
[ 'Perdizes'	,'-46.681'	,'-23.539'],
[ 'Perus'	,'-46.746'	,'-23.408'],
[ 'Pinheiros'	,'-46.689'	,'-23.566'],
[ 'Pirituba'	,'-46.726'	,'-23.481'],
[ 'Ponte Rasa'	,'-46.494'	,'-23.516'],
[ 'Raposo Tavares'	,'-46.786'	,'-23.592'],
[ 'República'	,'-46.641'	,'-23.545'],
[ 'Rio Pequeno'	,'-46.759'	,'-23.571'],
[ 'Sacomã'	,'-46.598'	,'-23.631'],
[ 'Santa Cecília'	,'-46.653'	,'-23.532'],
[ 'Santana'	,'-46.63'	,'-23.5'],
[ 'Santo Amaro'	,'-46.701'	,'-23.642'],
[ 'São Domingos'	,'-46.748'	,'-23.493'],
[ 'São Lucas'	,'-46.544'	,'-23.595'],
[ 'São Mateus'	,'-46.481'	,'-23.6'],
[ 'São Miguel'	,'-46.441'	,'-23.501'],
[ 'São Rafael'	,'-46.454'	,'-23.628'],
[ 'Sapopemba'	,'-46.51'	,'-23.606'],
[ 'Saúde'	,'-46.641'	,'-23.615'],
[ 'Sé'	,'-46.631'	,'-23.548'],
[ 'Socorro'	,'-46.714'	,'-23.685'],
[ 'Tatuapé'	,'-46.567'	,'-23.539'],
[ 'Tremembé'	,'-46.589'	,'-23.417'],
[ 'Tucuruvi'	,'-46.606'	,'-23.476'],
[ 'Vila Andrade'	,'-46.728'	,'-23.626'],
[ 'Vila Curuçá'	,'-46.416'	,'-23.51'],
[ 'Vila Formosa'	,'-46.546'	,'-23.568'],
[ 'Vila Guilherme'	,'-46.606'	,'-23.509'],
[ 'Vila Jacuí'	,'-46.462'	,'-23.503'],
[ 'Vila Leopoldina'	,'-46.734'	,'-23.529'],
[ 'Vila Maria'	,'-46.578'	,'-23.513'],
[ 'Vila Mariana'	,'-46.636'	,'-23.587'],
[ 'Vila Matilde'	,'-46.518'	,'-23.539'],
[ 'Vila Medeiros'	,'-46.578'	,'-23.489'],
[ 'Vila Prudente'	,'-46.573'	,'-23.593'],
[ 'Vila Sônia'	,'-46.739'	,'-23.599'],]

function selectArea(type,area) {

  var i = names.indexOf(area, 0)
 
  if ( i != -1) {
    map.easeTo({
      center: [cordenadas[i][1], cordenadas[i][2]],
      zoom: 14
    })
    
  } else{
  map.easeTo({
      center: [-46.63, -23.55],
      zoom: 14,
    }) 
  }

  var el = document.getElementById("chart");
  var el1 = document.getElementById("chartDropdownButton");
 
  if ( el == null  ) {
   console.log('el=NULL');
 }else{
   el.remove();
   
   if (area == "SP Total") {
       el1.innerHTML= "SP Total";
   }else{
     el1.innerHTML= cordenadas[i][0];}
 }

  map.setFilter('largura-do-passeio-sp-9fe0o1', undefined);
  updateChart(i+1)
 console.log(area)



}


function updateChart(a) {

  document.getElementById('removeBrush').style.visibility = "visible";
  
  console.log('removed chart')

  drawchart(a)

}




function filterSidewalks() {

   //filtrando o layer
   extent = d3.event.selection
   
   var array=[];

   if ( 45 >= extent[0] ) {
     array.push(0,1.8)
   }
   if (45 >= extent[0] && extent[1] > 87 || 45 <= extent[1] && extent[1] < 87 || 45 <= extent[0] && extent[0] < 87) {
     array.push(1.8,2.7)
   }
   if ( 87 >= extent[0] && extent[1] > 128 || 87 <= extent[1] && extent[1] < 128 || 87 <= extent[0] && extent[0] < 128) {
     array.push(2.7,3.5)
   }
   if ( 128 >= extent[0] && extent[1] > 167 || 128 <= extent[1] && extent[1] < 167 || 128 <= extent[0] && extent[0] < 167) {
     array.push(3.5,4.5)
   }
   if ( 167 >= extent[0] && extent[1] > 210 || 167 <= extent[1] && extent[1] < 210 || 167 <= extent[0] && extent[0] < 210) {
     array.push(4.5,5.5)
   }
   if ( 210 >= extent[0] && extent[1] > 250 || 210 <= extent[1] && extent[1] < 250 || 210 <= extent[0] && extent[0] < 250) {
     array.push(5.5,6.5)
   }
   if ( 250 <= extent[1]) {
     array.push(6.5,40)
   }
 
 var max = array[array.length - 1]
 var min = array[0]
    
 
    map.setFilter('largura-do-passeio-sp-9fe0o1', ['all', ['>=', 'cc_lg_med', min], ['<', 'cc_lg_med', max]]);
    
}

function removeBrush() {

  document.getElementById('removeBrush').style.visibility = "hidden";
  
  
  
  document.getElementById("brush").remove();
  d3.selectAll(".bar")
  .classed("selected", false)
  .classed("notselected", false)
  
  var el = document.getElementById("chart");
  var el1 = document.getElementById("chartDropdownButton");

  if ( el == null  ) {
   console.log('el=NULL');
 }else{
   el.remove();}
  
  var  i = names.indexOf(el1.innerHTML, 0)

  if ( i = -1) {
    updateChart(0)
  }else{
   updateChart(i)
  }

  map.setFilter('largura-do-passeio-sp-9fe0o1', undefined);
  filterRange = [0, Infinity];

}





