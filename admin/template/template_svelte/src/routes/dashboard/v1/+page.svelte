<script>
  import { onMount, onDestroy } from 'svelte';
  import { setPageTitle } from '$lib/utils';
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelToolbar from '/src/components/bootstrap/PanelToolbar.svelte';
	import PanelFooter from '/src/components/bootstrap/PanelFooter.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  import { appVariables } from '/src/stores/appVariables.js';
  import ApexCharts from '/src/components/plugins/ApexCharts.svelte';
	import flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.min.css';
	import 'jsvectormap/dist/jsvectormap.min.css';
  
  let datepicker;
  let jsVectormap;
	let vectorMap;
  let unsubscribe;
  let lineChartData;
  let pieChartData;
  
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
	
	function getPieChartData(appVariables) {
    return {
      options: {
        chart: { height: 365, type: 'pie' },
        series: [44, 55, 13, 43, 22],
        dataLabels: { dropShadow: { enabled: false, top: 1, left: 1, blur: 1, opacity: 1 } },
        stroke: { show: false },
        colors: [ 'rgba('+ appVariables.color.pinkRgb +', .75)',  'rgba('+ appVariables.color.warningRgb +', .75)',  'rgba('+appVariables.color.primaryRgb +', .75)', 'rgba('+ appVariables.color.darkRgb + ', .5)',  'rgba('+appVariables.color.indigoRgb +', .75)'],
        labels: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'],
        title: { show: false }
      }
    };
  }
  
  function getLineChartData(appVariables) {
    return {
      options: {
        chart: {
          type: 'line',
          height: 300,
          toolbar: { show: false }
        },
        series: [
          { name: 'Page View', data: [28, 29, 33, 36, 32, 32, 33, 24, 33, 29, 27] }, 
          { name: 'Total Visitors', data: [12, 11, 14, 18, 17, 13, 13, 12, 11, 14, 13] }
        ],
        colors: [appVariables.color.primary, appVariables.color.teal],
        dataLabels: {
          enabled: true,
          background: {
            enabled: true,
            foreColor: appVariables.color.white,
            padding: 4,
            borderRadius: 2,
            borderWidth: 0,
            borderColor: appVariables.color.dark,
            opacity: 0.9
          }
        },
        stroke: { curve: 'smooth', width: 3 },
        grid: {
          xaxis: { lines: { show: true } }
        },
        markers: { size: 4 },
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
        yaxis: { min: 5, max: 40 },
        legend: {
          show: true,
          position: 'bottom',
          offsetY: 5,
          horizontalAlign: 'center',
          floating: false
        }
      }
    };
  }
	
  onMount(async () => {
    setPageTitle('Dashboard v1');
    
  	datepicker = flatpickr('#datepickerInput', {
  		inline: true
  	});
  	
  	jsVectormap = await import ('jsvectormap');
		await import ('jsvectormap/dist/maps/world.js');
		
    unsubscribe = appVariables.subscribe(value => {
    	if (value.color) {
    		renderMap(value);
    		pieChartData = getPieChartData(value);
    		lineChartData = getLineChartData(value);
    	}
		});
  });
  
  onDestroy(() => {
  	if (unsubscribe) {
    	unsubscribe();
  	}
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item active">Dashboard</li>
</ol>
<h1 class="page-header">Dashboard <small>header small text goes here...</small></h1>

<div class="row">
	<div class="col-xl-3 col-md-6">
		<div class="widget widget-stats bg-blue">
			<div class="stats-icon"><i class="fa fa-desktop"></i></div>
			<div class="stats-info">
				<h4>TOTAL VISITORS</h4>
				<p>3,291,922</p>	
			</div>
			<div class="stats-link">
				<a href="#/">View Detail <i class="fa fa-arrow-alt-circle-right"></i></a>
			</div>
		</div>
	</div>
	<div class="col-xl-3 col-md-6">
		<div class="widget widget-stats bg-info">
			<div class="stats-icon"><i class="fa fa-link"></i></div>
			<div class="stats-info">
				<h4>BOUNCE RATE</h4>
				<p>20.44%</p>	
			</div>
			<div class="stats-link">
				<a href="#/">View Detail <i class="fa fa-arrow-alt-circle-right"></i></a>
			</div>
		</div>
	</div>
	<div class="col-xl-3 col-md-6">
		<div class="widget widget-stats bg-orange">
			<div class="stats-icon"><i class="fa fa-users"></i></div>
			<div class="stats-info">
				<h4>UNIQUE VISITORS</h4>
				<p>1,291,922</p>	
			</div>
			<div class="stats-link">
				<a href="#/">View Detail <i class="fa fa-arrow-alt-circle-right"></i></a>
			</div>
		</div>
	</div>
	<div class="col-xl-3 col-md-6">
		<div class="widget widget-stats bg-red">
			<div class="stats-icon"><i class="fa fa-clock"></i></div>
			<div class="stats-info">
				<h4>AVG TIME ON SITE</h4>
				<p>00:12:23</p>	
			</div>
			<div class="stats-link">
				<a href="#/">View Detail <i class="fa fa-arrow-alt-circle-right"></i></a>
			</div>
		</div>
	</div>
</div>

<div class="row">
	<div class="col-xl-8">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Website Analytics (Last 7 Days)</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="p-1 pe-2 pb-0">
				{#if lineChartData}
					<ApexCharts options={lineChartData.options}></ApexCharts>
				{/if}
			</PanelBody>
		</Panel>
		
		<ul class="nav nav-tabs nav-tabs-inverse nav-justified" data-sortable-id="index-2">
			<li class="nav-item"><a href="#latest-post" data-bs-toggle="tab" class="nav-link active"><i class="fa fa-camera fa-lg me-5px"></i> <span class="d-none d-md-inline">Latest Post</span></a></li>
			<li class="nav-item"><a href="#purchase" data-bs-toggle="tab" class="nav-link"><i class="fa fa-archive fa-lg me-5px"></i> <span class="d-none d-md-inline">Purchase</span></a></li>
			<li class="nav-item"><a href="#email" data-bs-toggle="tab" class="nav-link"><i class="fa fa-envelope fa-lg me-5px"></i> <span class="d-none d-md-inline">Email</span></a></li>
		</ul>
		<div class="tab-content panel rounded-0 rounded-bottom mb-20px">
			<div class="tab-pane fade active show" id="latest-post">
				<PerfectScrollbar class="h-300px p-3">
					<div class="d-sm-flex">
						<a href="#/" class="w-sm-200px">
							<img class="mw-100 rounded" src="/img/gallery/gallery-1.jpg" alt="" />
						</a>
						<div class="flex-1 ps-sm-3 pt-3 pt-sm-0">
							<h5>Aenean viverra arcu nec pellentesque ultrices. In erat purus, adipiscing nec lacinia at, ornare ac eros.</h5>
							Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit eros. Praesent ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis est, id luctus mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum id. Proin non ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan mi, non pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.
						</div>
					</div>
					<hr class="bg-gray-500" />
					<div class="d-sm-flex">
						<a href="#/" class="w-sm-200px">
							<img class="mw-100 rounded" src="/img/gallery/gallery-10.jpg" alt="" />
						</a>
						<div class="flex-1 ps-sm-3 pt-3 pt-sm-0">
							<h5>Vestibulum vitae diam nec odio dapibus placerat. Ut ut lorem justo.</h5>
							Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis nulla malesuada volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam adipiscing hendrerit vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis aliquet. Quisque sit amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien lacinia. Duis sit amet elit bibendum sapien dignissim bibendum.
						</div>
					</div>
					<hr class="bg-gray-500" />
					<div class="d-sm-flex">
						<a href="#/" class="w-sm-200px">
							<img class="mw-100 rounded" src="/img/gallery/gallery-7.jpg" alt="" />
						</a>
						<div class="flex-1 ps-sm-3 pt-3 pt-sm-0">
							<h5>Maecenas eget turpis luctus, scelerisque arcu id, iaculis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.</h5>
							Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque. Nam augue nulla, accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet fringilla. Morbi a porta nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
						</div>
					</div>
					<hr class="bg-gray-500" />
					<div class="d-sm-flex">
						<a href="#/" class="w-sm-200px">
							<img class="mw-100 rounded" src="/img/gallery/gallery-8.jpg" alt="" />
						</a>
						<div class="flex-1 ps-sm-3 pt-3 pt-sm-0">
							<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor accumsan rutrum.</h5>
							Fusce augue diam, vestibulum a mattis sit amet, vehicula eu ipsum. Vestibulum eu mi nec purus tempor consequat. Vestibulum porta non mi quis cursus. Fusce vulputate cursus magna, tincidunt sodales ipsum lobortis tincidunt. Mauris quis lorem ligula. Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque.
						</div>
					</div>
				</PerfectScrollbar>
			</div>
			<div class="tab-pane fade" id="purchase">
				<div class="h-300px" data-scrollbar="true">
					<table class="table table-panel mb-0">
						<thead>
							<tr>
								<th>Date</th>
								<th class="hidden-sm text-center">Product</th>
								<th></th>
								<th>Amount</th>
								<th>User</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="fw-bold text-muted">13/02/2025</td>
								<td class="hidden-sm text-center">
									<a href="#/">
										<img src="/img/product/product-1.png" alt="" width="32px"  />
									</a>
								</td>
								<td class="text-nowrap">
									<h6><a href="#/" class="text-dark text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
								</td>
								<td class="text-blue fw-bold">$349.00</td>
								<td class="text-nowrap"><a href="#/" class="text-dark text-decoration-none">Derick Wong</a></td>
							</tr>
							<tr>
								<td class="fw-bold text-muted">13/02/2025</td>
								<td class="hidden-sm text-center">
									<a href="#/">
										<img src="/img/product/product-2.png" alt="" width="32px" />
									</a>
								</td>
								<td class="text-nowrap">
									<h6><a href="#/" class="text-dark text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
								</td>
								<td class="text-blue fw-bold">$399.00</td>
								<td class="text-nowrap"><a href="#/" class="text-dark text-decoration-none">Derick Wong</a></td>
							</tr>
							<tr>
								<td class="fw-bold text-muted">13/02/2025</td>
								<td class="hidden-sm text-center">
									<a href="#/">
										<img src="/img/product/product-3.png" alt="" width="32px" />
									</a>
								</td>
								<td class="text-nowrap">
									<h6><a href="#/" class="text-dark text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
								</td>
								<td class="text-blue fw-bold">$499.00</td>
								<td class="text-nowrap"><a href="#/" class="text-dark text-decoration-none">Derick Wong</a></td>
							</tr>
							<tr>
								<td class="fw-bold text-muted">13/02/2025</td>
								<td class="hidden-sm text-center">
									<a href="#/">
										<img src="/img/product/product-4.png" alt="" width="32px" />
									</a>
								</td>
								<td class="text-nowrap">
									<h6><a href="#/" class="text-dark text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
								</td>
								<td class="text-blue fw-bold">$230.00</td>
								<td class="text-nowrap"><a href="#/" class="text-dark text-decoration-none">Derick Wong</a></td>
							</tr>
							<tr>
								<td class="fw-bold text-muted">13/02/2025</td>
								<td class="hidden-sm text-center">
									<a href="#/">
										<img src="/img/product/product-5.png" alt="" width="32px" />
									</a>
								</td>
								<td class="text-nowrap">
									<h6><a href="#/" class="text-dark text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
								</td>
								<td class="text-blue fw-bold">$500.00</td>
								<td class="text-nowrap"><a href="#/" class="text-dark text-decoration-none">Derick Wong</a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="tab-pane fade" id="email">
				<div class="h-300px p-3" data-scrollbar="true">
					<div class="d-flex">
						<a class="w-60px" href="#/">
							<img src="/img/user/user-1.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<a href="#/" class="text-dark text-decoration-none"><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5></a>
							<p class="mb-5px">
								Aenean mollis arcu sed turpis accumsan dignissim. Etiam vel tortor at risus tristique convallis. Donec adipiscing euismod arcu id euismod. Suspendisse potenti. Aliquam lacinia sapien ac urna placerat, eu interdum mauris viverra.
							</p>
							<span class="text-muted fs-11px fw-bold">Received on 04/16/2025, 12.39pm</span>
						</div>
					</div>
					<hr class="bg-gray-500" />
					<div class="d-flex">
						<a class="w-60px" href="#/">
							<img src="/img/user/user-2.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<a href="#/" class="text-dark text-decoration-none"><h5>Praesent et sem porta leo tempus tincidunt eleifend et arcu.</h5></a>
							<p class="mb-5px">
								Proin adipiscing dui nulla. Duis pharetra vel sem ac adipiscing. Vestibulum ut porta leo. Pellentesque orci neque, tempor ornare purus nec, fringilla venenatis elit. Duis at est non nisl dapibus lacinia.
							</p>
							<span class="text-muted fs-11px fw-bold">Received on 04/16/2025, 12.39pm</span>
						</div>
					</div>
					<hr class="bg-gray-500" />
					<div class="d-flex">
						<a class="w-60px" href="#/">
							<img src="/img/user/user-3.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<a href="#/" class="text-dark text-decoration-none"><h5>Ut mi eros, varius nec mi vel, consectetur convallis diam.</h5></a>
							<p class="mb-5px">
								Ut mi eros, varius nec mi vel, consectetur convallis diam. Nullam eget hendrerit eros. Duis lacinia condimentum justo at ultrices. Phasellus sapien arcu, fringilla eu pulvinar id, mattis quis mauris.
							</p>
							<span class="text-muted fs-11px fw-bold">Received on 04/16/2025, 12.39pm</span>
						</div>
					</div>
					<hr class="bg-gray-500" />
					<div class="d-flex">
						<a class="w-60px" href="#/">
							<img src="/img/user/user-4.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<a href="#/" class="text-dark text-decoration-none"><h5>Aliquam nec dolor vel nisl dictum ullamcorper.</h5></a>
							<p class="mb-5px">
								Aliquam nec dolor vel nisl dictum ullamcorper. Duis vel magna enim. Aenean volutpat a dui vitae pulvinar. Nullam ligula mauris, dictum eu ullamcorper quis, lacinia nec mauris.
							</p>
							<span class="text-muted fs-11px fw-bold">Received on 04/16/2025, 12.39pm</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Quick Post</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelToolbar>
				<div class="btn-group me-5px">
					<a class="btn btn-white" aria-label="Link" href="#/"><i class="fa fa-bold"></i></a>
					<a class="btn btn-white active" aria-label="Link" href="#/"><i class="fa fa-italic"></i></a>
					<a class="btn btn-white" aria-label="Link" href="#/"><i class="fa fa-underline"></i></a>
				</div>
				<div class="btn-group">
					<a class="btn btn-white" aria-label="Link" href="#/"><i class="fa fa-align-left"></i></a>
					<a class="btn btn-white active" aria-label="Link" href="#/"><i class="fa fa-align-center"></i></a>
					<a class="btn btn-white" aria-label="Link" href="#/"><i class="fa fa-align-right"></i></a>
					<a class="btn btn-white" aria-label="Link" href="#/"><i class="fa fa-align-justify"></i></a>
				</div>
			</PanelToolbar>
			<hr class="m-0" />
			<textarea class="form-control rounded-0 border-0 shadow-none bg-light p-3" rows="14">Enter some comment.</textarea>
			<PanelFooter class="text-end">
				<a href="#/" class="btn btn-white btn-sm">Cancel</a>
				<a href="#/" class="btn btn-primary btn-sm ms-5px">Action</a>
			</PanelFooter>
		</Panel>
							
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Message</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="p-0">
				<PerfectScrollbar class="h-300px p-3">
					<div class="d-flex">
						<a href="#/" class="w-60px">
							<img src="/img/user/user-5.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<h5>John Doe</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nunc non eros fermentum vestibulum ut id felis. Nunc molestie libero eget urna aliquet, vitae laoreet felis ultricies. Fusce sit amet massa malesuada, tincidunt augue vitae, gravida felis.</p>
						</div>
					</div>
					<hr class="bg-gray-500" />
					<div class="d-flex">
						<a href="#/" class="w-60px">
							<img src="/img/user/user-6.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<h5>Terry Ng</h5>
							<p>Sed in ante vel ipsum tristique euismod posuere eget nulla. Quisque ante sem, scelerisque iaculis interdum quis, eleifend id mi. Fusce congue leo nec mauris malesuada, id scelerisque sapien ultricies.</p>
						</div>
					</div>
					<hr class="bg-gray-500" />
					<div class="d-flex">
						<a href="#/" class="w-60px">
							<img src="/img/user/user-8.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<h5>Fiona Log</h5>
							<p>Pellentesque dictum in tortor ac blandit. Nulla rutrum eu leo vulputate ornare. Nulla a semper mi, ac lacinia sapien. Sed volutpat ornare eros, vel semper sem sagittis in. Quisque risus ipsum, iaculis quis cursus eu, tristique sed nulla.</p>
						</div>
					</div>
					<hr class="bg-gray-500" />
					<div class="d-flex">
						<a href="#/" class="w-60px">
							<img src="/img/user/user-7.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<h5>John Doe</h5>
							<p>Morbi molestie lorem quis accumsan elementum. Morbi condimentum nisl iaculis, laoreet risus sed, porta neque. Proin mi leo, dapibus at ligula a, aliquam consectetur metus.</p>
						</div>
					</div>
				</PerfectScrollbar>
			</PanelBody>
			<PanelFooter>
				<form>
					<div class="input-group">
						<input type="text" class="form-control bg-light" placeholder="Enter message" />
						<button class="btn btn-primary" aria-label="Button" type="button"><i class="fa fa-pencil-alt"></i></button>
					</div>
				</form>
			</PanelFooter>
		</Panel>
	</div>
	
	<div class="col-xl-4">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Analytics Details</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<div class="table-responsive">
				<table class="table table-panel align-middle mb-0">
					<thead>
						<tr>	
							<th>Source</th>
							<th>Total</th>
							<th>Trend</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td nowrap><label class="badge bg-danger" for="">Unique Visitor</label></td>
							<td>13,203 <span class="text-success"><i class="fa fa-arrow-up"></i></span></td>
							<td><div id="sparkline-unique-visitor"></div></td>
						</tr>
						<tr>
							<td nowrap><label class="badge bg-warning" for="">Bounce Rate</label></td>
							<td>28.2%</td>
							<td><div id="sparkline-bounce-rate"></div></td>
						</tr>
						<tr>
							<td nowrap><label class="badge bg-success" for="">Total Page Views</label></td>
							<td>1,230,030</td>
							<td><div id="sparkline-total-page-views"></div></td>
						</tr>
						<tr>
							<td nowrap><label class="badge bg-blue" for="">Avg Time On Site</label></td>
							<td>00:03:45</td>
							<td><div id="sparkline-avg-time-on-site"></div></td>
						</tr>
						<tr>
							<td nowrap><label class="badge bg-default text-gray-900" for="">% New Visits</label></td>
							<td>40.5%</td>
							<td><div id="sparkline-new-visits"></div></td>
						</tr>
						<tr>
							<td nowrap><label class="badge bg-gray-900" for="">Return Visitors</label></td>
							<td>73.4%</td>
							<td><div id="sparkline-return-visitors"></div></td>
						</tr>
					</tbody>
				</table>
			</div>
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Visitors User Agent</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				{#if pieChartData}
					<ApexCharts options={pieChartData.options}></ApexCharts>
				{/if}
			</PanelBody>
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Todo List</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="p-0">
				<div class="todolist">
					<div class="todolist-item active">
						<div class="todolist-input">
							<div class="form-check">
								<input type="checkbox" class="form-check-input" id="todolist1" data-change="todolist" checked />
							</div>
						</div>
						<label class="todolist-label" for="todolist1">Donec vehicula pretium nisl, id lacinia nisl tincidunt id.</label>
					</div>
					<div class="todolist-item">
						<div class="todolist-input">
							<div class="form-check">
								<input type="checkbox" class="form-check-input" id="todolist2" data-change="todolist" />
							</div>
						</div>
						<label class="todolist-label" for="todolist2">Duis a ullamcorper massa.</label>
					</div>
					<div class="todolist-item">
						<div class="todolist-input">
							<div class="form-check">
								<input type="checkbox" class="form-check-input" id="todolist3" data-change="todolist" />
							</div>
						</div>
						<label class="todolist-label" for="todolist3">Phasellus bibendum, odio nec vestibulum ullamcorper.</label>
					</div>
					<div class="todolist-item">
						<div class="todolist-input">
							<div class="form-check">
								<input type="checkbox" class="form-check-input" id="todolist4" data-change="todolist" />
							</div>
						</div>
						<label class="todolist-label" for="todolist4">Duis pharetra mi sit amet dictum congue.</label>
					</div>
					<div class="todolist-item">
						<div class="todolist-input">
							<div class="form-check">
								<input type="checkbox" class="form-check-input" id="todolist5" data-change="todolist" />
							</div>
						</div>
						<label class="todolist-label" for="todolist5">Duis pharetra mi sit amet dictum congue.</label>
					</div>
					<div class="todolist-item">
						<div class="todolist-input">
							<div class="form-check">
								<input type="checkbox" class="form-check-input" id="todolist6" data-change="todolist" />
							</div>
						</div>
						<label class="todolist-label" for="todolist6">Phasellus bibendum, odio nec vestibulum ullamcorper.</label>
					</div>
					<div class="todolist-item">
						<div class="todolist-input">
							<div class="form-check">
								<input type="checkbox" class="form-check-input" id="todolist7" data-change="todolist" />
							</div>
						</div>
						<label class="todolist-label" for="todolist7">Donec vehicula pretium nisl, id lacinia nisl tincidunt id.</label>
					</div>
				</div>
			</PanelBody>
		</Panel>
		
		<Panel class="panel-inverse bg-gray-800">
			<PanelHeader>
				<PanelTitle>World Visitors</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="p-0">
				<div id="vectorMapContainer" class="h-300px"></div>
			</PanelBody>
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Calendar</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="p-1 pb-2">
				<input type="text" class="form-control d-none" name="datepicker" placeholder="yyyy-mm-dd" id="datepickerInput" />
			</PanelBody>
		</Panel>
	</div>
</div>
