<script>
	import Panel from '/src/components/bootstrap/Panel.svelte';
	import PanelBody from '/src/components/bootstrap/PanelBody.svelte';
	import PanelTitle from '/src/components/bootstrap/PanelTitle.svelte';
	import PanelHeader from '/src/components/bootstrap/PanelHeader.svelte';
	import PanelExpandToggler from '/src/components/bootstrap/PanelExpandToggler.svelte';
	import HighlightJs from '/src/components/plugins/HighlightJs.svelte';
	import NavScrollTo from '/src/components/app/NavScrollTo.svelte';
  import { setPageTitle } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  import jQuery from 'jquery';
  import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
  import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css';
  import 'datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.min.css';
  import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css';
  import 'datatables.net/js/dataTables.min.js';
	import 'datatables.net-bs5/js/dataTables.bootstrap5.min.js';
	import 'datatables.net-buttons/js/dataTables.buttons.min.js';
	import 'datatables.net-buttons/js/buttons.colVis.min.js';
	import 'datatables.net-buttons/js/buttons.html5.min.js';
	import 'datatables.net-buttons/js/buttons.print.min.js';
	import 'datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js';
	import 'datatables.net-responsive/js/dataTables.responsive.min.js';
	import 'datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js';
	import 'datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js';
	import 'datatables.net-fixedcolumns-bs5/js/fixedColumns.bootstrap5.min.js';
  
  let codeArray = [];
	let table;
	let datatable;
  
  onMount(async () => {
    setPageTitle('Table Plugins');
		
		for (var i = 1; i < 2; i++) {
			let response = await fetch('/data/table/plugin-code-'+ i +'.json');
			codeArray[i] = (await response.text());
		}
		
		window.jQuery = jQuery;
		
		if (jQuery) {
			datatable = jQuery(table).DataTable({
				dom: "<'row mb-3'<'col-md-4 mb-3 mb-md-0'l><'col-md-8'<'d-flex justify-content-end'fB>>>t<'row align-items-center mt-3'<'me-auto col-md-6 mb-3 mb-md-0'i><'mb-0 col-md-auto ms-auto'p>>",
				lengthMenu: [ 10, 20, 30, 40, 50 ],
				responsive: true,
				buttons: [
					{ extend: 'print', className: 'btn btn-outline-default btn-sm ms-2' },
					{ extend: 'csv', className: 'btn btn-outline-default btn-sm' }
				]
			});
		}
  });
  
  onDestroy(() => {
  	if (datatable) {
  		datatable.destroy();
  	}
  });
</script>

<ol class="breadcrumb float-xl-end">
	<li class="breadcrumb-item"><a href="#/">Home</a></li>
	<li class="breadcrumb-item"><a href="#/">Tables</a></li>
	<li class="breadcrumb-item active">Table Plugins</li>
</ol>
<h1 class="page-header">Table Plugins <small>header small text goes here...</small></h1>

