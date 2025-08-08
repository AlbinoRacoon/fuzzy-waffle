<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
  
  let codeArray = [];
  let photos = [];
  for (let i = 1; i <= 70; i++) {
    photos.push(i);
  }
  let friends = [
  	{id: 1, name: 'James Pittman'},
		{id: 2, name: 'Mitchell Ashcroft'},
		{id: 3, name: 'Ella Cabena'},
		{id: 4, name: 'Declan Dyson'},
		{id: 5, name: 'George Seyler'},
		{id: 6, name: 'Patrick Musgrove'},
		{id: 7, name: 'Taj Connal'},
		{id: 8, name: 'Laura Pollock'},
		{id: 9, name: 'Dakota Mannix'},
		{id: 10, name: 'Timothy Woolley'},
		{id: 11, name: 'Benjamin Congreve'},
		{id: 12, name: 'Mariam Maddock'},
		{id: 13, name: 'Blake Gerrald'},
		{id: 14, name: 'Gabrielle Bunton'}
  ];
  let youtubeIds = ['RQ5ljyGg-ig', '5lWkZ-JaEOc', '9ZfN87gSjvI', 'w2H07DRv2_M', 'PntG8KEVjR8', 'q8kxKvSQ7MI', 'cutu3Bw4ep4', 'gCspUXGrraM', 'COtpTM1MpAA', '8NVkGHVOazc', 'ZtT3jaTcCsY', 'Dmw0ucCv8aQ', 'r1d7ST2TG2U', 'WUR-XWBcHvs', 'A7sQ8RWj0Cw', 'IMN2VfiXls4'];
  
	onMount(async () => {
  	import('lity');
  	import('lity/dist/lity.min.css');
  	
    setPageTitle('Profile Page');
    $appOptions.appContentClass = 'p-0';
  });
  
  onDestroy(() => {
    $appOptions.appContentClass = '';
  });
</script>

<div class="profile">
	<div class="profile-header">
		<div class="profile-header-cover"></div>
		<div class="profile-header-content">
			<div class="profile-header-img">
				<img src="/img/user/user-13.jpg" alt="" />
			</div>
			<div class="profile-header-info">
				<h4 class="mt-0 mb-1">Sean Ngu</h4>
				<p class="mb-2">UXUI + Frontend Developer</p>
				<a href="#/" class="btn btn-xs btn-yellow">Edit Profile</a>
			</div>
		</div>
		<ul class="profile-header-tab nav nav-tabs">
			<li class="nav-item"><a href="#profile-post" class="nav-link active" data-bs-toggle="tab">POSTS</a></li>
			<li class="nav-item"><a href="#profile-about" class="nav-link" data-bs-toggle="tab">ABOUT</a></li>
			<li class="nav-item"><a href="#profile-photos" class="nav-link" data-bs-toggle="tab">PHOTOS</a></li>
			<li class="nav-item"><a href="#profile-videos" class="nav-link" data-bs-toggle="tab">VIDEOS</a></li>
			<li class="nav-item"><a href="#profile-friends" class="nav-link" data-bs-toggle="tab">FRIENDS</a></li>
		</ul>
	</div>
</div>

