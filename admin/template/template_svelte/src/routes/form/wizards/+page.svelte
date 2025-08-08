<script>
	import Card from '/src/components/bootstrap/Card.svelte';
	import CardBody from '/src/components/bootstrap/CardBody.svelte';
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
  
  let codeArray = [];
  
  onMount(async () => {
    setPageTitle('Form Wizards');
    
		for (var i = 1; i < 4; i++) {
			let response = await fetch('/data/form/wizard-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Form Stuff</a></li>
	<li class="breadcrumb-item active">Wizards</li>
</ol>
<h1 class="page-header">Wizards <small>header small text goes here...</small></h1>


<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Wizard layout 1</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
		
				<div class="nav-wizards-container">
					<nav class="nav nav-wizards-1 mb-2">
						<div class="nav-item col">
							<a class="nav-link completed" href="#/">
								<div class="nav-no">1</div>
								<div class="nav-text">Completed step</div>
							</a>
						</div>
						<div class="nav-item col">
							<a class="nav-link completed" href="#/">
								<div class="nav-no">2</div>
								<div class="nav-text">Second step</div>
							</a>
						</div>
						<div class="nav-item col">
							<a class="nav-link active" href="#/">
								<div class="nav-no">3</div>
								<div class="nav-text">Active step</div>
							</a>
						</div>
						<div class="nav-item col">
							<a class="nav-link disabled" href="#/">
								<div class="nav-no">4</div>
								<div class="nav-text">Disabled step</div>
							</a>
						</div>
						<div class="nav-item col">
							<a class="nav-link disabled" href="#/">
								<div class="nav-no">5</div>
								<div class="nav-text">Last step</div>
							</a>
						</div>
					</nav>
				</div>
				<Card>
					<CardBody>
						wizard content here
					</CardBody>
				</Card>
			</PanelBody>
			{#if codeArray[1]}
				<HighlightJs code={codeArray[1]} />
			{/if}
		</Panel>
	</div>
	<!-- END col-6 -->
	
	<!-- BEGIN col-6 -->
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Wizard layout 2</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
				
				<div class="nav-wizards-container">
					<nav class="nav nav-wizards-2 mb-3">
						<div class="nav-item col">
							<a class="nav-link completed" href="#/">
								<div class="nav-text">1. Completed step</div>
							</a>
						</div>
						<div class="nav-item col">
							<a class="nav-link active" href="#/">
								<div class="nav-text">2. Active step text</div>
							</a>
						</div>
						<div class="nav-item col">
							<a class="nav-link disabled" href="#/">
								<div class="nav-text">3. Disabled step text</div>
							</a>
						</div>
					</nav>
				</div>
				<Card>
					<CardBody>
						wizard content here
					</CardBody>
				</Card>
			</PanelBody>
			{#if codeArray[2]}
				<HighlightJs code={codeArray[2]} />
			{/if}
		</Panel>
	</div>
	<!-- END col-6 -->
	
	<!-- BEGIN col-6 -->
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Wizard layout 3</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
			
				<div class="nav-wizards-container">
					<nav class="nav nav-wizards-3 mb-2">
						<div class="nav-item col">
							<a class="nav-link completed" href="#/">
								<div class="nav-dot"></div>
								<div class="nav-title">Step 1</div>
								<div class="nav-text">Completed step</div>
							</a>
						</div>
						<div class="nav-item col">
							<a class="nav-link completed" href="#/">
								<div class="nav-dot"></div>
								<div class="nav-title">Step 2</div>
								<div class="nav-text">Second step</div>
							</a>
						</div>
						<div class="nav-item col">
							<a class="nav-link active" href="#/">
								<div class="nav-dot"></div>
								<div class="nav-title">Step 3</div>
								<div class="nav-text">Active step</div>
							</a>
						</div>
						<div class="nav-item col">
							<a class="nav-link disabled" href="#/">
								<div class="nav-dot"></div>
								<div class="nav-title">Step 4</div>
								<div class="nav-text">Disabled step</div>
							</a>
						</div>
						<div class="nav-item col">
							<a class="nav-link disabled" href="#/">
								<div class="nav-dot"></div>
								<div class="nav-title">Step 5</div>
								<div class="nav-text">Last step</div>
							</a>
						</div>
					</nav>
				</div>
				<Card>
					<CardBody>
						wizard content here
					</CardBody>
				</Card>
			</PanelBody>
			{#if codeArray[3]}
				<HighlightJs code={codeArray[3]} />
			{/if}
		</Panel>
	</div>
</div>

						
							