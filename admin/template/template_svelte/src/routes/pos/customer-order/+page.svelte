<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
	import Icon from '@iconify/svelte';
  import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  
  let menu = '';
	let orderNo = '#0000';
	let orders = [];
	let ordersHistory = [];
	let tableNo = '0';
	let modal = '';
	let modalData = '';
	let modalQuantity = 1;
	let modalSelectedSize = '';
	let modalSelectedAddon = [];
	let modalPosItem = '';
	let mobileSidebarToggled = false;
	let posSidebarBody;
	let totalOrder = 0;
	let totalOrderHistory = 0;
	let subTotalPrice = 0;
	let totalPrice = 0;
	let taxPrice = 0;
	let bootstrap = '';
	
	function calculatePrice() {
		totalPrice = 0;
		subTotalPrice = 0;
		taxPrice = 0;
		totalOrder = 0;
		for (var i = 0; i < orders.length; i++) {
			let subTotal = parseFloat(orders[i].price) * parseInt(orders[i].quantity);
			let tax = parseFloat(orders[i].price) * parseInt(orders[i].quantity) * .06;
			
			subTotalPrice += subTotal;
			taxPrice += tax;
			totalPrice += subTotal + tax;
			totalOrder++;
		}
	}
	
	function toggleMobileSidebar() {
		mobileSidebarToggled = !mobileSidebarToggled;
	}

  function showFoodModal(id) {
		for (var i = 0; i < menu.food.length; i++) {
			if (menu.food[i].id == id) {
				modalData = menu.food[i];
			}
		}
		if (modalData.options && modalData.options.size) {
			modalSelectedSize = modalData.options.size[0].text;
		}
		modalQuantity = 1;
		modalSelectedAddon = [];
		modal = new bootstrap.Modal(modalPosItem);
		modal.show();
	}
	
	function showType(type) {
		for (var i = 0; i < menu.category.length; i++) {
			if (menu.category[i].type == type) {
				menu.category[i].active = true;
			} else {
				menu.category[i].active = false;
			}
		}
		for (var x = 0; x < menu.food.length; x++) {
			if (menu.food[x].type == type || type == 'all') {
				menu.food[x].hide = false;
			} else {
				menu.food[x].hide = true;
			}
		}
	}
	
	function deductQty(id) {
		for (var i = 0; i < orders.length; i++) {
			if (orders[i].id == id) {
				var newQty = parseInt(orders[i].quantity) - 1;
				
				if (newQty < 1) {
					newQty = 1;
				}
				orders[i].quantity = newQty;
			}
		}
		calculatePrice();
	}
	
	function addQty(id) {
		for (var i = 0; i < orders.length; i++) {
			if (orders[i].id == id) {
				var newQty = parseInt(orders[i].quantity) + 1;
				
				orders[i].quantity = newQty;
			}
		}
		calculatePrice();
	}
	
	function toggleConfirmation(id, value) {
		for (var i = 0; i < orders.length; i++) {
			if (orders[i].id == id) {
				orders[i].confirmation = value;
			}
		}
	}
	
	function removeOrder(id) {
		let newOrders = [];
		for (var i = 0; i < orders.length; i++) {
			
			if (orders[i].id != id) {
				newOrders.push(orders[i]);
			}
		}
		orders = newOrders;
		calculatePrice();
	}
	
	function addModalQty() {
		event.preventDefault();
		
		modalQuantity = modalQuantity + 1;
	}
	
	function deductModalQty() {
		event.preventDefault();
		
		let newQty = parseInt(modalQuantity) - 1;
	
		if (newQty < 1) {
			newQty = 1;
		}
		modalQuantity = newQty;
	}
	
	function addToCart() {
		modal.hide();
		
		var options = [];
		var extraPrice = 0;
		if (modalSelectedSize) {
			options.push({
				"key": "size",
				"value": modalSelectedSize
			});
		}
		if (modalSelectedAddon) {
			for (var i = 0; i < modalSelectedAddon.length; i++) {
				options.push({
					"key": "addon",
					"value": modalSelectedAddon[i]
				});
			}
		}
		
		let newOrders = orders;
		newOrders.push({
			"id": (orders.length + 1),
			"image": modalData.image,
			"title": modalData.title,
			"price": modalData.price,
			"quantity": modalQuantity,
			"options": options
		})
		
		orders = newOrders;
		calculatePrice();
		
		setTimeout(() => {
			posSidebarBody.scrollTop = 9999;
		}, 500);
	}
  
  onMount(async () => {
    setPageTitle('POS - Customer Order');
    $appOptions.appContentClass = 'p-0';
    $appOptions.appContentFullHeight = true;
    $appOptions.appSidebarHide = true;
    $appOptions.appHeaderHide = true;
    
    bootstrap = await import('bootstrap');
    
		try {
			const menuData = await fetch('/data/pos/customer-order.json');
			menu = await menuData.json();
			orderNo = menu.orderNo;
			orders = menu.orders;
			ordersHistory = menu.ordersHistory;
			tableNo = menu.tableNo;
			calculatePrice();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
  });
  
  onDestroy(() => {
    $appOptions.appContentClass = '';
    $appOptions.appContentFullHeight = false;
    $appOptions.appSidebarHide = false;
    $appOptions.appHeaderHide = false;
  });
</script>


<!-- BEGIN pos -->
<div class="h-100">
	<div class="pos pos-with-menu pos-with-sidebar" class:pos-sidebar-mobile-toggled={mobileSidebarToggled}>
		<div class="pos-menu">
			<div class="logo">
				<a href="/">
					<div class="logo-img"><i class="fa fa-bowl-rice"></i></div>
					<div class="logo-text">Pine & Dine</div>
				</a>
			</div>
			<div class="nav-container">
				<PerfectScrollbar class="h-100">
					<ul class="nav nav-tabs">
						{#if menu && menu.category}
							{#each menu.category as category}
								<li class="nav-item">
									<a href="#/" class="nav-link" class:active={category.active} on:click|preventDefault={showType(category.type)}>
										<div class="nav-icon"><i class={category.icon}></i></div>
										<div class="nav-text">{category.text}</div>
									</a>
								</li>
							{/each}
						{/if}
					</ul>
				</PerfectScrollbar>
			</div>
		</div>
	
		<div class="pos-content">
			<PerfectScrollbar class="pos-content-container">
				<div class="product-row">
					{#if menu && menu.food}
						{#each menu.food as food}
							{#if !food.hide}
								<div class="product-container">
									<a href="#/" class="product" class:not-available={!food.available} on:click|preventDefault={showFoodModal(food.id)}>
										<div class="img" style="background-image: url({food.image})"></div>
										<div class="text">
											<div class="title">{food.title}</div>
											<div class="desc">{food.description}</div>
											<div class="price">{'$'+food.price}</div>
										</div>
										{#if !food.available}
											<div class="not-available-text">
												<div>Not Available</div>
											</div>
										{/if}
									</a>
								</div>
							{/if}
						{/each}
					{/if}
				</div>
			</PerfectScrollbar>
		</div>
		
		<div class="pos-sidebar">
			<div class="h-100 d-flex flex-column p-0">
				<div class="pos-sidebar-header">
					<div class="back-btn">
						<button type="button" aria-label="Back" on:click|preventDefault={toggleMobileSidebar} class="btn">
							<i class="fa fa-chevron-left"></i>
						</button>
					</div>
					<div class="icon"><i class="fa fa-plate-wheat"></i></div>
					<div class="title">Table {tableNo}</div>
					<div class="order">Order: <b>{orderNo}</b></div>
				</div>
		
				<div class="pos-sidebar-nav">
					<ul class="nav nav-tabs nav-fill">
						<li class="nav-item">
							<a href="#/" class="nav-link active" data-bs-toggle="tab" data-bs-target="#newOrderTab">New Order ({totalOrder})</a>
						</li>
						<li class="nav-item">
							<a href="#/" class="nav-link" data-bs-toggle="tab" data-bs-target="#orderHistoryTab">Order History ({totalOrderHistory})</a>
						</li>
					</ul>
				</div>
		
				<PerfectScrollbar bind:this={posSidebarBody} class="pos-sidebar-body tab-content">
					<div class="tab-pane fade h-100 show active" id="newOrderTab">
						{#if orders && orders.length > 0}
							<div class="pos-table">
								{#each orders as order}
									<div class="row pos-table-row">
										<div class="col-9">
											<div class="pos-product-thumb">
												<div class="img" style="background-image: url({order.image})"></div>
												<div class="info">
													<div class="title">{order.title}</div>
													<div class="single-price">{'$'+ order.price}</div>
													<div class="desc">
														{#if order.options}
															{#each order.options as option}
															<div>- {option.key}: {option.value}</div>
															{/each}
														{/if}
													</div>
													<div class="input-group qty">
														<div class="input-group-append">
															<a href="#/" aria-label="Deduct" class="btn btn-default" on:click|preventDefault={deductQty(order.id)}><i class="fa fa-minus"></i></a>
														</div>
														<input type="text" value={order.quantity} class="form-control" />
														<div class="input-group-append">
															<a href="#/" aria-label="Add" class="btn btn-default" on:click|preventDefault={addQty(order.id)}><i class="fa fa-plus"></i></a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-3 total-price d-flex flex-column">
											<div>${(order.price * order.quantity).toFixed(2)}</div>
											<div class="text-end mt-auto"><a href="#/" aria-label="Remove" on:click|preventDefault={toggleConfirmation(order.id, true)} class="btn btn-sm btn-default"><i class="fa fa-trash"></i></a></div>
										</div>
										
										{#if order.confirmation}
											<div class="pos-remove-confirmation">
												<div class="text-center mx-auto">
													<div><i class="far fa-trash-can fa-2x text-body text-opacity-50"></i></div>
													<div class="mt-1 mb-2">Confirm to remove this item? </div>
													<div>
														<a href="#/" on:click|preventDefault={toggleConfirmation(order.id, false)} class="btn btn-default w-60px me-2">No</a>
														<a href="#/" on:click|preventDefault={removeOrder(order.id)} class="btn btn-danger w-60px">Yes</a>
													</div>
												</div>
											</div>
										{/if}
									</div>
								{/each}
							</div>
						{:else}
							<div class="h-100 d-flex align-items-center justify-content-center text-center p-20">
								<div>
									<div class="mb-3 mt-n5">
										<i class="bi bi-bag text-inverse text-opacity-50" style="font-size: 6em"></i>
									</div>
									<h5>No order found</h5>
								</div>
							</div>
						{/if}
					</div>
					
					<div class="tab-pane fade h-100" id="orderHistoryTab">
						<div class="h-100 d-flex align-items-center justify-content-center text-center p-20">
							<div>
								<div class="mb-3 mt-n5">
									<i class="bi bi-bag text-gray-300" style="font-size: 6em"></i>
								</div>
								<h4>No order history found</h4>
							</div>
						</div>
					</div>
				</PerfectScrollbar>
		
				<div class="pos-sidebar-footer">
					<div class="d-flex align-items-center mb-2">
						<div>Subtotal</div>
						<div class="flex-1 text-end h6 mb-0">${subTotalPrice.toFixed(2)}</div>
					</div>
					<div class="d-flex align-items-center">
						<div>Taxes (6%)</div>
						<div class="flex-1 text-end h6 mb-0">${taxPrice.toFixed(2)}</div>
					</div>
					<hr class="opacity-1 my-10px" />
					<div class="d-flex align-items-center mb-2">
						<div>Total</div>
						<div class="flex-1 text-end h4 mb-0">${totalPrice.toFixed(2)}</div>
					</div>
					<div class="mt-3">
						<div class="btn-group d-flex">
							<a href="#/" class="btn btn-default rounded-3 text-center me-10px w-70px">
								<i class="fa fa-bell d-block fs-18px my-1"></i>
								Service
							</a>
							<a href="#/" class="btn btn-default rounded-3 text-center me-10px w-70px">
								<i class="fa fa-receipt d-block fs-18px my-1"></i>
								Bill
							</a>
							<a href="#/" class="btn btn-theme rounded-3 text-center flex-1">
								<i class="fa fa-shopping-cart d-block fs-18px my-1"></i>
								Submit Order
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<a href="#/" class="pos-mobile-sidebar-toggler" on:click|preventDefault={toggleMobileSidebar}>
	<Icon class="display-6" icon="solar:bag-smile-bold-duotone" />
	<span class="badge">{totalOrder}</span>
</a>
<!-- END pos-mobile-sidebar-toggler -->

<div class="modal modal-pos fade" bind:this={modalPosItem}>
	<div class="modal-dialog modal-lg">
		<div class="modal-content border-0">
			<form on:submit|preventDefault={addToCart}>
				<div v-if="modalData">
					<a href="#/" aria-label="Close" data-bs-dismiss="modal" class="btn-close position-absolute top-0 end-0 m-4"><span class="d-none">&nbsp;</span></a>
					<div class="modal-pos-product">
						<div class="modal-pos-product-img">
							<div class="img" style="background-image: url({modalData.image})"></div>
						</div>
						<div class="modal-pos-product-info d-flex flex-column">
							<div class="fs-4 fw-bold">{modalData.title}</div>
							<div class="fs-6 text-body text-opacity-50 mb-2">
								{modalData.description}
							</div>
							<div class="fs-3 fw-bolder mb-3">${modalData.price}</div>
							<div class="option-row">
								<div class="d-flex mb-3">
									<a href="#/" aria-label="Deduct" class="btn btn-default d-flex align-items-center" on:click|preventDefault={deductModalQty}><i class="fa fa-minus"></i></a>
									<input type="text" class="form-control w-30px fw-bold fs-5 px-0 mx-2 text-center border-0" name="qty" bind:value={modalQuantity} />
									<a href="#/" aria-label="Add" class="btn btn-default d-flex align-items-center" on:click|preventDefault={addModalQty}><i class="fa fa-plus"></i></a>
								</div>
							</div>
							{#if modalData && modalData.options}
								<hr class="mt-0" />
								{#if modalData && modalData.options && modalData.options.size}
									<div class="mb-2">
										<div class="fw-bold fs-6">Size:</div>
										<div class="option-list">
											{#each modalData.options.size as size, index}
												<div class="option">
													<input type="radio" id="size[{index}]" name="size" bind:value={size.text} class="option-input" />
													<label class="option-label" for="size[{index}]">
														<span class="option-text">{size.text}</span>
														<span class="option-price">+{size.price}</span>
													</label>
												</div>
											{/each}
										</div>
									</div>
								{/if}
								{#if modalData && modalData.options && modalData.options.addon}
									<div class="mb-2">
										<div class="fw-bold fs-6">Add On:</div>
										<div class="option-list">
											{#each modalData.options.addon as addon, index}
												<div class="option">
													<input type="checkbox" name={'addon'+ index +']'} bind:value={addon.text} class="option-input" id={'addon['+ index +']'} />
													<label class="option-label" for={'addon['+ index +']'}>
														<span class="option-text">{addon.text}</span>
														<span class="option-price">+{addon.price}</span>
													</label>
												</div>
											{/each}
										</div>
									</div>
								{/if}
							{/if}
							<hr class="mt-0" />
							<div class="row gx-3">
								<div class="col-4">
									<a href="#/" class="btn btn-default fs-14px rounded-3 fw-bold mb-0 d-block py-3 w-100" data-bs-dismiss="modal">Cancel</a>
								</div>
								<div class="col-8">
									<button type="submit" class="btn btn-theme fs-14px rounded-3 fw-bold d-flex justify-content-center align-items-center py-3 m-0 w-100">Add to cart <i class="fa fa-plus ms-3"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>