<script>
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appVariables } from '/src/stores/appVariables.js';
  import { appOptions } from '/src/stores/appOptions.js';
	import 'jsvectormap/dist/jsvectormap.min.css';
	
	let jsVectormap;
	let vectorMap;
	let unsubscribe;
	
	function renderMap(appVariables) {
		document.getElementById('vectorMapContainer').innerHTML = '<div id="vectorMap" style="height: 100%;"></div>';
		let markers = [
			{ name: "Egypt", coords: [26.8206, 30.8025] },
			{ name: "Russia", coords: [61.524, 105.3188] },
			{ name: "Canada", coords: [56.1304, -106.3468] },
			{ name: "Greenland", coords: [71.7069, -42.6043] },
			{ name: "Brazil", coords: [-14.235, -51.9253] }
		];
		vectorMap = new jsVectormap.default({
			selector: '#vectorMap',
			map: 'world',
			zoomButtons: true,
			normalizeFunction: 'polynomial',
			hoverOpacity: 0.5,
			hoverColor: false,
			zoomOnScroll: false,
			series: {
				regions: [{
					normalizeFunction: 'polynomial'
				}]
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			focusOn: {
				x: 0.5,
				y: 0.5,
				scale: 1
			},
			markers: markers,
			markerStyle: {
				initial: {
					fill: appVariables.color.teal,
					stroke: 'none',
					r: 5,
				},
				hover: {
					fill: appVariables.color.teal
				}
			},
			markerLabelStyle: {
				initial: {
					fontFamily: appVariables.font.bodyFontFamily,
					fontSize: '12px',
					fontWeight: '600',
					fill: appVariables.color.white
				},
			},
			regionStyle: {
				initial: {
					fill: appVariables.color.gray600,
					fillOpacity: 0.5,
					stroke: 'none',
					strokeWidth: 0.4,
					strokeOpacity: 1
				},
				hover: {
					fillOpacity: 0.75
				}
			},
			backgroundColor: appVariables.color.gray900,
		});
	}
  
  onMount(async () => {
    setPageTitle('Vector Map');
    
    $appOptions.appContentClass = 'position-relative p-0';
    $appOptions.appContentFullHeight = true;
		
		jsVectormap = await import ('jsvectormap');
		await import ('jsvectormap/dist/maps/world.js');
    unsubscribe = appVariables.subscribe(value => {
    	if (value.color) {
    		renderMap(value);
    	}
		});
  });
  
  onDestroy(() => {
  	if (unsubscribe) {
    	unsubscribe();
  	}
    $appOptions.appContentClass = '';
    $appOptions.appContentFullHeight = false;
  });
  
  
</script>


<div id="vectorMapContainer" class="position-absolute top-0 start-0 end-0 bottom-0 h-100 map-page"></div>

<div class="app-content-padding position-relative pb-0" data-bs-theme="dark">
	<ol class="breadcrumb float-lg-end">
		<li class="breadcrumb-item"><a href="#/" class="text-white">Home</a></li>
		<li class="breadcrumb-item"><a href="#/" class="text-white">Map</a></li>
		<li class="breadcrumb-item active text-gray-500">Vector Map</li>
	</ol>
	<h1 class="page-header text-white">Vector Map <small>header small text goes here...</small></h1>
</div>

<div class="position-absolute end-0 bottom-0 d-none d-xl-block p-3 m-3 bg-gray-800 rounded-3 shadow-lg w-300px">
	<h4 class="text-white"><i class="fa fa-globe-africa opacity-3 me-1"></i> Vector Map</h4>
	<PerfectScrollbar class="h-400px mx-n3">
		<table class="table table-dark table-panel mb-0">
			<thead>
				<tr>
					<th>Country</th>
					<th>Total Visitors</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Vatican City</td>
					<td><span class="text-success">9,820 <i class="fa fa-arrow-up"></i></span></td>
				</tr>
				<tr>
					<td>Monaco</td>
					<td>1,920</td>
				</tr>
				<tr>
					<td>Nauru</td>
					<td><span class="text-danger">1,346 <i class="fa fa-arrow-down"></i></span></td>
				</tr>
				<tr>
					<td>Tuvalu</td>
					<td><span class="text-success">6,543 <i class="fa fa-arrow-up"></i></span></td>
				</tr>
				<tr>
					<td>San Marino</td>
					<td><span class="text-success">7,321 <i class="fa fa-arrow-up"></i></span></td>
				</tr>
				<tr>
					<td>Liechtenstein</td>
					<td>3,434</td>
				</tr>
				<tr>
					<td>Marshall Islands</td>
					<td>1,922</td>
				</tr>
				<tr>
					<td>Saint Kitts and Nevis</td>
					<td><span class="text-danger">9,812 <i class="fa fa-arrow-down"></i></span></td>
				</tr>
				<tr>
					<td>Maldives</td>
					<td><span class="text-danger">4,182 <i class="fa fa-arrow-down"></i></span></td>
				</tr>
				<tr>
					<td>Malta</td>
					<td>9,188</td>
				</tr>
				<tr>
					<td>Grenada</td>
					<td>11,198</td>
				</tr>
				<tr>
					<td>Saint Vincent</td>
					<td><span class="text-success">9,101 <i class="fa fa-arrow-up"></i></span></td>
				</tr>
				<tr>
					<td>Barbados</td>
					<td><span class="text-success">9,192 <i class="fa fa-arrow-up"></i></span></td>
				</tr>
				<tr>
					<td>Antigua and Barbuda</td>
					<td><span class="text-success">5,282 <i class="fa fa-arrow-up"></i></span></td>
				</tr>
				<tr>
					<td>Seychelles</td>
					<td><span class="text-success">8,283 <i class="fa fa-arrow-up"></i></span></td>
				</tr>
				<tr>
					<td>Palau</td>
					<td><span class="text-danger">1,222 <i class="fa fa-arrow-down"></i></span></td>
				</tr>
				<tr>
					<td>Andorra</td>
					<td>146</td>
				</tr>
				<tr>
					<td>Saint Lucia</td>
					<td>3,923</td>
				</tr>
				<tr>
					<td>Federated States</td>
					<td>9,827</td>
				</tr>
				<tr>
					<td>Singapore</td>
					<td>7,293</td>
				</tr>
				<tr>
					<td>Kiribati</td>
					<td>9,238</td>
				</tr>
				<tr>
					<td>Tonga</td>
					<td>6,422</td>
				</tr>
				<tr>
					<td>Dominica</td>
					<td><span class="text-success">3,341 <i class="fa fa-arrow-up"></i></span></td>
				</tr>
				<tr>
					<td>Mauritius</td>
					<td><span class="text-success">532 <i class="fa fa-arrow-up"></i></span></td>
				</tr>
				<tr>
					<td>Bahrain</td>
					<td><span class="text-success">8,754 <i class="fa fa-arrow-up"></i></span></td>
				</tr>
				<tr>
					<td>São Tomé and Príncipe</td>
					<td>5,742</td>
				</tr>
			</tbody>
		</table>
	</PerfectScrollbar>
</div>