<div class="row">
	<div class="col-xl-2">
		<h5>Combination Include:</h5>
		<ul class="ps-25px mb-3">
			<li>Buttons</li>
			<li>Responsive</li>
			<li>Fixed Columns</li>
		</ul>
		<p class="mb-20px">
			<a href="http://www.datatables.net/" target="_blank" class="btn btn-dark btn-sm">View Official Website</a>
		</p>
	</div>
	<div class="col-xl-10">
		<Panel class="panel-inverse">
			<PanelHeader>
				<PanelTitle>Table Plugins - DataTable</PanelTitle>
				<PanelExpandToggler />
			</PanelHeader>
			<PanelBody>
				<table bind:this={table} class="table text-nowrap w-100">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Position</th>
							<th>Office</th>
							<th>Age</th>
							<th>Start Date</th>
							<th>Salary</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1.</td>
							<td>Tiger Nixon</td>
							<td>System Architect</td>
							<td>Edinburgh</td>
							<td>61</td>
							<td>2025/04/25</td>
							<td>$320,800</td>
						</tr>
						<tr>
							<td>2.</td>
							<td>Garrett Winters</td>
							<td>Accountant</td>
							<td>Tokyo</td>
							<td>63</td>
							<td>2025/07/25</td>
							<td>$170,750</td>
						</tr>
						<tr>
							<td>3.</td>
							<td>Ashton Cox</td>
							<td>Junior Technical Author</td>
							<td>San Francisco</td>
							<td>66</td>
							<td>2025/01/12</td>
							<td>$86,000</td>
						</tr>
						<tr>
							<td>4.</td>
							<td>Cedric Kelly</td>
							<td>Senior Javascript Developer</td>
							<td>Edinburgh</td>
							<td>22</td>
							<td>2025/03/29</td>
							<td>$433,060</td>
						</tr>
						<tr>
							<td>5.</td>
							<td>Airi Satou</td>
							<td>Accountant</td>
							<td>Tokyo</td>
							<td>33</td>
							<td>2025/11/28</td>
							<td>$162,700</td>
						</tr>
						<tr>
							<td>6.</td>
							<td>Brielle Williamson</td>
							<td>Integration Specialist</td>
							<td>New York</td>
							<td>61</td>
							<td>2025/12/02</td>
							<td>$372,000</td>
						</tr>
						<tr>
							<td>7.</td>
							<td>Herrod Chandler</td>
							<td>Sales Assistant</td>
							<td>San Francisco</td>
							<td>59</td>
							<td>2025/08/06</td>
							<td>$137,500</td>
						</tr>
						<tr>
							<td>8.</td>
							<td>Rhona Davidson</td>
							<td>Integration Specialist</td>
							<td>Tokyo</td>
							<td>55</td>
							<td>2025/10/14</td>
							<td>$327,900</td>
						</tr>
						<tr>
							<td>9.</td>
							<td>Colleen Hurst</td>
							<td>Javascript Developer</td>
							<td>San Francisco</td>
							<td>39</td>
							<td>2025/09/15</td>
							<td>$205,500</td>
						</tr>
						<tr>
							<td>10.</td>
							<td>Sonya Frost</td>
							<td>Software Engineer</td>
							<td>Edinburgh</td>
							<td>23</td>
							<td>2025/12/13</td>
							<td>$103,600</td>
						</tr>
						<tr>
							<td>11.</td>
							<td>Jena Gaines</td>
							<td>Office Manager</td>
							<td>London</td>
							<td>30</td>
							<td>2025/12/19</td>
							<td>$90,560</td>
						</tr>
						<tr>
							<td>12.</td>
							<td>Quinn Flynn</td>
							<td>Support Lead</td>
							<td>Edinburgh</td>
							<td>22</td>
							<td>2025/03/03</td>
							<td>$342,000</td>
						</tr>
						<tr>
							<td>13.</td>
							<td>Charde Marshall</td>
							<td>Regional Director</td>
							<td>San Francisco</td>
							<td>36</td>
							<td>2025/10/16</td>
							<td>$470,600</td>
						</tr>
						<tr>
							<td>14.</td>
							<td>Haley Kennedy</td>
							<td>Senior Marketing Designer</td>
							<td>London</td>
							<td>43</td>
							<td>2025/12/18</td>
							<td>$313,500</td>
						</tr>
						<tr>
							<td>15.</td>
							<td>Tatyana Fitzpatrick</td>
							<td>Regional Director</td>
							<td>London</td>
							<td>19</td>
							<td>2025/03/17</td>
							<td>$385,750</td>
						</tr>
						<tr>
							<td>16.</td>
							<td>Michael Silva</td>
							<td>Marketing Designer</td>
							<td>London</td>
							<td>66</td>
							<td>2025/11/27</td>
							<td>$198,500</td>
						</tr>
						<tr>
							<td>17.</td>
							<td>Paul Byrd</td>
							<td>Chief Financial Officer (CFO)</td>
							<td>New York</td>
							<td>64</td>
							<td>2025/06/09</td>
							<td>$725,000</td>
						</tr>
						<tr>
							<td>18.</td>
							<td>Gloria Little</td>
							<td>Systems Administrator</td>
							<td>New York</td>
							<td>59</td>
							<td>2025/04/10</td>
							<td>$237,500</td>
						</tr>
						<tr>
							<td>19.</td>
							<td>Bradley Greer</td>
							<td>Software Engineer</td>
							<td>London</td>
							<td>41</td>
							<td>2025/10/13</td>
							<td>$132,000</td>
						</tr>
						<tr>
							<td>20.</td>
							<td>Dai Rios</td>
							<td>Personnel Lead</td>
							<td>Edinburgh</td>
							<td>35</td>
							<td>2025/09/26</td>
							<td>$217,500</td>
						</tr>
						<tr>
							<td>21.</td>
							<td>Jenette Caldwell</td>
							<td>Development Lead</td>
							<td>New York</td>
							<td>30</td>
							<td>2025/09/03</td>
							<td>$345,000</td>
						</tr>
						<tr>
							<td>22.</td>
							<td>Yuri Berry</td>
							<td>Chief Marketing Officer (CMO)</td>
							<td>New York</td>
							<td>40</td>
							<td>2025/06/25</td>
							<td>$675,000</td>
						</tr>
						<tr>
							<td>23.</td>
							<td>Caesar Vance</td>
							<td>Pre-Sales Support</td>
							<td>New York</td>
							<td>21</td>
							<td>2025/12/12</td>
							<td>$106,450</td>
						</tr>
						<tr>
							<td>24.</td>
							<td>Doris Wilder</td>
							<td>Sales Assistant</td>
							<td>Sidney</td>
							<td>23</td>
							<td>2025/09/20</td>
							<td>$85,600</td>
						</tr>
						<tr>
							<td>25.</td>
							<td>Angelica Ramos</td>
							<td>Chief Executive Officer (CEO)</td>
							<td>London</td>
							<td>47</td>
							<td>2025/10/09</td>
							<td>$1,200,000</td>
						</tr>
						<tr>
							<td>26.</td>
							<td>Gavin Joyce</td>
							<td>Developer</td>
							<td>Edinburgh</td>
							<td>42</td>
							<td>2025/12/22</td>
							<td>$92,575</td>
						</tr>
						<tr>
							<td>27.</td>
							<td>Jennifer Chang</td>
							<td>Regional Director</td>
							<td>Singapore</td>
							<td>28</td>
							<td>2025/11/14</td>
							<td>$357,650</td>
						</tr>
						<tr>
							<td>28.</td>
							<td>Brenden Wagner</td>
							<td>Software Engineer</td>
							<td>San Francisco</td>
							<td>28</td>
							<td>2025/06/07</td>
							<td>$206,850</td>
						</tr>
						<tr>
							<td>29.</td>
							<td>Fiona Green</td>
							<td>Chief Operating Officer (COO)</td>
							<td>San Francisco</td>
							<td>48</td>
							<td>2025/03/11</td>
							<td>$850,000</td>
						</tr>
						<tr>
							<td>30.</td>
							<td>Shou Itou</td>
							<td>Regional Marketing</td>
							<td>Tokyo</td>
							<td>20</td>
							<td>2025/08/14</td>
							<td>$163,000</td>
						</tr>
						<tr>
							<td>31.</td>
							<td>Michelle House</td>
							<td>Integration Specialist</td>
							<td>Sidney</td>
							<td>37</td>
							<td>2025/06/02</td>
							<td>$95,400</td>
						</tr>
						<tr>
							<td>32.</td>
							<td>Suki Burks</td>
							<td>Developer</td>
							<td>London</td>
							<td>53</td>
							<td>2025/10/22</td>
							<td>$114,500</td>
						</tr>
						<tr>
							<td>33.</td>
							<td>Prescott Bartlett</td>
							<td>Technical Author</td>
							<td>London</td>
							<td>27</td>
							<td>2025/05/07</td>
							<td>$145,000</td>
						</tr>
						<tr>
							<td>34.</td>
							<td>Gavin Cortez</td>
							<td>Team Leader</td>
							<td>San Francisco</td>
							<td>22</td>
							<td>2025/10/26</td>
							<td>$235,500</td>
						</tr>
						<tr>
							<td>35.</td>
							<td>Martena Mccray</td>
							<td>Post-Sales support</td>
							<td>Edinburgh</td>
							<td>46</td>
							<td>2025/03/09</td>
							<td>$324,050</td>
						</tr>
						<tr>
							<td>36.</td>
							<td>Unity Butler</td>
							<td>Marketing Designer</td>
							<td>San Francisco</td>
							<td>47</td>
							<td>2025/12/09</td>
							<td>$85,675</td>
						</tr>
						<tr>
							<td>37.</td>
							<td>Howard Hatfield</td>
							<td>Office Manager</td>
							<td>San Francisco</td>
							<td>51</td>
							<td>2025/12/16</td>
							<td>$164,500</td>
						</tr>
						<tr>
							<td>38.</td>
							<td>Hope Fuentes</td>
							<td>Secretary</td>
							<td>San Francisco</td>
							<td>41</td>
							<td>2025/02/12</td>
							<td>$109,850</td>
						</tr>
						<tr>
							<td>39.</td>
							<td>Vivian Harrell</td>
							<td>Financial Controller</td>
							<td>San Francisco</td>
							<td>62</td>
							<td>2025/02/14</td>
							<td>$452,500</td>
						</tr>
						<tr>
							<td>40.</td>
							<td>Timothy Mooney</td>
							<td>Office Manager</td>
							<td>London</td>
							<td>37</td>
							<td>2025/12/11</td>
							<td>$136,200</td>
						</tr>
						<tr>
							<td>41.</td>
							<td>Jackson Bradshaw</td>
							<td>Director</td>
							<td>New York</td>
							<td>65</td>
							<td>2025/09/26</td>
							<td>$645,750</td>
						</tr>
						<tr>
							<td>42.</td>
							<td>Olivia Liang</td>
							<td>Support Engineer</td>
							<td>Singapore</td>
							<td>64</td>
							<td>2025/02/03</td>
							<td>$234,500</td>
						</tr>
						<tr>
							<td>43.</td>
							<td>Bruno Nash</td>
							<td>Software Engineer</td>
							<td>London</td>
							<td>38</td>
							<td>2025/05/03</td>
							<td>$163,500</td>
						</tr>
						<tr>
							<td>44.</td>
							<td>Sakura Yamamoto</td>
							<td>Support Engineer</td>
							<td>Tokyo</td>
							<td>37</td>
							<td>2025/08/19</td>
							<td>$139,575</td>
						</tr>
						<tr>
							<td>45.</td>
							<td>Thor Walton</td>
							<td>Developer</td>
							<td>New York</td>
							<td>61</td>
							<td>2025/08/11</td>
							<td>$98,540</td>
						</tr>
						<tr>
							<td>46.</td>
							<td>Finn Camacho</td>
							<td>Support Engineer</td>
							<td>San Francisco</td>
							<td>47</td>
							<td>2025/07/07</td>
							<td>$87,500</td>
						</tr>
						<tr>
							<td>47.</td>
							<td>Serge Baldwin</td>
							<td>Data Coordinator</td>
							<td>Singapore</td>
							<td>64</td>
							<td>2025/04/09</td>
							<td>$138,575</td>
						</tr>
						<tr>
							<td>48.</td>
							<td>Zenaida Frank</td>
							<td>Software Engineer</td>
							<td>New York</td>
							<td>63</td>
							<td>2025/01/04</td>
							<td>$125,250</td>
						</tr>
						<tr>
							<td>49.</td>
							<td>Zorita Serrano</td>
							<td>Software Engineer</td>
							<td>San Francisco</td>
							<td>56</td>
							<td>2025/06/01</td>
							<td>$115,000</td>
						</tr>
						<tr>
							<td>50.</td>
							<td>Jennifer Acosta</td>
							<td>Junior Javascript Developer</td>
							<td>Edinburgh</td>
							<td>43</td>
							<td>2025/02/01</td>
							<td>$75,650</td>
						</tr>
						<tr>
							<td>51.</td>
							<td>Cara Stevens</td>
							<td>Sales Assistant</td>
							<td>New York</td>
							<td>46</td>
							<td>2025/12/06</td>
							<td>$145,600</td>
						</tr>
						<tr>
							<td>52.</td>
							<td>Hermione Butler</td>
							<td>Regional Director</td>
							<td>London</td>
							<td>47</td>
							<td>2025/03/21</td>
							<td>$356,250</td>
						</tr>
						<tr>
							<td>53.</td>
							<td>Lael Greer</td>
							<td>Systems Administrator</td>
							<td>London</td>
							<td>21</td>
							<td>2025/02/27</td>
							<td>$103,500</td>
						</tr>
						<tr>
							<td>54.</td>
							<td>Jonas Alexander</td>
							<td>Developer</td>
							<td>San Francisco</td>
							<td>30</td>
							<td>2025/07/14</td>
							<td>$86,500</td>
						</tr>
						<tr>
							<td>55.</td>
							<td>Shad Decker</td>
							<td>Regional Director</td>
							<td>Edinburgh</td>
							<td>51</td>
							<td>2025/11/13</td>
							<td>$183,000</td>
						</tr>
						<tr>
							<td>56.</td>
							<td>Michael Bruce</td>
							<td>Javascript Developer</td>
							<td>Singapore</td>
							<td>29</td>
							<td>2025/06/27</td>
							<td>$183,000</td>
						</tr>
						<tr>
							<td>57.</td>
							<td>Donna Snider</td>
							<td>Customer Support</td>
							<td>New York</td>
							<td>27</td>
							<td>2025/01/25</td>
							<td>$112,000</td>
						</tr>
					</tbody>
				</table>
			</PanelBody>
			{#if codeArray[1]}
				<HighlightJs code={codeArray[1]} />
			{/if}
		</Panel>
	</div>
</div>						
							