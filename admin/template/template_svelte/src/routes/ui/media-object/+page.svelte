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
    setPageTitle('Media Object');
		
		for (var i = 1; i < 5; i++) {
			let response = await fetch('/data/ui/media-object-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">UI Elements</a></li>
	<li class="breadcrumb-item active">Media Object</li>
</ol>

<h1 class="page-header">Media Object <small>header small text goes here...</small></h1>

<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Default Media Object</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="d-flex">
					<a class="w-60px" href="#/">
						<img src="/img/user/user-1.jpg" alt="" class="mw-100 rounded" />
					</a>
					<div class="ps-3 flex-1">
						<h5 class="mb-1">Media heading</h5>
						<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
					</div>
				</div>
				
				<hr class="bg-gray-500" />
				
				<div class="d-flex">
					<a class="w-60px" href="#/">
						<img src="/img/user/user-2.jpg" alt="" class="mw-100 rounded" />
					</a>
					<div class="ps-3 flex-1">
						<h5 class="mb-1">Media heading</h5>
						<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
						
						<hr class="bg-gray-500" />
						
						<div class="d-flex">
							<a class="w-60px" href="#/">
								<img src="/img/user/user-3.jpg" alt="" class="mw-100 rounded" />
							</a>
							<div class="ps-3 flex-1">
								<h5 class="mb-1">Nested media heading</h5>
								<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
							</div>
						</div>
					</div>
				</div>
				
				<hr class="bg-gray-500" />
				
				<div class="d-flex">
					<a class="w-60px" href="#/">
						<img src="/img/user/user-4.jpg" alt="" class="mw-100 rounded" />
					</a>
					<div class="ps-3 flex-1">
						<h5 class="mb-1">Media heading</h5>
						<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
					</div>
				</div>
				
				<hr class="bg-gray-500" />
				
				<div class="d-flex">
					<a class="w-60px" href="#/">
						<img src="/img/user/user-10.jpg" alt="" class="mw-100 rounded" />
					</a>
					<div class="ps-3 flex-1">
						<h5 class="mb-1">Media heading</h5>
						<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
					</div>
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
				<PanelTitle>Media List</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="d-flex">
					<a class="w-60px" href="#/">
						<img src="/img/user/user-5.jpg" alt="" class="mw-100 rounded-pill" />
					</a>
					<div class="flex-1 ps-3">
						<h5 class="mb-1">Media heading</h5>
						<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
						
						<hr class="bg-gray-500" />
						
						<div class="d-flex">
							<a class="w-60px" href="#/">
								<img src="/img/user/user-6.jpg" alt="" class="mw-100 rounded-pill" />
							</a>
							<div class="flex-1 ps-3">
								<h5 class="mb-1">Nested media heading</h5>
								<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
								
								<hr class="bg-gray-500" />
								
								<div class="d-flex">
									<a class="w-60px" href="#/">
										<img src="/img/user/user-7.jpg" alt="" class="mw-100 rounded-pill" />
									</a>
									
									<div class="flex-1 ps-3">
										<h5 class="mb-1">Nested media heading</h5>
										<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
									</div>
								</div>
							</div>
						</div>
						
						<hr class="bg-gray-500" />
						
						<div class="d-flex">
							<a class="w-60px" href="#/">
								<img src="/img/user/user-8.jpg" alt="" class="mw-100 rounded-pill" />
							</a>
							<div class="flex-1 ps-3">
								<h5 class="mb-1">Nested media heading</h5>
								<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
							</div>
						</div>
					</div>
				</div>
				
				<hr class="bg-gray-500" />
				
				<div class="d-flex">
					<div class="flex-1 pe-3">
						<h5 class="mb-1">Media heading</h5>
						<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
					</div>
					<a class="w-60px" href="#/">
						<img src="/img/user/user-9.jpg" alt="" class="mw-100 rounded-pill" />
					</a>
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
				<PanelTitle>Media Object Sizes</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="d-flex">
					<a class="w-lg-250px w-100px" href="#/">
						<img src="/img/gallery/gallery-1.jpg" alt="" class="mw-100 rounded" />
					</a>
					<div class="flex-1 ps-3">
						<h5 class="mb-1">Media heading</h5>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					</div>
				</div>
				
				<hr class="bg-gray-500" />
				
				<div class="d-flex">
					<a class="w-lg-200px w-80px" href="#/">
						<img src="/img/gallery/gallery-2.jpg" alt="" class="mw-100 rounded" />
					</a>
					<div class="flex-1 ps-3">
						<h5 class="mb-1">Media heading</h5>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					</div>
				</div>
				
				<hr class="bg-gray-500" />
						
				<div class="d-flex">
					<a class="w-lg-150px w-60px" href="#/">
						<img src="/img/gallery/gallery-3.jpg" alt="" class="mw-100 rounded" />
					</a>
					<div class="flex-1 ps-3">
						<h5 class="mb-1">Media heading</h5>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
					</div>
				</div>
				
				<hr class="bg-gray-500" />
						
				<div class="d-flex">
					<a class="w-lg-100px w-40px" href="#/">
						<img src="/img/gallery/gallery-4.jpg" alt="" class="mw-100 rounded" />
					</a>
					<div class="flex-1 ps-3">
						<h5 class="mb-1">Media heading</h5>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
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
				<PanelTitle>Media List with Button</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="d-flex mb-3">
					<a class="w-60px" href="#/">
						<img src="/img/user/user-5.jpg" alt="" class="mw-100 rounded-pill" />
					</a>
					<div class="flex-1 ps-3">
						<h5 class="mb-1">Media heading</h5>
						<p class="mb-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, tempus viverra turpis.</p>
						<p class="mb-0">
							<a href="#/" class="btn btn-sm btn-danger me-5px">Reject</a>
							<a href="#/" class="btn btn-sm btn-default">Cancel</a>
						</p>
					</div>
				</div>
				
				<hr class="bg-gray-500" />
				
				<div class="d-flex mb-3">
					<div class="flex-1 pe-3 text-end">
						<h5 class="mb-1">Nested media heading</h5>
						<p class="mb-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,  tempus viverra turpis.</p>
						<p class="mb-0">
							<a href="#/" class="btn btn-sm btn-success me-5px">Published</a>
							<a href="#/" class="btn btn-sm btn-default">Cancel</a>
						</p>
					</div>
					<a class="w-60px" href="#/">
						<img src="/img/user/user-6.jpg" alt="" class="mw-100 rounded-pill" />
					</a>
				</div>
				
				<hr class="bg-gray-500" />
				
				<div class="d-flex mb-3">
					<a class="w-60px" href="#/">
						<img src="/img/user/user-8.jpg" alt="" class="mw-100 rounded-pill" />
					</a>
					<div class="flex-1 ps-3">
						<h5 class="mb-1">Nested media heading</h5>
						<p class="mb-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, tempus viverra turpis.</p>
						<p class="mb-0">
							<a href="#/" class="btn btn-sm btn-primary me-5px">Confirm</a>
							<a href="#/" class="btn btn-sm btn-default">Cancel</a>
						</p>
					</div>
				</div>
				
				<hr class="bg-gray-500" />
				
				<div class="d-flex">
					<div class="flex-1 pe-3 text-end">
						<h5 class="mb-1">Nested media heading</h5>
						<p class="mb-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,  tempus viverra turpis.</p>
						<p class="mb-0">
							<a href="#/" class="btn btn-sm btn-warning me-5px">Edit</a>
							<a href="#/" class="btn btn-sm btn-default">Cancel</a>
						</p>
					</div>
					<a class="w-60px" href="#/">
						<img src="/img/user/user-7.jpg" alt="" class="mw-100 rounded-pill" />
					</a>
				</div>
			</PanelBody>
			{#if codeArray[4]}
				<HighlightJs code={codeArray[4]} />
			{/if}
		</Panel>
	</div>
</div>