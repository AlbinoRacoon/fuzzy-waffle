<script>
  import { appOptions } from '/src/stores/appOptions.js';
	import AppHeaderMegaMenu from '/src/components/app/AppHeaderMegaMenu.svelte';
  import { slideToggle } from '$lib/utils';
  
  let userData = {
  	name: 'Adam Schwartz',
  	img: '/img/user/user-13.jpg'
  };
  
  let notificationData = [{
  	icon: 'fa fa-bug bg-gray-500',
  	title: 'Server Error Reports',
  	badge: true,
  	time: '3 minutes ago'
  }, {
  	img: '/img/user/user-1.jpg',
  	subIcon: 'fab fa-facebook-messenger text-blue',
  	title: 'John Smith',
  	desc: 'Quisque pulvinar tellus sit amet sem scelerisque tincidunt.',
  	time: '25 minutes ago'
  }, {
  	img: '/img/user/user-2.jpg',
  	subIcon: 'fab fa-facebook-messenger text-blue media-object-icon',
  	title: 'Olivia',
  	desc: 'Quisque pulvinar tellus sit amet sem scelerisque tincidunt.',
  	time: '35 minutes ago'
  }, {
  	icon: 'fa fa-plus bg-gray-500',
  	title: 'New User Registered',
  	time: '1 hour ago'
  }, {
  	icon: 'fa fa-envelope bg-gray-500',
  	subIcon: 'fab fa-google text-warning fs-14px',
  	title: 'New Email From John',
  	time: '2 hour ago'
  }];
  
  function appSidebarMobileToggler() {
  	$appOptions.appSidebarMobileToggled = !$appOptions.appSidebarMobileToggled;
  }
  
  function appSidebarRightMobileToggler() {
		$appOptions.appSidebarEndMobileToggled = !$appOptions.appSidebarEndMobileToggled;
  }
  
  function appSidebarRightDesktopToggler(e) {
  	e.preventDefault();
  	
  	$appOptions.appSidebarEndToggled = !$appOptions.appSidebarEndToggled;
  }
  
  function appTopMenuMobileToggler(e) {
		e.preventDefault();
		slideToggle(document.querySelector('.app-top-menu'));
	};
</script>

