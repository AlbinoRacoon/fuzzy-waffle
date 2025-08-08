<script>
  import { onMount, onDestroy } from 'svelte';
  import { setPageTitle } from '$lib/utils';
	import Card from '/src/components/bootstrap/Card.svelte';
	import CardBody from '/src/components/bootstrap/CardBody.svelte';
	import CardHeader from '/src/components/bootstrap/CardHeader.svelte';
	import CardFooter from '/src/components/bootstrap/CardFooter.svelte';
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  import ApexCharts from '/src/components/plugins/ApexCharts.svelte';
  import { appVariables } from '/src/stores/appVariables.js';
  import { animateNumber } from '$lib/utils';
	import 'jsvectormap/dist/jsvectormap.min.css';
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.min.css';
  
  let jsVectormap;
	let vectorMap;
  let unsubscribe;
  let lineChartData;
  let sessionChartData;
  let convertionChartData;
  let salesChartData;
  let daterangepicker;
	
	function handleGetDate(minusDate) {
		var d = new Date();
				d = d.setDate(d.getDate() - minusDate);
		return d;
	}
  
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
			zoomButtons: false,
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
			backgroundColor: 'transparent',
		});
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
  
  function getSessionData(appVariables) {
		return {
			options: {
				series: [{
					data: [10812, 11393, 7311, 6834, 9612, 11200, 13557]
				}],
				xaxis: {
					axisBorder: { show: false },
					axisTicks: { show: false }
				},
				chart: {
					type: 'line',
					width: 160,
					height: 28,
					sparkline: {
						enabled: true
					}
				},
				stroke: {
					curve: 'smooth',
					width: 3
				},
				fill: {
					type: 'gradient',
					gradient: {
						opacityFrom: 1,
						opacityTo: 1,
						colorStops: [{
							offset: 0,
							color: appVariables.color.teal,
							opacity: 1
						},
						{
							offset: 50,
							color: appVariables.color.primary,
							opacity: 1
						},
						{
							offset: 100,
							color: appVariables.color.cyan,
							opacity: 1
						}]
					},
				},
				labels: ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
				tooltip: {
					theme: 'dark',
					fixed: {
						enabled: false
					},
					x: {
						show: false
					},
					y: {
						title: {
							formatter: function (seriesName) {
								return ''
							}
						},
						formatter: (value) => { return value + '%' },
					},
					marker: {
						show: false
					}
				},
				responsive: [{
					breakpoint: 3000,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 1450,
					options: {
						chart: {
							width: 100
						}
					}
				},{
					breakpoint: 1300,
					options: {
						chart: {
							width: 90
						}
					}
				},{
					breakpoint: 1200,
					options: {
						chart: {
							width: 160
						}
					}
				},{
					breakpoint: 900,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 576,
					options: {
						chart: {
							width: 180
						}
					}
				},{
					breakpoint: 400,
					options: {
						chart: {
							width: 120
						}
					}
				}]
			}
		}
	}
	
	function getSalesData(appVariables) {
		return {
			options: {
				series: [{
					data: [9452.37, 11018.87, 7296.37, 6274.29, 7924.05, 6581.34, 12918.14]
				}],
				xaxis: {
					axisBorder: { show: false },
					axisTicks: { show: false }
				},
				chart: {
					type: 'line',
					width: 100,
					height: 36,
					sparkline: {
						enabled: true
					},
					stacked: true
				},
				stroke: {
					curve: 'smooth',
					width: 3
				},
				fill: {
					type: 'gradient',
					gradient: {
						opacityFrom: 1,
						opacityTo: 1,
						colorStops: [{
							offset: 0,
							color: appVariables.color.primary,
							opacity: 1
						},
						{
							offset: 100,
							color: appVariables.color.indigo,
							opacity: 1
						}]
					},
				},
				tooltip: {
					theme: 'dark',
					fixed: {
						enabled: false
					},
					x: {
						show: false
					},
					y: {
						title: {
							formatter: function (seriesName) {
								return ''
							}
						},
						formatter: (value) => { return '$'+ value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); },
					},
					marker: {
						show: false
					}
				},
				responsive: [{
					breakpoint: 3000,
					options: {
						chart: {
							width: 130
						}
					}
				},{
					breakpoint: 1450,
					options: {
						chart: {
							width: 100
						}
					}
				},{
					breakpoint: 1300,
					options: {
						chart: {
							width: 90
						}
					}
				},{
					breakpoint: 1200,
					options: {
						chart: {
							width: 200
						}
					}
				},{
					breakpoint: 576,
					options: {
						chart: {
							width: 180
						}
					}
				},{
					breakpoint: 400,
					options: {
						chart: {
							width: 120
						}
					}
				}]
			}
		}
	}
	
	function getConvertionData(appVariables) {
		return {
			options: {
				series: [{
					data: [2.68, 2.93, 2.04, 1.61, 1.88, 1.62, 2.80]
				}],
				xaxis: {
					axisBorder: { show: false },
					axisTicks: { show: false },
				},
				chart: {
					type: 'line',
					width: 160,
					height: 28,
					sparkline: {
						enabled: true
					}
				},
				stroke: {
					curve: 'smooth',
					width: 3
				},
				fill: {
					type: 'gradient',
					gradient: {
						opacityFrom: 1,
						opacityTo: 1,
						colorStops: [{
							offset: 0,
							color: appVariables.color.danger,
							opacity: 1
						},
						{
							offset: 50,
							color: appVariables.color.warning,
							opacity: 1
						},
						{
							offset: 100,
							color: appVariables.color.lime,
							opacity: 1
						}]
					},
				},
				labels: ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
				tooltip: {
					theme: 'dark',
					fixed: {
						enabled: false
					},
					x: {
						show: false
					},
					y: {
						title: {
							formatter: function (seriesName) {
								return ''
							}
						},
						formatter: (value) => { return value + '%' },
					},
					marker: {
						show: false
					}
				},
				responsive: [{
					breakpoint: 3000,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 1450,
					options: {
						chart: {
							width: 100
						}
					}
				},{
					breakpoint: 1300,
					options: {
						chart: {
							width: 90
						}
					}
				},{
					breakpoint: 1200,
					options: {
						chart: {
							width: 160
						}
					}
				},{
					breakpoint: 900,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 576,
					options: {
						chart: {
							width: 180
						}
					}
				},{
					breakpoint: 400,
					options: {
						chart: {
							width: 120
						}
					}
				}]
			}
		}
	}
	
  onMount(async () => {
    setPageTitle('Dashboard v3');
    
    animateNumber();
  	
		let bootstrap = await import('bootstrap');
  	jsVectormap = await import ('jsvectormap');
		await import ('jsvectormap/dist/maps/world.js');
		
		daterangepicker = flatpickr("#daterangepickerInput", {
      mode: 'range',
      dateFormat: 'Y-m-d'
    });
    
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
		if (popoverTriggerList) {
			popoverTriggerList.map(function(elm) {
				new bootstrap.Popover(elm);
				return true;
			});
		}
		
    unsubscribe = appVariables.subscribe(value => {
    	if (value.color) {
    		renderMap(value);
    		lineChartData = getLineChartData(value);
    		sessionChartData = getSessionData(value);
    		convertionChartData = getConvertionData(value);
    		salesChartData = getSalesData(value);
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
	<li class="breadcrumb-item active">Dashboard v3</li>
</ol>
<h1 class="page-header mb-3">Dashboard v3</h1>

<div class="d-sm-flex align-items-center mb-3">
	<label for="daterangepickerInput" class="btn btn-dark me-2 text-truncate position-relative" id="daterange-filter">
		<i class="fa fa-calendar fa-fw text-white text-opacity-50 ms-n1"></i> 
		<span>1 Jun 2025 - 7 Jun 2025</span>
		<b class="caret ms-1 opacity-5"></b>
		
		<input type="text" class="form-control w-0 h-0 invisible position-absolute top-0 start-0" placeholder="yyyy-mm-dd to yyyy-mm-dd" name="daterangepicker" id="daterangepickerInput" />
	</label>
	<div class="text-gray-600 fw-bold mt-2 mt-sm-0">compared to <span id="daterange-prev-date">24 Mar-30 Apr 2025</span></div>
</div>

<div class="row">
	<div class="col-xl-6">
		<Card class="border-0 mb-3 overflow-hidden bg-gray-800 text-white">
			<CardBody>
				<div class="row">
					<div class="col-xl-7 col-lg-8">
						<div class="mb-3 text-gray-500">
							<b>TOTAL SALES</b>
							<span class="ms-2">
								<i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Total sales" data-bs-placement="top" data-bs-content="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels."></i>
							</span>
						</div>
						<div class="d-flex mb-1">
							<h2 class="mb-0">$<span data-animation="number" data-value="64559.25">0.00</span></h2>
							<div class="ms-auto mt-n1 mb-n1">
								{#if salesChartData}
									<ApexCharts options={salesChartData.options}></ApexCharts>
								{/if}
							</div>
						</div>
						<div class="mb-3 text-gray-500">
							<i class="fa fa-caret-up"></i> <span data-animation="number" data-value="33.21">0.00</span>% compare to last week
						</div>
						<hr class="bg-white bg-opacity-50" />
						<div class="row text-truncate">
							<div class="col-6">
								<div class=" text-gray-500">Total sales order</div>
								<div class="fs-18px mb-5px fw-bold" data-animation="number" data-value="1568">0</div>
								<div class="progress h-5px rounded-3 bg-gray-900 mb-5px">
									<div class="progress-bar progress-bar-striped rounded-right bg-teal" data-animation="width" data-value="55%" style="width: 0%"></div>
								</div>
							</div>
							<div class="col-6">
								<div class=" text-gray-500">Avg. sales per order</div>
								<div class="fs-18px mb-5px fw-bold">$<span data-animation="number" data-value="41.20">0.00</span></div>
								<div class="progress h-5px rounded-3 bg-gray-900 mb-5px">
									<div class="progress-bar progress-bar-striped rounded-right" data-animation="width" data-value="55%" style="width: 0%"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
						<img src="/img/svg/img-1.svg" alt="" height="150px" class="d-none d-lg-block" />
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
	
	<div class="col-xl-6">
		<div class="row">
			<div class="col-sm-6">
				<Card class="border-0 text-truncate mb-3 bg-gray-800 text-white">
					<CardBody>
						<div class="mb-3 text-gray-500">
							<b class="mb-3">CONVERSION RATE</b> 
							<span class="ms-2"><i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Conversion Rate" data-bs-placement="top" data-bs-content="Percentage of sessions that resulted in orders from total number of sessions." data-original-title="" title=""></i></span>
						</div>
						
						<div class="d-flex align-items-center mb-1">
							<h2 class="text-white mb-0"><span data-animation="number" data-value="2.19">0.00</span>%</h2>
							<div class="ms-auto">
								{#if convertionChartData}
									<ApexCharts options={convertionChartData.options}></ApexCharts>
								{/if}
							</div>
						</div>
						
						<div class="mb-4 text-gray-500 ">
							<i class="fa fa-caret-down"></i> <span data-animation="number" data-value="0.50">0.00</span>% compare to last week
						</div>
						
						<div class="d-flex mb-2">
							<div class="d-flex align-items-center">
								<i class="fa fa-circle text-red fs-8px me-2"></i>
								Added to cart
							</div>
							<div class="d-flex align-items-center ms-auto">
								<div class="text-gray-500 small"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="262">0</span>%</div>
								<div class="w-50px text-end ps-2 fw-bold"><span data-animation="number" data-value="3.79">0.00</span>%</div>
							</div>
						</div>
						
						<div class="d-flex mb-2">
							<div class="d-flex align-items-center">
								<i class="fa fa-circle text-warning fs-8px me-2"></i>
								Reached checkout
							</div>
							<div class="d-flex align-items-center ms-auto">
								<div class="text-gray-500 small"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="11">0</span>%</div>
								<div class="w-50px text-end ps-2 fw-bold"><span data-animation="number" data-value="3.85">0.00</span>%</div>
							</div>
						</div>
						
						<div class="d-flex">
							<div class="d-flex align-items-center">
								<i class="fa fa-circle text-lime fs-8px me-2"></i>
								Sessions converted
							</div>
							<div class="d-flex align-items-center ms-auto">
								<div class="text-gray-500 small"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="57">0</span>%</div>
								<div class="w-50px text-end ps-2 fw-bold"><span data-animation="number" data-value="2.19">0.00</span>%</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
			
			<div class="col-sm-6">
				<Card class="border-0 text-truncate mb-3 bg-gray-800 text-white">
					<CardBody>
						<div class="mb-3 text-gray-500">
							<b class="mb-3">STORE SESSIONS</b> 
							<span class="ms-2"><i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Store Sessions" data-bs-placement="top" data-bs-content="Number of sessions on your online store. A session is a period of continuous activity from a visitor." data-original-title="" title=""></i></span>
						</div>
						
						<div class="d-flex align-items-center mb-1">
							<h2 class="text-white mb-0"><span data-animation="number" data-value="70719">0</span></h2>
							<div class="ms-auto">
								<div id="store-session-sparkline"></div>
								{#if sessionChartData}
									<ApexCharts options={sessionChartData.options}></ApexCharts>
								{/if}
							</div>
						</div>
						
						<div class="mb-4 text-gray-500 ">
							<i class="fa fa-caret-up"></i> <span data-animation="number" data-value="9.5">0.00</span>% compare to last week
						</div>
						
						<div class="d-flex mb-2">
							<div class="d-flex align-items-center">
								<i class="fa fa-circle text-teal fs-8px me-2"></i>
								Mobile
							</div>
							<div class="d-flex align-items-center ms-auto">
								<div class="text-gray-500 small"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="25.7">0.00</span>%</div>
								<div class="w-50px text-end ps-2 fw-bold"><span data-animation="number" data-value="53210">0</span></div>
							</div>
						</div>
						
						<div class="d-flex mb-2">
							<div class="d-flex align-items-center">
								<i class="fa fa-circle text-blue fs-8px me-2"></i>
								Desktop
							</div>
							<div class="d-flex align-items-center ms-auto">
								<div class="text-gray-500 small"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="16.0">0.00</span>%</div>
								<div class="w-50px text-end ps-2 fw-bold"><span data-animation="number" data-value="11959">0</span></div>
							</div>
						</div>
						
						<div class="d-flex">
							<div class="d-flex align-items-center">
								<i class="fa fa-circle text-cyan fs-8px me-2"></i>
								Tablet
							</div>
							<div class="d-flex align-items-center ms-auto">
								<div class="text-gray-500 small"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="7.9">0.00</span>%</div>
								<div class="w-50px text-end ps-2 fw-bold"><span data-animation="number" data-value="5545">0</span></div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</div>
	</div>
</div>

<div class="row">
	<div class="col-xl-8 col-lg-6">
		<Card class="border-0 mb-3 bg-gray-800 text-white">
			<CardBody>
				<div class="mb-3 text-gray-500 "><b>VISITORS ANALYTICS</b> <span class="ms-2"><i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Top products with units sold" data-bs-placement="top" data-bs-content="Products with the most individual units sold. Includes orders from all sales channels." data-original-title="" title=""></i></span></div>
				<div class="row">
					<div class="col-xl-3 col-4">
						<h3 class="mb-1"><span data-animation="number" data-value="127.1">0</span>K</h3>
						<div>New Visitors</div>
						<div class="text-gray-500 small text-truncate"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="25.5">0.00</span>% from previous 7 days</div>
					</div>
					<div class="col-xl-3 col-4">
						<h3 class="mb-1"><span data-animation="number" data-value="179.9">0</span>K</h3>
						<div>Returning Visitors</div>
						<div class="text-gray-500 small text-truncate"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="5.33">0.00</span>% from previous 7 days</div>
					</div>
					<div class="col-xl-3 col-4">
						<h3 class="mb-1"><span data-animation="number" data-value="766.8">0</span>K</h3>
						<div>Total Page Views</div>
						<div class="text-gray-500 small text-truncate"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="0.323">0.00</span>% from previous 7 days</div>
					</div>
				</div>
			</CardBody>
			<CardBody class="p-0 pe-3 pb-3">
				<div style="height: 252px" data-bs-theme="dark">
					{#if lineChartData}
						<ApexCharts options={lineChartData.options}></ApexCharts>
					{/if}
				</div>
			</CardBody>
		</Card>
	</div>
	
	<div class="col-xl-4 col-lg-6">
		<Card class="border-0 mb-3 bg-gray-800 text-white">
			<CardBody>
				<div class="mb-2 text-gray-500">
					<b>SESSION BY LOCATION</b>
					<span class="ms-2"><i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Total sales" data-bs-placement="top" data-bs-content="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels."></i></span>
				</div>
				<div id="vectorMapContainer" class="mb-2 h-200px"></div>
				<div>
					<div class="d-flex align-items-center text-white mb-2">
						<div class="widget-img widget-img-xs rounded bg-dark me-2 w-40px" style="background-image: url(/img/flag/us.jpg)"></div>
						<div class="d-flex w-100">
							<div>United States</div>
							<div class="ms-auto text-gray-500"><span data-animation="number" data-value="39.85">0.00</span>%</div>
						</div>
					</div>
					<div class="d-flex align-items-center text-white mb-2">
						<div class="widget-img widget-img-xs rounded bg-dark me-2 w-40px" style="background-image: url(/img/flag/cn.jpg)"></div>
						<div class="d-flex w-100">
							<div>China</div>
							<div class="ms-auto text-gray-500"><span data-animation="number" data-value="14.23">0.00</span>%</div>
						</div>
					</div>
					<div class="d-flex align-items-center text-white mb-2">
						<div class="widget-img widget-img-xs rounded bg-dark me-2 w-40px" style="background-image: url(/img/flag/de.jpg)"></div>
						<div class="d-flex w-100">
							<div>Germany</div>
							<div class="ms-auto text-gray-500"><span data-animation="number" data-value="12.83">0.00</span>%</div>
						</div>
					</div>
					<div class="d-flex align-items-center text-white mb-2">
						<div class="widget-img widget-img-xs rounded bg-dark me-2 w-40px" style="background-image: url(/img/flag/fr.jpg)"></div>
						<div class="d-flex w-100">
							<div>France</div>
							<div class="ms-auto text-gray-500"><span data-animation="number" data-value="11.14">0.00</span>%</div>
						</div>
					</div>
					<div class="d-flex align-items-center text-white mb-0">
						<div class="widget-img widget-img-xs rounded bg-dark me-2 w-40px" style="background-image: url(/img/flag/jp.jpg)"></div>
						<div class="d-flex w-100">
							<div>Japan</div>
							<div class="ms-auto text-gray-500"><span data-animation="number" data-value="10.75">0.00</span>%</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</div>

<div class="row">
	<div class="col-xl-4 col-lg-6">
		<Card class="border-0 mb-3 bg-gray-900 text-white">
			<CardBody style="background: no-repeat bottom right; background-image: url(/img/svg/img-4.svg); background-size: auto 60%;">
				<div class="mb-3 text-gray-500 ">
					<b>SALES BY SOCIAL SOURCE</b>
					<span class="text-gray-500 ms-2"><i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Sales by social source" data-bs-placement="top" data-bs-content="Total online store sales that came from a social referrer source."></i></span>
				</div>
				<h3 class="mb-10px">$<span data-animation="number" data-value="55547.89">0.00</span></h3>
				<div class="text-gray-500 mb-1px"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="45.76">0.00</span>% increased</div>
			</CardBody>
			<div class="widget-list rounded-bottom" data-bs-theme="dark">
				<a href="#/" class="widget-list-item rounded-0 pt-3px">
					<div class="widget-list-media icon">
						<i class="fab fa-apple bg-indigo text-white"></i>
					</div>
					<div class="widget-list-content">
						<div class="widget-list-title">Apple Store</div>
					</div>
					<div class="widget-list-action text-nowrap text-gray-500">
						$<span data-animation="number" data-value="34840.17">0.00</span>
					</div>
				</a>
				<a href="#/" class="widget-list-item">
					<div class="widget-list-media icon">
						<i class="fab fa-facebook-f bg-blue text-white"></i>
					</div>
					<div class="widget-list-content">
						<div class="widget-list-title">Facebook</div>
					</div>
					<div class="widget-list-action text-nowrap text-gray-500">
						$<span data-animation="number" data-value="12502.67">0.00</span>
					</div>
				</a>
				<a href="#/" class="widget-list-item">
					<div class="widget-list-media icon">
						<i class="fab fa-twitter bg-info text-white"></i>
					</div>
					<div class="widget-list-content">
						<div class="widget-list-title">Twitter</div>
					</div>
					<div class="widget-list-action text-nowrap text-gray-500">
						$<span data-animation="number" data-value="4799.20">0.00</span>
					</div>
				</a>
				<a href="#/" class="widget-list-item">
					<div class="widget-list-media icon">
						<i class="fab fa-google bg-red text-white"></i>
					</div>
					<div class="widget-list-content">
						<div class="widget-list-title">Google Adwords</div>
					</div>
					<div class="widget-list-action text-nowrap text-gray-500">
						$<span data-animation="number" data-value="3405.85">0.00</span>
					</div>
				</a>
				<a href="#/" class="widget-list-item pb-3px rounded-bottom">
					<div class="widget-list-media icon">
						<i class="fab fa-instagram bg-pink text-white"></i>
					</div>
					<div class="widget-list-content">
						<div class="widget-list-title">Instagram</div>
					</div>
					<div class="widget-list-action text-nowrap text-gray-500">
						$<span data-animation="number" data-value="0.00">0.00</span>
					</div>
				</a>
			</div>
		</Card>
	</div>
	
	<div class="col-xl-4 col-lg-6">
		<Card class="border-0 mb-3 bg-gray-800 text-white">
			<CardBody>
				<div class="mb-3 text-gray-500">
					<b>TOP PRODUCTS BY UNITS SOLD</b>
					<span class="ms-2 "><i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Top products with units sold" data-bs-placement="top" data-bs-content="Products with the most individual units sold. Includes orders from all sales channels."></i></span>
				</div>
				<div class="d-flex align-items-center mb-15px">
					<div class="widget-img rounded-3 me-10px bg-white p-3px w-30px">
						<div class="h-100 w-100" style="background: url(/img/product/product-8.jpg) center no-repeat; background-size: auto 100%;"></div>
					</div>
					<div class="text-truncate">
						<div >Apple iPhone XR (2025)</div>
						<div class="text-gray-500">$799.00</div>
					</div>
					<div class="ms-auto text-center">
						<div class="fs-13px"><span data-animation="number" data-value="195">0</span></div>
						<div class="text-gray-500 fs-10px">sold</div>
					</div>
				</div>
				
				<div class="d-flex align-items-center mb-15px">
					<div class="widget-img rounded-3 me-10px bg-white p-3px w-30px">
						<div class="h-100 w-100" style="background: url(/img/product/product-9.jpg) center no-repeat; background-size: auto 100%;"></div>
					</div>
					<div class="text-truncate">
						<div>Apple iPhone XS (2025)</div>
						<div class="text-gray-500">$1,199.00</div>
					</div>
					<div class="ms-auto text-center">
						<div class="fs-13px"><span data-animation="number" data-value="185">0</span></div>
						<div class="text-gray-500 fs-10px">sold</div>
					</div>
				</div>
				
				<div class="d-flex align-items-center mb-15px">
					<div class="widget-img rounded-3 me-10px bg-white p-3px w-30px">
						<div class="h-100 w-100" style="background: url(/img/product/product-10.jpg) center no-repeat; background-size: auto 100%;"></div>
					</div>
					<div class="text-truncate">
						<div >Apple iPhone XS Max (2025)</div>
						<div class="text-gray-500">$3,399</div>
					</div>
					<div class="ms-auto text-center">
						<div class="fs-13px"><span data-animation="number" data-value="129">0</span></div>
						<div class="text-gray-500 fs-10px">sold</div>
					</div>
				</div>
				
				<div class="d-flex align-items-center mb-15px">
					<div class="widget-img rounded-3 me-10px bg-white p-3px w-30px">
						<div class="h-100 w-100" style="background: url(/img/product/product-11.jpg) center no-repeat; background-size: auto 100%;"></div>
					</div>
					<div class="text-truncate">
						<div >Huawei Y5 (2025)</div>
						<div class="text-gray-500">$99.00</div>
					</div>
					<div class="ms-auto text-center">
						<div class="fs-13px"><span data-animation="number" data-value="96">0</span></div>
						<div class="text-gray-500 fs-10px">sold</div>
					</div>
				</div>
				
				<div class="d-flex align-items-center">
					<div class="widget-img rounded-3 me-10px bg-white p-3px w-30px">
						<div class="h-100 w-100" style="background: url(/img/product/product-12.jpg) center no-repeat; background-size: auto 100%;"></div>
					</div>
					<div class="text-truncate">
						<div >Huawei Nova 4 (2025)</div>
						<div class="text-gray-500">$499.00</div>
					</div>
					<div class="ms-auto text-center">
						<div class="fs-13px"><span data-animation="number" data-value="55">0</span></div>
						<div class="text-gray-500 fs-10px">sold</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
	
	<div class="col-xl-4 col-lg-6">
		<Card class="border-0 mb-3 bg-gray-800 text-white">
			<CardBody>
				<div class="mb-3 text-gray-500 ">
					<b>MARKETING CAMPAIGN</b>
					<span class="ms-2"><i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Marketing Campaign" data-bs-placement="top" data-bs-content="Campaign that run for getting more returning customers."></i></span>
				</div>
				
				<div class="row align-items-center pb-1px">
					<div class="col-4">
						<div class="h-100px d-flex align-items-center justify-content-center">
							<img src="/img/svg/img-2.svg" alt="" class="mw-100 mh-100" />
						</div>
					</div>
					<div class="col-8">
						<div class="mb-2px text-truncate">Email Marketing Campaign</div>
						<div class="mb-2px  text-gray-500  small">Mon 12/6 - Sun 18/6</div>
						<div class="d-flex align-items-center mb-2px">
							<div class="flex-grow-1">
								<div class="progress h-5px rounded-pill bg-white bg-opacity-10">
									<div class="progress-bar progress-bar-striped bg-indigo" data-animation="width" data-value="80%" style="width: 0%"></div>
								</div>
							</div>
							<div class="ms-2 small w-30px text-center"><span data-animation="number" data-value="80">0</span>%</div>
						</div>
						<div class="text-gray-500 small mb-15px text-truncate">
							57.5% people click the email
						</div>
						<a href="#/" class="btn btn-xs btn-indigo fs-10px ps-2 pe-2">View campaign</a>
					</div>
				</div>
				
				<hr class="bg-white bg-opacity-20 mt-20px mb-20px" />
				<div class="row align-items-center">
					<div class="col-4">
						<div class="h-100px d-flex align-items-center justify-content-center">
							<img src="/img/svg/img-3.svg" alt="" class="mw-100 mh-100" />
						</div>
					</div>
					
					<div class="col-8">
						<div class="mb-2px text-truncate">Facebook Marketing Campaign</div>
						<div class="mb-2px  text-gray-500  small">Sat 10/6 - Sun 18/6</div>
						<div class="d-flex align-items-center mb-2px">
							<div class="flex-grow-1">
								<div class="progress h-5px rounded-pill bg-white bg-opacity-10">
									<div class="progress-bar progress-bar-striped bg-warning" data-animation="width" data-value="60%" style="width: 0%"></div>
								</div>
							</div>
							<div class="ms-2 small w-30px text-center"><span data-animation="number" data-value="60">0</span>%</div>
						</div>
						<div class="text-gray-500 small mb-15px text-truncate">
							+124k visitors from facebook
						</div>
						<a href="#/" class="btn btn-xs btn-warning fs-10px ps-2 pe-2">View campaign</a>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</div>

