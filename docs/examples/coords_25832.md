
<div class="example">
	<h3>Handle coordinates in EPSG:25832</h3>
	<h4>
		Note: “ec_srid” defines the SRID of the exported coordinates; input coordinates, such as the center point, can differ, but must be a supported
		SRID.
	</h4>
	<div id="ksg3bna" class="output"><bayern-atlas l="GEORESOURCE_TOPOGRAPHIC" ec_srid="25832"></bayern-atlas></div>
	<div id="ksg3bna_desc">Click in the map or on the marker...</div>
	<div id="ksg3bna_output" class="output" style="display: none">
		<pre><code></code></pre>
	</div>
	<script>
		document.querySelector('#ksg3bna bayern-atlas').addEventListener('baLoad', (event) => {
			const baMap = event.target;
			const coordinate25832 = [703437, 5425425];
			baMap.modifyView({ center: coordinate25832, zoom: 12 });
			const markerId = baMap.addMarker(coordinate25832, { label: 'MyMarker' });
			baMap.addEventListener('baFeatureSelect', (event) => {
				document.querySelector('#ksg3bna_desc').style.display = 'none';
				document.querySelector('#ksg3bna_output').style.display = 'block';

    			const el = document.querySelector('#ksg3bna_output pre code');
    			el.innerText = `${new Date().toISOString()}: ${JSON.stringify(event.detail, null, 1)} \n${el.innerText}`;
    		});
    	});
    </script>
    <h4>HTML:</h4>
    <pre><code class="language-html">&lt;bayern-atlas l=&quot;GEORESOURCE_TOPOGRAPHIC&quot; ec_srid=&quot;25832&quot;&gt;&lt;/bayern-atlas&gt;</code></pre>
    <h4>JavaScript:</h4>
    <pre><code class="language-javascript">document.querySelector('bayern-atlas').addEventListener('baLoad', (event) => {
	const baMap = event.target;
	const coordinate25832 = [703437, 5425425]; // coordinate in EPSG:25832
	baMap.modifyView({ center: coordinate25832, zoom: 12 });
	baMap.addMarker(coordinate25832, { label: "MyMarker" });
	baMap.addEventListener("baFeatureSelect",(event) => {
		console.log(JSON.stringify(event.detail, null, 1);
	});

});
</code></pre>

</div>

[Back to Overview](../wc-examples.html#more-examples)