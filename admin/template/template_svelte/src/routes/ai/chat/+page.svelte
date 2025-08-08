<script>
  import { onMount, onDestroy } from 'svelte';
  import { setPageTitle } from '$lib/utils';
  import { appOptions } from '/src/stores/appOptions.js';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
	import PerfectScrollbar from '/src/components/plugins/PerfectScrollbar.svelte';
	import Icon from '@iconify/svelte';
	
	let tabActive = 'aiChatIntro';
	let userInput = '';
	let messages = [];
	let aiChatSidebar;
	let code = `<script>\n` +
`  export default {\n` +
`    async mounted() {\n` +
`      const response = await fetch('https://api.example.com/data');\n` +
`      const data = await response.json();\n` +
`      console.log(data);\n` +
`    }\n` +
`  }\n` +
`<\/script>`;
	
	function toggleAiTab(tab, input = '') {
		tabActive = tab;

		if (tab === 'aiChatNew' && input) {
			aiSendMessage(input);
		}
	}

	function toggleAiTabClick(event) {
		event.preventDefault();
		const clickedTab = event.currentTarget.getAttribute('data-toggle-ai-tab');
		const input = event.currentTarget.getAttribute('data-toggle-ai-input');

		if (clickedTab === 'aiChatPrev') {
			document.querySelectorAll('[data-toggle-ai-tab="aiChatPrev"]').forEach(el => {
				el.closest('div').classList.remove('bg-body');
			});
			event.currentTarget.closest('div').classList.toggle('bg-body');
		} else {
			document.querySelectorAll('[data-toggle-ai-tab="aiChatPrev"]').forEach(el => {
				el.closest('div').classList.remove('bg-body');
			});
			messages = [];
		}

		toggleAiTab(clickedTab, input);

		if (aiChatSidebar) {
			aiChatSidebar.hide();
		}
	}
	
	function aiSendMessage(input) {
		if (!input) return;

		toggleAiTab('aiChatNew');
		
		messages = [...messages, { text: input, sender: "user" }];
    messages = [...messages, { sender: "typing" }];

		setTimeout(() => {
			messages = messages.filter(m => m.sender !== 'typing');

			const aiResponses = [
				'That\'s an interesting question! Let me think...',
				'Good point! What else do you think about this?',
				'That makes sense. Can you clarify a bit more?',
				'Great perspective! Here’s my take on it...',
				'Good question! I believe the answer is...',
				'I appreciate your input! Let’s explore this further.',
				'That\'s a unique thought! Here’s another angle to consider...',
				'Nice one! Have you considered looking at it from this perspective?'
			];
			const aiResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

			messages.push({
				text: aiResponse,
				sender: 'ai'
			});
		}, 2000);

		userInput = '';
	}

	function handleInputKeyPress(event) {
		if (event.key === 'Enter' && userInput.trim()) {
			const inputText = userInput;
			userInput = '';
			setTimeout(() => aiSendMessage(inputText), 0);
		}
	}
  
  onMount(async () => {
    setPageTitle('AI Chat');
    
  	$appOptions.appContentClass = 'p-0 d-flex position-relative bg-body';
    $appOptions.appContentFullHeight = true;
  });
  
  onDestroy(() => {
  	$appOptions.appContentClass = '';
    $appOptions.appContentFullHeight = false;
  });
</script>


<a aria-label="link" class="d-lg-none btn btn-icon btn-lg bg-component text-body rounded-0 z-3 rounded-end-3 mt-5 shadow-lg position-absolute top-0 start-0 " data-bs-toggle="offcanvas" href="#aiChatSidebar" role="button" aria-controls="offcanvasExample">
	<i class="fa fa-gear"></i>
