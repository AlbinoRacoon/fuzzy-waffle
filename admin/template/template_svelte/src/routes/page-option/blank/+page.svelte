<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
  
  onMount(async () => {
    setPageTitle('Page Blank');
  });
</script>

<!-- BEGIN breadcrumb -->
<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Page Options</a></li>
	<li class="breadcrumb-item active">Blank Page</li>
</ol>
<!-- END breadcrumb -->
<!-- BEGIN page-header -->
<h1 class="page-header">Blank Page <small>header small text goes here...</small></h1>
<!-- END page-header -->
<!-- BEGIN panel -->
<Panel class="panel-inverse">
	<PanelHeader>
		<PanelTitle>Panel Title here</PanelTitle>
		<PanelExpandToggler />
	</PanelHeader>
	<PanelBody>
		Panel Content Here
	</PanelBody>
</Panel>
<!-- END panel -->