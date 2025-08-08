<script>
	import { goto } from '$app/navigation';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
	
	function submitForm() {
  	goto('/');
  }
  
  onMount(async () => {
    setPageTitle('Register V3');
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

<div class="register register-with-news-feed">
	<div class="news-feed">
		<div class="news-image" style="background-image: url(/img/login-bg/login-bg-15.jpg)"></div>
		<div class="news-caption">
			<h4 class="caption-title"><b>Color</b> Admin App</h4>
			<p>
				As a Color Admin app administrator, you use the Color Admin console to manage your organization’s account, such as add new users, manage security settings, and turn on the services you want your team to access.
			</p>
		</div>
	</div>
	
	<div class="register-container">
		<div class="register-header mb-25px h1">
			<div class="mb-1">Sign Up</div>
			<small class="d-block fs-15px lh-16">Create your Color Admin Account. It’s free and always will be.</small>
		</div>
		
		<div class="register-content">
			<form on:submit|preventDefault={submitForm} method="POST" name="login_form" class="fs-13px">
				<div class="mb-3">
					<label class="mb-2" for="">Name <span class="text-danger">*</span></label>
					<div class="row gx-3">
						<div class="col-md-6 mb-2 mb-md-0">
							<input type="text" class="form-control fs-13px" placeholder="First name" />
						</div>
						<div class="col-md-6">
							<input type="text" class="form-control fs-13px" placeholder="Last name" />
						</div>
					</div>
				</div>
				<div class="mb-3">
					<label class="mb-2" for="">Email <span class="text-danger">*</span></label>
					<input type="text" class="form-control fs-13px" placeholder="Email address" />
				</div>
				<div class="mb-3">
					<label class="mb-2" for="">Re-enter Email <span class="text-danger">*</span></label>
					<input type="text" class="form-control fs-13px" placeholder="Re-enter email address" />
				</div>
				<div class="mb-4">
					<label class="mb-2" for="">Password <span class="text-danger">*</span></label>
					<input type="password" class="form-control fs-13px" placeholder="Password" />
				</div>
				<div class="form-check mb-4">
					<input class="form-check-input" type="checkbox" value="" id="agreementCheckbox" />
					<label class="form-check-label" for="agreementCheckbox">
						By clicking Sign Up, you agree to our <a href="#/">Terms</a> and that you have read our <a href="#/">Data Policy</a>, including our <a href="#/">Cookie Use</a>.
					</label>
				</div>
				<div class="mb-4">
					<button type="submit" class="btn btn-theme d-block w-100 btn-lg h-45px fs-13px">Sign Up</button>
				</div>
				<div class="mb-4 pb-5">
					Already a member? Click <a href="/user/login-v3">here</a> to login.
				</div>
				<hr class="bg-gray-600 opacity-2" />
				<p class="text-center text-gray-600">
					&copy; Color Admin All Right Reserved 2025
				</p>
			</form>
		</div>
	</div>
</div>