</a>
<!-- BEGIN ai-chat-sidebar -->
<div class="w-250px bg-component  bg-opacity-75 offcanvas offcanvas-start position-lg-relative transform-lg-none visibility-lg-initial z-lg-3" id="aiChatSidebar">
	<!-- BEGIN ai-chat-sidebar-mobile-bg -->
	<div class="bg-component d-lg-none d-block position-absolute top-0 end-0 w-100 h-100"></div>
	<!-- END ai-chat-sidebar-mobile-bg -->
	
	<!-- BEGIN ai-chat-sidebar-content -->
	<div class="position-relative h-100 d-flex flex-column">
		<!-- BEGIN ai-chat-new-btn -->
		<div class="p-3">
			<button type="button" class="btn bg-gradient-to-r bg-gradient-from-teal bg-gradient-to-blue text-white rounded-4 w-100 fw-bold border-0" aria-label="button" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatIntro"><i class="fa fa-plus me-2 ms-n2 my-4px"></i> New Chat</button>
		</div>
		<!-- END ai-chat-new-btn -->
		
		<hr class="m-0 opacity-20" />
		
		<!-- BEGIN ai-chat-history -->
		<div class="flex-1 overflow-hidden text-body">
			<!-- BEGIN scrollbar -->
			<PerfectScrollbar class="p-3" data-height="100%">
				<div class="fw-bold mb-2 d-flex align-items-center">
					<Icon icon="solar:calendar-bold-duotone" class="fs-18px me-5px opacity-5"></Icon>
					Today
				</div>
				<div class="fs-6 px-2">
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Plan My Dream Vacation</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Craft a Winning Pitch</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 mb-12 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Organize My Day</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 mb-12 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Write Custom Code</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 mb-12 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Draft a Polished Email</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 mb-12 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Brainstorm Ideas</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
				</div>
					
				<div class="fw-bold mb-2 d-flex align-items-center mt-4">
					<Icon icon="solar:calendar-bold-duotone" class="fs-18px me-5px"></Icon>
					1 Week Ago
				</div>
				<div class="fs-6 px-2">
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 mb-12 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Summarize an Article</div><a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 mb-12 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Prepare for a Speech</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 mb-12 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Create a Business Proposal</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
				</div>
				
				<div class="fw-bold mb-2 d-flex align-items-center mt-4">
					<Icon icon="solar:calendar-bold-duotone" class="fs-18px me-5px"></Icon>
					2 Weeks Ago
				</div>
				<div class="fs-6 px-2">
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 mb-12 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Organize Project Tasks</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 mb-12 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Research Market Trends</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
					<div class="position-relative hover-bg-body hover-show rounded-4 py-6px px-3 mb-12 border-0 d-flex align-items-center">
						<div class="fw-bold flex-1 text-body text-opacity-75">Craft Social Media Posts</div>
						<a href="#/" aria-label="link" class="stretched-link" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatPrev"></a>
						<div class="dropdown position-relative z-3">
							<a href="#/" aria-label="link" data-bs-toggle="dropdown" class="link-secondary opacity-50 d-none hover-show-elm"><i class="fa fa-ellipsis"></i></a>
							<div class="dropdown-menu">
								<a href="#/" aria-label="link" class="dropdown-item">Share Chat</a>
								<a href="#/" aria-label="link" class="dropdown-item">See Details</a>
								<div class="dropdown-divider"></div>
								<a href="#/" aria-label="link" class="dropdown-item">Rename</a>
								<a href="#/" aria-label="link" class="dropdown-item">Archive</a>
								<a href="#/" aria-label="link" class="dropdown-item">Delete</a>
							</div>
						</div>
					</div>
				</div>
			</PerfectScrollbar>
			<!-- END scrollbar -->
		</div>
		<!-- END ai-chat-history -->
		
		<hr class="m-0 opacity-20" />
		
		<!-- BEGIN ai-chat-info -->
		<div class="fs-6 p-2">
			<div class="hover-bg-body rounded-4 py-6px px-3 border-0 d-flex align-items-center fw-bold fs-13px text-body">
				<i class="far fa-folder fa-lg fa-fw me-1"></i>
				Explore Bots
			</div>
			<div class="hover-bg-body rounded-4 py-6px px-3 border-0 d-flex align-items-center fw-bold fs-13px text-body">
				<i class="far fa-gem fa-lg fa-fw me-1"></i>
				Go Pro
			</div>
		</div>
		<!-- END ai-chat-info -->
		
		<hr class="m-0 opacity-20" />
		
		<!-- BEGIN ai-chat-user-info -->
		<div class="rounded-4 px-3 py-3 border-0">
			<div class="fw-bold flex-1 fs-13px text-body d-flex align-items-center">
				<div class="w-30px h-30px fs-20px me-2 rounded-circle text-white bg-gradient-45 bg-gradient-from-blue  bg-gradient-to-teal d-flex align-items-center justify-content-center">
					S
				</div>
				support@seantheme.com
			</div>
		</div>
		<!-- END ai-chat-user-info -->
	</div>
	<!-- END ai-chat-sidebar-content -->
