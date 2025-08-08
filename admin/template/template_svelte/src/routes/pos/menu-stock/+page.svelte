<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
  
	let menus = [];
	let bootstrap = '';
	let time = '';
	
	function checkTime(i) {
		if (i < 10) {i = "0" + i};
		return i;
	}
	
	function getTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		var a;
		m = checkTime(m);
		s = checkTime(s);
		a = (h > 11) ? 'pm' : 'am';
		h = (h > 12) ? h - 12 : h;
		
		setTimeout(getTime, 500);
		
		time = h + ":" + m + a;
	}
	
  onMount(async () => {
    setPageTitle('Menu Stock');
    $appOptions.appContentClass = 'p-0';
    $appOptions.appContentFullHeight = true;
    $appOptions.appSidebarHide = true;
    $appOptions.appHeaderHide = true;
    
    bootstrap = await import('bootstrap');
    
		try {
			const menusData = await fetch('/data/pos/menu-stock.json');
			menus = await menusData.json();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
		
		getTime();
  });
  
  onDestroy(() => {
    $appOptions.appContentClass = '';
    $appOptions.appContentFullHeight = false;
    $appOptions.appSidebarHide = false;
    $appOptions.appHeaderHide = false;
  });
</script>


<div class="pos pos-with-header">
	<div class="pos-header">
		<div class="logo">
			<a href="/">
				<div class="logo-img"><i class="fa fa-bowl-rice fs-2"></i></div>
				<div class="logo-text">Pine & Dine</div>
			</a>
		</div>
		<div class="time" id="time">{time}</div>
		<div class="nav">
			<div class="nav-item">
				<a href="/pos/counter-checkout" aria-label="Counter Checkout" class="nav-link">
					<i class="far fa-credit-card nav-icon"></i>
				</a>
			</div>
			<div class="nav-item">
				<a href="/pos/kitchen-order" aria-label="Kitchen Order" class="nav-link">
					<i class="far fa-clock nav-icon"></i>
				</a>
			</div>
			<div class="nav-item">
				<a href="/pos/table-booking" aria-label="Table Booking" class="nav-link">
					<i class="far fa-calendar-check nav-icon"></i>
				</a>
			</div>
			<div class="nav-item">
				<a href="/pos/menu-stock" aria-label="Menu Stock" class="nav-link">
					<i class="fa fa-chart-pie nav-icon"></i>
				</a>
			</div>
		</div>
	</div>
	
	<div class="pos-content">
		<div class="pos-content-container">
			<div class="row gx-0">
				{#if menus}
					{#each menus as menu, index}
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" style="background-image: url({menu.image})"></div>
										</div>
										<div class="product-info">
											<div class="title">{menu.title}</div>
											<div class="desc">{menu.description}</div>
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" bind:value={menu.stock} />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="form-check form-switch">
															<input class="form-check-input" type="checkbox" name="qty" id="product{index}" checked={menu.available} value="1" />
															<label class="form-check-label" for="product{index}"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#/" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#/" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
		
</div>