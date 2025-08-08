<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
  import Card from '/src/components/bootstrap/Card.svelte';
  import CardBody from '/src/components/bootstrap/CardBody.svelte';
  import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  
	let bootstrap = '';
	let tables = [];
	let time = '';
	let availableTable = 0;
	let mobileSidebarToggled = false;
	let selectedTable = '';
	
	function checkTime(i) {
		if (i < 10) {i = "0" + i};
		return i;
	}
	
	function getTime() {
		let today = new Date();
		let h = today.getHours();
		let m = today.getMinutes();
		let s = today.getSeconds();
		let a;
		m = checkTime(m);
		s = checkTime(s);
		a = (h > 11) ? 'pm' : 'am';
		h = (h > 12) ? h - 12 : h;
		
		setTimeout(getTime, 500);
		
		time = h + ":" + m + a;
	}
	
	function getTotalPrice(orders) {
		var total = 0;
		if (orders) {
			for (var i = 0; i < orders.length; i++) {
				total += parseFloat(orders[i].price);
			}
		}
		return total.toFixed(2);
	}
	
	function toggleTable(table) {
		toggleMobileSidebar();
		
		if (table.selected) {
			selectedTable = '';
			
			for (var i = 0; i < tables.length; i++) {
				tables[i].selected = false;
			}
		} else {
			selectedTable = table;
			
			for (var x = 0; x < tables.length; x++) {
				tables[x].selected = (tables[x].id == table.id) ? true : false;
			}
		}
	}
	
	function getPrice(orders, type) {
		var price = 0;
		
		if (orders) {
			for (var i = 0; i < orders.length; i++) {
				if (type == 'subtotal') {
					price += parseFloat(orders[i].price);
				} else if (type == 'taxes') {
					price += parseFloat(orders[i].price) * 0.06;
				} else if (type == 'total') {
					price += parseFloat(orders[i].price);
					price += parseFloat(orders[i].price) * 0.06
				}
			}
		}
		
		return price.toFixed(2);
	}
	
	function toggleMobileSidebar() {
		mobileSidebarToggled = !mobileSidebarToggled;
		
		if (!mobileSidebarToggled) {
			selectedTable = '';
			
			for (var i = 0; i < tables.length; i++) {
				tables[i].selected = false;
			}
		}
	}
	
	function getAvailableTable(tables) {
		var count = 0;
		for (var i = 0; i < tables.length; i++) {
			if (!tables[i].status) {
				count++;
			}
		}
		return count;
	}
	
	function countTotalTable(tables) {
		return tables.length;
	}
	
  onMount(async () => {
    setPageTitle('Counter Checkout');
    $appOptions.appContentClass = 'p-0';
    $appOptions.appContentFullHeight = true;
    $appOptions.appSidebarHide = true;
    $appOptions.appHeaderHide = true;
    
    bootstrap = await import('bootstrap');
    
		try {
			const tablesData = await fetch('/data/pos/counter-checkout.json');
			tables = await tablesData.json();
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


<div class="pos pos-with-header pos-with-sidebar" class:pos-sidebar-mobile-toggled={mobileSidebarToggled}>
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
			<div class="d-md-flex align-items-center mb-4">
				<div class="pos-booking-title flex-1">
					<div class="fs-24px mb-1">Available Table ({getAvailableTable(tables)}/{countTotalTable(tables)})</div>
					<div class="mb-2 mb-md-0 d-flex">
						<div class="d-flex align-items-center me-3">
							<i class="fa fa-circle fa-fw text-gray-500 fs-9px me-1"></i> Reserved
						</div>
						<div class="d-flex align-items-center me-3">
							<i class="fa fa-circle fa-fw text-warning fs-9px me-1"></i> Table In-use
						</div>
						<div class="d-flex align-items-center me-3">
							<i class="fa fa-circle fa-fw text-theme fs-9px me-1"></i> Table Available
						</div>
					</div>
				</div>
			</div>
			<div class="pos-table-row">
				{#if tables}
					{#each tables as table}
						<div class="pos-table"
								class:selected={table.selected}
								class:available={!table.orders && table.status != 'Reserved'}
								class:in-use={table.orders}
								class:disabled={table.status == 'Reserved'}>
							<a href="#/" class="pos-table-container" on:click|preventDefault={toggleTable(table)}>
								<div class="pos-checkout-table-header">
									<div class="pos-table-status"></div>
									<div class="pos-table-name">
										<div class="name">Table</div>
										<div class="no">{table.tableNo}</div>
										<div class="order">
											{#if table.orders}
												<span>{table.orders.length} order</span>
											{/if}
											{#if table.status == 'Reserved'}
												<span>Reserved for {table.reserveName}</span>
											{/if}
											{#if !table.orders && table.status != 'Reserved'}
												<span>max {table.totalPax} pax</span>
											{/if}
										</div>
									</div>
								</div>
								<div class="pos-table-info-row">
									<div class="pos-table-info-col">
										<div class="pos-table-info-container">
											<span class="icon opacity-50"><i class="far fa-user"></i></span>
											<span class="text">{table.pax} / {table.totalPax}</span>
										</div>
									</div>
									<div class="pos-table-info-col">
										<div class="pos-table-info-container">
											<span class="icon opacity-50"><i class="far fa-clock"></i></span>
											<span class="text">{(table.totalTime) ? table.totalTime : '-'}</span>
										</div>
									</div>
								</div>
								<div class="pos-table-info-row">
									<div class="pos-table-info-col">
										<div class="pos-table-info-container">
											<span class="icon opacity-50"><i class="fa fa-receipt"></i></span>
											<span class="text">${getTotalPrice(table.orders)}</span>
										</div>
									</div>
									<div class="pos-table-info-col">
										<div class="pos-table-info-container">
											<span class="icon opacity-50"><i class="far fa-dollar-sign"></i></span>
											<span class="text">{(table.status != 'Reserved') ? table.status : '-'}</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/each}
				{:else}
					<div class="p-3">
						No records found
					</div>
				{/if}
			</div>
		</div>
	</div>
	
	<div class="pos-sidebar" id="pos-sidebar">
		<div class="pos-sidebar-header">
			<div class="back-btn">
				<button type="button" aria-label="Back" on:click|preventDefault={toggleMobileSidebar} class="btn">
					<i class="fa fa-chevron-left"></i>
				</button>
			</div>
			<div class="icon my-n1"><i class="fa fa-plate-wheat"></i></div>
			<div class="title">Table {(selectedTable && selectedTable.tableNo) ? selectedTable.tableNo : '-'}</div>
			<div class="order">Order: <b>#{(selectedTable && selectedTable.orderNo) ? selectedTable.orderNo : '-'}</b></div>
		</div>
		
		<PerfectScrollbar class="pos-sidebar-body">
			<div class="pos-table">
				{#if selectedTable && selectedTable.orders}
					{#each selectedTable.orders as order}
						<div class="row pos-table-row">
							<div class="col-8">
								<div class="pos-product-thumb">
									<div class="img" style="background-image: url({order.image})"></div>
									<div class="info">
										<div class="title">{order.title}</div>
										<div class="desc">
											{#each order.options as option}
												<div> - {option}</div>
											{/each}
										</div>
									</div>
								</div>
							</div>
							<div class="col-1 total-qty">x{order.quantity}</div>
							<div class="col-3 total-price">${(parseFloat(order.price) * order.quantity).toFixed(2)}</div>
						</div>
					{/each}
				{:else}
					<div class="py-4">No records found</div>
				{/if}
			</div>
		</PerfectScrollbar>
		
		<div class="pos-sidebar-footer">
			<div class="d-flex align-items-center mb-2">
				<div>Subtotal</div>
				<div class="flex-1 text-end h6 mb-0">${getPrice(selectedTable.orders, 'subtotal')}</div>
			</div>
			<div class="d-flex align-items-center">
				<div>Taxes (6%)</div>
				<div class="flex-1 text-end h6 mb-0">${getPrice(selectedTable.orders, 'taxes')}</div>
			</div>
			<hr class="opacity-1 my-10px" />
			<div class="d-flex align-items-center mb-2">
				<div>Total</div>
				<div class="flex-1 text-end h4 mb-0">${getPrice(selectedTable.orders, 'total')}</div>
			</div>
			<div class="d-flex align-items-center mt-3">
				<a href="#/" class="btn btn-default w-80px rounded-3 text-center me-10px">
					<i class="fab fa-paypal d-block fs-18px my-1"></i>
					E-Wallet
				</a>
				<a href="#/" class="btn btn-default w-80px rounded-3 text-center me-10px">
					<i class="fab fa-cc-visa d-block fs-18px my-1"></i>
					CC
				</a>
				<a href="#/" class="btn btn-theme rounded-3 text-center flex-1">
					<i class="fa fa-wallet d-block fs-18px my-1"></i>
					Pay by Cash
				</a>
			</div>
		</div>
		<!-- END pos-sidebar-footer -->
	</div>
</div>