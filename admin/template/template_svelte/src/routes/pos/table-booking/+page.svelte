<script>
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
	import Icon from '@iconify/svelte';
  
	let bootstrap = '';
	let tables = [];
	let time = '';
	let modal = '';
	let modalData = '';
	let availableTable = 0;
	let modalPosBooking;
	
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
	
	function getAvailableTable() {
		let count = 0;
		let today = new Date();
		let h = today.getHours();
		let a;
		a = (h > 11) ? 'pm' : 'am';
		h = (h > 12) ? h - 12 : h;
		
		let currentHour = checkTime(h) + ":00" + a;
		
		if (tables) {
			for (var i = 0; i < tables.length; i++) {
				for (var x = 0; x < tables[i].reservation.length; x++) {
					if (tables[i].reservation[x].time == currentHour && !tables[i].reservation[x].text) {
						count++;
					}
				}
			}
		}
		availableTable = count;
	}
	
	function getStatus(t, text) {
		let timeSplit = t.split(':');
		let clock = timeSplit[1].split('00');
		let ampm = clock[1];
		let hour = parseInt(t[0]);
		let fullHour = (ampm == 'pm' && hour < 12) ? hour + 12 : hour;
		let today = new Date();
		let currentFullHour = today.getHours();
		
		if (fullHour == currentFullHour && text) {
			return 'in-progress';
		} else if (currentFullHour > fullHour && text) {
			return 'completed';
		} else if (currentFullHour < fullHour && text) {
			return 'upcoming';
		}
		return '';
	}
	
	function checkSameHour(time) {
		let today = new Date();
		let currentFullHour = today.getHours();
		let currentAmPm = (currentFullHour > 12) ? 'pm' : 'am';
		let currentHour = (currentFullHour > 12) ? currentFullHour - 12 : currentFullHour;
		    currentHour = (currentHour < 10) ? '0' + currentHour : currentHour;
		let currentTime = currentHour + ':00' + currentAmPm;
		
		if (currentTime == time) {
			return true;
		}
		return false;
	}
	
	function checkAvailable(reservation) {
		for (var x = 0; x < reservation.length; x++) {
			let time = reservation[x].time.split(':');
			let hour = parseInt(time[0]);
			let today = new Date();
			let currentHour = today.getHours();
			    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
			
			if (currentHour == hour && !reservation[x].text) {
				return true;
			}
		}
		return false;
	}
	
	function showBookingModal(table) {
		modalData = table;
		modal = new bootstrap.Modal(modalPosBooking);
		modal.show();
	}
	
	function submitBooking() {
		for (var i = 0; i < tables.length; i++) {
			if (tables[i].id == modalData.id) {
				tables[i] = modalData;
			}
		}
		modal.hide();
	}
	
  onMount(async () => {
    setPageTitle('Table Booking');
    $appOptions.appContentClass = 'p-0';
    $appOptions.appContentFullHeight = true;
    $appOptions.appSidebarHide = true;
    $appOptions.appHeaderHide = true;
    
    bootstrap = await import('bootstrap');
    
		try {
			const tablesData = await fetch('/data/pos/table-booking.json');
			tables = await tablesData.json();
			getAvailableTable();
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
		<div class="pos-content-container p-4">
			<div class="d-md-flex align-items-center mb-4">
				<div class="pos-booking-title flex-1">
					<div class="fs-24px mb-1">Available Table ({availableTable}/{tables.length})</div>
					<div class="mb-2 mb-md-0 d-flex">
						<div class="d-flex align-items-center me-3">
							<i class="fa fa-circle fa-fw text-gray-700 fs-9px me-1"></i> Completed
						</div>
						<div class="d-flex align-items-center me-3">
							<i class="fa fa-circle fa-fw text-warning fs-9px me-1"></i> Upcoming
						</div>
						<div class="d-flex align-items-center me-3">
							<i class="fa fa-circle fa-fw text-success fs-9px me-1"></i> In-progress
						</div>
					</div>
				</div>
				<div>
					<div class="w-200px">
						<input type="date" class="form-control form-control-lg fs-13px" placeholder="Today's">
					</div>
				</div>
			</div>
			<div class="row">
				{#if tables}
					{#each tables as table}
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
							<div class="pos-table-booking position-relative">
								<div class="pos-table-booking-container">
									<div class="pos-table-booking-header">
										<div class="d-flex align-items-center">
											<div class="flex-1">
												<div class="title">TABLE</div>
												<div class="no">{table.name}</div>
												<div class="desc">max {table.pax} pax</div>
											</div>
											{#if checkAvailable(table.reservation)}
												<div class="text-theme display-5">
													<Icon icon="solar:check-circle-line-duotone" />
												</div>
											{:else}
												<div class="text-gray-600 display-5">
													<Icon icon="solar:check-circle-line-duotone" />
												</div>
											{/if}
										</div>
									</div>
									<div class="pos-table-booking-body">
										{#each table.reservation as reservation}
											<div class="booking" class:highlight={checkSameHour(reservation.time)}>
												<div class="time">{reservation.time}</div>
												<div class="info">{(reservation.text) ? reservation.text : '-'}</div>
												<div class={'status '+ getStatus(reservation.time, reservation.text)}></div>
											</div>
										{/each}
									</div>
								</div>
								<a href="#/" class="stretched-link" aria-label="Show Booking Modal" on:click|preventDefault={showBookingModal(table)}>&nbsp;</a>
							</div>
						</div>
					{/each}
				{:else}
					<div class="col">
						No records found
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>


<div class="modal modal-pos fade" bind:this={modalPosBooking}>
	<div class="modal-dialog modal-lg">
		<div class="modal-content border-0">
			{#if modalData}
				<form on:submit|preventDefault={submitBooking}>
					<div class="modal-body">
						<div class="d-flex align-items-center mb-3">
							<h4 class="modal-title d-flex align-items-center">
								<i class="fa fa-bowl-rice fs-2 me-2 my-n1"></i>
								Table {modalData.name} 
								<small class="fs-13px fw-bold ms-2">max {modalData.pax} pax</small>
							</h4>
							<a href="#/" data-bs-dismiss="modal" aria-label="Close" class="ms-auto btn-close">&nbsp;</a>
						</div>
						<div class="row">
							<div class="col-lg-6">
								{#if modalData.reservation}
									{#each modalData.reservation as reservation, index}
										{#if index <= 7}
											<div class="form-group mb-2">
												<div class="input-group">
													<div class="input-group-text fw-bold">{reservation.time}</div>
													<input type="text" class="form-control" placeholder="" bind:value={reservation.text} />
												</div>
											</div>
										{/if}
									{/each}
								{/if}
							</div>
							<div class="col-lg-6">
								{#if modalData.reservation}
									{#each modalData.reservation as reservation, index}
										{#if index > 7}
											<div class="form-group mb-2">
												<div class="input-group">
													<div class="input-group-text fw-bold">{reservation.time}</div>
													<input type="text" class="form-control" placeholder="" bind:value={reservation.text} />
												</div>
											</div>
										{/if}
									{/each}
								{/if}
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<a href="#/" class="btn btn-default w-100px" data-bs-dismiss="modal">Cancel</a>
						<button type="submit" class="btn btn-success w-100px">Book</button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</div>
<!-- END #modalPosBooking -->