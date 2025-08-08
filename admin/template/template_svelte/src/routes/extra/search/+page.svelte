<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount } from 'svelte';
  
  onMount(async () => {
    setPageTitle('Search Results');
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Extra</a></li>
	<li class="breadcrumb-item active">Search Results</li>
</ol>
<h1 class="page-header">Search Results <small>3 results found</small></h1>
<div class="row">
	<div class="col-md-12">
		<div class="input-group input-group-lg mb-3">
			<input type="text" class="form-control input-white" placeholder="Enter keywords here..." />
			<button type="button" class="btn btn-primary"><i class="fa fa-search fa-fw"></i> Search</button>
			<button type="button" class="btn btn-primary dropdown-toggle no-caret" aria-label="Settings" data-bs-toggle="dropdown">
				<i class="fa fa-cog fa-fw"></i>
			</button>
			<div class="dropdown-menu dropdown-menu-end">
				<a href="#/" class="dropdown-item">Action</a>
				<a href="#/" class="dropdown-item">Another action</a>
				<a href="#/" class="dropdown-item">Something else here</a>
				<div class="dropdown-divider"></div>
				<a href="#/" class="dropdown-item">Separated link</a>
			</div>
		</div>
		
		<div class="d-block d-md-flex align-items-center mb-3">
			<div class="d-flex">
				<div class="dropdown me-2">
					<a href="#/" class="btn btn-white dropdown-toggle" data-bs-toggle="dropdown">
						Filters by <b class="caret"></b>
					</a>
					<div class="dropdown-menu dropdown-menu-start" role="menu">
						<a href="#/" class="dropdown-item">Posted Date</a>
						<a href="#/" class="dropdown-item">View Count</a>
						<a href="#/" class="dropdown-item">Total View</a>
						<div class="dropdown-divider"></div>
						<a href="#/" class="dropdown-item">Location</a>
					</div>
				</div>
				<div class="btn-group">
					<a href="#/" class="btn btn-white" aria-label="Button"><i class="fa fa-list"></i></a>
					<a href="#/" class="btn btn-white" aria-label="Button"><i class="fa fa-th"></i></a>
					<a href="#/" class="btn btn-white" aria-label="Button"><i class="fa fa-th-large"></i></a>
				</div>
			</div>
			<div class="ms-auto d-none d-lg-block">
				<ul class="pagination mb-0">
					<li class="page-item disabled"><a href="#/" class="page-link">«</a></li>
					<li class="page-item active"><a href="#/" class="page-link">1</a></li>
					<li class="page-item"><a href="#/" class="page-link">2</a></li>
					<li class="page-item"><a href="#/" class="page-link">3</a></li>
					<li class="page-item"><a href="#/" class="page-link">4</a></li>
					<li class="page-item"><a href="#/" class="page-link">5</a></li>
					<li class="page-item"><a href="#/" class="page-link">6</a></li>
					<li class="page-item"><a href="#/" class="page-link">7</a></li>
					<li class="page-item"><a href="#/" class="page-link">»</a></li>
				</ul>
			</div>
		</div>
		
		<div class="result-list">
			<div class="result-item">
				<a href="#/" class="result-image" aria-label="Image" style="background-image: url(/img/gallery/gallery-51.jpg)">&nbsp;</a>
				<div class="result-info">
					<h4 class="title"><a href="#/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
					<p class="location">United State, BY 10089</p>
					<p class="desc">
						Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
					</p>
					<div class="btn-row">
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
					</div>
				</div>
				<div class="result-price">
					$92,101 <small>PER MONTH</small>
					<a href="#/" class="btn btn-yellow d-block w-100">View Details</a>
				</div>
			</div>
			<div class="result-item">
				<a href="#/" class="result-image" aria-label="Image" style="background-image: url(/img/gallery/gallery-52.jpg)">&nbsp;</a>
				<div class="result-info">
					<h4 class="title"><a href="#/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
					<p class="location">United State, BY 10089</p>
					<p class="desc">
						Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
					</p>
					<div class="btn-row">
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
					</div>
				</div>
				<div class="result-price">
					$102,232 <small>PER MONTH</small>
					<a href="#/" class="btn btn-yellow d-block w-100">View Details</a>
				</div>
			</div>
			<div class="result-item">
				<a href="#/" class="result-image" aria-label="Image" style="background-image: url(/img/gallery/gallery-53.jpg)">&nbsp;</a>
				<div class="result-info">
					<h4 class="title"><a href="#/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
					<p class="location">United State, BY 10089</p>
					<p class="desc">
						Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
					</p>
					<div class="btn-row">
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
					</div>
				</div>
				<div class="result-price">
					$183,921 <small>PER MONTH</small>
					<a href="#/" class="btn btn-yellow d-block w-100">View Details</a>
				</div>
			</div>
			<div class="result-item">
				<a href="#/" class="result-image" aria-label="Image" style="background-image: url(/img/gallery/gallery-54.jpg)">&nbsp;</a>
				<div class="result-info">
					<h4 class="title"><a href="#/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
					<p class="location">United State, BY 10089</p>
					<p class="desc">
						Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
					</p>
					<div class="btn-row">
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
					</div>
				</div>
				<div class="result-price">
					$82,991 <small>PER MONTH</small>
					<a href="#/" class="btn btn-yellow d-block w-100">View Details</a>
				</div>
			</div>
			<div class="result-item">
				<a href="#/" class="result-image" aria-label="Image" style="background-image: url(/img/gallery/gallery-55.jpg)">&nbsp;</a>
				<div class="result-info">
					<h4 class="title"><a href="#/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
					<p class="location">United State, BY 10089</p>
					<p class="desc">
						Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
					</p>
					<div class="btn-row">
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
					</div>
				</div>
				<div class="result-price">
					$422,999 <small>PER MONTH</small>
					<a href="#/" class="btn btn-yellow d-block w-100">View Details</a>
				</div>
			</div>
			<div class="result-item">
				<a href="#/" class="result-image" aria-label="Image" style="background-image: url(/img/gallery/gallery-56.jpg)">&nbsp;</a>
				<div class="result-info">
					<h4 class="title"><a href="#/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
					<p class="location">United State, BY 10089</p>
					<p class="desc">
						Nunc et ornare ligula. Aenean commodo lectus turpis, eu laoreet risus lobortis quis. Suspendisse vehicula mollis magna vel aliquet. Donec ac tempor neque, convallis euismod mauris. Integer dictum dictum ipsum quis viverra.
					</p>
					<div class="btn-row">
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Analytics"><i class="fa fa-fw fa-chart-bar"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Tasks"><i class="fa fa-fw fa-tasks"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Configuration"><i class="fa fa-fw fa-cog"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Performance"><i class="fa fa-fw fa-tachometer"></i></a>
						<a href="#/" data-toggle="tooltip" aria-label="Link" data-container="body" data-title="Users"><i class="fa fa-fw fa-user"></i></a>
					</div>
				</div>
				<div class="result-price">
					$891,872 <small>PER MONTH</small>
					<a href="#/" class="btn btn-yellow d-block w-100">View Details</a>
				</div>
			</div>
		</div>
		
		<div class="d-flex mt-20px">
			<ul class="pagination ms-auto me-auto me-lg-0">
				<li class="page-item disabled"><a href="#/" class="page-link">«</a></li>
				<li class="page-item active"><a href="#/" class="page-link">1</a></li>
				<li class="page-item"><a href="#/" class="page-link">2</a></li>
				<li class="page-item"><a href="#/" class="page-link">3</a></li>
				<li class="page-item"><a href="#/" class="page-link">4</a></li>
				<li class="page-item"><a href="#/" class="page-link">5</a></li>
				<li class="page-item"><a href="#/" class="page-link">6</a></li>
				<li class="page-item"><a href="#/" class="page-link">7</a></li>
				<li class="page-item"><a href="#/" class="page-link">»</a></li>
			</ul>
		</div>
	</div>
</div>
