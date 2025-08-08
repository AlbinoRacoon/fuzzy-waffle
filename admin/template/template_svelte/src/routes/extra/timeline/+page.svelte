<script>
	import Card from '/src/components/bootstrap/Card.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
  
  onMount(async () => {
  	import('lity');
  	import('lity/dist/lity.min.css');
    setPageTitle('Timeline');
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Extra</a></li>
	<li class="breadcrumb-item active">Timeline</li>
</ol>
<h1 class="page-header">Timeline <small>header small text goes here...</small></h1>
<div class="timeline">
	<div class="timeline-item">
		<div class="timeline-time">
			<span class="date">today</span>
			<span class="time">04:20</span>
		</div>
		<div class="timeline-icon">
			<a href="#/" aria-label="link">&nbsp;</a>
		</div>
		<div class="timeline-content">
			<div class="timeline-header">
				<div class="userimage"><img src="/img/user/user-1.jpg" alt="" /></div>
				<div class="username">
					<a href="#/" aria-label="link">John Smith <i class="fa fa-check-circle text-blue ms-1"></i></a>
					<div class="text-muted fs-12px">8 mins <i class="fa fa-globe-americas opacity-5 ms-1"></i></div>
				</div>
				<div>
					<a href="#/" aria-label="link" class="btn btn-lg border-0 rounded-pill w-40px h-40px p-0 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown">
						<i class="fa fa-ellipsis-h text-gray-600"></i>
					</a>
					<div class="dropdown-menu dropdown-menu-end">
						<a href="#/" aria-label="link" class="dropdown-item d-flex align-items-center">
							<i class="fa fa-fw fa-bookmark fa-lg"></i> 
							<div class="flex-1 ps-1">
								<div>Save Post</div>
								<div class="mt-n1 text-gray-500"><small>Add this to your saved items</small></div>
							</div>
						</a>
						<div class="dropdown-divider"></div>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-edit fa-lg me-1"></i> Edit post</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-user fa-lg me-1"></i> Edit audience</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-bell fa-lg me-1"></i> Turn off notifications for this post</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-language fa-lg me-1"></i> Turn off translations</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-calendar-alt fa-lg me-1"></i> Turn date</a>
						<div class="dropdown-divider"></div>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-archive fa-lg me-1"></i> Move to archive</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-trash-alt fa-lg me-1"></i> Move to Recycle bin</a>
					</div>
				</div>
			</div>
			<div class="timeline-body">
				<div class="mb-3">
					<div class="mb-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus.
						Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.
					</div>
					<div class="row gx-1">
						<div class="col-6">
							<div class="ratio ratio-4x3">
								<a href="#/" aria-label="link" data-lity-target="/img/gallery/gallery-14.jpg" data-lity class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-14.jpg)">&nbsp;</a>
							</div>
						</div>
						<div class="col-3">
							<div class="ratio ratio-4x3 mb-3px">
								<a href="#/" aria-label="link" data-lity-target="/img/gallery/gallery-12.jpg" data-lity class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-12.jpg)">&nbsp;</a>
							</div>
							<div class="ratio ratio-4x3">
								<a href="#/" aria-label="link" data-lity-target="/img/gallery/gallery-16.jpg" data-lity class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-16.jpg)">&nbsp;</a>
							</div>
						</div>
						<div class="col-3">
							<div class="ratio ratio-4x3 mb-3px">
								<a href="#/" aria-label="link" data-lity-target="/img/gallery/gallery-15.jpg" data-lity class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-15.jpg)">&nbsp;</a>
							</div>
							<div class="ratio ratio-4x3">
								<a href="#/" aria-label="link" data-lity-target="/img/gallery/gallery-11.jpg" data-lity class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-11.jpg)">&nbsp;</a>
							</div>
						</div>
					</div>
				</div>
	
				<div class="d-flex align-items-center text-dark mb-2">
					<div class="d-flex align-items-center">
						<span class="fa-stack fs-10px">
							<i class="fa fa-circle fa-stack-2x text-danger"></i>
							<i class="fa fa-heart fa-stack-1x fa-inverse fs-11px"></i>
						</span>
						<span class="fa-stack fs-10px">
							<i class="fa fa-circle fa-stack-2x text-blue"></i>
							<i class="fa fa-thumbs-up fa-stack-1x fa-inverse fs-11px bottom-0 mb-1px"></i>
						</span>
						<span class="ms-1">4.3k</span>
					</div>
					<div class="d-flex align-items-center ms-auto">
						<div>259 Shares</div>
						<div class="ms-3">21 Comments</div>
					</div>
				</div>
	
				<hr class="my-10px" />
				<div class="d-flex align-items-center fw-bold">
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-thumbs-up fa-fw me-3px"></i> Like
					</a>
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-comments fa-fw me-3px"></i> Comment
					</a> 
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-share fa-fw me-3px"></i> Share
					</a>
				</div>
				<hr class="mt-10px mb-3" />
	
				<form action="" class="d-flex align-items-center">
					<div><img src="/img/user/user-13.jpg" height="35" class="rounded-pill" alt="" /></div>
					<div class="ps-2 flex-1">
						<div class="position-relative">
							<input type="text" class="form-control rounded-pill ps-3 py-2 fs-13px bg-light" placeholder="Write a comment..." />
							<div class="position-absolute end-0 top-0 bottom-0 d-flex align-items-center px-2">
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-smile fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-camera fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-film fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-sticky-note fa-fw fa-lg d-block"></i></a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="timeline-item">
		<div class="timeline-time">
			<span class="date">yesterday</span>
			<span class="time">20:17</span>
		</div>
		<div class="timeline-icon">
			<a href="#/" aria-label="link">&nbsp;</a>
		</div>
		<div class="timeline-content">
			<div class="timeline-header">
				<div class="userimage"><img src="/img/user/user-2.jpg" alt="" /></div>
				<div class="username">
					<a href="#/" aria-label="link">Darren Parrase</a>
					<div class="text-muted fs-12px">24 mins <i class="fa fa-globe-americas opacity-5 ms-1"></i></div>
				</div>
				<div>
					<a href="#/" aria-label="link" class="btn btn-lg border-0 rounded-pill w-40px h-40px p-0 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown">
						<i class="fa fa-ellipsis-h text-gray-600"></i>
					</a>
					<div class="dropdown-menu dropdown-menu-end">
						<a href="#/" aria-label="link" class="dropdown-item d-flex align-items-center">
							<i class="fa fa-fw fa-bookmark fa-lg"></i> 
							<div class="flex-1 ps-1">
								<div>Save Post</div>
								<div class="mt-n1 text-gray-500"><small>Add this to your saved items</small></div>
							</div>
						</a>
						<div class="dropdown-divider"></div>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-edit fa-lg me-1"></i> Edit post</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-user fa-lg me-1"></i> Edit audience</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-bell fa-lg me-1"></i> Turn off notifications for this post</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-language fa-lg me-1"></i> Turn off translations</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-calendar-alt fa-lg me-1"></i> Turn date</a>
						<div class="dropdown-divider"></div>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-archive fa-lg me-1"></i> Move to archive</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-trash-alt fa-lg me-1"></i> Move to Recycle bin</a>
					</div>
				</div>
			</div>
			<div class="timeline-body">
				<div class="mb-3">
					<div class="mb-2">Location: United States</div>
					<div class="h-250px">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52861076.327790216!2d-161.6509256950304!3d36.03533188501964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2smy!4v1710231954685!5m2!1sen!2smy" width="100%" height="100%" style="border:0;" allowfullscreen="" title="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
	
				<div class="d-flex align-items-center text-dark mb-2">
					<div class="d-flex align-items-center">
						<span class="fa-stack fs-10px">
							<i class="fa fa-circle fa-stack-2x text-danger"></i>
							<i class="fa fa-heart fa-stack-1x fa-inverse fs-11px"></i>
						</span>
						<span class="fa-stack fs-10px">
							<i class="fa fa-circle fa-stack-2x text-blue"></i>
							<i class="fa fa-thumbs-up fa-stack-1x fa-inverse fs-11px bottom-0 mb-1px"></i>
						</span>
						<span class="ms-1">269</span>
					</div>
					<div class="d-flex align-items-center ms-auto">
						<div>2 Shares</div>
						<div class="ms-3">9 Comments</div>
					</div>
				</div>
	
				<hr class="my-10px" />
				<div class="d-flex align-items-center fw-bold">
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-thumbs-up fa-fw me-3px"></i> Like
					</a>
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-comments fa-fw me-3px"></i> Comment</a> 
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-share fa-fw me-3px"></i> Share
					</a>
				</div>
				<hr class="mt-10px mb-3" />
	
				<form action="" class="d-flex align-items-center">
					<div><img src="/img/user/user-13.jpg" height="35" class="rounded-pill" alt="" /></div>
					<div class="ps-2 flex-1">
						<div class="position-relative">
							<input type="text" class="form-control rounded-pill ps-3 py-2 fs-13px bg-light" placeholder="Write a comment..." />
							<div class="position-absolute end-0 top-0 bottom-0 d-flex align-items-center px-2">
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-smile fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-camera fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-film fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-sticky-note fa-fw fa-lg d-block"></i></a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="timeline-item">
		<div class="timeline-time">
			<span class="date">24 February 2025</span>
			<span class="time">08:17</span>
		</div>
		<div class="timeline-icon">
			<a href="#/" aria-label="link">&nbsp;</a>
		</div>
		<div class="timeline-content">
			<div class="timeline-header">
				<div class="userimage"><img src="/img/user/user-3.jpg" alt="" /></div>
				<div class="username">
					<a href="#/" aria-label="link">Richard Leong <i class="fa fa-check-circle text-blue ms-1"></i></a>
					<div class="text-muted fs-12px">12 hours <i class="fa fa-globe-americas opacity-5 ms-1"></i></div>
				</div>
				<div>
					<a href="#/" aria-label="link" class="btn btn-lg border-0 rounded-pill w-40px h-40px p-0 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown">
						<i class="fa fa-ellipsis-h text-gray-600"></i>
					</a>
					<div class="dropdown-menu dropdown-menu-end">
						<a href="#/" aria-label="link" class="dropdown-item d-flex align-items-center">
							<i class="fa fa-fw fa-bookmark fa-lg"></i> 
							<div class="flex-1 ps-1">
								<div>Save Post</div>
								<div class="mt-n1 text-gray-500"><small>Add this to your saved items</small></div>
							</div>
						</a>
						<div class="dropdown-divider"></div>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-edit fa-lg me-1"></i> Edit post</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-user fa-lg me-1"></i> Edit audience</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-bell fa-lg me-1"></i> Turn off notifications for this post</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-language fa-lg me-1"></i> Turn off translations</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-calendar-alt fa-lg me-1"></i> Turn date</a>
						<div class="dropdown-divider"></div>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-archive fa-lg me-1"></i> Move to archive</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-trash-alt fa-lg me-1"></i> Move to Recycle bin</a>
					</div>
				</div>
			</div>
			<div class="timeline-body">
				<div class="lead mb-3">
					<i class="fa fa-quote-left fa-fw float-start opacity-5 me-3 mb-3 mt-3 fa-lg"></i>
					Quisque sed varius nisl. Nulla facilisi. Phasellus consequat sapien sit amet nibh molestie placerat. Donec nulla quam, ullamcorper ut velit vitae, lobortis condimentum magna. Suspendisse mollis in sem vel mollis.
					<i class="fa fa-quote-right fa-fw float-end opacity-5 ms-3 mt-n3 fa-lg"></i>
				</div>
	
				<div class="d-flex align-items-center text-dark mb-2">
					<div class="d-flex align-items-center">
						<span class="fa-stack fs-10px">
							<i class="fa fa-circle fa-stack-2x text-danger"></i>
							<i class="fa fa-heart fa-stack-1x fa-inverse fs-11px"></i>
						</span>
						<span class="fa-stack fs-10px">
							<i class="fa fa-circle fa-stack-2x text-blue"></i>
							<i class="fa fa-thumbs-up fa-stack-1x fa-inverse fs-11px bottom-0 mb-1px"></i>
						</span>
						<span class="ms-1">550</span>
					</div>
					<div class="d-flex align-items-center ms-auto">
						<div>121 Shares</div>
						<div class="ms-3">40 Comments</div>
					</div>
				</div>
	
				<hr class="my-10px" />
				<div class="d-flex align-items-center fw-bold">
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-thumbs-up fa-fw me-3px"></i> Like
					</a>
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-comments fa-fw me-3px"></i> Comment
					</a> 
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-share fa-fw me-3px"></i> Share
					</a>
				</div>
				<hr class="mt-10px mb-3" />
	
				<form action="" class="d-flex align-items-center">
					<div><img src="/img/user/user-13.jpg" height="35" class="rounded-pill" alt="" /></div>
					<div class="ps-2 flex-1">
						<div class="position-relative">
							<input type="text" class="form-control rounded-pill ps-3 py-2 fs-13px bg-light" placeholder="Write a comment..." />
							<div class="position-absolute end-0 top-0 bottom-0 d-flex align-items-center px-2">
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-smile fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-camera fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-film fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-sticky-note fa-fw fa-lg d-block"></i></a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="timeline-item">
		<div class="timeline-time">
			<span class="date">10 January 2025</span>
			<span class="time">20:43</span>
		</div>
		<div class="timeline-icon">
			<a href="#/" aria-label="link">&nbsp;</a>
		</div>
		<div class="timeline-content">
			<div class="timeline-header">
				<div class="userimage"><img src="/img/user/user-4.jpg" alt="" /></div>
				<div class="username">
					<a href="#/" aria-label="link">Lelouch Wong <i class="fa fa-check-circle text-blue ms-1"></i></a>
					<div class="text-muted fs-12px">1 days ago <i class="fa fa-globe-americas opacity-5 ms-1"></i></div>
				</div>
				<div>
					<a href="#/" aria-label="link" class="btn btn-lg border-0 rounded-pill w-40px h-40px p-0 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown">
						<i class="fa fa-ellipsis-h text-gray-600"></i>
					</a>
					<div class="dropdown-menu dropdown-menu-end">
						<a href="#/" aria-label="link" class="dropdown-item d-flex align-items-center">
							<i class="fa fa-fw fa-bookmark fa-lg"></i> 
							<div class="flex-1 ps-1">
								<div>Save Post</div>
								<div class="mt-n1 text-gray-500"><small>Add this to your saved items</small></div>
							</div>
						</a>
						<div class="dropdown-divider"></div>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-edit fa-lg me-1"></i> Edit post</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-user fa-lg me-1"></i> Edit audience</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-bell fa-lg me-1"></i> Turn off notifications for this post</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-language fa-lg me-1"></i> Turn off translations</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-calendar-alt fa-lg me-1"></i> Turn date</a>
						<div class="dropdown-divider"></div>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-archive fa-lg me-1"></i> Move to archive</a>
						<a href="#/" aria-label="link" class="dropdown-item"><i class="fa fa-fw fa-trash-alt fa-lg me-1"></i> Move to Recycle bin</a>
					</div>
				</div>
			</div>
			<div class="timeline-body">
				<div class="mb-3">
					<h4 class="mb-1">
						795 Folsom Ave, Suite 600 San Francisco, CA 94107
					</h4>
					<div class="mb-2">In hac habitasse platea dictumst. Pellentesque bibendum id sem nec faucibus. Maecenas molestie, augue vel accumsan rutrum, massa mi rutrum odio, id luctus mauris nibh ut leo.</div>
					<div class="row gx-1">
						<div class="col-6">
							<a href="#/" aria-label="link" data-lity-target="/img/gallery/gallery-4.jpg" data-lity><img src="/img/gallery/gallery-4.jpg" alt="" class="mw-100 d-block" /></a>
						</div>
						<div class="col-6">
							<a href="#/" aria-label="link" data-lity-target="/img/gallery/gallery-5.jpg" data-lity><img src="/img/gallery/gallery-5.jpg" alt="" class="mw-100 d-block" /></a>
						</div>
					</div>
				</div>
	
				<hr class="my-10px" />
				<div class="d-flex align-items-center fw-bold">
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-thumbs-up fa-fw me-3px"></i> Like
					</a>
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-comments fa-fw me-3px"></i> Comment</a> 
					<a href="#/" aria-label="link" class="flex-fill text-decoration-none text-center text-gray-600">
						<i class="fa fa-share fa-fw me-3px"></i> Share
					</a>
				</div>
				<hr class="mt-10px mb-3" />
	
				<form action="" class="d-flex align-items-center">
					<div><img src="/img/user/user-13.jpg" height="35" class="rounded-pill" alt="" /></div>
					<div class="ps-2 flex-1">
						<div class="position-relative">
							<input type="text" class="form-control rounded-pill ps-3 py-2 fs-13px bg-light" placeholder="Write a comment..." />
							<div class="position-absolute end-0 top-0 bottom-0 d-flex align-items-center px-2">
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-smile fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-camera fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-film fa-fw fa-lg d-block"></i></a>
								<a href="#/" aria-label="link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-sticky-note fa-fw fa-lg d-block"></i></a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="timeline-item">
		<div class="timeline-icon">
			<a href="#/" aria-label="link">&nbsp;</a>
		</div>
		<div class="timeline-content">
			<div class="timeline-body">
				<div class="d-flex align-items-center">
					<div class="spinner-border spinner-border-sm me-3" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
					Loading...
				</div>
			</div>
		</div>
	</div>
</div>
