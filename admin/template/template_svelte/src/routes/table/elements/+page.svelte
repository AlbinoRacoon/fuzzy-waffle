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
    setPageTitle('Table Elements');
    
		for (var i = 1; i < 10; i++) {
			let response = await fetch('/data/table/element-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Tables</a></li>
	<li class="breadcrumb-item active">Basic Tables</li>
</ol>
<h1 class="page-header">Basic Tables <small>header small text goes here...</small></h1>
<div class="row">
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Default Table</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="table-responsive">
					<table class="table mb-0">
						<thead>
							<tr>
								<th>#</th>
								<th>Username</th>
								<th>Email Address</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Nicky Almera</td>
								<td>nicky@hotmail.com</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Edmund Wong</td>
								<td>edmund@yahoo.com</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Harvinder Singh</td>
								<td>harvinder@gmail.com</td>
							</tr>
						</tbody>
					</table>
				</div>
			</PanelBody>
			{#if codeArray[1]}
				<HighlightJs code={codeArray[1]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Hover Table</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="table-responsive">
					<table class="table table-hover mb-0 text-dark">
						<thead>
							<tr>
								<th>#</th>
								<th>Username</th>
								<th>Email Address</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Nicky Almera</td>
								<td>nicky@hotmail.com</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Edmund Wong</td>
								<td>edmund@yahoo.com</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Harvinder Singh</td>
								<td>harvinder@gmail.com</td>
							</tr>
						</tbody>
					</table>
				</div>
			</PanelBody>
			{#if codeArray[2]}
				<HighlightJs code={codeArray[2]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Table Small</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="table-responsive">
					<table class="table table-sm mb-0 text-dark">
						<thead>
							<tr>
								<th>#</th>
								<th>Username</th>
								<th>Email Address</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Nicky Almera</td>
								<td>nicky@hotmail.com</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Edmund Wong</td>
								<td>edmund@yahoo.com</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Harvinder Singh</td>
								<td>harvinder@gmail.com</td>
							</tr>
						</tbody>
					</table>
				</div>
			</PanelBody>
			{#if codeArray[3]}
				<HighlightJs code={codeArray[3]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Responsive Table</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th>#</th>
								<th nowrap>Table heading</th>
								<th nowrap>Table heading</th>
								<th nowrap>Table heading</th>
								<th nowrap>Table heading</th>
								<th nowrap>Table heading</th>
								<th nowrap>Table heading</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
								<td>Table cell</td>
							</tr>
						</tbody>
					</table>
				</div>
			</PanelBody>
			{#if codeArray[4]}
				<HighlightJs code={codeArray[4]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Table Striped</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="table-responsive">
					<table class="table table-striped mb-0">
						<thead>
							<tr>
								<th>#</th>
								<th>Username</th>
								<th>Email Address</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Nicky Almera</td>
								<td>nicky@hotmail.com</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Edmund Wong</td>
								<td>edmund@yahoo.com</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Harvinder Singh</td>
								<td>harvinder@gmail.com</td>
							</tr>
						</tbody>
					</table>
				</div>
			</PanelBody>
			{#if codeArray[4]}
				<HighlightJs code={codeArray[4]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Bordered Table</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="table-responsive">
					<table class="table table-bordered mb-0">
						<thead>
							<tr>
								<th>#</th>
								<th>Username</th>
								<th>Email Address</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Nicky Almera</td>
								<td>nicky@hotmail.com</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Edmund Wong</td>
								<td>edmund@yahoo.com</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Harvinder Singh</td>
								<td>harvinder@gmail.com</td>
							</tr>
						</tbody>
					</table>
				</div>
			</PanelBody>
			{#if codeArray[6]}
				<HighlightJs code={codeArray[6]} />
			{/if}
		</Panel>
	</div>
	
	<div class="col-xl-6">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>UI Elements in Table <span class="badge bg-success ms-5px">NEW</span></PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="table-responsive">
					<table class="table table-striped mb-0 align-middle">
						<thead>
							<tr>
								<th>#</th>
								<th>Username</th>
								<th>Email Address</th>
								<th width="1%"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="/img/user/user-1.jpg" alt="" class="rounded h-30px" />
								</td>
								<td>Nicky Almera</td>
								<td>nicky@hotmail.com</td>
								<td nowrap>
									<a href="#/" class="btn btn-sm btn-primary w-60px me-1">Edit</a>
									<a href="#/" class="btn btn-sm btn-white w-60px">Delete</a>
								</td>
							</tr>
							<tr>
								<td>
									<img src="/img/user/user-2.jpg" alt="" class="rounded h-30px" />
								</td>
								<td>Edmund Wong</td>
								<td>edmund@yahoo.com</td>
								<td nowrap>
									<div class="btn-group">
										<a href="#/" class="btn btn-white btn-sm w-90px">Settings</a>
										<a href="#/" class="btn btn-white btn-sm dropdown-toggle w-30px no-caret" aria-label="Example" data-bs-toggle="dropdown">
										<span class="caret"></span>
										</a>
										<div class="dropdown-menu dropdown-menu-end">
											<a href="#/" class="dropdown-item">Action 1</a>
											<a href="#/" class="dropdown-item">Action 2</a>
											<a href="#/" class="dropdown-item">Action 3</a>
											<div class="dropdown-divider"></div>
											<a href="#/" class="dropdown-item">Action 4</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<img src="/img/user/user-3.jpg" alt="" class="rounded h-30px" />
								</td>
								<td>Harvinder Singh</td>
								<td>harvinder@gmail.com</td>
								<td class="with-btn" nowrap>
									<a href="#/" class="btn btn-sm btn-primary w-60px me-1">Edit</a>
									<a href="#/" class="btn btn-sm btn-white w-60px">Delete</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</PanelBody>
			{#if codeArray[7]}
				<HighlightJs code={codeArray[7]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Form Elements in Table <span class="badge bg-success ms-1">NEW</span></PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="table-responsive">
					<table class="table table-striped align-middle mb-0">
						<thead>
							<tr>
								<th>
									<div class="form-check">
										<input type="checkbox" value="" id="table_checkbox_1" class="form-check-input" />
										<label for="table_checkbox_1" class="form-check-label">&nbsp;</label>
									</div>
								</th>
								<th>Username</th>
								<th>Email Address</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div class="form-check">
										<input type="checkbox" value="" id="table_checkbox_2" class="form-check-input" />
										<label for="table_checkbox_2" class="form-check-label">&nbsp;</label>
									</div>
								</td>
								<td>Nicky Almera</td>
								<td>nicky@hotmail.com</td>
							</tr>
							<tr>
								<td>
									<div class="form-check">
										<input type="radio" value="" id="table_radio_1" class="form-check-input" />
										<label for="table_radio_1" class="form-check-label">&nbsp;</label>
									</div>
								</td>
								<td>Edmund Wong</td>
								<td>edmund@yahoo.com</td>
							</tr>
							<tr>
								<td>
									<div class="form-check">
										<input type="radio" value="" id="table_radio_2" class="form-check-input" />
										<label for="table_radio_2" class="form-check-label">&nbsp;</label>
									</div>
								</td>
								<td><input type="text" class="form-control my-n1" value="Harvinder Singh" /></td>
								<td>harvinder@gmail.com</td>
							</tr>
							<tr>
								<td>
									<div class="form-check">
										<input type="radio" value="" id="table_radio_3" class="form-check-input" />
										<label for="table_radio_3" class="form-check-label">&nbsp;</label>
									</div>
								</td>
								<td>
									<div class="input-group my-n1">
										<div class="input-group-text">@</div>
										<input type="text" class="form-control" placeholder="Terry" />
									</div>
								</td>
								<td>terry@gmail.com</td>
							</tr>
						</tbody>
					</table>
				</div>
			</PanelBody>
			{#if codeArray[8]}
				<HighlightJs code={codeArray[8]} />
			{/if}
		</Panel>
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Table Row Classes</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<div class="table-responsive">
					<table class="table mb-0">
						<thead>
							<tr>
								<th>#</th>
								<th>Username</th>
								<th>Email Address</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-active">
								<td>1</td>
								<td>Nicky Almera</td>
								<td>nicky@hotmail.com</td>
							</tr>
							<tr class="table-info">
								<td>2</td>
								<td>Terry Khoo</td>
								<td>terry@gmail.com</td>
							</tr>
							<tr class="table-success">
								<td>3</td>
								<td>Edmund Wong</td>
								<td>edmund@yahoo.com</td>
							</tr>
							<tr class="table-warning">
								<td>4</td>
								<td>Harvinder Singh</td>
								<td>harvinder@gmail.com</td>
							</tr>
							<tr class="table-danger">
								<td>5</td>
								<td>Terry Khoo</td>
								<td>terry@gmail.com</td>
							</tr>
						</tbody>
					</table>
				</div>
			</PanelBody>
			{#if codeArray[9]}
				<HighlightJs code={codeArray[9]} />
			{/if}
		</Panel>
	</div>
</div>
							