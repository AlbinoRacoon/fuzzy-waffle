<script>
	import { goto } from '$app/navigation';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appOptions } from '/src/stores/appOptions.js';
  
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let targetDate = new Date('December 31, '+ currentYear +' 23:59:59'); 
  let remainingTime = calculateRemainingTime();
  let countdownInterval;

  function calculateRemainingTime() {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) {
      clearInterval(countdownInterval);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  function startCountdown() {
    countdownInterval = setInterval(() => {
      remainingTime = calculateRemainingTime();
    }, 1000);
  }

  function stopCountdown() {
    clearInterval(countdownInterval);
  }
	
  onMount(async () => {
    setPageTitle('Coming Soon Page');
    $appOptions.appContentClass = 'p-0';
    $appOptions.appSidebarHide = true;
    $appOptions.appHeaderHide = true;
    
    startCountdown();
  });
  
  onDestroy(() => {
    $appOptions.appContentClass = '';
    $appOptions.appSidebarHide = false;
    $appOptions.appHeaderHide = false;
    
    stopCountdown();
  });
  
  function submitForm() {
  	goto('/');
  }
</script>



<div class="coming-soon">
	<div class="coming-soon-header">
		<div class="bg-cover"></div>
		<div class="brand">
			<span class="logo"></span> <b>Color</b> Admin
		</div>
		<div class="desc">
			Our website is almost there and it’s rebuilt from scratch! A lot of great new features <br />and improvements are coming.
		</div>
		<div class="timer">
			<div class="is-countdown text-center">
				<div class="countdown-row countdown-show4">
					<span class="countdown-section col">
						<span class="countdown-amount d-block">{remainingTime.days}</span>
						<span class="countdown-period d-block">Days</span>
					</span>
					<span class="countdown-section col">
						<span class="countdown-amount d-block">{remainingTime.hours}</span>
						<span class="countdown-period d-block">Hours</span>
					</span>
					<span class="countdown-section col">
						<span class="countdown-amount d-block">{remainingTime.minutes}</span>
						<span class="countdown-period d-block">Minutes</span>
					</span>
					<span class="countdown-section col">
						<span class="countdown-amount d-block">{remainingTime.seconds}</span>
						<span class="countdown-period d-block">Seconds</span>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="coming-soon-content">
		<div class="desc">
			We are launching a closed <b>beta</b> soon!<br /> Sign up to try it before others and be the first to know when we <b>launch</b>.
		</div>
		<form on:submit|preventDefault={submitForm}>
			<div class="input-group input-group-lg mx-auto mb-2">
				<span class="input-group-text border-0 bg-light"><i class="fa fa-envelope"></i></span>
				<input type="text" class="form-control fs-13px border-0 shadow-none ps-0 bg-light" placeholder="Email Address" />
				<button type="submit" class="btn fs-13px btn-dark">Notify Me</button>
			</div>
		</form>
		<p class="text-gray-500 mb-5">We don't spam. Your email address is secure with us.</p>
		<p>
			<span class="me-2">Follow us on</span>
			<a href="#/" class="mx-1 text-decoration-none text-dark">
				<i class="fab fa-twitter fa-lg fa-fw text-info"></i> Twitter
			</a> 
			<a href="#/" class="mx-1 text-decoration-none text-dark">
				<i class="fab fa-facebook-square fa-lg fa-fw text-blue"></i> Facebook
			</a>
		</p>
	</div>
</div>