<div class="profile-content">
	<div class="tab-content p-0">
		<div class="tab-pane fade show active" id="profile-post">
			<div class="timeline">
				<div class="timeline-item">
					<div class="timeline-time">
						<span class="date">today</span>
						<span class="time">04:20</span>
					</div>
					<div class="timeline-icon">
						<a href="#/" aria-label="Link">&nbsp;</a>
					</div>
					<div class="timeline-content">
						<div class="timeline-header">
							<div class="userimage"><img src="/img/user/user-1.jpg" alt="" /></div>
							<div class="username">
								<a href="#/">John Smith <i class="fa fa-check-circle text-blue ms-1"></i></a>
								<div class="text-muted fs-12px">8 mins <i class="fa fa-globe-americas opacity-5 ms-1"></i></div>
							</div>
							<div>
								<a href="#/" aria-label="Link" class="btn btn-lg border-0 rounded-pill w-40px h-40px p-0 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown">
									<i class="fa fa-ellipsis-h text-gray-600"></i>
								</a>
								<div class="dropdown-menu dropdown-menu-end">
									<a href="#/" class="dropdown-item d-flex align-items-center">
										<i class="fa fa-fw fa-bookmark fa-lg"></i> 
										<div class="flex-1 ps-1">
											<div>Save Post</div>
											<div class="mt-n1 text-gray-500"><small>Add this to your saved items</small></div>
										</div>
									</a>
									<div class="dropdown-divider"></div>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-edit fa-lg me-1"></i> Edit post</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-user fa-lg me-1"></i> Edit audience</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-bell fa-lg me-1"></i> Turn off notifications for this post</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-language fa-lg me-1"></i> Turn off translations</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-calendar-alt fa-lg me-1"></i> Turn date</a>
									<div class="dropdown-divider"></div>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-archive fa-lg me-1"></i> Move to archive</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-trash-alt fa-lg me-1"></i> Move to Recycle bin</a>
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
											<a href="#/" aria-label="Link" data-lity-target="/img/gallery/gallery-14.jpg" data-lity class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-14.jpg)">&nbsp;</a>
										</div>
									</div>
									<div class="col-3">
										<div class="ratio ratio-4x3 mb-3px">
											<a href="#/" aria-label="Link" data-lity-target="/img/gallery/gallery-12.jpg" data-lity class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-12.jpg)">&nbsp;</a>
										</div>
										<div class="ratio ratio-4x3">
											<a href="#/" aria-label="Link" data-lity-target="/img/gallery/gallery-16.jpg" data-lity class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-16.jpg)">&nbsp;</a>
										</div>
									</div>
									<div class="col-3">
										<div class="ratio ratio-4x3 mb-3px">
											<a href="#/" aria-label="Link" data-lity-target="/img/gallery/gallery-15.jpg" data-lity class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-15.jpg)">&nbsp;</a>
										</div>
										<div class="ratio ratio-4x3">
											<a href="#/" aria-label="Link" data-lity-target="/img/gallery/gallery-11.jpg" data-lity class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-11.jpg)">&nbsp;</a>
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
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
									<i class="fa fa-thumbs-up fa-fw me-3px"></i> Like
								</a>
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
									<i class="fa fa-comments fa-fw me-3px"></i> Comment
								</a> 
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
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
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-smile fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-camera fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-film fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-sticky-note fa-fw fa-lg d-block"></i></a>
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
						<a href="#/" aria-label="Link">&nbsp;</a>
					</div>
					<div class="timeline-content">
						<div class="timeline-header">
							<div class="userimage"><img src="/img/user/user-2.jpg" alt="" /></div>
							<div class="username">
								<a href="#/">Darren Parrase</a>
								<div class="text-muted fs-12px">24 mins <i class="fa fa-globe-americas opacity-5 ms-1"></i></div>
							</div>
							<div>
								<a href="#/" aria-label="Link" class="btn btn-lg border-0 rounded-pill w-40px h-40px p-0 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown">
									<i class="fa fa-ellipsis-h text-gray-600"></i>
								</a>
								<div class="dropdown-menu dropdown-menu-end">
									<a href="#/" class="dropdown-item d-flex align-items-center">
										<i class="fa fa-fw fa-bookmark fa-lg"></i> 
										<div class="flex-1 ps-1">
											<div>Save Post</div>
											<div class="mt-n1 text-gray-500"><small>Add this to your saved items</small></div>
										</div>
									</a>
									<div class="dropdown-divider"></div>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-edit fa-lg me-1"></i> Edit post</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-user fa-lg me-1"></i> Edit audience</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-bell fa-lg me-1"></i> Turn off notifications for this post</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-language fa-lg me-1"></i> Turn off translations</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-calendar-alt fa-lg me-1"></i> Turn date</a>
									<div class="dropdown-divider"></div>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-archive fa-lg me-1"></i> Move to archive</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-trash-alt fa-lg me-1"></i> Move to Recycle bin</a>
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
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
									<i class="fa fa-thumbs-up fa-fw me-3px"></i> Like
								</a>
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
									<i class="fa fa-comments fa-fw me-3px"></i> Comment</a> 
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
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
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-smile fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-camera fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-film fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-sticky-note fa-fw fa-lg d-block"></i></a>
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
						<a href="#/" aria-label="Link">&nbsp;</a>
					</div>
					<div class="timeline-content">
						<div class="timeline-header">
							<div class="userimage"><img src="/img/user/user-3.jpg" alt="" /></div>
							<div class="username">
								<a href="#/">Richard Leong <i class="fa fa-check-circle text-blue ms-1"></i></a>
								<div class="text-muted fs-12px">12 hours <i class="fa fa-globe-americas opacity-5 ms-1"></i></div>
							</div>
							<div>
								<a href="#/" aria-label="Link" class="btn btn-lg border-0 rounded-pill w-40px h-40px p-0 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown">
									<i class="fa fa-ellipsis-h text-gray-600"></i>
								</a>
								<div class="dropdown-menu dropdown-menu-end">
									<a href="#/" class="dropdown-item d-flex align-items-center">
										<i class="fa fa-fw fa-bookmark fa-lg"></i> 
										<div class="flex-1 ps-1">
											<div>Save Post</div>
											<div class="mt-n1 text-gray-500"><small>Add this to your saved items</small></div>
										</div>
									</a>
									<div class="dropdown-divider"></div>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-edit fa-lg me-1"></i> Edit post</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-user fa-lg me-1"></i> Edit audience</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-bell fa-lg me-1"></i> Turn off notifications for this post</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-language fa-lg me-1"></i> Turn off translations</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-calendar-alt fa-lg me-1"></i> Turn date</a>
									<div class="dropdown-divider"></div>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-archive fa-lg me-1"></i> Move to archive</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-trash-alt fa-lg me-1"></i> Move to Recycle bin</a>
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
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
									<i class="fa fa-thumbs-up fa-fw me-3px"></i> Like
								</a>
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
									<i class="fa fa-comments fa-fw me-3px"></i> Comment
								</a> 
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
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
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-smile fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-camera fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-film fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-sticky-note fa-fw fa-lg d-block"></i></a>
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
						<a href="#/" aria-label="Link">&nbsp;</a>
					</div>
					<div class="timeline-content">
						<div class="timeline-header">
							<div class="userimage"><img src="/img/user/user-4.jpg" alt="" /></div>
							<div class="username">
								<a href="#/">Lelouch Wong <i class="fa fa-check-circle text-blue ms-1"></i></a>
								<div class="text-muted fs-12px">1 days ago <i class="fa fa-globe-americas opacity-5 ms-1"></i></div>
							</div>
							<div>
								<a href="#/" aria-label="Link" class="btn btn-lg border-0 rounded-pill w-40px h-40px p-0 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown">
									<i class="fa fa-ellipsis-h text-gray-600"></i>
								</a>
								<div class="dropdown-menu dropdown-menu-end">
									<a href="#/" class="dropdown-item d-flex align-items-center">
										<i class="fa fa-fw fa-bookmark fa-lg"></i> 
										<div class="flex-1 ps-1">
											<div>Save Post</div>
											<div class="mt-n1 text-gray-500"><small>Add this to your saved items</small></div>
										</div>
									</a>
									<div class="dropdown-divider"></div>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-edit fa-lg me-1"></i> Edit post</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-user fa-lg me-1"></i> Edit audience</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-bell fa-lg me-1"></i> Turn off notifications for this post</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-language fa-lg me-1"></i> Turn off translations</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-calendar-alt fa-lg me-1"></i> Turn date</a>
									<div class="dropdown-divider"></div>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-archive fa-lg me-1"></i> Move to archive</a>
									<a href="#/" class="dropdown-item"><i class="fa fa-fw fa-trash-alt fa-lg me-1"></i> Move to Recycle bin</a>
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
										<a href="#/" aria-label="Link" data-lity-target="/img/gallery/gallery-4.jpg" data-lity><img src="/img/gallery/gallery-4.jpg" alt="" class="mw-100 d-block" /></a>
									</div>
									<div class="col-6">
										<a href="#/" aria-label="Link" data-lity-target="/img/gallery/gallery-5.jpg" data-lity><img src="/img/gallery/gallery-5.jpg" alt="" class="mw-100 d-block" /></a>
									</div>
								</div>
							</div>
				
							<hr class="my-10px" />
							<div class="d-flex align-items-center fw-bold">
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
									<i class="fa fa-thumbs-up fa-fw me-3px"></i> Like
								</a>
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
									<i class="fa fa-comments fa-fw me-3px"></i> Comment</a> 
								<a href="#/" class="flex-fill text-decoration-none text-center text-gray-600">
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
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-smile fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-camera fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="fa fa-film fa-fw fa-lg d-block"></i></a>
											<a href="#/" aria-label="Link" class="btn bg-none text-gray-600 shadow-none px-1"><i class="far fa-sticky-note fa-fw fa-lg d-block"></i></a>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="timeline-item">
					<div class="timeline-icon">
						<a href="#/" aria-label="Link">&nbsp;</a>
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
		</div>
		
		<div class="tab-pane fade" id="profile-about">
			<div class="table-responsive form-inline">
				<table class="table table-profile align-middle">
					<thead>
						<tr>
							<th></th>
							<th>
								<h4>Sean Ngu <small>UXUI + Frontend Developer</small></h4>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="highlight">
							<td class="field">Mood</td>
							<td><a href="#/" class="text-decoration-none fw-bold"><i class="fa fa-plus fa-fw"></i> Add Mood Message</a></td>
						</tr>
						<tr class="divider">
							<td colspan="2"></td>
						</tr>
						<tr>
							<td class="field">Mobile</td>
							<td><i class="fa fa-mobile fa-lg me-5px"></i> +1-(847)- 367-8924 <a href="#/" class="ms-5px text-decoration-none fw-bold"><i class="fa fa-plus fa-fw"></i> Edit</a></td>
						</tr>
						<tr>
							<td class="field">Home</td>
							<td><a href="#/" class="text-decoration-none fw-bold"><i class="fa fa-plus fa-fw"></i> Add Number</a></td>
						</tr>
						<tr>
							<td class="field">Office</td>
							<td><a href="#/" class="text-decoration-none fw-bold"><i class="fa fa-plus fa-fw"></i> Add Number</a></td>
						</tr>
						<tr class="divider">
							<td colspan="2"></td>
						</tr>
						<tr class="highlight">
							<td class="field">About Me</td>
							<td><a href="#/" class="text-decoration-none fw-bold"><i class="fa fa-plus fa-fw"></i> Add Description</a></td>
						</tr>
						<tr class="divider">
							<td colspan="2"></td>
						</tr>
						<tr>
							<td class="field">Country/Region</td>
							<td>
								<select class="form-select w-200px" name="region">
									<option value="US" selected>United State</option>
									<option value="AF">Afghanistan</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
								</select>
							</td>
						</tr>
						<tr>
							<td class="field">City</td>
							<td>Los Angeles</td>
						</tr>
						<tr>
							<td class="field">State</td>
							<td><a href="#/" class="text-decoration-none fw-bold"><i class="fa fa-plus fa-fw"></i> Add State</a></td>
						</tr>
						<tr>
							<td class="field">Website</td>
							<td><a href="#/" class="text-decoration-none fw-bold"><i class="fa fa-plus fa-fw"></i> Add Webpage</a></td>
						</tr>
						<tr>
							<td class="field">Gender</td>
							<td>
								<select class="form-select w-200px" name="gender">
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</td>
						</tr>
						<tr>
							<td class="field">Birthdate</td>
							<td>
								<div class="d-flex align-items-center">
									<select class="form-select w-80px" name="day">
										<option value="04" selected>04</option>
									</select>
									<span class="mx-2">-</span>
									<select class="form-select w-80px" name="month">
										<option value="11" selected>11</option>
									</select>
									<span class="mx-2">-</span>
									<select class="form-select w-100px" name="year">
										<option value="1989" selected>1989</option>
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="field">Language</td>
							<td class="with-form-control">
								<select class="form-select w-200px" name="language">
									<option value="" selected>English</option>
								</select>
							</td>
						</tr>
						<tr class="divider">
							<td colspan="2"></td>
						</tr>
						<tr class="highlight">
							<td class="field">&nbsp;</td>
							<td class="">
								<button type="submit" class="btn btn-primary w-150px">Update</button>
								<button type="submit" class="btn border-0 w-150px ms-5px">Cancel</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<div class="tab-pane fade" id="profile-photos">
			<h4 class="mb-3">Photos ({photos.length})</h4>
			<div class="gallery-v2" id="gallery">
				{#each photos as no}
					<div class="gallery">
						<a href="#/" aria-label="Link" class="ratio ratio-4x3" data-lity data-lity-target="/img/gallery/gallery-{no}.jpg">
							<div class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-{no}-thumb.jpg);"></div>
						</a>
					</div>
				{/each}
			</div>
		</div>
		
		<div class="tab-pane fade" id="profile-videos">
			<h4 class="mb-3">Videos ({youtubeIds.length})</h4>
			
			<div class="row gx-1">
				{#each youtubeIds as id}
					<div class="col-md-3 col-sm-4 mb-1">
						<a href="https://www.youtube.com/watch?v={id}" data-lity>
							<img src="https://img.youtube.com/vi/{id}/mqdefault.jpg" alt="" class="d-block w-100" />
						</a>
					</div>
				{/each}
			</div>
		</div>
		
		<div class="tab-pane fade" id="profile-friends">
			<h4 class="mb-3">Friend List ({friends.length})</h4>
			<div class="row gx-1">
				{#each friends as friend}
					<div class="col-xl-4 col-lg-6 mb-1">
						<div class="p-2 d-flex align-items-center card flex-row border-0 rounded">
							<a href="#/">
								<img src="/img/user/user-{friend.id}.jpg" alt="" class="rounded" width="64" />
							</a>
							<div class="flex-1 ps-3">
								<b class="text-dark">{friend.name}</b>
							</div>
							<div>
								<a href="#/" aria-label="Link" class="btn border-0 w-40px h-40px text-gray-500 rounded-pill d-flex align-items-center justify-content-center" data-bs-toggle="dropdown"><i class="fa fa-ellipsis-h fa-lg"></i></a>
								<div class="dropdown-menu dropdown-menu-end">
									<a href="#/" class="dropdown-item">Action 1</a>
									<a href="#/" class="dropdown-item">Action 2</a>
									<a href="#/" class="dropdown-item">Action 3</a>
									<div class="dropdown-divider"></div>
									<a href="#/" class="dropdown-item">Action 4</a>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