<!-- BEGIN #header -->
<div id="header" class="app-header" data-bs-theme={($appOptions.appHeaderInverse) ? 'dark' : '' }>
	<!-- BEGIN navbar-header -->
	<div class="navbar-header">
		{#if $appOptions.appSidebarTwo}
			<button type="button" class="navbar-mobile-toggler" aria-label="Sidebar Right Mobile Toggler" on:click={appSidebarRightMobileToggler}>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		{/if}
		<a href="/" class="navbar-brand"><span class="navbar-logo"></span> <b class="me-3px">Color</b> Admin</a>
		{#if $appOptions.appHeaderMegaMenu}
			<button type="button" class="navbar-mobile-toggler collapsed" aria-label="Top Nav Toggler" data-bs-toggle="collapse" data-bs-target="#top-navbar">
				<span class="fa-stack fa-lg">
					<i class="far fa-square fa-stack-2x"></i>
					<i class="fa fa-cog fa-stack-1x"></i>
				</span>
			</button>
		{/if}
		{#if !$appOptions.appTopMenu}
			<button type="button" class="navbar-mobile-toggler" aria-label="Sidebar Mobile Toggler" on:click={appSidebarMobileToggler}>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		{:else}
			<button type="button" class="navbar-mobile-toggler" aria-label="Top Menu Mobile Toggler" on:click={appTopMenuMobileToggler}>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		{/if}
	</div>
	<!-- END navbar-header -->
	
	{#if $appOptions.appHeaderMegaMenu}<AppHeaderMegaMenu />{/if}
	
	<!-- BEGIN header-nav -->
	<div class="navbar-nav">
		<div class="navbar-item navbar-form">
			<form action="" method="POST" name="search">
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Enter keyword" />
					<button type="submit" class="btn btn-search" aria-label="Search"><i class="fa fa-search"></i></button>
				</div>
			</form>
		</div>
		<div class="navbar-item dropdown">
			<a href="#/" data-bs-toggle="dropdown" class="navbar-link dropdown-toggle icon">
				<i class="fa fa-bell"></i>
				<span class="badge">{notificationData.length}</span>
			</a>
			<div class="dropdown-menu media-list dropdown-menu-end">
				<div class="dropdown-header">NOTIFICATIONS ({notificationData.length})</div>
				{#if notificationData.length > 0}
					{#each notificationData as data}
						<a href="#/" class="dropdown-item media">
							<div class="media-left">
								{#if data.img}<img src="{data.img}" class="media-object" alt="" />{/if}
								{#if data.icon}<i class="media-object {data.icon}"></i>{/if}
								{#if data.subIcon}<i class="media-object-icon {data.subIcon}"></i>{/if}
							</div>
							<div class="media-body">
								{#if data.title}<h6 class="media-heading">{data.title} {#if data.badge}<i class="fa fa-exclamation-circle text-danger"></i>{/if}</h6>{/if}
								{#if data.desc}<p>{data.desc}</p>{/if}
								{#if data.time}<div class="text-muted fs-10px">{data.time}</div>{/if}
							</div>
						</a>
					{/each}
					<div class="dropdown-footer text-center">
						<a href="#/" class="text-decoration-none">View more</a>
					</div>
				{:else}
					<div class="text-center w-300px py-3">
						No notification found
					</div>
				{/if}
			</div>
		</div>
		{#if $appOptions.appHeaderLanguageBar}
		<div class="navbar-item dropdown">
			<a href="#/" class="navbar-link dropdown-toggle" data-bs-toggle="dropdown">
				<span class="fi fi-us" title="us"></span>
				<span class="d-none d-sm-inline ms-1">EN</span> <b class="caret"></b>
			</a>
			<div class="dropdown-menu dropdown-menu-end" style="">
				<a href="#/" class="dropdown-item"><span class="fi fi-us me-2" title="us"></span> English</a>
				<a href="#/" class="dropdown-item"><span class="fi fi-cn me-2" title="cn"></span> Chinese</a>
				<a href="#/" class="dropdown-item"><span class="fi fi-jp me-2" title="jp"></span> Japanese</a>
				<a href="#/" class="dropdown-item"><span class="fi fi-be me-2" title="be"></span> Belgium</a>
				<div class="dropdown-divider"></div>
				<a href="#/" class="dropdown-item text-center">more options</a>
			</div>
		</div>
		{/if}
		<div class="navbar-item navbar-user dropdown">
			<a href="#/" class="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
				{#if userData.img}
					<img src="{userData.img}" alt="" /> 
				{:else}
					<div class="image image-icon bg-gray-800 text-gray-600">
						<i class="fa fa-user"></i>
					</div>
				{/if}
				<span>
					<span class="d-none d-md-inline fw-bold">{userData.name}</span>
					<b class="caret"></b>
				</span>
			</a>
			<div class="dropdown-menu dropdown-menu-end me-1">
				<a href="/extra/profile" class="dropdown-item">Edit Profile</a>
				<a href="/email/inbox" class="dropdown-item d-flex align-items-center">
					Inbox
					<span class="badge bg-danger rounded-pill ms-auto pb-4px">2</span> 
				</a>
				<a href="/calendar" class="dropdown-item">Calendar</a>
				<a href="/extra/settings-page" class="dropdown-item">Settings</a>
				<div class="dropdown-divider"></div>
				<a href="/user/login-v1" class="dropdown-item">Log Out</a>
			</div>
		</div>
		{#if $appOptions.appSidebarTwo}
			<div class="navbar-divider d-none d-md-block"></div>
			<div class="navbar-item d-none d-md-block">
				<a href="#/" on:click={appSidebarRightDesktopToggler} aria-label="Sidebar Right Desktop Toggler" class="navbar-link icon">
					<i class="fa fa-th"></i>
				</a>
			</div>
		{/if}
	</div>
	<!-- END header-nav -->
</div>
<!-- END #header -->