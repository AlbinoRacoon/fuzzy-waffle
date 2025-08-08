<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
  
	let orders = [];
	let bootstrap = '';
	let time = '';
	
	function getTotalCompletedItems(items) {
		var count = 0;
		for (var i = 0; i < items.length; i++) {
			if (items[i].status == 'Completed') {
				count++;
			}
		}
		return count;
	}
	
	function setItemStatus(item, status) {
		event.preventDefault();
		if (confirm('Confirm set this order to ' + status + '?') === true) {
			for (var i = 0; i < orders.length; i++) {
				if (orders[i]['items']) {
					for (var x = 0; x < orders[i]['items'].length; x++) {
						if (orders[i]['items'][x] == item) {
							orders[i]['items'][x]['status'] = status;
						}
					}
				}
			}
		}
	}
	
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
    setPageTitle('Kitchen Order');
    $appOptions.appContentClass = 'p-0';
    $appOptions.appContentFullHeight = true;
    $appOptions.appSidebarHide = true;
    $appOptions.appHeaderHide = true;
    
    bootstrap = await import('bootstrap');
    
		try {
			const ordersData = await fetch('/data/pos/kitchen-order.json');
			orders = await ordersData.json();
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
		{#if orders}
			<div class="pos-task-row">
				{#each orders as order}
					<div class="pos-task">
						<div class="pos-task-info">
							<div class="table-no">Table <b>{order.tableNo}</b></div>
							<div class="order-no">Order No: #{order.orderNo}</div>
							<div class="order-type">
								<span class="badge" 
									class:bg-success={order.orderStatus != 'Completed'}
									class:bg-gray-500={order.orderStatus == 'Completed'}>{order.orderType}</span>
							</div>
							{#if order.orderTime}
								<div class="time-pass"><span class:text-danger={order.urgent} class:fw-bold={order.urgent}>{order.orderTime}</span> time</div>
							{/if}
							{#if order.totalOrderTime}
								<div class="time-pass">All dish served<br />{order.totalOrderTime} total time</div>
							{/if}
						</div>
						<div class="pos-task-body">
							<div class="pos-task-completed">
								Completed: <b>({getTotalCompletedItems(order.items)}/{order.items.length})</b>
							</div>
							<div class="pos-task-product-row">
								{#each order.items as item}
									<div class="pos-task-product" class:completed={item.status == 'Completed' || item.status == 'Cancelled'}>
										<div class="pos-task-product-img">
											<div class="cover" style={ 'background-image: url('+ item.image +')' }></div>
											{#if item.status == 'Completed'}
												<div class="caption"><div>Completed</div></div>
											{/if}
											{#if item.status == 'Cancelled'}
												<div class="caption"><div>Cancelled</div></div>
											{/if}
										</div>
										<div class="pos-task-product-info">
											<div class="info">
												<div class="title">{item.title}</div>
												<div class="desc">
													{#if item.note}
														{#each item.note as note}
															<div>- {note}</div>
														{/each}
													{/if}
												</div>
											</div>
											<div class="qty">x{item.quantity}</div>
										</div>
										<div class="pos-task-product-action">
											<a href="#/" class="btn btn-success" 
												on:click|preventDefault={setItemStatus(item, 'Completed')}
												class:disabled={item.status == 'Completed' || item.status == 'Cancelled'}>
												Complete
											</a>
											<a href="#/" class="btn btn-outline-inverse" 
												on:click|preventDefault={setItemStatus(item, 'Cancelled')}
												class:disabled={item.status == 'Completed' || item.status == 'Cancelled'}>
												Cancel
											</a>
										</div>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="px-3 py-5 text-center">
				No order found
			</div>
		{/if}
	</div>
</div>