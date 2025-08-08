<script>
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
  
  let code1 = '';
  
  onMount(async () => {
    setPageTitle('Page with Mixed Menu');
    
		let response = await fetch('/data/page-option/with-mixed-menu-code-1.json');
		code1 = (await response.text());
		
		$appOptions.appTopMenu = true;
  });
  
  onDestroy(() => {
		$appOptions.appTopMenu = false;
  });
</script>

<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Page Options</a></li>
	<li class="breadcrumb-item active">Page with Mixed Menu</li>
</ol>

<h1 class="page-header">Page with Mixed Menu <small>header small text goes here...</small></h1>

<Panel class="panel-inverse">
	<PanelHeader>
		<PanelTitle>Installation Settings</PanelTitle>
		<PanelExpandToggler />
	</PanelHeader>
	<PanelBody>
		<p>
			Add the following code for page with mixed menu setting.
		</p>
	</PanelBody>
	{#if code1}
		<HighlightJs class="border-0" code={code1}></HighlightJs>
	{/if}
</Panel>