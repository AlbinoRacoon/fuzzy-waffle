<script>
	import { goto } from '$app/navigation';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
	
	function submitForm() {
  	goto('/');
  }
  
  let activeBg = '/img/login-bg/login-bg-17.jpg';
  let bgList = [
  	{ active: true, img: '/img/login-bg/login-bg-17.jpg' },
  	{ active: false, img: '/img/login-bg/login-bg-16.jpg' },
  	{ active: false, img: '/img/login-bg/login-bg-15.jpg' },
  	{ active: false, img: '/img/login-bg/login-bg-14.jpg' },
  	{ active: false, img: '/img/login-bg/login-bg-13.jpg' },
  	{ active: false, img: '/img/login-bg/login-bg-12.jpg' }
  ];
  
  function changeBg(e, bg) {
  	e.preventDefault();
  	
  	activeBg = bg;
  	
  	for (var i = 0; i < bgList.length; i++) {
  		bgList[i]['active'] = (bgList[i]['img'] == bg) ? true : false;
  	}
  }
  
  onMount(async () => {
    setPageTitle('Login V2');
    $appOptions.appContentClass = 'p-0';
    $appOptions.appSidebarHide = true;
    $appOptions.appHeaderHide = true;
  });
  
  onDestroy(() => {
    $appOptions.appContentClass = '';
    $appOptions.appSidebarHide = false;
    $appOptions.appHeaderHide = false;
  });
</script>


<div class="login login-v2 fw-bold">
	<div class="login-cover">
		<div class="login-cover-img" style="background-image: url({activeBg})" data-id="login-cover-image"></div>
		<div class="login-cover-bg"></div>
	</div>
	
	<div class="login-container">
		<div class="login-header">
			<div class="brand">
				<div class="d-flex align-items-center">
					<span class="logo"></span> <b>Color</b> Admin
				</div>
				<small>Bootstrap 5 Responsive Admin Template</small>
			</div>
			<div class="icon">
				<i class="fa fa-lock"></i>
			</div>
		</div>
		
		<div class="login-content">
			<form on:submit|preventDefault={submitForm} method="POST" name="login_form">
				<div class="form-floating mb-20px">
					<input type="text" class="form-control fs-13px h-45px border-0" placeholder="Email Address" id="emailAddress" />
					<label for="emailAddress" class="d-flex align-items-center text-gray-600 fs-13px">Email Address</label>
				</div>
				<div class="form-floating mb-20px">
					<input type="password" class="form-control fs-13px h-45px border-0" placeholder="Password" />
					<label for="emailAddress" class="d-flex align-items-center text-gray-600 fs-13px">Password</label>
				</div>
				<div class="form-check mb-20px">
					<input class="form-check-input border-0" type="checkbox" value="1" id="rememberMe" />
					<label class="form-check-label fs-13px text-gray-500" for="rememberMe">
						Remember Me
					</label>
				</div>
				<div class="mb-20px">
					<button type="submit" class="btn btn-theme d-block w-100 h-45px btn-lg">Sign me in</button>
				</div>
				<div class="text-gray-500">
					Not a member yet? Click <a href="/user/register-v3" class="text-white">here</a> to register.
				</div>
			</form>
		</div>
	</div>
</div>

<div class="login-bg-list clearfix">
	{#each bgList as bg}
		<div class="login-bg-list-item" class:active={bg.active}>
			<a href="#/" class="login-bg-list-link" aria-label="Link" on:click={(e) => changeBg(e, bg.img)} style="background-image: url({ bg.img })"><span class="d-none"></span></a>
		</div>
	{/each}
</div>