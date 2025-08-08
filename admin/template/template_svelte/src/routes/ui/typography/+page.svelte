<script>
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
  
  let codeArray = [];
  
  onMount(async () => {
    setPageTitle('Typography');
		
		for (var i = 1; i < 15; i++) {
			let response = await fetch('/data/ui/typography-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">UI Elements</a></li>
	<li class="breadcrumb-item active">Typography</li>
</ol>
<h1 class="page-header">Typography <small>header small text goes here...</small></h1>

<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Headings</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<h1>h1. Heading 1</h1>
				<h2>h2. Heading 2</h2>
				<h3>h3. Heading 3</h3>
				<h4>h4. Heading 4</h4>
				<h5>h5. Heading 5</h5>
				<h6>h6. Heading 6</h6>
			</PanelBody>
			{#if codeArray[1]}
				<HighlightJs code={codeArray[1]} />
			{/if}
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>small, semiBold, Bold, Italic</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="text-body">
				<div class="row fs-14px">
					<div class="col-md-6">
						<div class="fs-12px"><small>This line of text is meant to be treated as fine print.</small></div>
						<div><em>rendered as italicized text</em></div>
					</div>
					<div class="col-md-6">
						<div><span class="semi-bold">rendered as semi bold text</span></div>
						<div><strong>rendered as bold text</strong></div>
					</div>
				</div>
			</PanelBody>
			{#if codeArray[2]}
				<HighlightJs code={codeArray[2]} />
			{/if}
		</Panel>
		
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Alignment Classes</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="text-body">
				<p class="text-star">Left aligned text.</p>
				<p class="text-center">Center aligned text.</p>
				<p class="text-end">Right aligned text.</p>
			</PanelBody>
			{#if codeArray[3]}
				<HighlightJs code={codeArray[3]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Emphasis classes</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
				<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
				<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
				<p class="text-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
				<p class="text-success mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
			</PanelBody>
			{#if codeArray[4]}
				<HighlightJs code={codeArray[4]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Unordered List</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="text-body">
				<ul>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Consectetur adipiscing elit</li>
					<li>Nulla volutpat aliquam velit
						<ul>
						<li>Phasellus iaculis neque</li>
						<li>Purus sodales ultricies</li>
						</ul>
					</li>
					<li>Faucibus porta lacus fringilla vel</li>
				</ul>
			</PanelBody>
			{#if codeArray[5]}
				<HighlightJs code={codeArray[5]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Ordered List</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="text-body">
				<ol>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Consectetur adipiscing elit</li>
					<li>Integer molestie lorem at massa</li>
					<li>Facilisis in pretium nisl aliquet</li>
					<li>Nulla volutpat aliquam velit</li>
					<li>Faucibus porta lacus fringilla vel</li>
					<li>Aenean sit amet erat nunc</li>
					<li>Eget porttitor lorem</li>
				</ol>
			</PanelBody>
			{#if codeArray[6]}
				<HighlightJs code={codeArray[6]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Unstyled & Inline List Classes</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody class="text-body">
				<ul class="list-unstyled">
					<li>Lorem ipsum dolor sit amet</li>
					<li>Consectetur adipiscing elit</li>
					<li>Integer molestie lorem at massa</li>
					<li>Facilisis in pretium nisl aliquet</li>
					<li>Nulla volutpat aliquam velit</li>
				</ul>
				<hr class="my-3" />
				<ul class="list-inline">
					<li class="list-inline-item">Lorem ipsum dolor sit amet</li>
					<li class="list-inline-item">Consectetur adipiscing elit</li>
					<li class="list-inline-item">Integer molestie lorem at massa</li>
				</ul>
			</PanelBody>
			{#if codeArray[7]}
				<HighlightJs code={codeArray[7]} />
			{/if}
		</Panel>
	</div>
	<!-- END col-6 -->
	<!-- BEGIN col-6 -->
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Body Copy</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>
					Quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, 
					nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
				</p>
				<p>
					Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus
					auctor fringilla. 
				</p>
			</PanelBody>
			{#if codeArray[8]}
				<HighlightJs code={codeArray[8]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Lead body copy</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p class="lead">
					Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
				</p>
			</PanelBody>
			{#if codeArray[9]}
				<HighlightJs code={codeArray[9]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Abbreviation</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>An abbreviation of the word attribute is  <abbr title="attribute">attr</abbr></p>
				<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr> is the best thing since sliced bread.</p>
			</PanelBody>
			{#if codeArray[10]}
				<HighlightJs code={codeArray[10]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Addresses</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<address>
					<strong>Twitter, Inc.</strong><br />
					795 Folsom Ave, Suite 600<br />
					San Francisco, CA 94107<br />
					<abbr title="Phone">P:</abbr> (123) 456-7890
				</address>
				<address>
					<strong>Full Name</strong><br />
					<a href="mailto:#">first.last@example.com</a>
				</address>
			</PanelBody>
			{#if codeArray[11]}
				<HighlightJs code={codeArray[11]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Blockquote</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<blockquote class="blockquote">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
					<footer class="blockquote-footer">Someone famous <cite title="Source Title">Source Title</cite></footer>
				</blockquote>
				<blockquote class="blockquote text-end">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
					<footer class="blockquote-footer">Someone famous <cite title="Source Title">Source Title</cite></footer>
				</blockquote>
			</PanelBody>
			{#if codeArray[12]}
				<HighlightJs code={codeArray[12]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Description List</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<dl>
					<dt class="text-body">Description lists</dt>
					<dd>A description list is perfect for defining terms.</dd>
					<dt class="text-body mt-10px">Euismod</dt>
					<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
					<dd>Donec id elit non mi porta gravida at eget metus.</dd>
					<dt class="text-body mt-10px">Malesuada porta</dt>
					<dd>Etiam porta sem malesuada magna mollis euismod.</dd>
				</dl>
			</PanelBody>
			{#if codeArray[13]}
				<HighlightJs code={codeArray[13]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Horizontal Description List</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<dl class="row">
					<dt class="col-md-3">Description lists</dt>
					<dd class="col-md-9">A description list is perfect for defining terms.</dd>
					<dt class="col-md-3">Euismod</dt>
					<dd class="col-md-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
					<dt class="col-md-3">Malesuada porta</dt>
					<dd class="col-md-9">Etiam porta sem malesuada magna mollis euismod.</dd>
				</dl>
			</PanelBody>
			{#if codeArray[14]}
				<HighlightJs code={codeArray[14]} />
			{/if}
		</Panel>
	</div>
</div>
