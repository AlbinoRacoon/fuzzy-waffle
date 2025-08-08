<script>
  import { onMount, onDestroy } from 'svelte';
  import { setPageTitle } from '$lib/utils';
  import { appOptions } from '/src/stores/appOptions.js';
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  
  let mailData = [];
  
  onMount(async () => {
    setPageTitle('Email - Detail');
		
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
			<a href="#emailNav" data-bs-toggle="collapse" class="btn btn-dark btn-sm me-auto d-block d-lg-none" aria-label="Example">
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
					<li class="active"><a href="/email/inbox"><i class="fa fa-hdd fa-lg fa-fw me-2"></i> Inbox <span class="badge bg-gray-600 fs-10px rounded-pill ms-auto fw-bolder pt-4px pb-5px px-8px">52</span></a></li>
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
			<div class="btn-toolbar">
				<div class="btn-group me-2">
					<a href="#/" class="btn btn-white btn-sm"><i class="fa fa-fw fa-reply"></i> <span class="d-none d-lg-inline">Reply</span></a>
				</div>
				<div class="btn-group me-2">
					<a href="#/" class="btn btn-white btn-sm"><i class="fa fa-fw fa-trash"></i> <span class="d-none d-lg-inline">Delete</span></a>
					<a href="#/" class="btn btn-white btn-sm"><i class="fa fa-fw fa-archive"></i> <span class="d-none d-lg-inline">Archive</span></a>
				</div>
				<div class="btn-group ms-auto me-2">
					<a href="/email/inbox" class="btn btn-white btn-sm disabled" aria-label="Example"><i class="fa fa-fw fa-arrow-up"></i></a>
					<a href="/email/inbox" class="btn btn-white btn-sm" aria-label="Example"><i class="fa fa-fw fa-arrow-down"></i></a>
				</div>
				<div class="btn-group">
					<a href="/email/inbox" class="btn btn-white btn-sm" aria-label="Example"><i class="fa fa-fw fa-times"></i></a>
				</div>
			</div>
		</div>
		<div class="mailbox-content-body">
			<!-- BEGIN scrollbar -->
			<div data-scrollbar="true" data-height="100%" data-skip-mobile="true">
				<div class="p-3">
					<h3 class="mb-3">Bootstrap v5.0 is coming soon</h3>
					<div class="d-flex mb-3">
						<a href="#/">
							<img class="rounded-pill" width="48" alt="" src="/img/user/user-12.jpg" />
						</a>
						<div class="ps-3">
							<div class="email-from text-dark fs-14px mb-3px fw-bold">
								from support@wrapbootstrap.com
							</div>
							<div class="mb-3px"><i class="fa fa-clock fa-fw"></i> Today, 8:30 AM</div>
							<div class="email-to">
								To: nguoksiong@live.co.uk
							</div>
						</div>
					</div>
					<hr class="bg-gray-500" />
					<ul class="attached-document clearfix">
						<li class="fa-file">
							<div class="document-file">
								<a href="#/" aria-label="Example">
									<i class="fa fa-file-pdf"></i>
								</a>
							</div>
							<div class="document-name"><a href="#/" class="text-decoration-none">flight_ticket.pdf</a></div>
						</li>
						<li class="fa-camera">
							<div class="document-file">
								<a href="#/">
									<img src="/img/gallery/gallery-11.jpg" alt="" />
								</a>
							</div>
							<div class="document-name"><a href="#/" class="text-decoration-none">front_end_mockup.jpg</a></div>
						</li>
					</ul>

					<p class="text-dark"> 
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel auctor nisi, vel auctor orci. <br />
						Aenean in pretium odio, ut lacinia tellus. Nam sed sem ac enim porttitor vestibulum vitae at erat.
					</p>
					<p class="text-dark">
						Curabitur auctor non orci a molestie. Nunc non justo quis orci viverra pretium id ut est. <br />
						Nullam vitae dolor id enim consequat fermentum. Ut vel nibh tellus. <br />
						Duis finibus ante et augue fringilla, vitae scelerisque tortor pretium. <br />
						Phasellus quis eros erat. Nam sed justo libero.
					</p>
					<p class="text-dark">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.<br /> 
						Sed tempus dapibus libero ac commodo.
					</p>
					<br />
					<br />
					<p class="text-dark">
						Best Regards,<br />
						Sean.<br /><br />
						Information Technology Department,<br />
						Senior Front End Designer<br />
					</p>
				</div>
			</div>
			<!-- END scrollbar -->
		</div>
		<div class="mailbox-content-footer d-flex align-items-center justify-content-end">
			<div class="btn-group me-2">
				<a href="/email/inbox" class="btn btn-white btn-sm disabled" aria-label="Example"><i class="fa fa-fw fa-arrow-up"></i></a>
				<a href="/email/inbox" class="btn btn-white btn-sm" aria-label="Example"><i class="fa fa-fw fa-arrow-down"></i></a>
			</div>
			<div class="btn-group">
				<a href="/email/inbox" class="btn btn-white btn-sm" aria-label="Example"><i class="fa fa-fw fa-times"></i></a>
			</div>
		</div>
	</div>
</div>