</div>
<!-- END ai-chat-sidebar -->

<!-- BEGIN ai-chat-content -->
<div class="flex-1 d-flex flex-column  bg-light bg-opacity-75">
	<!-- BEGIN ai-chat-tabs -->
	<div class="flex-1 overflow-hidden tab-content p-2 p-lg-4 w-100">
		<PerfectScrollbar class="h-100">
			<!-- BEGIN ai-chat-intro -->
			<div id="aiChatIntro" class="h-1002 px-3 px-lg-4 py-3 tab-pane fade {tabActive === 'aiChatIntro' ? 'show active' : ''} {tabActive !== 'aiChatIntro' ? 'd-none' : ''}">
				<div class="display-6 fw-bold mb-0">
					<span class="text-gradient bg-gradient-45 bg-gradient-from-blue bg-gradient-to-teal">Hello, there</span>
				</div>
				<div class="fs-2 fw-bold text-body mb-4">How can I assist you today?</div>
				<div class="row g-4">
					<div class="col-sm-6 col-xl-4">
						<a href="#/" aria-label="link" class="card cursor-pointer h-100 border-0 bg-component hover-bg-body position-relative overflow-hidden rounded-4 text-decoration-none" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatNew" data-toggle-ai-input="Suggest hidden gems and must-see spots for my next trip.">
							<div class="card-body p-4">
								<div class="mb-3 d-flex">
									<Icon icon="solar:calendar-date-bold-duotone" class="fs-40px"></Icon>
								</div>
								<div class="text-body text-opacity-75 fw-bold mb-1">Plan My Adventure</div>
								<div class="fs-5 fw-bold">Suggest hidden gems and must-see spots for my next trip.</div>
							</div>
						</a>
					</div>
					<div class="col-sm-6 col-xl-4">
						<a href="#/" aria-label="link" class="card cursor-pointer h-100 border-0 bg-component hover-bg-body position-relative overflow-hidden rounded-4 text-decoration-none" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatNew" data-toggle-ai-input="Create a concise and professional response for any situation.">
							<div class="card-body p-4">
								<div class="mb-3 d-flex">
									<Icon icon="solar:chat-square-arrow-bold-duotone" class="fs-40px"></Icon>
								</div>
								<div class="text-body text-opacity-75 fw-bold mb-1">Draft a Quick Reply</div>
								<div class="fs-5 fw-bold">Create a concise and professional response for any situation.</div>
							</div>
						</a>
					</div>
					<div class="col-sm-6 col-xl-4">
						<a href="#/" aria-label="link" class="card cursor-pointer h-100 border-0 bg-component hover-bg-body position-relative overflow-hidden rounded-4 text-decoration-none" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatNew" data-toggle-ai-input="Break down complex ideas into simple, easy-to-understand explanations.">
							<div class="card-body p-4">
								<div class="mb-3 d-flex">
									<Icon icon="solar:layers-minimalistic-bold-duotone" class="fs-40px"></Icon>
								</div>
								<div class="text-body text-opacity-75 fw-bold mb-1">Simplify This</div>
								<div class="fs-5 fw-bold">Break down complex ideas into simple, easy-to-understand explanations.</div>
							</div>
						</a>
					</div>
					<div class="col-sm-6 col-xl-4">
						<a href="#/" aria-label="link" class="card cursor-pointer h-100 border-0 bg-component hover-bg-body position-relative overflow-hidden rounded-4 text-decoration-none" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatNew" data-toggle-ai-input="Write and troubleshoot code with smart fixes for tricky errors.">
							<div class="card-body p-4">
								<div class="mb-3 d-flex">
									<Icon icon="solar:code-bold-duotone" class="fs-40px"></Icon>
								</div>
								<div class="text-body text-opacity-75 fw-bold mb-1">Code & Debug</div>
								<div class="fs-5 fw-bold">Write and troubleshoot code with smart fixes for tricky errors.</div>
							</div>
						</a>
					</div>
					<div class="col-sm-6 col-xl-4">
						<a href="#/" aria-label="link" class="card cursor-pointer h-100 border-0 bg-component hover-bg-body position-relative overflow-hidden rounded-4 text-decoration-none" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatNew" data-toggle-ai-input="Generate fresh ideas for projects, names, or creative solutions.">
							<div class="card-body p-4">
								<div class="mb-3 d-flex">
									<Icon icon="solar:lightbulb-bolt-bold-duotone" class="fs-40px"></Icon>
								</div>
								<div class="text-body text-opacity-75 fw-bold mb-1">Brainstorm Anything</div>
								<div class="fs-5 fw-bold">Generate fresh ideas for projects, names, or creative solutions.</div>
							</div>
						</a>
					</div>
					<div class="col-sm-6 col-xl-4">
						<a href="#/" aria-label="link" class="card cursor-pointer h-100 border-0 bg-component hover-bg-body position-relative overflow-hidden rounded-4 text-decoration-none" on:click={toggleAiTabClick} data-toggle-ai-tab="aiChatNew" data-toggle-ai-input="Craft emails, reports, or social posts in a polished, clear tone.">
							<div class="card-body p-4">
								<div class="mb-3 d-flex">
									<Icon icon="solar:pen-2-bold-duotone" class="fs-40px"></Icon>
								</div>
								<div class="text-body text-opacity-75 fw-bold mb-1">Write It for Me</div>
								<div class="fs-5 fw-bold">Craft emails, reports, or social posts in a polished, clear tone.</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<!-- END ai-chat-intro -->
		
			<!-- BEGIN ai-chat-prev -->
			<div id="aiChatPrev" class="h-1002 px-lg-3 my-lg-3 my-2 tab-pane fade {tabActive === 'aiChatPrev' ? 'show active' : ''} {tabActive !== 'aiChatPrev' ? 'd-none' : ''}">
				<!-- BEGIN chat-human -->
				<div class="d-flex justify-content-end align-items-end mb-3">
					<div class="rounded-4 px-3 py-2 bg-component text-body fw-bold">
						Can you generate some content for social media captions?
					</div>
					<div>
						<div class="w-30px h-30px my-2px ms-2 fs-20px me-2 rounded-circle text-white bg-inverse d-flex align-items-center justify-content-center">
							S
						</div>
					</div>
				</div>
				<!-- END chat-human -->
				
				<!-- BEGIN chat-ai -->
				<div class="mb-3">
					<div class="d-flex justify-content-start align-items-end">
						<div>
							<div class="w-30px h-30px my-2px ms-2 fs-16px me-2 rounded-circle bg-gradient-to-r bg-gradient-from-blue bg-gradient-to-teal text-white d-flex align-items-center justify-content-center">
								<i class="fa fa-shekel-sign"></i>
							</div>
						</div>
						<div class="rounded-4 px-3 py-2 bg-component text-body fw-bold mw-75">
							<div>Absolutely! What’s the topic or product?</div>
						</div>
					</div>
					<div class="d-flex">
						<div class="w-30px h-30px me-2 ms-2"></div>
						<div class="d-flex flex-wrap w-100 p-2 opacity-75">
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="far fa-fw fa-copy"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="far fa-fw fa-thumbs-up"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="far fa-fw fa-thumbs-down"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="fa fa-fw fa-microphone"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration"><i class="fa fa-fw fa-arrow-rotate-right"></i></a>
						</div>
					</div>
				</div>
				<!-- END chat-ai -->
	
				<!-- BEGIN chat-human -->
				<div class="d-flex justify-content-end align-items-end mb-3">
					<div class="rounded-4 px-3 py-2 bg-component text-body fw-bold">
						Let’s say… a coffee shop promotion.
					</div>
					<div>
						<div class="w-30px h-30px my-2px ms-2 fs-20px me-2 rounded-circle text-white bg-inverse d-flex align-items-center justify-content-center">
							S
						</div>
					</div>
				</div>
				<!-- END chat-human -->
				
				<!-- BEGIN chat-ai -->
				<div class="mb-3">
					<div class="d-flex justify-content-start align-items-end">
						<div>
							<div class="w-30px h-30px my-2px ms-2 fs-16px me-2 rounded-circle bg-gradient-to-r bg-gradient-from-blue bg-gradient-to-teal text-white d-flex align-items-center justify-content-center">
								<i class="fa fa-shekel-sign"></i>
							</div>
						</div>
						<div class="rounded-4 px-3 py-2 bg-component text-body fw-bold mw-75">
							<div>How about these:</div>
							<ol class="my-2 ps-4">
								<li>Start your day with the perfect brew – 20% off all lattes today!</li>
								<li>Coffee first, everything else later. Grab your cup now!</li>
								<li>A little caffeine, a lot of happiness. Visit us for your daily fix!</li>
							</ol>
							<div>Need more options?</div>
						</div>
					</div>
					<div class="d-flex">
						<div class="w-30px h-30px me-2 ms-2"></div>
						<div class="d-flex flex-wrap w-100 p-2 opacity-75">
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="far fa-fw fa-copy"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="far fa-fw fa-thumbs-up"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="far fa-fw fa-thumbs-down"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="fa fa-fw fa-microphone"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration"><i class="fa fa-fw fa-arrow-rotate-right"></i></a>
						</div>
					</div>
				</div>
				<!-- END chat-ai -->
	
				<!-- BEGIN chat-human -->
				<div class="d-flex justify-content-end align-items-end mb-3">
					<div class="rounded-4 px-3 py-2 bg-component text-body fw-bold">
						How can I fetch API data in Vue.js?
					</div>
					<div>
						<div class="w-30px h-30px my-2px ms-2 fs-20px me-2 rounded-circle text-white bg-inverse d-flex align-items-center justify-content-center">
							S
						</div>
					</div>
				</div>
				<!-- END chat-human -->
				
				<!-- BEGIN chat-ai -->
				<div class="mb-3">
					<div class="d-flex justify-content-start align-items-end">
						<div>
							<div class="w-30px h-30px my-2px ms-2 fs-16px me-2 rounded-circle bg-gradient-to-r bg-gradient-from-blue bg-gradient-to-teal text-white d-flex align-items-center justify-content-center">
								<i class="fa fa-shekel-sign"></i>
							</div>
						</div>
						<div class="rounded-4 px-3 py-2 bg-component text-body fw-bold mw-75">
							Here’s a simple example:
							<div class="card rounded-3 my-2">
								<div class="card-header d-flex">
									<span class="flex-1">vue</span>
									<span><a href="#/" aria-label="link" class="text-body text-decoration-none"><i class="far fa-copy"></i> Copy</a></span>
								</div>
								<div class="hljs-wrapper bg-component">
									<HighlightJs code={code} />
								</div>
							</div>
							Would you like me to explain how this works?
						</div>
					</div>
					<div class="d-flex">
						<div class="w-30px h-30px me-2 ms-2"></div>
						<div class="d-flex flex-wrap w-100 p-2 opacity-75">
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="far fa-fw fa-copy"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="far fa-fw fa-thumbs-up"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="far fa-fw fa-thumbs-down"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration me-2"><i class="fa fa-fw fa-microphone"></i></a>
							<a href="#/" aria-label="link" class="link-secondary text-decoration"><i class="fa fa-fw fa-arrow-rotate-right"></i></a>
						</div>
					</div>
				</div>
				<!-- END chat-ai -->
			</div>
			<!-- END ai-chat-prev -->
		
			<!-- BEGIN ai-chat-new -->
			<div id="aiChatNew" class="h-1002 px-lg-3 my-lg-3 my-2 tab-pane fade {tabActive === 'aiChatNew' ? 'show active' : ''} {tabActive !== 'aiChatNew' ? 'd-none' : ''}">
				{#each messages as msg}
					<div class="message {msg.sender}">
						{#if msg.sender === "user"}
							<div class="d-flex justify-content-end align-items-end mb-3">
								<div class="rounded-4 px-3 py-2 bg-component text-body fw-bold">
									{msg.text}
								</div>
								<div>
									<div class="w-30px h-30px my-2px ms-2 fs-20px me-2 rounded-circle text-white bg-inverse d-flex align-items-center justify-content-center">
										S
									</div>
								</div>
							</div>
						{:else if msg.sender === "typing"}
							<div class="d-flex justify-content-start mb-3 ai-spinner">
								<div class="spinner-grow spinner-grow-sm"></div>
							</div>
						{:else}
							<div class="d-flex justify-content-start align-items-end">
								<div>
									<div class="w-30px h-30px my-2px ms-2 fs-16px me-2 rounded-circle bg-gradient-to-r bg-gradient-from-blue bg-gradient-to-teal text-white d-flex align-items-center justify-content-center">
										<i class="fa fa-shekel-sign"></i>
									</div>
								</div>
								<div class="rounded-4 px-3 py-2 bg-component text-body fw-bold mw-75">
									<div class="typing-animation" style="animation-duration: .5s;">{msg.text}</div>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
			<!-- END ai-chat-new -->
		</PerfectScrollbar>
	</div>
	<!-- END ai-chat-tabs -->
	
	<!-- BEGIN ai-chat-input -->
	<div>
		<div class="px-lg-4 px-3 pb-3">
			<div class="position-relative mx-lg-4 mx-2 h-100">
				<div class="position-absolute start-0 bottom-0 px-3 pb-2">
					<button type="button" aria-label="button" class="btn btn-icon btn-lg text-body text-opacity-50"><i class="fa fa-fw fa-plus"></i></button>
					<button type="button" aria-label="button" class="btn btn-icon btn-lg text-body text-opacity-50"><i class="fa fa-fw fa-globe"></i></button>
					<button type="button" aria-label="button" class="btn btn-icon btn-lg text-body text-opacity-50"><i class="fa fa-fw fa-microphone"></i></button>
				</div>
				<input type="text" bind:value={userInput} on:keypress={handleInputKeyPress} class="form-control form-control-lg  border-0 shadow-none rounded-4 pb-80px pt-10px" id="userInput" placeholder="Message AI Bot" />
				<div class="position-absolute end-0 bottom-0 px-3 pb-2">
					<button id="sendButton" aria-label="button" on:click={() => aiSendMessage(userInput)} class="btn btn-inverse btn-lg btn-icon bg-gradient-45 bg-gradient-from-blue bg-gradient-to-teal">
						<i class="fa fa-arrow-right"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
	<!-- END ai-chat-input -->
</div>
<!-- END ai-chat-content -->