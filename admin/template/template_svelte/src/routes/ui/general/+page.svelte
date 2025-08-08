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
    setPageTitle('General UI Elements');
		
		for (var i = 1; i < 7; i++) {
			let response = await fetch('/data/ui/general-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">UI Elements</a></li>
	<li class="breadcrumb-item active">General</li>
</ol>
<h1 class="page-header">General UI Elements <small>header small text goes here...</small></h1>

<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Alerts</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="alert alert-success alert-dismissible fade show mb-0">
					<strong>Success!</strong>
					This is a success alert with <a href="#/" class="alert-link">an example link</a>.
					<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
				</div>
			</PanelBody>
			{#if codeArray[1]}
				<HighlightJs code={codeArray[1]} />
			{/if}
		</Panel>
							
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Alerts Color <span class="badge bg-success ms-1">NEW</span></PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="row gx-2">
					<div class="col-md-4 pb-2">
						<div class="alert alert-primary alert-dismissible fade show h-100 mb-0">
							Primary alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-info alert-dismissible fade show h-100 mb-0">
							Info alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-purple alert-dismissible fade show h-100 mb-0">
							Purple alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-indigo alert-dismissible fade show h-100 mb-0">
							Indigo alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-success alert-dismissible fade show h-100 mb-0">
							Success alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-green alert-dismissible fade show h-100 mb-0">
							Green alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-lime alert-dismissible fade show h-100 mb-0">
							Lime alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-warning alert-dismissible fade show h-100 mb-0">
							Warning alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-yellow alert-dismissible fade show h-100 mb-0">
							Yellow alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-danger alert-dismissible fade show h-100 mb-0">
							Danger alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-pink alert-dismissible fade show h-100 mb-0">
							Pink alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-dark alert-dismissible fade show h-100 mb-0">
							Dark alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-secondary alert-dismissible fade show h-100 mb-0">
							Secondary alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
					<div class="col-md-4 pb-2">
						<div class="alert alert-light alert-dismissible fade show h-100 mb-0">
							Light alert with <a href="#/" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Example"></button>
						</div>
					</div>
				</div>
			</PanelBody>
			{#if codeArray[2]}
				<HighlightJs code={codeArray[2]} />
			{/if}
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Notes</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="note alert-primary mb-2">
					<div class="note-icon"><i class="fab fa-facebook-f"></i></div>
					<div class="note-content">
						<h4><b>Note with icon!</b></h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Maecenas id gravida libero. Etiam semper id sem a ultricies.
						</p>
					</div>
				</div>
				<div class="note alert-warning note-with-end-icon mb-2">
					<div class="note-content text-end">
						<h4><b>Note with end icon!</b></h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Maecenas id gravida libero. Etiam semper id sem a ultricies.
						</p>
					</div>
					<div class="note-icon"><i class="fa fa-lightbulb"></i></div>
				</div>
				<div class="note alert-gray-500 mb-0">
					<div class="note-content">
						<h4><b>Note without icon!</b></h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Maecenas id gravida libero. Etiam semper id sem a ultricies.
						</p>
					</div>
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
				<PanelTitle>Badges <span class="badge bg-success ms-1">NEW</span></PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="row fs-14px">
					<div class="col-md-8">
						<div class="mb-3px">
							<span class="badge bg-danger">Danger</span>
							<span class="badge bg-warning">Warning</span>
							<span class="badge bg-yellow text-black">Yellow</span>
							<span class="badge bg-lime">Lime</span>
							<span class="badge bg-green">Green</span>
							<span class="badge bg-success">Success</span>
						</div>
						<div class="mb-3px">
							<span class="badge bg-primary">Primary</span>
							<span class="badge bg-info">Info</span>
							<span class="badge bg-purple">Purple</span>
							<span class="badge bg-indigo">Indigo</span>
							<span class="badge bg-dark">Dark</span>
						</div>
						<div class="">
							<span class="badge bg-pink">Pink</span>
							<span class="badge bg-secondary">Secondary</span>
							<span class="badge bg-default text-gray-900">Default</span>
							<span class="badge bg-light text-dark">Light</span>
						</div>
					</div>
					<div class="col-md-4">
						<div class="mb-3px">
							<span class="badge bg-dark rounded-pill">Badge pill</span>
						</div>
						<div>
							<span class="badge bg-secondary rounded-0">Badge square</span>
						</div>
					</div>
				</div>
			</PanelBody>
			{#if codeArray[4]}
				<HighlightJs code={codeArray[4]} />
			{/if}
		</Panel>
							
		<Panel class="panel-inverse" data-sortable-id="ui-general-5">
			<PanelHeader>
				<PanelTitle>Pagination</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div>
					<div class="pagination pagination-lg mb-2">
						<div class="page-item disabled"><a href="#/" class="page-link">«</a></div>
						<div class="page-item active"><a href="#/" class="page-link">1</a></div>
						<div class="page-item"><a href="#/" class="page-link">2</a></div>
						<div class="page-item"><a href="#/" class="page-link">3</a></div>
						<div class="page-item"><a href="#/" class="page-link">4</a></div>
						<div class="page-item"><a href="#/" class="page-link">5</a></div>
						<div class="page-item"><a href="#/" class="page-link">»</a></div>
					</div>
				</div>
				<div>
					<ul class="pagination mb-2">
						<div class="page-item disabled"><a href="#/" class="page-link">«</a></div>
						<div class="page-item active"><a href="#/" class="page-link">1</a></div>
						<div class="page-item"><a href="#/" class="page-link">2</a></div>
						<div class="page-item"><a href="#/" class="page-link">3</a></div>
						<div class="page-item"><a href="#/" class="page-link">4</a></div>
						<div class="page-item"><a href="#/" class="page-link">5</a></div>
						<div class="page-item"><a href="#/" class="page-link">»</a></div>
					</ul>
				</div>
				<div>
					<div class="pagination pagination-sm mb-3">
						<div class="page-item disabled"><a href="#/" class="page-link">«</a></div>
						<div class="page-item active"><a href="#/" class="page-link">1</a></div>
						<div class="page-item"><a href="#/" class="page-link">2</a></div>
						<div class="page-item"><a href="#/" class="page-link">3</a></div>
						<div class="page-item"><a href="#/" class="page-link">4</a></div>
						<div class="page-item"><a href="#/" class="page-link">5</a></div>
						<div class="page-item"><a href="#/" class="page-link">»</a></div>
					</div>
				</div>
				<div class="pagination mb-2">
					<div class="page-item ms-auto"><a href="#/" class="page-link rounded-pill px-3">Previous</a></div>
					<div class="page-item me-auto"><a href="#/" class="page-link rounded-pill px-3">Next</a></div>
				</div>
				<div class="pagination">
					<div class="page-item disabled"><a href="#/" class="page-link rounded-pill px-3">&larr; Older</a></div>
					<div class="page-item ms-auto"><a href="#/" class="page-link rounded-pill px-3">Newer &rarr;</a></div>
				</div>
			</PanelBody>
			{#if codeArray[5]}
				<HighlightJs code={codeArray[5]} />
			{/if}
		</Panel>
							
		<Panel class="panel-inverse" data-sortable-id="ui-general-6">
			<PanelHeader>
				<PanelTitle>Progress bar</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="row">
					<div class="col-md-6 mb-3 mb-md-0">
						<div class="progress mb-2">
							<div class="progress-bar fs-10px fw-bold" style="width: 80%">Basic</div>
						</div>
						<div class="progress">
							<div class="progress-bar bg-warning progress-bar-striped fs-10px fw-bold" style="width: 80%">Striped</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="progress rounded-pill mb-2">
							<div class="progress-bar bg-indigo progress-bar-striped progress-bar-animated rounded-pill fs-10px fw-bold" style="width: 80%">Animated</div>
						</div>
						<div class="progress rounded-pill">
							<div class="progress-bar bg-dark fs-10px fw-bold" style="width: 25%">Stacked</div>
							<div class="progress-bar bg-grey fs-10px fw-bold" style="width: 25%">Stacked</div>
							<div class="progress-bar bg-lime fs-10px fw-bold" style="width: 25%">Stacked</div>
						</div>
					</div>
				</div>
			</PanelBody>
			{#if codeArray[6]}
				<HighlightJs code={codeArray[6]} />
			{/if}
		</Panel>
	</div>
</div>