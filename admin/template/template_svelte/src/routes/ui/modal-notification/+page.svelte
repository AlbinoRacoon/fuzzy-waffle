<script>
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
	import NavScrollTo from '/src/components/app/NavScrollTo.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
  
  let codeArray = [];
  let masonry;
  let masonryContainer;
  let toast1;
  let toast2;
  
  function showToast1() {
  	toast1.show();
	}
	
  function showToast2() {
  	toast2.show();
	}
  
  onMount(async () => {
    setPageTitle('Modal & Notifications');
    
		let bootstrap = await import('bootstrap');
		
		toast1 = new bootstrap.Toast(document.getElementById('toast-1'));
		toast2 = new bootstrap.Toast(document.getElementById('toast-2'));
		
		for (var i = 1; i < 6; i++) {
			let response = await fetch('/data/ui/modal-notification-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">UI Elements</a></li>
	<li class="breadcrumb-item active">Modal & Notification</li>
</ol>
<h1 class="page-header">Modal & Notification <small>header small text goes here...</small></h1>

<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Modal</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content. Please read the <a href="https://getbootstrap.com/docs/5.3/components/modal/" target="_blank">official Bootstrap documentation</a> for the full list of options.</p>
				<div class="modal position-static d-block">
					<div class="modal-dialog">
						<div class="modal-content shadow-lg">
							<div class="modal-header">
								<h5 class="modal-title">MODAL TITLE</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Example"></button>
							</div>
							<div class="modal-body">
								<p>Modal body text goes here.</p>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
								<button type="button" class="btn btn-primary">Save changes</button>
							</div>
						</div>
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
				<PanelTitle>Modal Sizes</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
				<!-- modal-xl -->
				<button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalXl">Extra large modal</button>
				
				<!-- modal-lg -->
				<button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalLg">Large modal</button>
				
				<!-- modal-sm -->
				<button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalSm">Small modal</button>
			</PanelBody>
			{#if codeArray[2]}
				<HighlightJs code={codeArray[2]} />
			{/if}
		</Panel>
	</div>
	
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Modal Cover</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Modal cover is an extended feature from Bootstrap modal. It provide the same background color as the modal content. Place a <code>.modal-cover</code> css class on <code>.modal</code> for full cover modal.</p>
				
				<!-- modal-cover -->
				<button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalCoverExample">Modal Cover</button>
			</PanelBody>
			{#if codeArray[3]}
				<HighlightJs code={codeArray[3]} />
			{/if}
		</Panel>
	</div>
	
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Toasts Notification</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Push notifications to your visitors with a toast, a lightweight and easily customizable alert message. Please read the <a href="https://getbootstrap.com/docs/5.3/components/toasts/" target="_blank">official Bootstrap documentation</a> for the full list of options.</p>
				<div class="toast show">
					<div class="toast-header">
						<i class="far fa-bell text-muted me-2"></i>
						<strong class="me-auto">Bootstrap</strong>
						<small>11 mins ago</small>
						<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Example"></button>
					</div>
					<div class="toast-body">
						Hello, world! This is a toast message.
					</div>
				</div>
			</PanelBody>
			{#if codeArray[4]}
				<HighlightJs code={codeArray[4]} />
			{/if}
		</Panel>
	</div>
	
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Toasts Container</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Toasts container is an extended ui from Bootstrap toasts. Wrap the toasts with <code>.toasts-container</code> will allow toast to float within the right top position.</p>
				<a href="#/" class="btn btn-primary me-2" on:click|preventDefault={showToast1}>Show toast 1</a>
				<a href="#/" class="btn btn-primary" on:click|preventDefault={showToast2}>Show toast 2</a>
			</PanelBody>
			{#if codeArray[5]}
				<HighlightJs code={codeArray[5]} />
			{/if}
		</Panel>
	</div>
</div>
				
<!-- BEGIN toasts-container -->
<div class="position-fixed top-0 end-0 p-3" style="z-index: 1030;">
	<div class="toast fade hide mb-3" data-autohide="false" id="toast-1">
		<div class="toast-header">
			<i class="far fa-bell text-muted me-2"></i>
			<strong class="me-auto">Bootstrap</strong>
			<small>11 mins ago</small>
			<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Example"></button>
		</div>
		<div class="toast-body">
			Hello, world! This is a toast message.
		</div>
	</div>
	<div class="toast fade hide mb-3" data-autohide="false" id="toast-2">
		<div class="toast-header">
			<i class="far fa-bell text-muted me-2"></i>
			<strong class="me-auto">Bootstrap</strong>
			<small>2 seconds ago</small>
			<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Example"></button>
		</div>
		<div class="toast-body">
			See? Just like this.
		</div>
	</div>
</div>
<!-- END toasts-container -->

<!-- BEGIN modal -->
<div class="modal modal-cover fade" id="modalCoverExample">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title">Sign Up!</h3>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Example"></button>
			</div>
			<div class="modal-body">
				<p class="mb-3">
					25% Off On Your First Purchase* Enter code WELCOME at checkout<br>
					Discover new apps, things to do & more great news added daily!
				</p>
				<div class="row mb-5">
					<div class="col-md-9">
						<input type="text" placeholder="Your email address here" class="form-control form-control-lg" name="icon-filter">
					</div>
					<div class="col-md-3">
						<button type="button" class="btn btn-primary btn-lg btn-block">Continue</button>
					</div>
				</div>
				<div class="pt-3">
					<a href="#/" class="text-muted fs-12px">What is it? Terms and conditions</a>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="modal fade" id="modalXl">
	<div class="modal-dialog modal-xl">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">EXTRA LARGE MODAL</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Example"></button>
			</div>
			<div class="modal-body">
				...
			</div>
		</div>
	</div>
</div>
<div class="modal fade" id="modalLg">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">LARGE MODAL</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Example"></button>
			</div>
			<div class="modal-body">
				...
			</div>
		</div>
	</div>
</div>
<div class="modal fade" id="modalSm">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">SMALL MODAL</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Example"></button>
			</div>
			<div class="modal-body">
				...
			</div>
		</div>
	</div>
</div>
<!-- END modal -->