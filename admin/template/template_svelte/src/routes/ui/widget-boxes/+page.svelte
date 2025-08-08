<script>
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelToolbar from '/src/components/bootstrap/PanelToolbar.svelte';
	import PanelFooter from '/src/components/bootstrap/PanelFooter.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
  
  let codeArray = [];
  
  onMount(async () => {
    setPageTitle('Widget Boxes');
		
		for (var i = 1; i < 24; i++) {
			let response = await fetch('/data/ui/widget-boxes-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">UI Elements</a></li>
	<li class="breadcrumb-item active">Widget Boxes</li>
</ol>
<h1 class="page-header">Widget Boxes <small>header small text goes here...</small></h1>

<div class="row mb-3">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Panel (Default)</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[1]}
				<HighlightJs code={codeArray[1]} />
			{/if}
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Panel Header with Dropdown</PanelTitle>
				<div class="btn-group my-n1">
					<button type="button" class="btn btn-success btn-xs">Action</button>
					<button type="button" class="btn btn-success btn-xs dropdown-toggle" aria-label="Button" data-bs-toggle="dropdown"><b class="caret"></b></button>
					<div class="dropdown-menu dropdown-menu-end">
						<a href="#/" class="dropdown-item">Action</a>
						<a href="#/" class="dropdown-item">Another action</a>
						<a href="#/" class="dropdown-item">Something else here</a>
						<div class="dropdown-divider"></div>
						<a href="#/" class="dropdown-item">Separated link</a>
					</div>
				</div>
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[2]}
				<HighlightJs code={codeArray[2]} />
			{/if}
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Panel Header with Radio Button</PanelTitle>
				<div class="btn-group btn-group-toggle my-n1" data-toggle="buttons">
					<input type="radio" name="options" class="btn-check" id="option1" autocomplete="off" checked />
					<label class="btn btn-success btn-xs" for="option1"> Option 1</label>
					
					<input type="radio" name="options" class="btn-check" id="option2" autocomplete="off" />
					<label class="btn btn-success btn-xs" for="option2"> Option 2</label>
				</div>
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[3]}
				<HighlightJs code={codeArray[3]} />
			{/if}
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Panel Header with Progress Bar</PanelTitle>
				<div class="progress h-10px bg-gray-700 w-150px">
					<div class="progress-bar progress-bar-striped bg-success progress-bar-animated fw-bold" style="width: 40%">40%</div>
				</div>
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[4]}
				<HighlightJs code={codeArray[4]} />
			{/if}
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Panel Header with Badge <span class="badge bg-success ms-1">NEW</span> </PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[5]}
				<HighlightJs code={codeArray[5]} />
			{/if}
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>
					Panel with Alert Box
				</PanelTitle>
			</PanelHeader>
			<div class="alert alert-success alert-dismissible fade show rounded-0 mb-0">
				<div class="d-flex">
					<i class="fa fa-check fa-2x me-1"></i>
					<div class="mb-0 ps-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac posuere lacus, quis suscipit sem. Nulla sagittis aliquam erat non convallis.
					</div>
				</div>
				<button type="button" class="btn-close ms-3" aria-label="Button" data-bs-dismiss="alert"></button>
			</div>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[6]}
				<HighlightJs code={codeArray[6]} />
			{/if}
		</Panel>
	</div>
	
	<div class="col-xl-6">
		<Panel class="panel-inverse panel-hover-icon">
			<PanelHeader>
				<PanelTitle>Hover View Icon</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[7]}
				<HighlightJs code={codeArray[7]} />
			{/if}
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Panel with Scrollbar</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<PerfectScrollbar class="h-300px">
					<p>
						<span class="fa-stack fa-4x float-start me-10px text-dark">
							<i class="fab fa-twitter fa-stack-1x"></i>
						</span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed enim arcu. 
						Ut posuere in ligula quis ultricies. In in justo turpis. Donec ut dui at massa gravida 
						interdum nec vitae justo. Quisque ullamcorper vehicula dictum. Nullam hendrerit interdum eleifend. 
						Aenean luctus sed arcu laoreet scelerisque. Vivamus non ullamcorper mauris, id sagittis lorem. 
						Proin tincidunt mauris et dolor mattis imperdiet. Sed facilisis mattis diam elementum adipiscing. 
					</p>
					<p>
						<span class="fa-stack fa-4x float-end ms-10px text-dark">
							<i class="fab fa-google-plus fa-stack-1x"></i>
						</span>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
						Ut ante velit, pretium non nisi a, egestas placerat diam. Nullam aliquet iaculis ultricies. 
						Aliquam volutpat, sapien quis volutpat elementum, ligula purus auctor diam, at vestibulum nulla augue 
						vel purus. Praesent ac nisl a magna tincidunt interdum sed in turpis. Maecenas nec condimentum risus. 
						In congue pretium est, eget euismod tortor ornare quis.
					</p>
					<p>
						<span class="fa-stack fa-4x float-start me-10px text-dark">
							<i class="fab fa-facebook fa-stack-1x"></i>
						</span>
						Praesent eu ultrices justo. Vestibulum ante 
						ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
						Cras mattis ipsum quis sapien consectetur fringilla. 
						Etiam sagittis sem tempus purus elementum, vitae pretium sapien porta. Curabitur iaculis ante ut aliquam luctus. 
						Vivamus ullamcorper blandit imperdiet. Ut egestas, orci id rhoncus cursus, orci risus scelerisque enim, eget mattis eros lacus quis ligula. 
						Vivamus ullamcorper urna eget hendrerit laoreet.
					</p>
					<p>
						<span class="fa-stack fa-4x float-end ms-10px text-dark">
							<i class="fab fa-apple fa-stack-1x"></i>
						</span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
						Morbi accumsan velit dolor. Donec convallis eleifend magna, at euismod tellus convallis a. 
						Curabitur in nisi dolor. Cras viverra scelerisque orci, sed interdum ligula volutpat non. 
						Nunc eu enim ac neque tempor feugiat. Duis posuere lacus non magna eleifend, 
						non dictum sem feugiat. Duis eleifend condimentum pulvinar.
					</p>
				</PerfectScrollbar>
			</PanelBody>
			{#if codeArray[8]}
				<HighlightJs code={codeArray[8]} />
			{/if}
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Panel with Toolbar & Footer</PanelTitle>
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
			<textarea class="form-control no-rounded-pill border-1 border-start-0 border-end-0 border-bottom-0 rounded-0 bg-light" rows="5">This is a form textarea.</textarea>
			<PanelFooter class="text-end">
				<a href="#/" class="btn btn-white btn-sm">Cancel</a>
				<a href="#/" class="btn btn-primary btn-sm ms-5px">Action</a>
			</PanelFooter>
			{#if codeArray[9]}
				<HighlightJs code={codeArray[9]} />
			{/if}
		</Panel>
		
		<Panel class="panel-default panel-with-tabs">
			<PanelHeader>
				<PanelTitle>Panel with Tabs</PanelTitle>
				<ul class="nav nav-tabs">
					<li class="nav-item"><a href="#home" data-bs-toggle="tab" class="nav-link active"><i class="fa fa-home"></i> <span class="d-none d-md-inline">Home</span></a></li>
					<li class="nav-item"><a href="#profile" data-bs-toggle="tab" class="nav-link"><i class="fa fa-user"></i> <span class="d-none d-md-inline">Profile</span></a></li>
				</ul>
			</PanelHeader>
			<PanelBody>
				<div class="tab-content">
					<div class="tab-pane fade show active" id="home">
						<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
					</div>
					<div class="tab-pane fade" id="profile">
						<p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
					</div>
				</div>
			</PanelBody>
			{#if codeArray[10]}
				<HighlightJs code={codeArray[10]} />
			{/if}
		</Panel>
	</div>
</div>

<h3 class="mb-20px">Panel Theme</h3>
<p class="mb-20px">
	You can customize the panel header <code>background</code> & <code>text color</code> by adding predefined CSS class. E.g <code>.bg-gray-900</code>. Full list of available predefined background class can be found <a href="/helper/css">here</a>.
</p>

<div class="row mb-3">
	<div class="col-xl-6">
		<Panel class="panel-default">
			<PanelHeader>
				<PanelTitle>Panel (Default)</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[11]}
				<HighlightJs code={codeArray[11]} />
			{/if}
		</Panel>
		
		<Panel>
			<PanelHeader class="bg-teal-700 text-white">
				<PanelTitle>Panel Success</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[12]}
				<HighlightJs code={codeArray[12]} />
			{/if}
		</Panel>
		
		<Panel>
			<PanelHeader class="bg-orange-700 text-white">
				<PanelTitle>Panel Warning</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[13]}
				<HighlightJs code={codeArray[13]} />
			{/if}
		</Panel>
		
		<Panel>
			<PanelHeader class="bg-red-700 text-white">
				<PanelTitle>Panel Danger</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[14]}
				<HighlightJs code={codeArray[14]} />
			{/if}
		</Panel>
	</div>
	
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Panel Inverse</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[15]}
				<HighlightJs code={codeArray[15]} />
			{/if}
		</Panel>
		
		<Panel>
			<PanelHeader class="bg-blue-700 text-white">
				<PanelTitle>Panel Primary</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[16]}
				<HighlightJs code={codeArray[16]} />
			{/if}
		</Panel>
		
		<Panel>
			<PanelHeader class="bg-cyan-700 text-white">
				<PanelTitle>Panel Info</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[17]}
				<HighlightJs code={codeArray[17]} />
			{/if}
		</Panel>
	</div>
