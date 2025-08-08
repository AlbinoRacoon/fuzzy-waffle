<script>
	import Card from '/src/components/bootstrap/Card.svelte';
	import CardBody from '/src/components/bootstrap/CardBody.svelte';
	import CardHeader from '/src/components/bootstrap/CardHeader.svelte';
	import CardFooter from '/src/components/bootstrap/CardFooter.svelte';
	import CardTitle from '/src/components/bootstrap/CardTitle.svelte';
	import CardSubtitle from '/src/components/bootstrap/CardSubtitle.svelte';
	import CardGroup from '/src/components/bootstrap/CardGroup.svelte';
	import CardText from '/src/components/bootstrap/CardText.svelte';
	import CardImgOverlay from '/src/components/bootstrap/CardImgOverlay.svelte';
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
  import { appVariables } from '/src/stores/appVariables.js';
  
  let masonry;
  let masonryContainer;
  
  function percentPosition(node) {
    node.setAttribute('data-masonry', '{"percentPosition": true}');
  }
  
  onMount(async () => {
    setPageTitle('Bootstrap 5');
    
    masonry = await import('masonry-layout');
    new masonry.default(masonryContainer);
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item active">Bootstrap 5</li>
</ol>
<h1 class="page-header mb-10px">Bootstrap 5 <small>header small text goes here...</small></h1>

<p class="mb-20px">
	A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.
</p>

<div class="row">
	<div class="col-xl-3 col-sm-6">
		<div class="mb-10px fs-10px mt-10px"><b class="text-dark">EXAMPLE</b></div>
		<Card class="border-0">
			<img class="card-img-top" src="/img/gallery/gallery-1.jpg" alt="" />
			<CardBody>
				<CardTitle class="mb-10px">Card title</CardTitle>
				<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				<a href="#/" class="btn btn-sm btn-default">Go somewhere</a>
			</CardBody>
		</Card>
		
		<div class="mb-10px fs-10px mt-20px"><b class="text-dark">IMAGE OVERLAYS</b></div>
		<Card class="bg-dark border-0 text-white">
			<img class="card-img" src="/img/gallery/gallery-15.jpg" alt="" />
			<CardImgOverlay class="bg-gray-900 bg-opacity-50 rounded">
				<CardTitle>Card title</CardTitle>
				<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
				<CardText>Last updated 3 mins ago</CardText>
			</CardImgOverlay>
		</Card>
		
		<div class="mb-10px fs-10px mt-20px"><b class="text-dark">INVERTED TEXT</b></div>
		<Card class="bg-dark border-0 text-white">
			<CardBody>
				<CardTitle>Special title treatment</CardTitle>
				<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
				<a href="#/" class="btn btn-sm btn-warning">Go somewhere</a>
			</CardBody>
		</Card>
	</div>
	
	<div class="col-xl-3 col-sm-6">
		<div class="mb-10px fs-10px mt-10px"><b class="text-dark">BLOCKS</b></div>
		<Card class="border-0">
			<CardBody>
				This is some text within a card block.
			</CardBody>
		</Card>
		
		<div class="mb-10px fs-10px mt-20px"><b class="text-dark">TITLE, TEXT & LINKS</b></div>
		<Card class="border-0">
			<CardBody>
				<CardTitle>Card title</CardTitle>
				<CardSubtitle class="mb-10px text-muted">Card subtitle</CardSubtitle>
				<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				<a href="#/" class="card-link">Card link</a>
				<a href="#/" class="card-link">Another link</a>
			</CardBody>
		</Card>
		
		<div class="mb-10px fs-10px mt-20px"><b class="text-dark">WITH IMAGES</b></div>
		
		<Card class="border-0">
			<img class="card-img-top" src="/img/gallery/gallery-2.jpg" alt="" />
			<CardBody>
				<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
			</CardBody>
		</Card>
		
		<div class="mb-10px fs-10px mt-20px"><b class="text-dark">LIST GROUPS</b></div>
		<Card class="mb-4 border-0">
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Cras justo odio</li>
				<li class="list-group-item">Dapibus ac facilisis in</li>
				<li class="list-group-item">Vestibulum at eros</li>
			</ul>
		</Card>
	</div>
	
	<div class="col-xl-3 col-sm-6">
		<div class="mb-10px fs-10px mt-10px"><b class="text-dark">HEADER & FOOTER</b></div>
		<Card class="text-center border-0">
			<CardHeader class="fw-bold">Featured</CardHeader>
			<CardBody>
				<CardTitle>Special title treatment</CardTitle>
				<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
				<a href="#/" class="btn btn-sm btn-primary">Go somewhere</a>
			</CardBody>
			<CardFooter class="fw-bold">2 days ago</CardFooter>
		</Card>
		
		<div class="mb-10px fs-10px mt-20px"><b class="text-dark">NAVIGATION</b></div>
		
		<Card class="text-center border-0">
			<CardHeader>
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
						<a class="nav-link active" data-bs-toggle="tab" href="#card-tab-1">Active</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-bs-toggle="tab" href="#card-tab-2">Link</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#/">Disabled</a>
					</li>
				</ul>
			</CardHeader>
			<CardBody>
				<div class="tab-content p-0 m-0">
					<div class="tab-pane fade active show" id="card-tab-1">
						<CardTitle>Special title treatment</CardTitle>
						<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
						<a href="#/" class="btn btn-sm btn-default">Go somewhere</a>
					</div>
					<div class="tab-pane fade" id="card-tab-2">
						<CardTitle>Special title treatment 2</CardTitle>
						<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
						<a href="#/" class="btn btn-sm btn-yellow">Go somewhere</a>
					</div>
				</div>
			</CardBody>
		</Card>

		<div class="mb-10px fs-10px mt-20px"><b class="text-dark">NAVIGATION PILLS</b></div>
		
		<Card class="text-center border-0">
			<CardHeader>
				<ul class="nav nav-pills card-header-pills">
					<li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#card-pill-1">Active</a></li>
					<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#card-pill-2">Link</a></li>
					<li class="nav-item"><a class="nav-link disabled" data-bs-toggle="tab" href="#/">Disabled</a></li>
				</ul>
			</CardHeader>
			<CardBody>
				<div class="tab-content p-0 m-0">
					<div class="tab-pane fade active show" id="card-pill-1">
						<CardTitle>Special title treatment</CardTitle>
						<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
						<a href="#/" class="btn btn-sm btn-primary">Go somewhere</a>
					</div>
					<div class="tab-pane fade" id="card-pill-2">
						<CardTitle>Special title treatment 2</CardTitle>
						<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
						<a href="#/" class="btn btn-sm btn-success">Go somewhere</a>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
	
	<div class="col-xl-3 col-sm-6">
		<div class="mb-10px fs-10px mt-10px"><b class="text-dark">BACKGROUND VARIANTS</b></div>
		
		<Card class="text-white border-0 bg-teal text-center mb-2">
			<CardBody>
				<blockquote class="blockquote">
					<p>Make it so that <br />everything becomes your<br /> spiritual advisor</p>
				</blockquote>
				<figure>
					<figcaption class="blockquote-footer mt-n2 mb-1 text-white text-opacity-75">
						Someone famous in <cite title="Source Title">Source Title</cite>
					</figcaption>
				</figure>
			</CardBody>
		</Card>
		
		<Card class="text-white border-0 bg-blue text-center mb-2">
			<CardBody>
				<blockquote class="blockquote">
					<p class="mb-2">You don't have <br />to invade a country in order<br /> to be happy</p>
				</blockquote>
				<figure>
					<figcaption class="blockquote-footer mt-n2 mb-1 text-white text-opacity-75">
						Someone famous in <cite title="Source Title">Source Title</cite>
					</figcaption>
				</figure>
			</CardBody>
		</Card>
		
		<Card class="text-white border-0 bg-indigo text-center mb-4">
			<CardBody>
				<blockquote class="blockquote">
					<p class="mb-2">Imagination is to <br />never pretend to be <br /> handicapped</p>
				</blockquote>
				<figure>
					<figcaption class="blockquote-footer mt-n2 mb-1 text-white text-opacity-75">
						Someone famous in <cite title="Source Title">Source Title</cite>
					</figcaption>
				</figure>
			</CardBody>
		</Card>
		
		<div class="mb-10px fs-10px mt-20px"><b class="text-dark">BORDER CARDS</b></div>
		
		<Card class="border-warning text-warning mb-10px">
			<CardBody>
				<blockquote class="blockquote">
					<p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
				</blockquote>
				<figure>
					<figcaption class="blockquote-footer mt-n2 mb-1 text-orange-700">
						Someone famous in <cite title="Source Title">Source Title</cite>
					</figcaption>
				</figure>
			</CardBody>
		</Card>
		
		<Card class="border-danger text-danger mb-10px">
			<CardBody>
				<blockquote class="blockquote">
					<p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
				</blockquote>
				<figure>
					<figcaption class="blockquote-footer mt-n2 mb-1 text-red-700">
						Someone famous in <cite title="Source Title">Source Title</cite>
					</figcaption>
				</figure>
			</CardBody>
		</Card>
	</div>
</div>


<div class="row">
	<div class="col-xl-12">
		<div class="mb-10px fs-10px mt-20px"><b class="text-dark">CARD GROUPS</b></div>
		<CardGroup>
			<Card>
				<div><img class="card-img-top" src="/img/gallery/gallery-6.jpg" alt="" /></div>
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
					<CardText class="text-gray">Last updated 3 mins ago</CardText>
				</CardBody>
			</Card>
			
			<Card>
				<img class="card-img-top" src="/img/gallery/gallery-7.jpg" alt="" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
					<CardText class="text-gray">Last updated 3 mins ago</CardText>
				</CardBody>
			</Card>
			
			<Card>
				<img class="card-img-top" src="/img/gallery/gallery-8.jpg" alt="" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
					<CardText class="text-gray">Last updated 3 mins ago</CardText>
				</CardBody>
			</Card>
			
			<Card>
				<img class="card-img-top" src="/img/gallery/gallery-9.jpg" alt="" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
					<CardText class="text-gray">Last updated 3 mins ago</CardText>
				</CardBody>
			</Card>
		</CardGroup>
	</div>
	
	<div class="col-xl-12">
		<div class="mb-10px fs-10px mt-20px"><b class="text-dark">CARD COLUMNS</b></div>
		<div class="row" bind:this={masonryContainer} use:percentPosition>
			<div class="col-sm-6 col-lg-4 mb-4">
				<Card class="border-0">
					<div class="h-250px rounded-top" style="background-image: url(/img/gallery/gallery-11.jpg); background-position: center; background-size: cover; background-repeat: no-repeat;"></div>
					<CardBody>
						<CardTitle class="mb-2">Card title that wraps to a new line</CardTitle>
						<CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
					</CardBody>
				</Card>
			</div>
			
			<div class="col-sm-6 col-lg-4 mb-4">
				<Card class="border-0">
					<CardBody>
						<blockquote class="blockquote mb-0">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer class="blockquote-footer text-gray">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</footer>
						</blockquote>
					</CardBody>
				</Card>
			</div>
			
			<div class="col-sm-6 col-lg-4 mb-4">
				<Card class="border-0 bg-dark text-white">
					<div class="h-250px rounded-top card-img" style="background-image: url(/img/gallery/gallery-10.jpg); background-position: center; background-size: cover; background-repeat: no-repeat;"></div>
					<CardImgOverlay>
						<CardTitle>Card title</CardTitle>
						<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
						<CardText>Last updated 3 mins ago</CardText>
					</CardImgOverlay>
				</Card>
			</div>
			
			<div class="col-sm-6 col-lg-4 mb-4">
				<Card class="border-0 bg-indigo text-white text-center">
					<CardBody>
						<blockquote class="blockquote mb-0">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
							<footer class="blockquote-footer text-white text-opacity-75">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</footer>
						</blockquote>
					</CardBody>
				</Card>
			</div>
			
			<div class="col-sm-6 col-lg-4 mb-4">
				<Card class="border-0 text-white">
					<div class="h-250px rounded-top card-img" style="background-image: url(/img/gallery/gallery-17.jpg); background-position: center; background-size: cover; background-repeat: no-repeat;"></div>
					<CardImgOverlay>
						<CardTitle>Card title</CardTitle>
						<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
						<CardText>Last updated 3 mins ago</CardText>
					</CardImgOverlay>
				</Card>
			</div>
			
			<div class="col-sm-6 col-lg-4 mb-4">
				<Card class="border-0 text-white bg-dark text-center">
					<CardBody>
						<blockquote class="blockquote mb-0">
							<p>Fusce finibus sed augue quis volutpat. Duis non cursus felis. Nunc tristique lacinia orci, vel iaculis ipsum pretium at. Nullam ac mattis eros. Quisque a mauris in ex vulputate accumsan.</p>
							<footer class="blockquote-footer text-white text-opacity-75">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</footer>
						</blockquote>
					</CardBody>
				</Card>
			</div>
			
			<div class="col-sm-6 col-lg-4 mb-4">
				<Card class="border-0">
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
						<CardText class="text-gray">Last updated 3 mins ago</CardText>
					</CardBody>
				</Card>
			</div>
			
			<div class="col-sm-6 col-lg-4 mb-4">
				<Card class="border-0 text-white">
					<div class="h-250px rounded-top card-img" style="background-image: url(/img/gallery/gallery-13.jpg); background-position: center; background-size: cover; background-repeat: no-repeat;"></div>
					<CardImgOverlay>
						<CardTitle>Card title</CardTitle>
						<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
						<CardText>Last updated 3 mins ago</CardText>
					</CardImgOverlay>
				</Card>
			</div>
			
			<div class="col-sm-6 col-lg-4 mb-4">
				<Card class="border-0 text-center">
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
						<CardText class="text-gray">Last updated 3 mins ago</CardText>
					</CardBody>
				</Card>
			</div>
			
			<div class="col-sm-6 col-lg-4 mb-4">
				<Card class="border-0">
					<div class="h-250px rounded-top" style="background-image: url(/img/gallery/gallery-14.jpg); background-position: center; background-size: cover; background-repeat: no-repeat;"></div>
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					</CardBody>
				</Card>
			</div>
		</div>
	</div>
</div>
