<script>
  import { onMount, onDestroy } from 'svelte';
  import { setPageTitle } from '$lib/utils';
  import { appOptions } from '/src/stores/appOptions.js';
	import Tags from 'svelte-tags-input';
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  
	let toTags = [];
	let ccTags = [];
	let bccTags = [];
	let cc = false;
	let bcc = false;
	
	function showCc() {
		cc = true;
	}
	
	function showBcc() {
		bcc = true;
	}
  
  
  onMount(async () => {
    setPageTitle('Email - Compose');
    
		toTags = ['bootstrap@gmail.com', 'google@gmail.com'];
		ccTags = [];
		bccTags = [];
		
    let quill = await import('quill');
    new quill.default('#quillEditor', {
      theme: 'snow'
    });
    
  	$appOptions.appContentClass = 'p-0';
    $appOptions.appContentFullHeight = true;
  });
  
  onDestroy(() => {
  	$appOptions.appContentClass = '';
    $appOptions.appContentFullHeight = false;
  });
</script>

<div class="mailbox">
	<div class="mailbox-sidebar">
		<div class="mailbox-sidebar-header d-flex justify-content-center">
			<a href="#emailNav" aria-label="Example" data-bs-toggle="collapse" class="btn btn-dark btn-sm me-auto d-block d-lg-none">
				<i class="fa fa-cog"></i>
			</a>
			<a href="/email/compose" class="btn btn-dark ps-40px pe-40px btn-sm">
				Compose
			</a>
		</div>
		<div class="mailbox-sidebar-content collapse d-lg-block" id="emailNav">
			<PerfectScrollbar class="h-100">
				<div class="nav-title"><b>FOLDERS</b></div>
				<ul class="nav nav-inbox">
					<li><a href="/email/inbox"><i class="fa fa-hdd fa-lg fa-fw me-2"></i> Inbox <span class="badge bg-gray-600 fs-10px rounded-pill ms-auto fw-bolder pt-4px pb-5px px-8px">52</span></a></li>
					<li><a href="/email/inbox"><i class="fa fa-flag fa-lg fa-fw me-2"></i> Important</a></li>
					<li><a href="/email/inbox"><i class="fa fa-envelope fa-lg fa-fw me-2"></i> Sent</a></li>
					<li><a href="/email/inbox"><i class="fa fa-save fa-lg fa-fw me-2"></i> Drafts</a></li>
					<li><a href="/email/inbox"><i class="fa fa-trash-alt fa-lg fa-fw me-2"></i> Trash</a></li>
				</ul>
				<div class="nav-title"><b>LABEL</b></div>
				<ul class="nav nav-inbox">
					<li><a href="#/"><i class="fa fa-fw fa-lg fs-12px me-2 fa-circle text-dark"></i> Admin</a></li>
					<li><a href="#/"><i class="fa fa-fw fa-lg fs-12px me-2 fa-circle text-blue"></i> Designer & Employer</a></li>
					<li><a href="#/"><i class="fa fa-fw fa-lg fs-12px me-2 fa-circle text-success"></i> Staff</a></li>
					<li><a href="#/"><i class="fa fa-fw fa-lg fs-12px me-2 fa-circle text-warning"></i> Sponsorer</a></li>
					<li><a href="#/"><i class="fa fa-fw fa-lg fs-12px me-2 fa-circle text-danger"></i> Client</a></li>
				</ul>
			</PerfectScrollbar>
		</div>
	</div>
	<div class="mailbox-content">
		<div class="mailbox-content-header">
			<div class="btn-toolbar align-items-center">
				<div class="btn-group me-2">
					<a href="#/" class="btn btn-white btn-sm"><i class="fa fa-fw fa-envelope"></i> <span class="hidden-xs">Send</span></a>
					<a href="#/" class="btn btn-white btn-sm"><i class="fa fa-fw fa-paperclip"></i> <span class="hidden-xs">Attach</span></a>
				</div>
				<div>
					<a href="#/" aria-label="Example" class="btn btn-white btn-sm" data-bs-toggle="dropdown"><i class="fa fa-fw fa-ellipsis-h"></i></a>
					<div class="dropdown-menu dropdown-menu-end position-fixed">
						<a href="#/" class="dropdown-item">Save draft</a>
						<a href="#/" class="dropdown-item">Show From</a>
						<a href="#/" class="dropdown-item">Check names</a>
						<a href="#/" class="dropdown-item">Switch to plain text</a>
						<a href="#/" class="dropdown-item">Check for accessibility issues</a>
					</div>
				</div>
				<div class="ms-auto">
					<a href="/email/inbox" class="btn btn-white btn-sm"><i class="fa fa-fw fa-times"></i> <span class="hidden-xs">Discard</span></a>
				</div>
			</div>
		</div>
		<div class="mailbox-content-body">
			<PerfectScrollbar class="h-100">
				<form action="/" method="POST" name="email_to_form" class="mailbox-form">
					<div class="mailbox-to">
						<label class="control-label" for="">To:</label>
						<Tags bind:tags={toTags} id="to" />
						<div class="mailbox-float-link">
							<a href="#/" on:click|preventDefault={showCc} class="me-5px">Cc</a>
							<a href="#/" on:click|preventDefault={showBcc} data-name="Bcc">Bcc</a>
						</div>
					</div>

					<div class="mailbox-to" class:d-none={!cc}>
						<label class="control-label" for="">Cc:</label>
						<Tags bind:tags={ccTags} id="cc" />
					</div>

					<div class="mailbox-to" class:d-none={!bcc}>
						<label class="control-label" for="">Bcc:</label>
						<Tags bind:tags={bccTags} id="bcc" />
					</div>

					<div class="mailbox-subject">
						<input type="text" class="form-control" placeholder="Subject" />
					</div>
					<div class="mailbox-input border-0">
						<div id="quillEditor" class=""></div>
					</div>
				</form>
			</PerfectScrollbar>
		</div>
		<div class="mailbox-content-footer d-flex align-items-center justify-content-end">
			<a href="/email/inbox" class="btn btn-white ps-40px pe-40px me-5px">Discard</a>
			<button type="submit" class="btn btn-primary ps-40px pe-40px">Send</button>
		</div>
	</div>
</div>