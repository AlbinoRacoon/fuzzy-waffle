<script>
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	
	let lightbox;
  
  onMount(async () => {
    setPageTitle('Gallery v2');
    
    if (!lightbox) {
      lightbox = new PhotoSwipeLightbox({
        gallery: '.gallery-v2',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.init();
    }
  });
  
  onDestroy(() => {
    if (lightbox) {
			lightbox.destroy();
			lightbox = null;
    }
  });
</script>

<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Gallery</a></li>
	<li class="breadcrumb-item active">Gallery v2</li>
</ol>
<h1 class="page-header">Gallery v2 <small>header small text goes here...</small></h1>

<div class="gallery-v2" id="gallery">
	{#each Array.from({ length: 70 }) as _, i}
		{#if i > 0}
			<div class="gallery">
				<a href="#/" aria-label="Gallery" class="ratio ratio-4x3" data-pswp-src="/img/gallery/gallery-{i}.jpg" data-pswp-width="1200" data-pswp-height="800">
					<div class="bg-size-cover bg-position-center" style="background-image: url(/img/gallery/gallery-{i}-thumb.jpg);"></div>
				</a>
			</div>
		{/if}
	{/each}
</div>
<!-- END gallery-v2 -->