</div>

<h3>Full Color Panel Theme</h3>
<p class="mb-20px">
	You can customize the panel body / header <code>background</code> & <code>text color</code> by adding predefined CSS class. E.g <code>.bg-gray-900</code>. Full list of available predefined background class can be found <a href="/helper/css">here</a>.
</p>


<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Full Color Panel</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="bg-gray-800 text-white">
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[18]}
				<HighlightJs code={codeArray[18]} />
			{/if}
		</Panel>
		
		<Panel class="text-white">
			<PanelHeader class="bg-blue-700">
				<PanelTitle>Full Color Panel</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="bg-blue">
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[19]}
				<HighlightJs code={codeArray[19]} />
			{/if}
		</Panel>
		
		<Panel class="text-white">
			<PanelHeader class="bg-teal-700">
				<PanelTitle>Full Color Panel</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="bg-teal">
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[20]}
				<HighlightJs code={codeArray[20]} />
			{/if}
		</Panel>
	</div>
	
	<div class="col-xl-6">
		<Panel class="text-white">
			<PanelHeader class="bg-orange-700">
				<PanelTitle>Full Color Panel</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="bg-orange">
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[21]}
				<HighlightJs code={codeArray[21]} />
			{/if}
		</Panel>
		
		<Panel class="text-white">
			<PanelHeader class="bg-red-700">
				<PanelTitle>Full Color Panel</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="bg-red">
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[22]}
				<HighlightJs code={codeArray[22]} />
			{/if}
		</Panel>
		
		<Panel class="text-white">
			<PanelHeader class="bg-cyan-700">
				<PanelTitle>Full Color Panel</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="bg-cyan">
				<p>Panel Content Here</p>
			</PanelBody>
			{#if codeArray[23]}
				<HighlightJs code={codeArray[23]} />
			{/if}
		</Panel>
	</div>
</div>
