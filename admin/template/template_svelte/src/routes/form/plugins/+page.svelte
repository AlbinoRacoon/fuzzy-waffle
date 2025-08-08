<script>
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	
	import Card from '/src/components/bootstrap/Card.svelte';
	import CardBody from '/src/components/bootstrap/CardBody.svelte';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
	import NavScrollTo from '/src/components/app/NavScrollTo.svelte';
	import Tags from 'svelte-tags-input';
	import IMask from 'imask';
	import Select from 'svelte-select';
	import { HsvPicker } from 'svelte-color-picker';
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
  import flatpickr from 'flatpickr';
  import Awesomplete from 'awesomplete';
  import 'flatpickr/dist/flatpickr.min.css';
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  
  let selectedValue = '';
  let codeArray = [];
  let items = ['One', 'Two', 'Three'];
  let trix;
  let complexItems = [
		{value: 'chocolate', label: 'Chocolate', group: 'Sweet'},
    {value: 'pizza', label: 'Pizza', group: 'Savory'},
    {value: 'cake', label: 'Cake', group: 'Sweet', selectable: false},
    {value: 'chips', label: 'Chips', group: 'Savory'},
    {value: 'ice-cream', label: 'Ice Cream', group: 'Sweet'}
	];
	let color = '#000000';
	let value = null;
  
  function colorCallback(rgba) {
    color = 'rgba('+ rgba.detail.r +','+ rgba.detail.g +','+ rgba.detail.b +','+ rgba.detail.a +')';
	}
  
  let datepicker;
  let daterangepicker;
  let timepicker;
  let maskedInput;
  let maskedInputElm;
  let typeahead;
  let tagsInputAutocomplete;
  
  onMount(async () => {
    setPageTitle('Form Plugins');
    
		let bootstrap = await import('bootstrap');
		let quill = await import('quill');
		new quill.default('#quillEditor', {
			theme: 'snow'
		});
		
		for (var i = 1; i < 10; i++) {
			let response = await fetch('/data/form/plugin-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
    
    datepicker = flatpickr('#datepickerInput');
    
    daterangepicker = flatpickr("#daterangepickerInput", {
      mode: 'range',
      dateFormat: 'Y-m-d'
    });
		
		timepicker = flatpickr("#timepickerInput", {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i"
    });
    
    typeahead = new Awesomplete(document.getElementById('typeaheadInput'), {
      list: ['One','Two','Three'],
      minChars: 1,
      maxItems: 5,
      autoFirst: true
    });
		
		maskedInput = IMask(maskedInputElm, {
			mask: '(000)000-0000'
		});
		
		tagsInputAutocomplete = ['javascript', 'css', 'html'];
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Form Stuff</a></li>
	<li class="breadcrumb-item active">Form Plugins</li>
</ol>
<h1 class="page-header">Form Plugins <small>header small text goes here...</small></h1>



<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Datepicker</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Flatpickr is a versatile JavaScript library for creating date pickers in web applications. Please read the <a href="https://flatpickr.js.org/" target="_blank">official documentation</a> for the full list of options.</p>
				<form>
					<div class="row">
						<div class="col-xl-6">
							<div class="mb-0">
								<label class="form-label" for="datepickerInput">Default <span class="text-danger">*</span></label>
								<input type="text" class="form-control" name="datepicker" placeholder="yyyy-mm-dd" id="datepickerInput" />
							</div>
						</div>
					</div>
				</form>
			</PanelBody>
			{#if codeArray[1]}
				<HighlightJs code={codeArray[1]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Daterangepicker</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>With easy configuration options, Flatpickr can also be adapted for date range selection (daterangepicker), offering flexibility and a user-friendly interface for web applications. Please read the <a href="https://flatpickr.js.org/" target="_blank">official documentation</a> for the full list of options.</p>
				<form>
					<div class="row">
						<div class="col-xl-6">
							<div class="mb-0">
								<label class="form-label" for="daterangepickerInput">Default Date Range</label>
								<input type="text" class="form-control" placeholder="yyyy-mm-dd to yyyy-mm-dd" name="daterangepicker" id="daterangepickerInput" />
							</div>
						</div>
					</div>
				</form>
			</PanelBody>
			{#if codeArray[2]}
				<HighlightJs code={codeArray[2]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Timepicker</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>While not inherently a standalone time picker, Flatpickr can be configured to function as one by disabling the date component. Please read the <a href="https://flatpickr.js.org/" target="_blank">official documentation</a> for the full list of options.</p>	
				<form>
					<div class="row">
						<div class="col-xl-6">
							<div class="mb-0">
								<label class="form-label" for="timepickerInput">Default <span class="text-danger">*</span></label>
								<input type="text" class="form-control" placeholder="hh:mm" name="timepicker" id="timepickerInput" />
							</div>
						</div>
					</div>
				</form>
			</PanelBody>
			{#if codeArray[3]}
				<HighlightJs code={codeArray[3]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Typeahead</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Awesomplete is a lightweight, dependency-free JavaScript library for autocompletion. Please read the <a href="https://projects.verou.me/awesomplete/" target="_blank">official documentation</a> for the full list of options.</p>
				<form>
					<div class="row">
						<div class="col-md-6">
							<div class="mb-0">
								<label class="form-label" for="typeaheadInput">Default <span class="text-danger">*</span></label>
								<input type="text" id="typeaheadInput" name="typeaheadInput" class="form-control" placeholder="Type to search" />
							</div>
						</div>
					</div>
					<div class="pt-1 text-body text-opacity-75 fw-bold">Enter 'one', 'two' or 'three' for typeahead preview</div>
				</form>
			</PanelBody>
			{#if codeArray[4]}
				<HighlightJs code={codeArray[4]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Tags Input</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Svelte Tags Input is a versatile and user-friendly Svelte component designed for handling tags or tokens within a form or input field.  Please read the <a href="https://svelte-tags-input.vercel.app/" target="_blank">official documentation</a> for the full list of options.</p>
				<form>
					<div class="row">
						<div class="col-xl-8">
							<div class="mb-0">
								<label class="form-label" for="tagsInput">Default <span class="text-danger">*</span></label>
								<div>
									<Tags autoComplete={tagsInputAutocomplete} />
								</div>
								<div class="pt-1 text-body text-opacity-50 fw-bold">Enter 'javascript', 'css' for autocomplete preview</div>
							</div>
						</div>
					</div>
				</form>
			</PanelBody>
			{#if codeArray[5]}
				<HighlightJs code={codeArray[5]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Masked Input</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>IMask is a versatile and lightweight JavaScript library for creating input masks in web applications. It allows developers to easily define and apply masks to input fields, ensuring a consistent and formatted input from users. Please read the <a href="https://imask.js.org/guide.html" target="_blank">official documentation</a> for the full list of options.</p>
				<form>
					<div class="row">
						<div class="col-xl-6">
							<div class="mb-0">
								<label class="form-label" for="maskedInput">Default <span class="text-danger">*</span></label>
								<input class="form-control" bind:this={maskedInputElm} placeholder="(999) 999-9999">
							</div>
						</div>
					</div>
				</form>
			</PanelBody>
			{#if codeArray[6]}
				<HighlightJs code={codeArray[6]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Editor</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Quill is a feature-rich, modern WYSIWYG (What You See Is What You Get) text editor designed for web applications. It offers a sleek and customizable interface, allowing users to create and edit content with ease. Please read the <a href="https://quilljs.com/" target="_blank">official documentation</a> for the full list of options.</p>
				<form>
					<div id="quillEditor">
						<p>Hello World!</p>
						<p>Some initial <strong>bold</strong> text</p>
						<p><br></p>
					</div>
				</form>
			</PanelBody>
			{#if codeArray[7]}
				<HighlightJs code={codeArray[7]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Select</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Svelte Select is a powerful and flexible dropdown/select component tailored for Svelte applications. This feature-rich component simplifies the implementation of dropdown menus and select inputs, offering a smooth user experience. Please read the <a href="https://github.com/rob-balfre/svelte-select" target="_blank">official documentation</a> for the full list of options.</p>
				<form>
					<div class="row">
						<div class="col-xl-6">
							<div class="mb-xl-0 mb-3">
								<label class="form-label" for="selectInput">Default <span class="text-danger">*</span></label>
								<Select {items} bind:value />
							</div>
						</div>
						<div class="col-xl-6">
							<div class="mb-0">
								<label class="form-label" for="multipleSelectInput">Multiple SelectBox <span class="text-danger">*</span></label>
								<Select items={complexItems} multiple={true}></Select>
							</div>
						</div>
					</div>
				</form>
			</PanelBody>
			{#if codeArray[8]}
				<HighlightJs code={codeArray[8]} />
			{/if}
		</Panel>
	</div>
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Colorpicker</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<p>Svelte Color Picker is a lightweight and user-friendly component designed for integration into Svelte applications, providing a seamless way to incorporate color selection functionality. Please read the <a href="https://github.com/efeskucuk/svelte-color-picker" target="_blank">official documentation</a> for the full list of options.</p>
				<form>
					<div class="row">
						<div class="col-xl-6">
							<div class="mb-0">
								<label class="form-label" for="colorpicker">Default <span class="text-danger">*</span></label>
								<div class="input-group position-relative">
									<span class="input-group-text p-1">
										<span class="h-20px w-20px rounded d-block mx-3px" style="background: {color}"></span>
									</span>
									<a href="#/" aria-label="Example" class="stretched-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"><span class="d-none">&nbsp;</span></a>
									<div class="dropdown-menu p-2">
										<HsvPicker on:colorChange={colorCallback} startColor={color}/>
									</div>
									<input type="text" bind:value={color} class="form-control">
								</div>
							</div>
						</div>
					</div>
				</form>
			</PanelBody>
			{#if codeArray[9]}
				<HighlightJs code={codeArray[9]} />
			{/if}
		</Panel>
	</div>
</div>