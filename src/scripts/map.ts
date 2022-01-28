import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const Map = () => {
	const map = L.map('map', {
		center: L.latLng(50.6345, 16.533639),
		zoom: 15,
	});

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);
	var logoIcon = L.icon({
		iconUrl: 'http://server908958.nazwa.pl/laravel/public/storage/uploads/markergreen.png',
		// shadowUrl: '../assets/marker-white.png',

		iconSize: [38, 50], // size of the icon
		shadowSize: [50, 64], // size of the shadow
		iconAnchor: [22, 74], // point of the icon which will correspond to marker's location
		shadowAnchor: [4, 62], // the same for the shadow
		popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
	});
	L.marker([50.6345, 16.533639], { icon: logoIcon }).addTo(map).bindPopup("<div style='text-align: center'><strong>Domek w Górach Sowich</strong><br>Jugów<br>Pod Kalenicą 5</div>").openPopup();
};
export default Map;
