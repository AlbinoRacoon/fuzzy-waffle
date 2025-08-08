<script>
  import { onMount, onDestroy } from 'svelte';
  import { setPageTitle } from '$lib/utils';
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelFooter from '/src/components/bootstrap/PanelFooter.svelte';
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
	
	function handleGetDate(minusDate) {
		var d = new Date();
				d = d.setDate(d.getDate() - minusDate);
		return d;
	}
	
	function getPieChartData(appVariables) {
    return {
      options: {
				labels: ['New Visitors', 'Return Visitors'],
				chart: { type: 'donut', height: 150 },
				dataLabels: { dropShadow: { enabled: false }, style: { colors: ['#fff'] } },
				stroke: { show: false },
				colors: [ appVariables.color.primary, appVariables.color.teal ],
				legend: { show: false },
				series: [416747,784466]
      }
    };
  }
  
  function getLineChartData(appVariables) {
    return {
      options: {
				series: [
					{ 
						name: 'Unique Visitors', 
						data: [
							[handleGetDate(77), 13], [handleGetDate(76), 13], [handleGetDate(75), 6 ], 
							[handleGetDate(73), 6 ], [handleGetDate(72), 6 ], [handleGetDate(71), 5 ], [handleGetDate(70), 5 ], 
							[handleGetDate(69), 5 ], [handleGetDate(68), 6 ], [handleGetDate(67), 7 ], [handleGetDate(66), 6 ], 
							[handleGetDate(65), 9 ], [handleGetDate(64), 9 ], [handleGetDate(63), 8 ], [handleGetDate(62), 10], 
							[handleGetDate(61), 10], [handleGetDate(60), 10], [handleGetDate(59), 10], [handleGetDate(58), 9 ], 
							[handleGetDate(57), 9 ], [handleGetDate(56), 10], [handleGetDate(55), 9 ], [handleGetDate(54), 9 ], 
							[handleGetDate(53), 8 ], [handleGetDate(52), 8 ], [handleGetDate(51), 8 ], [handleGetDate(50), 8 ], 
							[handleGetDate(49), 8 ], [handleGetDate(48), 7 ], [handleGetDate(47), 7 ], [handleGetDate(46), 6 ], 
							[handleGetDate(45), 6 ], [handleGetDate(44), 6 ], [handleGetDate(43), 6 ], [handleGetDate(42), 5 ], 
							[handleGetDate(41), 5 ], [handleGetDate(40), 4 ], [handleGetDate(39), 4 ], [handleGetDate(38), 5 ], 
							[handleGetDate(37), 5 ], [handleGetDate(36), 5 ], [handleGetDate(35), 7 ], [handleGetDate(34), 7 ], 
							[handleGetDate(33), 7 ], [handleGetDate(32), 10], [handleGetDate(31), 9 ], [handleGetDate(30), 9 ], 
							[handleGetDate(29), 10], [handleGetDate(28), 11], [handleGetDate(27), 11], [handleGetDate(26), 8 ], 
							[handleGetDate(25), 8 ], [handleGetDate(24), 7 ], [handleGetDate(23), 8 ], [handleGetDate(22), 9 ], 
							[handleGetDate(21), 8 ], [handleGetDate(20), 9 ], [handleGetDate(19), 10], [handleGetDate(18), 9 ], 
							[handleGetDate(17), 10], [handleGetDate(16), 16], [handleGetDate(15), 17], [handleGetDate(14), 16], 
							[handleGetDate(13), 17], [handleGetDate(12), 16], [handleGetDate(11), 15], [handleGetDate(10), 14], 
							[handleGetDate(9) , 24], [handleGetDate(8) , 18], [handleGetDate(7) , 15], [handleGetDate(6) , 14], 
							[handleGetDate(5) , 16], [handleGetDate(4) , 16], [handleGetDate(3) , 17], [handleGetDate(2) , 7 ], 
							[handleGetDate(1) , 7 ], [handleGetDate(0) , 7 ]
						]
					},
					{ 
						name: 'Page Views', 
						data: [
							[handleGetDate(77), 14], [handleGetDate(76), 13], [handleGetDate(75), 15], 
							[handleGetDate(73), 14], [handleGetDate(72), 13], [handleGetDate(71), 15], [handleGetDate(70), 16], 
							[handleGetDate(69), 16], [handleGetDate(68), 14], [handleGetDate(67), 14], [handleGetDate(66), 13], 
							[handleGetDate(65), 12], [handleGetDate(64), 13], [handleGetDate(63), 13], [handleGetDate(62), 15], 
							[handleGetDate(61), 16], [handleGetDate(60), 16], [handleGetDate(59), 17], [handleGetDate(58), 17], 
							[handleGetDate(57), 18], [handleGetDate(56), 15], [handleGetDate(55), 15], [handleGetDate(54), 15], 
							[handleGetDate(53), 19], [handleGetDate(52), 19], [handleGetDate(51), 18], [handleGetDate(50), 18], 
							[handleGetDate(49), 17], [handleGetDate(48), 16], [handleGetDate(47), 18], [handleGetDate(46), 18], 
							[handleGetDate(45), 18], [handleGetDate(44), 16], [handleGetDate(43), 14], [handleGetDate(42), 14], 
							[handleGetDate(41), 13], [handleGetDate(40), 14], [handleGetDate(39), 13], [handleGetDate(38), 10], 
							[handleGetDate(37), 9 ], [handleGetDate(36), 10], [handleGetDate(35), 11], [handleGetDate(34), 11], 
							[handleGetDate(33), 11], [handleGetDate(32), 10], [handleGetDate(31), 9 ], [handleGetDate(30), 10], 
							[handleGetDate(29), 13], [handleGetDate(28), 14], [handleGetDate(27), 14], [handleGetDate(26), 13], 
							[handleGetDate(25), 12], [handleGetDate(24), 11], [handleGetDate(23), 13], [handleGetDate(22), 13], 
							[handleGetDate(21), 13], [handleGetDate(20), 13], [handleGetDate(19), 14], [handleGetDate(18), 13], 
							[handleGetDate(17), 13], [handleGetDate(16), 19], [handleGetDate(15), 21], [handleGetDate(14), 22],
							[handleGetDate(13), 25], [handleGetDate(12), 24], [handleGetDate(11), 24], [handleGetDate(10), 22], 
							[handleGetDate(9) , 16], [handleGetDate(8) , 15], [handleGetDate(7) , 12], [handleGetDate(6) , 12], 
							[handleGetDate(5) , 15], [handleGetDate(4) , 15], [handleGetDate(3) , 15], [handleGetDate(2) , 18], 
							[handleGetDate(2) , 18], [handleGetDate(0) , 17]
						] 
					}
				],
				fill: {
					opacity: .75,
					type: 'solid'
				},
        colors: [appVariables.color.teal, appVariables.color.primary],
				legend: {
					position: 'top',
					horizontalAlign: 'right',
					offsetY: 15,
					offsetX: 500,
					labels: {
						colors: appVariables.color.white
					}
				},
				yaxis: {
					tickAmount: 5,
					labels: {
						style: {
							colors: appVariables.color.white
						}
					},
				},
				xaxis: {
					type: 'datetime',
					tickAmount: 6,
					labels: {
						style: {
							colors: appVariables.color.white
						}
					}
				},
				tooltip: { y: { formatter: function (val) { return "$ " + val + " thousands" } } },
				chart: { height: '100%', type: 'area', toolbar: { show: false }, stacked: true },
				plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' } },
				dataLabels: { enabled: false },
				grid: { 
					show: true, borderColor: 'rgba('+ appVariables.color.whiteRgb +', .15)',
					xaxis: {
						lines: {
							show: true
						}
					},   
					yaxis: {
						lines: {
							show: true
						}
					},
					padding: {
						top: -40,
						right: 3,
						bottom: 0,
						left: 10
					},
				},
				stroke: { 
					show: false,
					curve: 'straight'
				}
      }
    };
  }
	
  onMount(async () => {
    setPageTitle('Dashboard v2');
    
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
	<li class="breadcrumb-item"><a href="#/">Dashboard</a></li>
	<li class="breadcrumb-item active">Dashboard v2</li>
</ol>
<h1 class="page-header">Dashboard v2 <small>header small text goes here...</small></h1>

<div class="row">
	<div class="col-xl-3 col-md-6">
		<div class="widget widget-stats bg-teal">
			<div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
			<div class="stats-content">
				<div class="stats-title">TODAY'S VISITS</div>
				<div class="stats-number">7,842,900</div>
				<div class="stats-progress progress">
					<div class="progress-bar" style="width: 70.1%;"></div>
				</div>
				<div class="stats-desc">Better than last week (70.1%)</div>
			</div>
		</div>
	</div>
	<div class="col-xl-3 col-md-6">
		<div class="widget widget-stats bg-blue">
			<div class="stats-icon stats-icon-lg"><i class="fa fa-dollar-sign fa-fw"></i></div>
			<div class="stats-content">
				<div class="stats-title">TODAY'S PROFIT</div>
				<div class="stats-number">180,200</div>
				<div class="stats-progress progress">
					<div class="progress-bar" style="width: 40.5%;"></div>
				</div>
				<div class="stats-desc">Better than last week (40.5%)</div>
			</div>
		</div>
	</div>
	<div class="col-xl-3 col-md-6">
		<div class="widget widget-stats bg-indigo">
			<div class="stats-icon stats-icon-lg"><i class="fa fa-archive fa-fw"></i></div>
			<div class="stats-content">
				<div class="stats-title">NEW ORDERS</div>
				<div class="stats-number">38,900</div>
				<div class="stats-progress progress">
					<div class="progress-bar" style="width: 76.3%;"></div>
				</div>
				<div class="stats-desc">Better than last week (76.3%)</div>
			</div>
		</div>
	</div>
	<div class="col-xl-3 col-md-6">
		<div class="widget widget-stats bg-gray-900">
			<div class="stats-icon stats-icon-lg"><i class="fa fa-comment-alt fa-fw"></i></div>
			<div class="stats-content">
				<div class="stats-title">NEW COMMENTS</div>
				<div class="stats-number">3,988</div>
				<div class="stats-progress progress">
					<div class="progress-bar" style="width: 54.9%;"></div>
				</div>
				<div class="stats-desc">Better than last week (54.9%)</div>
			</div>
		</div>
	</div>
</div>

<div class="row">
	<div class="col-xl-8">
		<div class="widget-chart with-sidebar" data-bs-theme="dark">
			<div class="widget-chart-content bg-gray-800">
				<h4 class="chart-title">
					Visitors Analytics
					<small>Where do our visitors come from</small>
				</h4>
				<div class="dark-mode" style="height: 275px; margin-left: -13px; margin-right: 5px;">
					{#if lineChartData}
						<ApexCharts options={lineChartData.options}></ApexCharts>
					{/if}
				</div>
			</div>
			<div class="widget-chart-sidebar bg-gray-900">
				<div class="chart-number">
					1,225,729
					<small>Total visitors</small>
				</div>
				<div class="flex-grow-1 d-flex align-items-center" data-bs-theme="dark">
					{#if pieChartData}
						<ApexCharts options={pieChartData.options}></ApexCharts>
					{/if}
				</div>
				<ul class="chart-legend fs-11px">
					<li><i class="fa fa-circle fa-fw text-blue fs-9px me-5px t-minus-1"></i> 34.0% <span>New Visitors</span></li>
					<li><i class="fa fa-circle fa-fw text-teal fs-9px me-5px t-minus-1"></i> 56.0% <span>Return Visitors</span></li>
				</ul>
			</div>
		</div>
	</div>
	
	<div class="col-xl-4">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>
					Visitors Origin
				</PanelTitle>
			</PanelHeader>
			<div id="vectorMapContainer" class="bg-gray-900" data-bs-theme="dark" style="height: 187px;"></div>
			<div class="list-group list-group-flush "  data-bs-theme="dark">
				<a href="#/" class="list-group-item list-group-item-action d-flex">
					<span class="flex-1">1. United State</span>
					<span class="badge bg-teal fs-10px">20.95%</span>
				</a>
				<a href="#/" class="list-group-item list-group-item-action d-flex">
					<span class="flex-1">2. India</span>
					<span class="badge bg-blue fs-10px">16.12%</span>
				</a>
				<a href="#/" class="list-group-item list-group-item-action d-flex rounded-bottom">
					<span class="flex-1">3. Mongolia</span>
					<span class="badge bg-gray-600 fs-10px">14.99%</span>
				</a>
			</div>
		</Panel>
	</div>
</div>

<div class="row">
	<div class="col-xl-4 col-lg-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Chat History</PanelTitle>
				<span class="badge bg-teal">4 message</span>
			</PanelHeader>
			<PanelBody class="bg-light">
				<PerfectScrollbar class="chats" style="height: 225px">
					<div class="chats-item start">
						<span class="date-time">yesterday 11:23pm</span>
						<a href="#/" class="name">Sowse Bawdy</a>
						<a href="#/" class="image"><img alt="" src="/img/user/user-12.jpg" /></a>
						<div class="message">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat. Praesent mattis interdum arcu eu feugiat.
						</div>
					</div>
					<div class="chats-item end">
						<span class="date-time">08:12am</span>
						<a href="#/" class="name"><span class="badge bg-blue">ADMIN</span> Me</a>
						<a href="#/" class="image"><img alt="" src="/img/user/user-13.jpg" /></a>
						<div class="message">
							Nullam posuere, nisl a varius rhoncus, risus tellus hendrerit neque.
						</div>
					</div>
					<div class="chats-item start">
						<span class="date-time">09:20am</span>
						<a href="#/" class="name">Neck Jolly</a>
						<a href="#/" class="image"><img alt="" src="/img/user/user-10.jpg" /></a>
						<div class="message">
							Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
						</div>
					</div>
					<div class="chats-item start">
						<span class="date-time">11:15am</span>
						<a href="#/" class="name">Shag Strap</a>
						<a href="#/" class="image"><img alt="" src="/img/user/user-14.jpg" /></a>
						<div class="message">
							Nullam iaculis pharetra pharetra. Proin sodales tristique sapien mattis placerat.
						</div>
					</div>
				</PerfectScrollbar>
			</PanelBody>
			<PanelFooter>
				<form name="send_message_form" data-id="message-form">
					<div class="input-group">
						<input type="text" class="form-control" name="message" placeholder="Enter your message here.">
						<button class="btn btn-primary" type="button" aria-label="Example"><i class="fa fa-camera"></i></button>
						<button class="btn btn-primary" type="button" aria-label="Example"><i class="fa fa-link"></i></button>
					</div>
				</form>
			</PanelFooter>
		</Panel>
	</div>
	
	<div class="col-xl-4 col-lg-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Today's Schedule</PanelTitle>
			</PanelHeader>
			<input type="text" class="form-control d-none" name="datepicker" placeholder="yyyy-mm-dd" id="datepickerInput" />
			<hr class="mt-1 m-0 bg-gray-500" />
			<div class="list-group list-group-flush">
				<a href="#/" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-ellipsis">
					Sales Reporting
					<span class="badge bg-teal fs-10px">9:00 am</span>
				</a> 
				<a href="#/" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-ellipsis rounded-bottom">
					Have a meeting with sales team
					<span class="badge bg-blue fs-10px">2:45 pm</span>
				</a>
			</div>
		</Panel>
	</div>
	
	<div class="col-xl-4 col-lg-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>New Registered Users</PanelTitle>
				<span class="badge bg-teal">24 new users</span>
			</PanelHeader>
			<ul class="registered-users-list">
				<li>
					<a href="#/"><img src="/img/user/user-5.jpg" alt="" /></a>
					<h4 class="username text-ellipsis">
						Savory Posh
						<small>Algerian</small>
					</h4>
				</li>
				<li>
					<a href="#/"><img src="/img/user/user-3.jpg" alt="" /></a>
					<h4 class="username text-ellipsis">
						Ancient Caviar
						<small>Korean</small>
					</h4>
				</li>
				<li>
					<a href="#/"><img src="/img/user/user-1.jpg" alt="" /></a>
					<h4 class="username text-ellipsis">
						Marble Lungs
						<small>Indian</small>
					</h4>
				</li>
				<li>
					<a href="#/"><img src="/img/user/user-8.jpg" alt="" /></a>
					<h4 class="username text-ellipsis">
						Blank Bloke
						<small>Japanese</small>
					</h4>
				</li>
				<li>
					<a href="#/"><img src="/img/user/user-2.jpg" alt="" /></a>
					<h4 class="username text-ellipsis">
						Hip Sculling
						<small>Cuban</small>
					</h4>
				</li>
				<li>
					<a href="#/"><img src="/img/user/user-6.jpg" alt="" /></a>
					<h4 class="username text-ellipsis">
						Flat Moon
						<small>Nepalese</small>
					</h4>
				</li>
				<li>
					<a href="#/"><img src="/img/user/user-4.jpg" alt="" /></a>
					<h4 class="username text-ellipsis">
						Packed Puffs
						<small>Malaysian</small>
					</h4>
				</li>
				<li>
					<a href="#/"><img src="/img/user/user-9.jpg" alt="" /></a>
					<h4 class="username text-ellipsis">
						Clay Hike
						<small>Swedish</small>
					</h4>
				</li>
			</ul>
			<PanelFooter class="text-center">
				<a href="#/" class="text-decoration-none text-dark">View All</a>
			</PanelFooter>
		</Panel>
	</div>
</div>