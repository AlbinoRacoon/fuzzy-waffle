<script>
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
	import ChartJs from '/src/components/plugins/ChartJs.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appVariables } from '/src/stores/appVariables.js';
	
	let codeArray = [];
	let chartArray = [];
	let unsubscribe;
	
	function getChart1Data(appVariables) {
		return {
			type: 'line',
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				datasets: [{
					color: appVariables.color.appTheme,
					backgroundColor: 'rgba('+ appVariables.color.appThemeRgb +', .2)',
					borderColor: appVariables.color.appTheme,
					borderWidth: 1.5,
					pointBackgroundColor: appVariables.color.appTheme,
					pointBorderWidth: 1.5,
					pointRadius: 4,
					pointHoverBackgroundColor: appVariables.color.appTheme,
					pointHoverBorderColor: appVariables.color.appTheme,
					pointHoverRadius: 7,
					label: 'Total Sales',
					data: [12, 19, 4, 5, 2, 3]
				}]
			}
		};
	}
	
	function getChart2Data(appVariables) {
		return {
			type: 'bar',
			data: {
				labels: ['Jan','Feb','Mar','Apr','May','Jun'],
				datasets: [{
					label: 'Total Visitors',
					data: [37,31,36,34,43,31],
					backgroundColor: 'rgba('+ appVariables.color.appThemeRgb +', .5)',
					borderColor: appVariables.color.appTheme,
					borderWidth: 1.5
				},{
					label: 'New Visitors',
					data: [12,16,20,14,23,21],
					backgroundColor: 'rgba('+ appVariables.color.inverseRgb +', .2)' +', .5)',
					borderColor: 'rgba('+ appVariables.color.inverseRgb +', .65)',
					borderWidth: 1.5
				}]
			}
		};
	}
		
	function getChart3Data(appVariables) {
		return {
			type: 'radar',
			data: {
				labels: ['United States', 'Canada', 'Australia', 'Netherlands', 'Germany', 'New Zealand', 'Singapore'],
				datasets: [
					{
						label: 'Mobile',
						backgroundColor: 'rgba('+ appVariables.color.appThemeRgb +', .2)',
						borderColor: appVariables.color.appTheme,
						pointBackgroundColor: appVariables.color.appTheme,
						pointBorderColor: appVariables.color.appTheme,
						pointHoverBackgroundColor: appVariables.color.appTheme,
						pointHoverBorderColor: appVariables.color.appTheme,
						data: [65, 59, 90, 81, 56, 55, 40],
						borderWidth: 1.5
					},
					{
						label: 'Desktop',
						backgroundColor: 'rgba('+ appVariables.color.gray500Rgb +', .2)',
						borderColor: appVariables.color.gray500,
						pointBackgroundColor: appVariables.color.gray500,
						pointBorderColor: appVariables.color.gray500,
						pointHoverBackgroundColor: appVariables.color.gray500,
						pointHoverBorderColor: appVariables.color.gray500,
						data: [28, 48, 40, 19, 96, 27, 100],
						borderWidth: 1.5
					}
				]
			}
		};
	}
		
	function getChart4Data(appVariables) {
		return {
			type: 'polarArea',
			data: {
				datasets: [{
					data: [11, 16, 7, 3, 14],
					backgroundColor: ['rgba('+ appVariables.color.appThemeRgb +', .5)', 'rgba('+ appVariables.color.inverseRgb +', .2)' +', .5)', 'rgba('+ appVariables.color.gray300Rgb +', .5)', 'rgba('+ appVariables.color.gray500Rgb +', .5)', 'rgba('+ appVariables.color.gray800Rgb +', .5)'],
					borderWidth: 0
				}],
				labels: ['IE', 'Safari', 'Chrome', 'Firefox', 'Opera']
			}
		};
	}
		
	function getChart5Data(appVariables) {
		return {
			type: 'pie',
			data: {
				labels: ['Total Visitor', 'New Visitor', 'Returning Visitor'],
				datasets: [{
					data: [300, 50, 100],
					backgroundColor: ['rgba('+ appVariables.color.appThemeRgb +', .5)', 'rgba('+ appVariables.color.inverseRgb +', .2)' +', .5)', 'rgba('+ appVariables.color.appThemeRgb +', .5)'],
					hoverBackgroundColor: ['rgba('+ appVariables.color.appThemeRgb +', 1)', 'rgba('+ appVariables.color.inverseRgb +', 1)', 'rgba('+ appVariables.color.gray900Rgb +', 1)'],
					borderWidth: 0
				}]
			}
		};
	}
		
	function getChart6Data(appVariables) {
		return {
			type: 'doughnut',
			data: {
				labels: ['Total Visitor', 'New Visitor', 'Returning Visitor'],
				datasets: [{
					data: [300, 50, 100],
					backgroundColor: ['rgba('+ appVariables.color.appThemeRgb +', .5)', 'rgba('+ appVariables.color.inverseRgb +', .2)' +', .5)', 'rgba('+ appVariables.color.appThemeRgb +', .5)'],
					hoverBackgroundColor: [appVariables.color.appTheme, appVariables.color.inverse, appVariables.color.gray900],
					borderWidth: 0
				}]
			}
		};
	}
	
  onMount(async () => {
    setPageTitle('Chart.js');
    
		for (var i = 1; i < 7; i++) {
			let response = await fetch('/data/chart/chartjs-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
		
		unsubscribe = appVariables.subscribe(value => {
    	if (value.color) {
    		chartArray[1] = getChart1Data(value);
    		chartArray[2] = getChart2Data(value);
    		chartArray[3] = getChart3Data(value);
    		chartArray[4] = getChart4Data(value);
    		chartArray[5] = getChart5Data(value);
    		chartArray[6] = getChart6Data(value);
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
	<li class="breadcrumb-item"><a href="#/">Chart</a></li>
	<li class="breadcrumb-item active">Chart JS</li>
</ol>
<h1 class="page-header">Chart JS <small>header small text goes here...</small></h1>
<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Line Chart</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>
					A line chart is a way of plotting data points on a line.
					Often, it is used to show trend data, and the comparison of two data sets.
				</p>
				<div>
					{#if chartArray[1]}
						<ChartJs type={chartArray[1].type} data={chartArray[1].data}></ChartJs>
					{/if}
				</div>
			</PanelBody>
			{#if codeArray[1]}
				<HighlightJs code={codeArray[1]} />
			{/if}
		</Panel>
	</div>
	
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Bar Chart</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>
					A bar chart is a way of showing data as bars.
					It is sometimes used to show trend data, and the comparison of multiple data sets side by side.
				</p>
				<div>
					{#if chartArray[2]}
						<ChartJs type={chartArray[2].type} data={chartArray[2].data}></ChartJs>
					{/if}
				</div>
			</PanelBody>
			{#if codeArray[2]}
				<HighlightJs code={codeArray[2]} />
			{/if}
		</Panel>
	</div>
</div>

<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Radar Chart</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>
					A radar chart is a way of showing multiple data points and the variation between them.
					They are often useful for comparing the points of two or more different data sets.
				</p>
				<div>
					{#if chartArray[3]}
						<ChartJs type={chartArray[3].type} data={chartArray[3].data}></ChartJs>
					{/if}
				</div>
			</PanelBody>
			{#if codeArray[3]}
				<HighlightJs code={codeArray[3]} />
			{/if}
		</Panel>
	</div>
	
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Polar Area Chart</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>
					Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment 
					differs depending on the value.
				</p>
				<div class="w-75 mx-auto">
					{#if chartArray[4]}
						<ChartJs type={chartArray[4].type} data={chartArray[4].data}></ChartJs>
					{/if}
				</div>
			</PanelBody>
			{#if codeArray[4]}
				<HighlightJs code={codeArray[4]} />
			{/if}
		</Panel>
	</div>
</div>

<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Pie Chart</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>
					Pie and doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.
				</p>
				<div class="w-75 mx-auto">
					{#if chartArray[5]}
						<ChartJs type={chartArray[5].type} data={chartArray[5].data}></ChartJs>
					{/if}
				</div>
			</PanelBody>
			{#if codeArray[5]}
				<HighlightJs code={codeArray[5]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Doughnut Chart</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>
					Pie and doughnut charts are registered under two aliases in the Chart core. Other than their different default value, and different alias, they are exactly the same.
				</p>
				<div class="w-75 mx-auto">
					{#if chartArray[6]}
						<ChartJs type={chartArray[6].type} data={chartArray[6].data}></ChartJs>
					{/if}
				</div>
			</PanelBody>
			{#if codeArray[6]}
				<HighlightJs code={codeArray[6]} />
			{/if}
		</Panel>
	</div>
</div>