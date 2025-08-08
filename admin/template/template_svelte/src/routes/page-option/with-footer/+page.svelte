<script>
	import AppFooter from '/src/components/app/AppFooter.svelte';
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
  
  let code1 = '';
  
  onMount(async () => {
    setPageTitle('Page with Footer');
    
		let response = await fetch('/data/page-option/with-footer-code-1.json');
		code1 = (await response.text());
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Page Options</a></li>
	<li class="breadcrumb-item active">Page with Footer</li>
</ol>

<h1 class="page-header">Page with Footer <small>header small text goes here...</small></h1>

<Panel class="panel-inverse">
	<PanelHeader>
		<PanelTitle>Installation Settings</PanelTitle>
		<PanelExpandToggler />
	</PanelHeader>
	<PanelBody>
		<p>
			Add the following code for footer page setting.
		</p>
	</PanelBody>
	{#if code1}
		<HighlightJs class="border-0" code={code1}></HighlightJs>
	{/if}
</Panel>

<AppFooter class="m-0 px-0" />