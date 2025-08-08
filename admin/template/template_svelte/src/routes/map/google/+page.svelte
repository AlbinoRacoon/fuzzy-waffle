<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
	
	let googleMap;
  
  onMount(async () => {
    setPageTitle('Google Map');
    
    $appOptions.appContentClass = 'position-relative p-0';
    $appOptions.appContentFullHeight = true;
		
		window.initMap = initMap;
    function initMap() {
      googleMap = new window.google.maps.Map(document.getElementById('googleMapContainer'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
		
		const googleMapsScript = document.createElement('script');
		googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
		googleMapsScript.async = true;
		googleMapsScript.defer = true;
		document.head.appendChild(googleMapsScript);
  });
  
  onDestroy(() => {
  	googleMap = null;
    $appOptions.appContentClass = '';
    $appOptions.appContentFullHeight = false;
  });
</script>


<div class="position-absolute w-100 h-100 top-0 start-0 bottom-0 end-0">
	<div id="googleMapContainer" class="w-100 h-100"></div>
</div>

<div class="app-content-padding position-relative">
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="#/">Home</a></li>
		<li class="breadcrumb-item"><a href="#/">Map</a></li>
		<li class="breadcrumb-item active text-gray-500">Google Map</li>
	</ol>
	<h1 class="page-header">Google Map <small class="text-body text-opacity-50">header small text goes here...</small></h1>
</div>