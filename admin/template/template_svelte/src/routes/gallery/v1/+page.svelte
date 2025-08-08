<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
	
  let galleryData = [{
  	img: '/img/gallery/gallery-1.jpg',
  	id: '#1382 - 3D Arch',
  	title: 'Lorem ipsum dolor sit amet',
  	rating: 3,
  	name: 'Sean Ngu',
  	desc: 'Nunc velit urna, aliquam at interdum sit amet, lacinia sit amet ligula. Quisque et erat eros. Aenean auctor metus in tortor placerat, non luctus justo blandit.',
  	group: 1
  }, {
  	img: '/img/gallery/gallery-2.jpg',
  	id: '#2343 - Madness Arch',
  	title: 'Fusce aliquet ac quam at tincidunt',
  	rating: 2,
  	name: 'Camryn Wong',
  	desc: 'Fusce eu rutrum nisi, ut pretium mi. Sed mollis nisi sed auctor molestie. Vestibulum dictum pharetra leo sed euismod.',
  	group: 1
  }, {
  	img: '/img/gallery/gallery-3.jpg',
  	id: '#3452 - Scottwills Arch',
  	title: 'Etiam lobortis egestas nisl',
  	rating: 5,
  	name: 'Lelouch Wong',
  	desc: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus eget ultricies arcu.',
  	group: 1
  }, {
  	img: '/img/gallery/gallery-4.jpg',
  	id: '#4123 - Scottwills Pinecone',
  	title: 'Donec mi quis volutpat ornare',
  	rating: 0,
  	name: 'Richard Leong',
  	desc: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et augue luctus libero dignissim sodales, sapien consequat lacinia fringilla.',
  	group: 2
  }, {
  	img: '/img/gallery/gallery-5.jpg',
  	id: '#9200 Kariminal Rider',
  	title: 'Donec pretium volutpat ornare',
  	rating: 4,
  	name: 'Derrick Wong',
  	desc: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et augue luctus libero, feugiat sapien consequat lacinia fringilla.',
  	group: 2
  }, {
  	img: '/img/gallery/gallery-6.jpg',
  	id: '#1832 Scottwills Autumn',
  	title: 'Mi quis volutpat ornare sodales',
  	rating: 2,
  	name: 'Apple Tong',
  	desc: 'Ut et augue luctus libero dignissim sodales. Fusce feugiat sapien consequat lacinia fringilla. Vivamus eget ultricies arcu.',
  	group: 3
  }, {
  	img: '/img/gallery/gallery-7.jpg',
  	id: '#0229 Scottwills Autumn 2',
  	title: 'Vestibulum ante ipsum primis',
  	rating: 3,
  	name: 'Thomas Wong',
  	desc: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et augue luctus libero, feugiat sapien consequat lacinia fringilla.',
  	group: 3
  }, {
  	img: '/img/gallery/gallery-8.jpg',
  	id: '#0229 Scottwills Autumn 2',
  	title: 'Nunc eget hendrerit nisi sodales',
  	rating: 5,
  	name: 'Andy Wong',
  	desc: 'Ut et augue nisi sodales luctus libero dignissim sodales. Fusce feugiat nisi sodales sapien consequat lacinia fringilla.',
  	group: 4
  }, {
  	img: '/img/gallery/gallery-9.jpg',
  	id: '#9921 Scottwills Riverbank',
  	title: 'Nunc eget hendrerit nisi dignissim',
  	rating: 0,
  	name: 'William Tan',
  	desc: 'Ut et augue luctus libero dignissim sodales. Fusce feugiat sapien consequat libero dignissim lacinia fringilla.',
  	group: 4
  }, {
  	img: '/img/gallery/gallery-10.jpg',
  	id: '#6436 Scottwills Buss',
  	title: 'Sed mollis nisi sed auctor',
  	rating: 2,
  	name: 'David King',
  	desc: 'Vestibulum dictum pharetra leo sed euismod. Lorem ipsum dolor sit amet, consectetur adipiscing feugiat sapien elit.',
  	group: 4
  }];
  let active = {
  	0: true,
  	1: false,
  	2: false,
  	3: false,
  	4: false,
  };
  
  function show(no) {
  	for (var i = 0; i <= 4; i++) {
  		active[i] = (i == no) ? true : false;
  	}
  	for (var x = 0; x < galleryData.length; x++) {
  		galleryData[x]['hide'] = (galleryData[x]['group'] == no || no == 0) ? false : true;
  	}
  }
  
  onMount(async () => {
    setPageTitle('Gallery v1');
    
  	import('lity');
  	import('lity/dist/lity.min.css');
  });
</script>

<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Gallery</a></li>
	<li class="breadcrumb-item active">Gallery v1</li>
</ol>
<h1 class="page-header">Gallery <small>header small text goes here...</small></h1>
<div id="options" class="mb-3">
	<div class="d-flex flex-wrap text-nowrap mb-n1" id="filter" data-option-key="filter">
		<button class="btn btn-white btn-sm border-0 me-1 mb-1" class:active={active[0]} on:click|preventDefault={() => show(0)}>Show All</button>
		<button class="btn btn-white btn-sm border-0 me-1 mb-1" class:active={active[1]} on:click|preventDefault={() => show(1)}>Gallery Group 1</button>
		<button class="btn btn-white btn-sm border-0 me-1 mb-1" class:active={active[2]} on:click|preventDefault={() => show(2)}>Gallery Group 2</button>
		<button class="btn btn-white btn-sm border-0 me-1 mb-1" class:active={active[3]} on:click|preventDefault={() => show(3)}>Gallery Group 3</button>
		<button class="btn btn-white btn-sm border-0 me-1 mb-1" class:active={active[4]} on:click|preventDefault={() => show(4)}>Gallery Group 4</button>
	</div>
</div>
<div id="gallery" class="gallery row">
	{#each galleryData as gallery}
		{#if !gallery.hide}
			<div class="image col-lg-4 col-sm-6">
				<div class="image-inner">
					<a href="#/" data-lity-target="{gallery.img}" aria-label="Gallery" data-lity>
						<div class="img" style="background-image: url({gallery.img})"></div>
					</a>
					<p class="image-caption">{gallery.id}</p>
				</div>
				<div class="image-info">
					<h5 class="title">{gallery.title}</h5>
					<div class="d-flex align-items-center mb-2">
						<div class="rating">
							{#each Array.from({ length: 5 }) as _, i}
								<span class="star" class:active={ i < gallery.rating }></span>
							{/each}
						</div>
						<div class="ms-auto"><small>by</small> <a href="#/">{gallery.name}</a></div>
					</div>
					<div class="desc">{gallery.desc}</div>
				</div>
			</div>
		{/if}
	{/each}
</div>
