<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
  import { appVariables } from '/src/stores/appVariables.js';
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	
	import ApexCharts from '/src/components/plugins/ApexCharts.svelte';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  
  let codeArray = [];
  let chartData = [];
  let unsubscribe;
  
  let darkMode = false;
  
  function getChartData(appVariables) {
		return {
			options: {
				chart: {
					height: 350,
					type: 'line',
					toolbar: { show: false }
				},
				series: [
					{ name: 'High - 2025', data: [28, 29, 33, 36, 32, 32, 33] }, 
					{ name: 'Low - 2025', data: [12, 11, 14, 18, 17, 13, 13] }
				],
				title: {
					text: 'Average High & Low Temperature',
					align: 'center',
					style: {
						color: (!darkMode) ? appVariables.color.dark : appVariables.color.white
					}
				},
				colors: [appVariables.color.primary, appVariables.color.teal],
				legend: { labels: { colors: appVariables.color.white } },
				dataLabels: {
					enabled: true,
					background: {
						enabled: true,
						foreColor: appVariables.color.white,
						padding: 4,
						borderRadius: 2,
						borderWidth: 0,
						borderColor: (!darkMode) ? appVariables.color.dark : appVariables.color.white,
						opacity: 0.9
					},
					style: {
						color: (!darkMode) ? appVariables.color.bodyColor : appVariables.color.white
					}
				},
				stroke: { curve: 'smooth', width: 3 },
				grid: {
					borderColor: (!darkMode) ? appVariables.color.borderColor : 'rgba('+ appVariables.color.whiteRgb +', .25)',
					row: { colors: [(!darkMode) ? appVariables.color.light : 'rgba('+ appVariables.color.whiteRgb +', .25)', 'transparent'], opacity: 0.5 }
				},
				markers: { size: 4 },
				xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
				yaxis: { min: 5, max: 40 },
				legend: {
					show: true,
					position: 'top',
					offsetY: -10,
					horizontalAlign: 'right',
					floating: true
				}
			}
		};
	}
  
  function dismissDarkMode() {
  	darkMode = false;
  	
  	chartData = getChartData($appVariables);
  }
  
  function toggleDarkMode() {
  	darkMode = true;
  	
  	chartData = getChartData($appVariables);
  }
	
  onMount(async () => {
    setPageTitle('Widgets');
		
		unsubscribe = appVariables.subscribe(value => {
      if (value.color) {
        chartData = getChartData(value);
      }
    });
		
		for (var i = 1; i < 12; i++) {
			let response = await fetch('/data/widgets/widgets-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
  });
  
  onDestroy(() => {
  	if (unsubscribe) {
    	unsubscribe();
  	}
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item active">Widgets</li>
</ol>

<h1 class="page-header">
	Widgets <small>header small text goes here...</small>
</h1>


<span class="btn-group float-end ms-20px  p-2px bg-black bg-opacity-20 rounded">
	<a href="#/" class="btn btn-sm btn-white border-0" on:click|preventDefault={dismissDarkMode} class:active={!darkMode}><i class="fa fa-sun" class:text-blue={!darkMode}></i> Light</a>
	<a href="#/" class="btn btn-sm btn-white border-0" on:click|preventDefault={toggleDarkMode} class:active={darkMode}><i class="fa fa-moon" class:text-blue={darkMode}></i> Dark</a>
</span>
<p class="mb-20px">
	All the widgets is reusable and responsive. You may use the predefined css to configure the padding, margin or background. Besides that, all the widgets have light and dark version. 
	Kindly add the <code>[data-bs-theme="dark"]</code> to the widget will change it to the dark version.
</p>

<div class="row">
	<div class="col-lg-12 col-xl-4">
		<div class="row">
			<div class="col-xl-12 col-lg-6">
				<div class="mb-10px mt-10px fs-10px">
					<a href="#modal-widget-list" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
					<b class="text-body">WIDGET LIST</b>
				</div>
				<div class="widget-list rounded mb-4" data-bs-theme={(darkMode) ? 'dark' : ''}>
					<div class="widget-list-item">
						<div class="widget-list-media">
							<img src="/img/user/user-12.jpg" width="50" alt="" class="rounded" />
						</div>
						<div class="widget-list-content">
							<h4 class="widget-list-title">Christopher Struth</h4>
							<p class="widget-list-desc">Bank Transfer</p>
						</div>
						<div class="widget-list-action">
							<a href="#/" data-bs-toggle="dropdown" class="text-body text-opacity-50" aria-label="Example"><i class="fa fa-ellipsis-h fs-14px"></i></a>
							<div class="dropdown-menu dropdown-menu-end">
								<a href="#/" class="dropdown-item">Option 1</a>
								<a href="#/" class="dropdown-item">Option 2</a>
								<a href="#/" class="dropdown-item">Option 3</a>
								<div class="dropdown-divider"></div>
								<a href="#/" class="dropdown-item">Option 4</a>
							</div>
						</div>
					</div>
					<div class="widget-list-item">
						<div class="widget-list-media">
							<img src="/img/user/user-13.jpg" width="50" alt="" class="rounded" />
						</div>
						<div class="widget-list-content">
							<h4 class="widget-list-title">Janie Flowers</h4>
							<p class="widget-list-desc">Bank Transfer</p>
						</div>
						<div class="widget-list-action">
							<a href="#/" data-bs-toggle="dropdown" class="text-body text-opacity-50" aria-label="Example"><i class="fa fa-ellipsis-h fs-14px"></i></a>
							<div class="dropdown-menu dropdown-menu-end">
								<a href="#/" class="dropdown-item">Option 1</a>
								<a href="#/" class="dropdown-item">Option 2</a>
								<a href="#/" class="dropdown-item">Option 3</a>
								<div class="dropdown-divider"></div>
								<a href="#/" class="dropdown-item">Option 4</a>
							</div>
						</div>
					</div>
					<div class="widget-list-item">
						<div class="widget-list-media">
							<img src="/img/user/user-14.jpg" width="50" alt="" class="rounded" />
						</div>
						<div class="widget-list-content">
							<h4 class="widget-list-title">Janie Flowers</h4>
							<p class="widget-list-desc">Bank Transfer</p>
						</div>
						<div class="widget-list-action">
							<a href="#/" data-bs-toggle="dropdown" class="text-body text-opacity-50" aria-label="Example"><i class="fa fa-ellipsis-h fs-14px"></i></a>
							<div class="dropdown-menu dropdown-menu-end">
								<a href="#/" class="dropdown-item">Option 1</a>
								<a href="#/" class="dropdown-item">Option 2</a>
								<a href="#/" class="dropdown-item">Option 3</a>
								<div class="dropdown-divider"></div>
								<a href="#/" class="dropdown-item">Option 4</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="col-xl-12 col-lg-6">
				<div class="mb-10px mt-10px fs-10px">
					<a href="#modal-widget-list-with-icon" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
					<b class="text-body">WIDGET LIST WITH ICON</b>
				</div>
				<div class="widget-list rounded mb-4" data-bs-theme={(darkMode) ? 'dark' : ''}>
					<a href="#/" class="widget-list-item">
						<div class="widget-list-media icon">
							<i class="fa fa-plane bg-dark text-white"></i>
						</div>
						<div class="widget-list-content">
							<h4 class="widget-list-title">Airplane Mode</h4>
						</div>
						<div class="widget-list-action text-end">
							<i class="fa fa-angle-right fa-lg text-body text-opacity-30"></i>
						</div>
					</a>
					<a href="#/" class="widget-list-item">
						<div class="widget-list-media icon">
							<i class="fa fa-wifi bg-dark text-white"></i>
						</div>
						<div class="widget-list-content">
							<h4 class="widget-list-title">Wi-Fi</h4>
						</div>
						<div class="widget-list-action text-nowrap text-body text-opacity-50 fw-bold text-decoration-none">
							Connected
							<i class="fa fa-angle-right fa-lg ms-3 text-body text-opacity-30"></i>
						</div>
					</a>
					<a href="#/" class="widget-list-item">
						<div class="widget-list-media icon">
							<i class="fab fa-bluetooth bg-indigo text-white"></i>
						</div>
						<div class="widget-list-content">
							<h4 class="widget-list-title">Bluetooth</h4>
						</div>
						<div class="widget-list-action text-nowrap text-body text-opacity-50 fw-bold text-decoration-none">
							On
							<i class="fa fa-angle-right text-body text-opacity-30 fa-lg ms-3"></i>
						</div>
					</a>
					<a href="#/" class="widget-list-item">
						<div class="widget-list-media icon">
							<i class="fa fa-signal bg-pink text-white"></i>
						</div>
						<div class="widget-list-content">
							<h4 class="widget-list-title">Cellular</h4>
						</div>
						<div class="widget-list-action text-decoration-none fw-bold">
							<i class="fa fa-angle-right text-gray-500 fa-lg"></i>
						</div>
					</a>
					<a href="#/" class="widget-list-item">
						<div class="widget-list-media icon">
							<i class="fa fa-link bg-yellow text-gray-900"></i>
						</div>
						<div class="widget-list-content">
							<h4 class="widget-list-title">Personal Hotspot</h4>
						</div>
						<div class="widget-list-action text-nowrap text-body text-opacity-50 fw-bold text-decoration-none">
							Off
							<i class="fa fa-angle-right text-body text-opacity-30 fa-lg ms-3"></i>
						</div>
					</a>
				</div>
			</div>
			
			<div class="col-xl-12 col-lg-6">
				<div class="mb-10px mt-10px fs-10px">
					<a href="#modal-widget-chat-input" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
					<b class="text-body">WIDGET CHAT</b>
				</div>
				<div class="widget-chat rounded mb-4" data-bs-theme={(darkMode) ? 'dark' : ''}>
					<div class="widget-chat-header">
						<div class="widget-chat-header-icon">
							<i class="fab fa-earlybirds w-30px h-30px fs-20px bg-yellow text-gray-900 d-flex align-items-center justify-content-center rounded"></i>
						</div>
						<div class="widget-chat-header-content">
							<h4 class="widget-chat-header-title">Company Discussion Group</h4>
							<p class="widget-chat-header-desc">55 members, 4 online</p>
						</div>
					</div>
					<PerfectScrollbar class="widget-chat-body h-250px">
						<!-- BEGIN widget-chat-item -->
						<div class="widget-chat-item with-media start">
							<div class="widget-chat-media">
								<img alt="" src="/img/user/user-1.jpg" />
							</div>
							<div class="widget-chat-info">
								<div class="widget-chat-info-container">
									<div class="widget-chat-name text-indigo">Hudson Mendes</div>
									<div class="widget-chat-message">Should we plan for a company trip this year?</div>
									<div class="widget-chat-time">6:00PM</div>
								</div>
							</div>
						</div>
						<!-- END widget-chat-item -->
						<!-- BEGIN widget-chat-item -->
						<div class="widget-chat-item with-media start">
							<div class="widget-chat-media">
								<img alt="" src="/img/user/user-2.jpg" />
							</div>
							<div class="widget-chat-info">
								<div class="widget-chat-info-container">
									<div class="widget-chat-name text-primary">Sam Sugerman</div>
									<div class="widget-chat-message">ok let's do it</div>
									<div class="widget-chat-time">6:01PM</div>
								</div>
							</div>
						</div>
						<!-- END widget-chat-item -->
						<!-- BEGIN widget-chat-item -->
						<div class="widget-chat-item end">
							<div class="widget-chat-info">
								<div class="widget-chat-info-container">
									<div class="widget-chat-message">i'm ok with it</div>
									<div class="widget-chat-time">6:05PM</div>
								</div>
							</div>
						</div>
						<!-- END widget-chat-item -->
						<div class="text-center text-gray-500 m-2 fw-bold">Today</div>
						<!-- BEGIN widget-chat-item -->
						<div class="widget-chat-item with-media start">
							<div class="widget-chat-media">
								<img alt="" src="/img/user/user-3.jpg" />
							</div>
							<div class="widget-chat-info">
								<div class="widget-chat-info-container">
									<div class="widget-chat-name text-orange">Jaxon Allwood</div>
									<div class="widget-chat-message">
										Here is some images for New Zealand
										<div class="row gx-1 mt-5px">
											<div class="col-md-4">
												<a href="#/" aria-label="Example" class="widget-card widget-card-sm square mb-1">
													<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-51-thumb.jpg)"></div>
												</a>
												<a href="#/" aria-label="Example" class="widget-card widget-card-sm square mb-1">
													<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-52-thumb.jpg)"></div>
												</a>
											</div>
											<div class="col-md-4">
												<a href="#/" aria-label="Example" class="widget-card widget-card-sm square mb-1">
													<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-53-thumb.jpg)"></div>
												</a>
												<a href="#/" aria-label="Example" class="widget-card widget-card-sm square mb-1">
													<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-54-thumb.jpg)"></div>
												</a>
											</div>
											<div class="col-md-4">
												<a href="#/" aria-label="Example" class="widget-card widget-card-sm square mb-1">
													<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-59-thumb.jpg)"></div>
												</a>
												<a href="#/" aria-label="Example" class="widget-card widget-card-sm square mb-1">
													<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-60-thumb.jpg)"></div>
												</a>
											</div>
										</div>
									</div>
									<div class="widget-chat-time">6:20PM</div>
								</div>
							</div>
						</div>
						<!-- END widget-chat-item -->
					</PerfectScrollbar>
					<div class="widget-input">
						<form action="" method="POST" name="">
							<div class="widget-input-container">
								<div class="widget-input-icon"><a href="#/" aria-label="Example" class="text-body text-opacity-50"><i class="fa fa-camera"></i></a></div>
								<div class="widget-input-box">
									<input type="text" class="form-control" placeholder="Write a message..." />
								</div>
								<div class="widget-input-icon"><a href="#/" aria-label="Example" class="text-body text-opacity-50"><i class="fa fa-smile"></i></a></div>
								<div class="widget-input-divider"></div>
								<div class="widget-input-icon"><a href="#/" aria-label="Example" class="text-body text-opacity-50"><i class="fa fa-microphone"></i></a></div>
							</div>
						</form>
					</div>
				</div>
			</div>
			
			<div class="col-xl-12 col-lg-6">
				<div class="mb-10px mt-10px fs-10px">
					<a href="#modal-widget-todolist" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
					<b class="text-body">WIDGET TODOLIST</b>
				</div>
				<div class="widget-todolist rounded mb-4" data-bs-theme={(darkMode) ? 'dark' : ''}>
					<div class="widget-todolist-header">
						<div class="widget-todolist-header-title">Todolist</div>
						<div class="widget-todolist-header-total"><span>0</span><small>Done</small></div>
					</div>
					<div class="widget-todolist-body">
						<div class="widget-todolist-item">
							<div class="widget-todolist-input">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" id="widget_todolist_1" />
								</div>
							</div>
							<div class="widget-todolist-content">
								<h6 class="mb-2px">Borrow Tony's travel guide</h6>
								<div class="text-body text-opacity-75 fw-bold fs-11px">Vacation in Rome</div>
							</div>
							<div class="widget-todolist-icon">
								<a href="#/" aria-label="Example"><i class="fa fa-question-circle"></i></a>
							</div>
						</div>
						<div class="widget-todolist-item">
							<div class="widget-todolist-input">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" id="widget_todolist_2" />
								</div>
							</div>
							<div class="widget-todolist-content">
								<h6 class="mb-2px">Finish expense report</h6>
								<div class="text-body text-opacity-75 fw-bold fs-11px">Today, 4:00PM, Daily</div>
							</div>
							<div class="widget-todolist-icon">
								<a href="#/" aria-label="Example"><i class="fa fa-question-circle"></i></a>
							</div>
						</div>
						<div class="widget-todolist-item">
							<div class="widget-todolist-input">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" id="widget_todolist_3" />
								</div>
							</div>
							<div class="widget-todolist-content">
								<h6 class="mb-2px">Confirm conference call for Wednesday</h6>
								<div class="text-body text-opacity-75 fw-bold fs-11px">Work</div>
							</div>
							<div class="widget-todolist-icon">
								<a href="#/" aria-label="Example"><i class="fa fa-question-circle"></i></a>
							</div>
						</div>
						<div class="widget-todolist-item">
							<div class="widget-todolist-input">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" id="widget_todolist_4" />
								</div>
							</div>
							<div class="widget-todolist-content">
								<h6 class="mb-2px"><b class="text-warning">!!</b> Mobile App WIP Presentation</h6>
								<div class="text-body text-opacity-75 fw-bold fs-11px">Today, 12:00PM</div>
							</div>
							<div class="widget-todolist-icon">
								<a href="#/" aria-label="Example"><i class="fa fa-question-circle"></i></a>
							</div>
						</div>
						<div class="widget-todolist-item">
							<div class="widget-todolist-input">
								<i class="fa fa-plus text-body text-opacity-30 fa-fw"></i>
							</div>
							<div class="widget-todolist-content">
								<input type="text" class="form-control border-0 shadow-none rounded-0 p-0 h-20px bg-none" placeholder="Write your task here..." />
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="col-xl-12 col-lg-6">
				<div class="mb-10px mt-10px fs-10px">
					<a href="#modal-widget-map" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
					<b class="text-body">WIDGET MAP</b>
				</div>
				<div class="widget-map rounded mb-4" data-bs-theme={(darkMode) ? 'dark' : ''}>
					<div class="widget-input-container">
						<div class="widget-input-icon"><a href="#/" aria-label="Example" class="text-body text-opacity-50" data-id="widget-elm" data-light-class="text-body text-opacity-50" data-dark-class="text-white"><i class="fa fa-ellipsis-v"></i></a></div>
						<div class="widget-input-box">
							<input type="text" class="form-control" placeholder="Search here">
						</div>
						<div class="widget-input-icon"><a href="#/" aria-label="Example" class="text-body text-opacity-50" data-id="widget-elm" data-light-class="text-body text-opacity-50" data-dark-class="text-white"><i class="fa fa-microphone"></i></a></div>
						<div class="widget-input-divider"></div>
						<div class="widget-input-icon"><a href="#/" aria-label="Example" class="text-body text-opacity-50" data-id="widget-elm" data-light-class="text-body text-opacity-50" data-dark-class="text-white"><i class="fa fa-location-arrow"></i></a></div>
					</div>
					<div class="widget-map-body">
						<iframe title="" class="d-block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5650178360584!2d-122.41879278478642!3d37.77679637975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2smy!4v1524046379645" width="100%" height="230" frameborder="0" style="border:0" allowfullscreen></iframe>
					</div>
					<div class="widget-map-list">
						<div class="widget-list bg-none">
							<div class="widget-list-item">
								<div class="widget-list-media text-center">
									<a href="#/" aria-label="Example"><i class="fab fa-twitter fa-3x"></i></a>
								</div>
								<div class="widget-list-content">
									<h4 class="widget-list-title">Twitter Headquater</h4>
									<p class="widget-list-desc">Corporate Office</p>
								</div>
								<div class="widget-list-action">
									<a href="#/" aria-label="Example" data-bs-toggle="dropdown" class="text-body text-opacity-50"><i class="fa fa-angle-right fa-2x"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="col-lg-12 col-xl-8">
		<div class="mb-10px mt-10px fs-10px">
			<a href="#modal-widget-img-icon" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
			<b class="text-body">WIDGET IMAGE / ICON</b>
		</div>
		<div class="row mb-4">
			<div class="col-sm-6">
				<div class="d-flex flex-wrap">
					<div class="widget-icon rounded bg-indigo me-5px mb-5px text-white">
						<i class="fab fa-digital-ocean"></i>
					</div>
					<div class="widget-icon rounded bg-blue me-5px mb-5px text-white">
						<i class="fab fa-twitter"></i>
					</div>
					<div class="widget-icon rounded bg-success me-5px mb-5px text-white">
						<i class="fab fa-android"></i>
					</div>
					<div class="widget-icon rounded bg-warning me-5px mb-5px text-white">
						<i class="fab fa-firefox"></i>
					</div>
					<div class="widget-icon rounded bg-danger me-5px mb-5px text-white">
						<i class="fab fa-google-plus-g"></i>
					</div>
					<div class="widget-icon rounded bg-pink me-5px mb-5px text-white">
						<i class="fab fa-pinterest"></i>
					</div>
				</div>
				<div class="clearfix">
					<div class="widget-icon widget-icon-xl user rounded float-start me-5px mb-5px text-white"
						class:bg-dark={darkMode} 
						class:text-opacity-50={!darkMode} 
						class:bg-gray-500={!darkMode}>
						<i class="fa fa-user"></i>
					</div>
					<div class="widget-icon widget-icon-lg user rounded float-start me-5px mb-5px text-white"
						class:bg-dark={darkMode} 
						class:text-opacity-50={!darkMode} 
						class:bg-gray-500={!darkMode}>
						<i class="fa fa-user"></i>
					</div>
					<div class="widget-icon user rounded float-start me-5px mb-5px text-white"
						class:bg-dark={darkMode} 
						class:text-opacity-50={!darkMode} 
						class:bg-gray-500={!darkMode}>
						<i class="fa fa-user"></i>
					</div>
					<div class="widget-icon widget-icon-sm user rounded float-start me-5px mb-5px text-white"
						class:bg-dark={darkMode} 
						class:text-opacity-50={!darkMode} 
						class:bg-gray-500={!darkMode}>
						<i class="fa fa-user"></i>
					</div>
					<div class="widget-icon widget-icon-xs user rounded float-start me-5px mb-5px text-white"
						class:bg-dark={darkMode} 
						class:text-opacity-50={!darkMode} 
						class:bg-gray-500={!darkMode}>
						<i class="fa fa-user"></i>
					</div>
				</div>
			</div>
			
			<div class="col-sm-6">
				<div class="float-start">
					<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-11-thumb.jpg)"
					></div>
					<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-12-thumb.jpg)"
					></div>
					<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-13-thumb.jpg)"
					></div>
					<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-14-thumb.jpg)"
					></div>
					<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-15-thumb.jpg)"
					></div>
					<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-16-thumb.jpg)"
					></div>
					<br />
					<div class="widget-img widget-img-xl rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-21-thumb.jpg)"
					></div>
					<div class="widget-img widget-img-lg rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-22-thumb.jpg)"
					></div>
					<div class="widget-img widget-img rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-23-thumb.jpg)"
					></div>
					<div class="widget-img widget-img-sm rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-24-thumb.jpg)"
					></div>
					<div class="widget-img widget-img-xs rounded bg-dark float-start me-5px mb-5px"
						style="background-image: url(/img/gallery/gallery-25-thumb.jpg)"
					></div>
				</div>
			</div>
		</div>
		
		<div class="mb-10px mt-10px fs-10px">
			<a href="#modal-widget-card" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
			<b class="text-body">WIDGET CARD</b>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<a href="#/" class="widget-card rounded mb-20px">
					<div class="widget-card-cover rounded" style="background-image: url(/img/gallery/gallery-portrait-11-thumb.jpg)"></div>
					<div class="widget-card-content">
						<b class="text-white">Download and get free trial.</b>
					</div>
					<div class="widget-card-content bottom">
						<i class="fab fa-pushed fa-5x text-indigo"></i>
						<h4 class="text-white mt-10px"><b>Apple Draw<br /> Photo Booth</b></h4>
						<h5 class="fs-12px text-white text-opacity-75 mb-0"><b>EASILY DRAW ON PHOTOS</b></h5>
					</div>
				</a>
			</div>
			
			<div class="col-sm-6">
				<a href="#/" class="widget-card rounded mb-20px" data-bs-theme={(darkMode) ? 'dark' : ''}>
					<div class="widget-card-cover rounded"></div>
					<div class="widget-card-content">
						<h5 class="fs-12px text-body"><b>MAKING A DIFFERENCE</b></h5>
						<h4 class="mb-10px text-pink"><b>Apple Heart<br /> Study App</b></h4>
						<i class="fa fa-heartbeat fa-5x text-pink text-opacity-50"></i>
					</div>
					<div class="widget-card-content bottom">
						<b class="text-body">Opt in and help heart research.</b>
					</div>
				</a>
			</div>
		</div>
		
		<div class="mb-10px mt-10px fs-10px">
			<a href="#modal-widget-card-square" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
			<b class="text-body">WIDGET CARD SQUARE</b>
		</div>
		<div class="row">
			<div class="col-xs-6 col-sm-3">
				<div class="row gx-1 mb-1">
					<div class="col-6">
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/login-bg/login-bg-1-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/login-bg/login-bg-2-thumb.jpg)"></div>
						</a>
					</div>
					<div class="col-6">
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/login-bg/login-bg-3-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/login-bg/login-bg-4-thumb.jpg)"></div>
						</a>
					</div>
				</div>
				<div class="fs-12px fw-bold text-body">Camera Roll</div>
				<div class="fs-10px fw-bold text-body text-opacity-50 mb-3">2,711</div>
			</div>
			
			<div class="col-xs-6 col-sm-3">
				<a href="#/" aria-label="Example" class="widget-card rounded square mb-5px">
					<div class="widget-card-cover" style="background-image: url(/img/login-bg/login-bg-7-thumb.jpg)">
						<span class="widget-card-cover-icon"><i class="fa fa-play fa-lg"></i></span>
					</div>
				</a>
				<div class="fs-12px fw-bold text-body pt-2px">Videos</div>
				<div class="fs-10px fw-bold text-body text-opacity-50 mb-3">31</div>
			</div>
			
			<div class="col-xs-6 col-sm-3">
				<a href="#/" class="widget-card rounded square mb-5px">
					<div class="widget-card-cover" style="background-image: url(/img/login-bg/login-bg-10-thumb.jpg)">
						<div class="d-flex h-100 align-items-center justify-content-center">
							<div class="text-center">
								<div class="text-white fs-14px"><b>PORTRAITS OF</b></div>
								<div class="text-white text-opacity-75 fw-bold">2025</div>
							</div>
						</div>
					</div>
				</a>
				<div class="fs-12px fw-bold text-body pt-2px">Memory 2025</div>
				<div class="fs-10px fw-bold text-body text-opacity-50 mb-3">1,239</div>
			</div>
			
			<div class="col-xs-6 col-sm-3">
				<div class="row gx-1 mb-5px">
					<div class="col-3">
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-1-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-2-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-3-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-4-thumb.jpg)"></div>
						</a>
					</div>
					
					<div class="col-3">
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-5-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-6-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-7-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-8-thumb.jpg)"></div>
						</a>
					</div>
					
					<div class="col-3">
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-9-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-10-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-11-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-12-thumb.jpg)"></div>
						</a>
					</div>
					
					<div class="col-3">
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-13-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-14-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-15-thumb.jpg)"></div>
						</a>
						<a href="#/" aria-label="Example" class="widget-card rounded square mb-1">
							<div class="widget-card-cover" style="background-image: url(/img/gallery/gallery-16-thumb.jpg)"></div>
						</a>
					</div>
					<!-- END col-3 -->
				</div>
				<!-- END row -->
				<div class="fs-12px fw-bold text-body">Albums</div>
				<div class="fs-10px fw-bold text-body text-opacity-50 mb-15px">8</div>
			</div>
		</div>
		
		<div class="mb-10px mt-10px fs-10px">
			<a href="#modal-widget-stat" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
			<b class="text-body">WIDGET STAT</b>
		</div>
		<div class="row gx-2 mb-20px">
			<div class="col-lg-4 col-sm-6">
				<div class="widget widget-stats bg-teal mb-7px">
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
			
			<div class="col-lg-4 col-sm-6">
				<div class="widget widget-stats bg-blue mb-7px">
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
			
			<div class="col-lg-4 col-sm-6">
				<div class="widget widget-stats bg-purple mb-7px">
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
			
			<div class="col-lg-4 col-sm-6">
				<div class="widget widget-stats bg-dark mb-7px">
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
			
			<div class="col-lg-4 col-sm-6">
				<div class="widget widget-stats bg-orange mb-7px">
					<div class="stats-icon stats-icon-lg"><i class="fa fa-file-alt fa-fw"></i></div>
					<div class="stats-content">
						<div class="stats-title">PENDING INVOICE</div>
						<div class="stats-number">20</div>
						<div class="stats-progress progress">
							<div class="progress-bar" style="width: 23.5%;"></div>
						</div>
						<div class="stats-desc">More than last week (23.5%)</div>
					</div>
				</div>
			</div>
			
			<div class="col-lg-4 col-sm-6">
				<div class="widget widget-stats bg-pink mb-7px">
					<div class="stats-icon stats-icon-lg"><i class="fa fa-exclamation-triangle fa-fw"></i></div>
					<div class="stats-content">
						<div class="stats-title">ERROR LOG</div>
						<div class="stats-number">5</div>
						<div class="stats-progress progress">
							<div class="progress-bar" style="width: 10.5%;"></div>
						</div>
						<div class="stats-desc">More than last week (10.5%)</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="mb-10px mt-10px fs-10px">
			<a href="#modal-widget-chart" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
			<b class="text-body">WIDGET CHART</b>
		</div>
		<div class="widget rounded mb-4" data-bs-theme={(darkMode) ? 'dark' : ''}>
			<div class="widget-header">
				<h4 class="widget-header-title">Audience Overview</h4>
				<div class="widget-header-icon"><a href="#/" aria-label="Example" class="text-body text-opacity-50"><i class="fa fa-fw fa-upload"></i></a></div>
				<div class="widget-header-icon"><a href="#/" aria-label="Example" class="text-body text-opacity-50"><i class="fa fa-fw fa-cog"></i></a></div>
			</div>
			<div class="row m-0">
				<div class="col widget-chart-content">
					<div style="height: 108%">
						{#if chartData}
							<ApexCharts options={chartData.options}></ApexCharts>
						{/if}
					</div>
				</div>
				<div class="col-lg-4 p-3">
					<div class="widget-chart-info">
						<h4 class="widget-chart-info-title">Total sales</h4>
						<p class="widget-chart-info-desc">Lorem ipsum dolor sit consectetur adipiscing elit.</p>
						<div class="widget-chart-info-progress">
							<b>Monthly Plan</b>
							<span class="float-end">70%</span>
						</div>
						<div class="progress h-10px">
							<div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill" style="width:70%;"></div>
						</div>
					</div>
					<hr />
					<div class="widget-chart-info">
						<h4 class="widget-chart-info-title">Task progress</h4>
						<p class="widget-chart-info-desc">Vestibulum sollicitudin in lectus a cursus.</p>
						<div class="widget-chart-info-progress">
							<b>Marketing Research</b>
							<span class="float-end">74%</span>
						</div>
						<div class="progress h-10px mb-15px">
							<div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-indigo" style="width: 74%"></div>
						</div>
						<div class="widget-chart-info-progress">
							<b>Mobile App Development</b>
							<span class="float-end">25%</span>
						</div>
						<div class="progress h-10px mb-15px">
							<div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-green" style="width: 25%"></div>
						</div>
						<div class="widget-chart-info-progress">
							<b>Website Redesign</b>
							<span class="float-end">95%</span>
						</div>
						<div class="progress h-10px">
							<div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-orange" style="width: 95%"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="mb-10px mt-10px fs-10px">
			<a href="#modal-widget-table" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
			<b class="text-body">WIDGET TABLE</b>
		</div>
		<div class="table-responsive">
			<table class="table table-bordered widget-table rounded" data-bs-theme={(darkMode) ? 'dark' : ''}>
				<thead>
					<tr class="text-nowrap">
						<th width="1%">Image</th>
						<th>Product Info</th>
						<th>Price</th>
						<th>Qty</th>
						<th>Total</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<img src="/img/product/product-6.png" alt="" width="100" />
						</td>
						<td>
							<h5 class="mb-1">Mavic Pro Combo</h5>
							<p class="fs-11px fw-bold text-body text-opacity-50 mb-3">Portable yet powerful, the Mavic Pro is your personal drone, ready to go with you everywhere.</p>
							<div class="progress h-10px rounded-pill mb-5px">
								<div class="progress-bar progress-bar-striped progress-bar-animated bg-orange fs-10px fw-bold" style="width: 30%;">30%</div>
							</div>
							<div class="clearfix fs-10px">
								status: 
								<b class="text-body">Shipped</b>
							</div>
						</td>
						<td class="text-nowrap">
							<b class="text-body">$999</b><br />
							<small><del>$1,202</del></small>
						</td>
						<td>1</td>
						<td>999.00</td>
						<td>
							<a href="#/" class="btn btn-default btn-sm w-80px rounded-pill">Edit</a>
						</td>
					</tr>
					<tr>
						<td>
							<img src="/img/product/product-7.png" alt="" width="100" />
						</td>
						<td>
							<h5 class="mb-1">Inspire 2</h5>
							<p class="fs-11px fw-bold text-body text-opacity-50 mb-3">Cinematic aerial performance for filmmakers.</p>
							<div class="progress h-10px rounded-pill mb-5px">
								<div class="progress-bar progress-bar-striped progress-bar-animated bg-success fs-10px fw-bold" style="width: 100%;">100%</div>
							</div>
							<div class="clearfix fs-10px">
								status: 
								<b class="text-body">received</b>
							</div>
						</td>
						<td class="text-nowrap">
							<b class="text-body">$999</b><br />
							<small><del>$1,202</del></small>
						</td>
						<td>1</td>
						<td>999.00</td>
						<td>
							<a href="#/" class="btn btn-default btn-sm w-80px rounded-pill">Edit</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>


<!-- BEGIN #modal-widget-todolist -->
<div class="modal fade" id="modal-widget-map">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget Map</h4>
				<a href="#/" data-bs-dismiss="modal" class="btn-close" aria-label="Example">&nbsp;</a>
			</div>
			{#if codeArray[1]}
				<HighlightJs code={codeArray[1]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" aria-label="Example" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-map -->

<!-- BEGIN #modal-widget-todolist -->
<div class="modal fade" id="modal-widget-todolist">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget Todolist</h4>
				<a href="#/" data-bs-dismiss="modal" aria-label="Example" class="btn-close">&nbsp;</a>
			</div>
			
			{#if codeArray[2]}
				<HighlightJs code={codeArray[2]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-todolist -->

<!-- BEGIN #modal-widget-chat-input -->
<div class="modal fade" id="modal-widget-chat-input">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget Chat & Input</h4>
				<a href="#/" data-bs-dismiss="modal" aria-label="Example" class="btn-close">&nbsp;</a>
			</div>
			{#if codeArray[3]}
				<HighlightJs code={codeArray[3]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-chat-input -->

<!-- BEGIN #modal-widget-list -->
<div class="modal fade" id="modal-widget-list">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget List</h4>
				<a href="#/" data-bs-dismiss="modal" aria-label="Example" class="btn-close">&nbsp;</a>
			</div>
			{#if codeArray[4]}
				<HighlightJs code={codeArray[4]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-list -->

<!-- BEGIN #modal-widget-list-with-icon -->
<div class="modal fade" id="modal-widget-list-with-icon">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget List with Icon</h4>
				<a href="#/" data-bs-dismiss="modal" class="btn-close" aria-label="Example">&nbsp;</a>
			</div>
			{#if codeArray[5]}
				<HighlightJs code={codeArray[5]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-list -->

<!-- BEGIN #modal-widget-img-icon -->
<div class="modal fade" id="modal-widget-img-icon">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget Image / Icon</h4>
				<a href="#/" data-bs-dismiss="modal" class="btn-close" aria-label="Example">&nbsp;</a>
			</div>
			{#if codeArray[6]}
				<HighlightJs code={codeArray[6]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-img-icon -->

<!-- BEGIN #modal-widget-card -->
<div class="modal fade" id="modal-widget-card">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget List Card</h4>
				<a href="#/" data-bs-dismiss="modal" class="btn-close" aria-label="Example">&nbsp;</a>
			</div>
			{#if codeArray[7]}
				<HighlightJs code={codeArray[7]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-card -->

<!-- BEGIN #modal-widget-card-square -->
<div class="modal fade" id="modal-widget-card-square">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget List Card Square</h4>
				<a href="#/" data-bs-dismiss="modal" class="btn-close" aria-label="Example">&nbsp;</a>
			</div>
			{#if codeArray[8]}
				<HighlightJs code={codeArray[8]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-card-square -->

<!-- BEGIN #modal-widget-stat -->
<div class="modal fade" id="modal-widget-stat">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget Stat</h4>
				<a href="#/" data-bs-dismiss="modal" class="btn-close" aria-label="Example">&nbsp;</a>
			</div>
			{#if codeArray[9]}
				<HighlightJs code={codeArray[9]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-stat -->

<!-- BEGIN #modal-widget-chart -->
<div class="modal fade" id="modal-widget-chart">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget Chart</h4>
				<a href="#/" data-bs-dismiss="modal" class="btn-close" aria-label="Example">&nbsp;</a>
			</div>
			{#if codeArray[10]}
				<HighlightJs code={codeArray[10]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-chart -->

<!-- BEGIN #modal-widget-table -->
<div class="modal fade" id="modal-widget-table">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Widget Table</h4>
				<a href="#/" data-bs-dismiss="modal" class="btn-close" aria-label="Example">&nbsp;</a>
			</div>
			{#if codeArray[11]}
				<HighlightJs code={codeArray[11]} />
			{/if}
			<div class="modal-footer">
				<a href="#/" data-bs-dismiss="modal" class="btn btn-default">Close</a>
			</div>
		</div>
	</div>
</div>
<!-- END #modal-widget-table -->