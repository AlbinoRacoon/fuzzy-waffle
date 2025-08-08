<script>
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
    setPageTitle('Buttons');
		
		for (var i = 1; i < 9; i++) {
			let response = await fetch('/data/ui/buttons-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
  });
</script>



<!-- BEGIN breadcrumb -->
<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">UI Elements</a></li>
	<li class="breadcrumb-item active">Buttons</li>
</ol>
<h1 class="page-header">Buttons <small>header small text goes here...</small></h1>

<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Buttons <span class="badge bg-success ms-1">NEW</span></PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="d-flex flex-wrap">
					<button type="button" class="btn btn-white me-1 mb-1">White</button>
					<button type="button" class="btn btn-default me-1 mb-1">Default</button>
					<button type="button" class="btn btn-gray me-1 mb-1">Gray</button>
					<button type="button" class="btn btn-purple me-1 mb-1">Purple</button>
					<button type="button" class="btn btn-indigo me-1 mb-1">Indigo</button>
					<button type="button" class="btn btn-primary me-1 mb-1">Primary</button>
					<button type="button" class="btn btn-info me-1 mb-1">Info</button>
					<button type="button" class="btn btn-yellow me-1 mb-1">Yellow</button>
					<button type="button" class="btn btn-warning me-1 mb-1">Warning</button>
					<button type="button" class="btn btn-pink me-1 mb-1">Pink</button>
					<button type="button" class="btn btn-danger me-1 mb-1">Danger</button>
					<button type="button" class="btn btn-success me-1 mb-1">Success</button>
					<button type="button" class="btn btn-green me-1 mb-1">Green</button>
					<button type="button" class="btn btn-lime me-1 mb-1">Lime</button>
					<button type="button" class="btn btn-dark me-1 mb-1">Dark</button>
					<button type="button" class="btn btn-link">Link</button>
				</div>
				<hr />
				<div class="d-flex flex-wrap">
					<button type="button" class="btn btn-outline-primary me-1 mb-1">Outline Primary</button>
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
				<PanelTitle>Button Dropdowns</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="btn-group me-1 mb-1">
					<a href="#/" class="btn btn-default">Dropdown</a>
					<a href="#/" data-bs-toggle="dropdown" class="btn btn-default dropdown-toggle" aria-label="Example"><i class="fa fa-caret-down"></i></a>
					<div class="dropdown-menu dropdown-menu-end">
						<a href="#/" class="dropdown-item">Action 1</a>
						<a href="#/" class="dropdown-item">Action 2</a>
						<a href="#/" class="dropdown-item">Action 3</a>
						<div class="dropdown-divider"></div>
						<a href="#/" class="dropdown-item">Action 4</a>
					</div>
				</div>
				<div class="btn-group dropup me-1 mb-1">
					<a href="#/" class="btn btn-primary">Dropup</a>
					<a href="#/" data-bs-toggle="dropdown" class="btn btn-primary dropdown-toggle" aria-label="Example"><i class="fa fa-caret-up"></i></a>
					<div class="dropdown-menu">
						<a href="#/" class="dropdown-item">Action 1</a>
						<a href="#/" class="dropdown-item">Action 2</a>
						<a href="#/" class="dropdown-item">Action 3</a>
						<div class="dropdown-divider"></div>
						<a href="#/" class="dropdown-item">Action 4</a>
					</div>
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
				<PanelTitle>Button Sizes</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<a href="#/" class="btn btn-primary btn-lg me-1 mb-1">Large Button</a>
				<a href="#/" class="btn btn-primary me-1 mb-1">Default Button</a>
				<a href="#/" class="btn btn-default btn-sm me-1 mb-1">Small Button</a>
				<a href="#/" class="btn btn-default btn-xs me-1 mb-1">Extra Small</a>
			</PanelBody>
			{#if codeArray[3]}
				<HighlightJs code={codeArray[3]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Button State</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="row">
					<div class="col-md-6">
						<a href="#/" class="btn btn-default disabled me-1 mb-1">Disabled Button</a>
						<a href="#/" class="btn btn-default active me-1 mb-1">Active Button</a>
					</div>
					<div class="col-md-6">
						<a href="#/" class="btn btn-primary d-block">Block Button</a>
					</div>
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
				<PanelTitle>Button with Icon</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="row text-center">
					<div class="col-md-6">
						<div class="mb-2">
							<a href="#/" class="btn btn-lg btn-primary">
								<span class="d-flex align-items-center text-start">
									<i class="fab fa-twitter fa-3x me-3 text-black"></i>
									<span>
										<span class="d-block"><b>Twitter Bootstrap</b></span>
										<span class="d-block fs-12px opacity-7">Version 5.0</span>
									</span>
								</span>
							</a>
						</div>
					</div>
					<div class="col-md-6">
						<p>
							<a href="#/" class="btn btn-default me-5px"><i class="fa fa-comment"></i> Comment</a>
							<a href="#/" class="btn btn-default me-5px"><i class="fa fa-cogs"></i> Setting</a>
							<a href="#/" class="btn btn-default" aria-label="Example"><i class="fa fa-cog"></i></a>
						</p>
						<p>
							<a href="#/" class="btn btn-default d-block"><i class="fa fa-list"></i> Button block with icon</a>
						</p>
					</div>
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
				<PanelTitle>Button Groups & Toolbars</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="row">
					<div class="col-md-6">
						<div class="btn-group">
							<button class="btn btn-white">Left</button>
							<button class="btn btn-white active">Middle</button>
							<button class="btn btn-white">Right</button>
						</div>
						<p></p>
						<div class="btn-group">
							<a class="btn btn-white" href="#/" aria-label="Example"><i class="fa fa-align-left"></i></a>
							<a class="btn btn-white active" href="#/" aria-label="Example"><i class="fa fa-align-center"></i></a>
							<a class="btn btn-white" href="#/" aria-label="Example"><i class="fa fa-align-right"></i></a>
							<a class="btn btn-white" href="#/" aria-label="Example"><i class="fa fa-align-justify"></i></a>
						</div>
						<p></p>
					</div>
					<div class="col-md-6">
						<div class="btn-group">
							<button type="button" class="btn btn-white">1</button>
							<button type="button" class="btn btn-white active">2</button>
							<button type="button" class="btn btn-white">3</button>
						</div>
						<div class="btn-group">
							<button type="button" class="btn btn-white">4</button>
							<button type="button" class="btn btn-white">5</button>
							<button type="button" class="btn btn-white">6</button>
						</div>
						<div class="btn-group">
							<button type="button" class="btn btn-white">7</button>
						</div>
						<p></p>
						<div class="btn-group">
							<a class="btn btn-dark" href="#/" aria-label="Example"><i class="fa fa-backward"></i></a>
							<a class="btn btn-dark" href="#/" aria-label="Example"><i class="fa fa-fast-backward"></i></a>
							<a class="btn btn-dark" href="#/" aria-label="Example"><i class="fa fa-pause"></i></a>
							<a class="btn btn-dark active" href="#/" aria-label="Example"><i class="fa fa-play"></i></a>
							<a class="btn btn-dark" href="#/" aria-label="Example"><i class="fa fa-forward"></i></a>
							<a class="btn btn-dark" href="#/" aria-label="Example"><i class="fa fa-fast-forward"></i></a>
						</div>
					</div>
				</div>
			</PanelBody>
			{#if codeArray[6]}
				<HighlightJs code={codeArray[6]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Button Group Vertical & Justified</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="row">
					<div class="col-md-4">
						<div class="btn-group-vertical me-5px">
							<button type="button" class="btn btn-indigo"><i class="fa fa-cog"></i> Button</button>
							<button type="button" class="btn btn-indigo active"><i class="fa fa-cog"></i> Button</button>
							<button type="button" class="btn btn-indigo"><i class="fa fa-cog"></i> Button</button>
						</div>
					</div>
					<div class="col-md-8">
						<div class="btn-group w-100">
							<button type="button" class="btn btn-outline-inverse">Left</button>
							<button type="button" class="btn btn-outline-inverse active">Middle</button>
							<button type="button" class="btn btn-outline-inverse">Right</button>
						</div>
					</div>
				</div>
			</PanelBody>
			{#if codeArray[7]}
				<HighlightJs code={codeArray[7]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Button Icon & Sizes</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="row">
					<div class="col-md-8">
						<p>
							<a href="#/" class="btn btn-default btn-icon btn-circle btn-lg" aria-label="Example"><i class="fa fa-expand"></i></a>
							<a href="#/" class="btn btn-success btn-icon btn-circle btn-lg" aria-label="Example"><i class="fa fa-redo"></i></a>
							<a href="#/" class="btn btn-warning btn-icon btn-circle btn-lg" aria-label="Example"><i class="fa fa-minus"></i></a>
							<a href="#/" class="btn btn-danger btn-icon btn-circle btn-lg" aria-label="Example"><i class="fa fa-times"></i></a>
							<a href="#/" class="btn btn-primary btn-icon btn-circle btn-lg" aria-label="Example"><i class="fab fa-facebook-f"></i></a>
							<a href="#/" class="btn btn-info btn-icon btn-circle btn-lg" aria-label="Example"><i class="fab fa-twitter"></i></a>
							<a href="#/" class="btn btn-dark btn-icon btn-circle btn-lg" aria-label="Example"><i class="fab fa-stack-overflow"></i></a>
						</p>
						<p>
							<a href="#/" class="btn btn-default btn-icon btn-circle" aria-label="Example"><i class="fa fa-expand"></i></a>
							<a href="#/" class="btn btn-success btn-icon btn-circle" aria-label="Example"><i class="fa fa-redo"></i></a>
							<a href="#/" class="btn btn-warning btn-icon btn-circle" aria-label="Example"><i class="fa fa-minus"></i></a>
							<a href="#/" class="btn btn-danger btn-icon btn-circle" aria-label="Example"><i class="fa fa-times"></i></a>
							<a href="#/" class="btn btn-primary btn-icon btn-circle" aria-label="Example"><i class="fab fa-facebook-f"></i></a>
							<a href="#/" class="btn btn-info btn-icon btn-circle" aria-label="Example"><i class="fab fa-twitter"></i></a>
							<a href="#/" class="btn btn-dark btn-icon btn-circle" aria-label="Example"><i class="fab fa-stack-overflow"></i></a>
						</p>
						<p>
							<a href="#/" class="btn btn-default btn-icon btn-circle btn-sm" aria-label="Example"><i class="fa fa-expand"></i></a>
							<a href="#/" class="btn btn-success btn-icon btn-circle btn-sm" aria-label="Example"><i class="fa fa-redo"></i></a>
							<a href="#/" class="btn btn-warning btn-icon btn-circle btn-sm" aria-label="Example"><i class="fa fa-minus"></i></a>
							<a href="#/" class="btn btn-danger btn-icon btn-circle btn-sm" aria-label="Example"><i class="fa fa-times"></i></a>
							<a href="#/" class="btn btn-primary btn-icon btn-circle btn-sm" aria-label="Example"><i class="fab fa-facebook-f"></i></a>
							<a href="#/" class="btn btn-info btn-icon btn-circle btn-sm" aria-label="Example"><i class="fab fa-twitter"></i></a>
							<a href="#/" class="btn btn-dark btn-icon btn-circle btn-sm" aria-label="Example"><i class="fab fa-stack-overflow"></i></a>
						</p>
						<p>
							<a href="#/" class="btn btn-default btn-icon btn-circle btn-xs" aria-label="Example"><i class="fa fa-expand"></i></a>
							<a href="#/" class="btn btn-success btn-icon btn-circle btn-xs" aria-label="Example"><i class="fa fa-redo"></i></a>
							<a href="#/" class="btn btn-warning btn-icon btn-circle btn-xs" aria-label="Example"><i class="fa fa-minus"></i></a>
							<a href="#/" class="btn btn-danger btn-icon btn-circle btn-xs" aria-label="Example"><i class="fa fa-times"></i></a>
							<a href="#/" class="btn btn-primary btn-icon btn-circle btn-xs" aria-label="Example"><i class="fab fa-facebook-f"></i></a>
							<a href="#/" class="btn btn-info btn-icon btn-circle btn-xs" aria-label="Example"><i class="fab fa-twitter"></i></a>
							<a href="#/" class="btn btn-dark btn-icon btn-circle btn-xs" aria-label="Example"><i class="fab fa-stack-overflow"></i></a>
						</p>
					</div>
				</div>
			</PanelBody>
			{#if codeArray[8]}
				<HighlightJs code={codeArray[8]} />
			{/if}
		</Panel>
	</div>
</div>
		