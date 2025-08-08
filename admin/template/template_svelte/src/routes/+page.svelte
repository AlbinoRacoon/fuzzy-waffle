<script>
	import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
	
	onMount(async () => {
  	goto('/dashboard/v3');
	});
</script>