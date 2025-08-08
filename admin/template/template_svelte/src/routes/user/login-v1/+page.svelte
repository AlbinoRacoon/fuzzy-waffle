<script>
	import { goto } from '$app/navigation';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
	
	function submitForm() {
  	goto('/');
  }
  
  onMount(async () => {
    setPageTitle('Login');
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

<div class="login login-v1">
	<div class="login-container">
		<div class="login-header">
			<div class="brand">
				<div class="d-flex align-items-center">
					<span class="logo"></span> <b class="me-1">Color</b> Admin
				</div>
				<small>Bootstrap 5 Responsive Admin Template</small>
			</div>
			<div class="icon">
				<i class="fa fa-lock"></i>
			</div>
		</div>
		
		<div class="login-body">
			<div class="login-content fs-13px">
				<form on:submit|preventDefault={submitForm} method="POST" name="login_form">
					<div class="form-floating mb-20px">
						<input type="email" class="form-control fs-13px h-45px" id="emailAddress" placeholder="Email Address" />
						<label for="emailAddress" class="d-flex align-items-center">Email Address</label>
					</div>
					<div class="form-floating mb-20px">
						<input type="password" class="form-control fs-13px h-45px" id="password" placeholder="Password" />
						<label for="password" class="d-flex align-items-center">Password</label>
					</div>
					<div class="form-check mb-20px">
						<input class="form-check-input" type="checkbox" value="" id="rememberMe" />
						<label class="form-check-label" for="rememberMe">
							Remember Me
						</label>
					</div>
					<div class="login-buttons">
						<button type="submit" class="btn btn-theme h-45px d-block w-100 btn-lg">Sign me in</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>