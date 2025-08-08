<script>
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import { appVariables } from '/src/stores/appVariables.js';
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import timeGridPlugin from '@fullcalendar/timegrid';
	import bootstrapPlugin from '@fullcalendar/bootstrap';
	import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
	
	let unsubscribe;
	let rendered = false;
	
	function renderCalendar(color) {
		let d = new Date();
		let month = d.getMonth() + 1;
				month = (month < 10) ? '0' + month : month;
		let year = d.getFullYear();
		let day = d.getDate();
		
		let calendarEl = document.getElementById('calendar');
    if (calendarEl) {
			let calendar = new Calendar(calendarEl, {
				plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, bootstrapPlugin ],
        initialView: 'dayGridMonth',
        headerToolbar: {
					left: 'dayGridMonth,timeGridWeek,timeGridDay',
					center: 'title',
					right: 'prev,next today'
				},
				buttonText: {
					today:    'Today',
					month:    'Month',
					week:     'Week',
					day:      'Day'
				},
				initialView: 'dayGridMonth',
				editable: true,
				droppable: true,
				themeSystem: 'bootstrap',
				views: {
					timeGrid: {
						eventLimit: 6
					}
				},
				events: [{
					title: 'Trip to London',
					start: year + '-'+ month +'-01',
					end: year + '-'+ month +'-05',
					color: color['theme']
				},{
					title: 'Meet with Sean Ngu',
					start: year + '-'+ month +'-02T06:00:00',
					color: color['primary']
				},{
					title: 'Mobile Apps Brainstorming',
					start: year + '-'+ month +'-10',
					end: year + '-'+ month +'-12',
					color: color['pink']
				},{
					title: 'Stonehenge, Windsor Castle, Oxford',
					start: year + '-'+ month +'-05T08:45:00',
					end: year + '-'+ month +'-06T18:00',
					color: color['indigo']
				},{
					title: 'Paris Trip',
					start: year + '-'+ month +'-12',
					end: year + '-'+ month +'-16'
				},{
					title: 'Domain name due',
					start: year + '-'+ month +'-15',
					end: year + '-'+ month +'-15',
					color: color['primary']
				},{
					title: 'Cambridge Trip',
					start: year + '-'+ month +'-19',
					end: year + '-'+ month +'-19'
				},{
					title: 'Visit Apple Company',
					start: year + '-'+ month +'-22T05:00:00',
					color: color['success']
				},{
					title: 'Exercise Class',
					start: year + '-'+ month +'-22T07:30:00',
					color: color['warning']
				},{
					title: 'Live Recording',
					start: year + '-'+ month +'-22T03:00:00',
					color: color['primary']
				},{
					title: 'Announcement',
					start: year + '-'+ month +'-22T15:00:00',
					color: color['danger']
				},{
					title: 'Dinner',
					start: year + '-'+ month +'-22T18:00:00'
				},{
					title: 'New Android App Discussion',
					start: year + '-'+ month +'-25T08:00:00',
					end: year + '-'+ month +'-25T10:00:00',
					color: color['danger']
				},{
					title: 'Marketing Plan Presentation',
					start: year + '-'+ month +'-25T12:00:00',
					end: year + '-'+ month +'-25T14:00:00',
					color: color['primary']
				},{
					title: 'Chase due',
					start: year + '-'+ month +'-26T12:00:00',
					color: color['warning']
				},{
					title: 'Heartguard',
					start: year + '-'+ month +'-26T08:00:00',
					color: color['warning']
				},{
					title: 'Lunch with Richard',
					start: year + '-'+ month +'-28T14:00:00',
					color: color['primary']
				},{
					title: 'Web Hosting due',
					start: year + '-'+ month +'-30',
					color: color['primary']
				}]
			});
			calendar.render();
		}
		
		let containerEl = document.getElementById('external-events');
		if (containerEl && !rendered) {
			new Draggable(containerEl, {
				itemSelector: '.fc-event',
				eventData: function(eventEl) {
					return {
						title: eventEl.innerText,
						color: eventEl.getAttribute('data-color')
					};
				}
			});
			rendered = true;
		}
		
		window.dispatchEvent(new Event('resize'));
	}
  
  onMount(async () => {
    setPageTitle('Calendar');
    
    unsubscribe = appVariables.subscribe(value => {
    	if (value.color) {
    		renderCalendar(value.color);
    	}
		});
  });
  
  onDestroy(() => {
  	if (unsubscribe) {
    	unsubscribe();
  	}
  });
</script>


<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item active">Calendar</li>
</ol>
<h1 class="page-header">Calendar <small>header small text goes here...</small></h1>

<hr />
<div class="row">
	<div class="d-none d-lg-block" style="width: 215px">
		<div id="external-events" class="fc-event-list">
			<h5 class="mb-3">Draggable Events</h5>
			<div class="fc-event" data-color="#00acac">
				<div class="fc-event-text">Meeting with Client</div>
				<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-success"></i></div>
			</div>
			<div class="fc-event" data-color="#348fe2">
				<div class="fc-event-text">IOS App Development</div>
				<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-blue"></i></div>
			</div>
			<div class="fc-event" data-color="#f59c1a">
				<div class="fc-event-text">Group Discussion</div>
				<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-warning"></i></div>
			</div>
			<div class="fc-event" data-color="#ff5b57">
				<div class="fc-event-text">New System Briefing</div>
				<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-danger"></i></div>
			</div>
			<div class="fc-event">
				<div class="fc-event-text">Brainstorming</div>
				<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-dark"></i></div>
			</div>
			<hr class="my-3" />
			<h5 class="mb-3">Other Events</h5>
			<div class="fc-event" data-color="#b6c2c9">
				<div class="fc-event-text">Other Event 1</div>
				<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-gray-500"></i></div>
			</div>
			<div class="fc-event" data-color="#b6c2c9">
				<div class="fc-event-text">Other Event 2</div>
				<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-gray-500"></i></div>
			</div>
			<div class="fc-event" data-color="#b6c2c9">
				<div class="fc-event-text">Other Event 3</div>
				<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-gray-500"></i></div>
			</div>
			<div class="fc-event" data-color="#b6c2c9">
				<div class="fc-event-text">Other Event 4</div>
				<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-gray-500"></i></div>
			</div>
			<div class="fc-event" data-color="#b6c2c9">
				<div class="fc-event-text">Other Event 5</div>
				<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-gray-500"></i></div>
			</div>
		</div>
	</div>
	
	<div class="col-lg">
		<div id="calendar" class="calendar"></div>
	</div>
</div>