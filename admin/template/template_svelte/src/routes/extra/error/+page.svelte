<script>
	import Card from '/src/components/bootstrap/Card.svelte';
	import CardBody from '/src/components/bootstrap/CardBody.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
  
  onMount(async () => {
    setPageTitle('404 Error Page');
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

<div class="error">
	<div class="error-code">404</div>
	<div class="error-content">
		<div class="error-message">We couldn't find it...</div>
		<div class="error-desc mb-4">
			The page you're looking for doesn't exist. <br />
			Perhaps, there pages will help find what you're looking for.
		</div>
		<div>
			<a href="/" class="btn btn-success px-3">Go Home</a>
		</div>
	</div>
</div>
